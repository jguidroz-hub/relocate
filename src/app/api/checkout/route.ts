import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia" as Stripe.LatestApiVersion,
  });
}

export async function POST(req: Request) {
  try {
    const { city, country, email, familySize, childAges } = await req.json();
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Relocation Report: ${city}, ${country}`,
              description: `Personalized AI relocation report for ${city}, ${country}. Includes schools, safety, cost of living, taxes, healthcare, and vetted local contacts.`,
            },
            unit_amount: 14900,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL || "https://relocate.projectgreenbelt.com"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || "https://relocate.projectgreenbelt.com"}/#order`,
      metadata: {
        city,
        country,
        familySize: familySize || "",
        childAges: childAges || "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
