import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
//   apiVersion: "2023-10-16",
// });

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req) {
  const { userId } = auth();
  // We are receiving this from the Client request, thats next!
  //   const { unit_amount, quantity } = await req.json();

  try {
    // Replace "price_1OJWp5SJ8icdk6axj5Vc7CW2" with your actual price ID
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1OJWp5SJ8icdk6axj5Vc7CW2",
          quantity: 1,
        },
      ],
      metadata: {
        userID: userId,
      },
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/members`,
      cancel_url: `${req.headers.get("origin")}/Price`,
    });

    return NextResponse.json({ session }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error creating Stripe checkout session: ${error.message}`,
        { cause: error }
      );
    }
  }
}
