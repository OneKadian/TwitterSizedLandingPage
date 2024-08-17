import Stripe from "stripe";
import { NextResponse } from "next/server";
import {
  insertSubscription,
  updateSubscription,
  updateSubscriptionDeleted,
} from "../../../supabase/supabaseStripe.js";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get("Stripe-Signature");
  const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_TEST_WEBHOOK_SECRET_KEY;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    switch (event?.type) {
      // This method works only for subscriptions and will break under one time payments
      case "checkout.session.completed": // create the customer
        const eventual = event.data.object;
        const subscriptionId = event.data.object.subscription;
        const userID = event.data.object.metadata?.userID;
        const mode = event.data.object.mode;
        await insertSubscription(eventual, subscriptionId, userID, mode);
        break;
      case "customer.subscription.updated":
        const events = event.data.object;
        const id = event.data.object.id;
        await updateSubscriptionDeleted(events, id);
        break;
      case "checkout.session.expired":
        // Abandoned Cart recovery- send mail
        break;
      case "customer.subscription.deleted":
        const eventsTwo = event.data.object;
        const idTwo = event.data.object.id;
        await updateSubscription(eventsTwo, idTwo);
        break;
      // make customer inactive - status is canceled
      case "invoice.upcoming":
        // send reminder mail to pay to the customer
        break;
      case "invoice.due":
        // send reminder mail to pay to the customer
        break;
      case "invoice.paid":
        // send mail to confirm payment with receipt
        break;
      default:
        console.log("Unhandled webhook event:", event.type);
        break;
    }
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }

  return NextResponse.json({ received: true });
}
