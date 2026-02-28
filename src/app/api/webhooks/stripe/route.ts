import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

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
  } catch (err: any) {
    console.error("[Stripe Webhook] Signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { city, country, familySize, childAges } = session.metadata || {};
    const email = session.customer_email;
    const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "unknown";

    console.log(`[Order] New relocation report order!`);
    console.log(`  Email: ${email}`);
    console.log(`  City: ${city}, ${country}`);
    console.log(`  Family size: ${familySize}, Child ages: ${childAges}`);
    console.log(`  Amount: $${amount}`);
    console.log(`  Session ID: ${session.id}`);

    // Send notification email to Jon
    if (process.env.NOTIFICATION_EMAIL) {
      try {
        // Use Resend if available, otherwise just log
        if (process.env.RESEND_API_KEY) {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Relocate <noreply@projectgreenbelt.com>",
              to: process.env.NOTIFICATION_EMAIL,
              subject: `🎉 New Relocate Order: ${city}, ${country} ($${amount})`,
              html: `
                <h2>New Relocation Report Order</h2>
                <p><strong>Customer:</strong> ${email}</p>
                <p><strong>City:</strong> ${city}, ${country}</p>
                <p><strong>Family Size:</strong> ${familySize || "Not specified"}</p>
                <p><strong>Child Ages:</strong> ${childAges || "Not specified"}</p>
                <p><strong>Amount:</strong> $${amount}</p>
                <p><strong>Stripe Session:</strong> ${session.id}</p>
                <hr/>
                <p>Generate the report and send it to ${email} within 24 hours.</p>
              `,
            }),
          });
          console.log("[Order] Notification email sent");
        }
      } catch (err) {
        console.error("[Order] Failed to send notification:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
