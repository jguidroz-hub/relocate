import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import {
  sendEmail,
  buildOrderNotificationEmail,
} from "@/lib/email";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia" as Stripe.LatestApiVersion,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Stripe Webhook] Signature verification failed:", message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { city, country, familySize, childAges } = session.metadata || {};
    const email = session.customer_email;
    const amount = session.amount_total
      ? (session.amount_total / 100).toFixed(2)
      : "unknown";

    console.log(`[Order] New relocation report order!`);
    console.log(`  Email: ${email}`);
    console.log(`  City: ${city}, ${country}`);
    console.log(`  Family size: ${familySize}, Child ages: ${childAges}`);
    console.log(`  Amount: $${amount}`);

    // 1. Send notification to Jon
    if (process.env.NOTIFICATION_EMAIL && process.env.RESEND_API_KEY) {
      await sendEmail({
        to: process.env.NOTIFICATION_EMAIL,
        subject: `🎉 New Relocate Order: ${city}, ${country} ($${amount})`,
        html: buildOrderNotificationEmail(
          email || "unknown",
          city || "unknown",
          country || "unknown",
          familySize || "",
          childAges || "",
          amount,
          session.id
        ),
      });
    }

    // 2. Auto-trigger report generation (fire and forget)
    if (email && city && country && process.env.REPORT_GENERATION_SECRET) {
      const baseUrl =
        process.env.NEXT_PUBLIC_URL || "https://relocate.projectgreenbelt.com";
      fetch(`${baseUrl}/api/generate-report`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REPORT_GENERATION_SECRET}`,
        },
        body: JSON.stringify({
          city,
          country,
          email,
          familySize: familySize || "",
          childAges: childAges || "",
        }),
      }).catch((err) => {
        console.error("[Order] Failed to trigger report generation:", err);
      });
    }
  }

  return NextResponse.json({ received: true });
}
