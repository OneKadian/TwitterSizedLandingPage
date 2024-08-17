import { supabaseAdmin } from "./supabaseClient";
import { format, fromUnixTime } from "date-fns";

export const insertSubscription = async (event, id, userId) => {
  const supabase = await supabaseAdmin();
  const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
  const subscription = await stripe.subscriptions.retrieve(id);
  // const subscription = await stripe.subscriptions.retrieve(
  //   "sub_1OY1suSJ8icdk6axiBzAfi4e"
  // );
  const { data, error } = await supabase.from("Subscription").insert({
    name: event.customer_details.name,
    email: event.customer_details.email,
    mode: event.mode,
    customer_id: event.customer,
    livemode: event.livemode,
    clerk_userId: userId,
    status: subscription.status,
    subscriptionID: id,
    plan: subscription.plan.id,
    trialStart: format(
      fromUnixTime(subscription.current_period_start),
      "yyyy-MM-dd"
    ),
    trialEnd: format(
      fromUnixTime(subscription.current_period_end),
      "yyyy-MM-dd"
    ),
  });
  if (error) {
    console.log(error);
    return;
  }
  return data;
};

export const updateSubscription = async (event, id) => {
  const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
  const supabase = await supabaseAdmin();
  const subscription = await stripe.subscriptions.retrieve(id);
  const { data, error } = await supabase
    .from("Subscription")
    .update({
      plan: event.items.data[0].plan.id,
      status: subscription.status,
      trialStart: format(
        fromUnixTime(subscription.current_period_start),
        "yyyy-MM-dd"
      ),
      trialEnd: format(
        fromUnixTime(subscription.current_period_end),
        "yyyy-MM-dd"
      ),
    })
    .eq("customer_id", event.customer);
  if (error) {
    console.log(error);
    return;
  }
  return data;
};

// this is exactly the updateSubscription function, just renamed for less confusion
export const updateSubscriptionDeleted = async (event, id) => {
  const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
  const supabase = await supabaseAdmin();
  const subscription = await stripe.subscriptions.retrieve(id);
  const { data, error } = await supabase
    .from("Subscription")
    .update({
      plan: event.items.data[0].plan.id,
      status: subscription.status,
      trialStart: format(
        fromUnixTime(subscription.current_period_start),
        "yyyy-MM-dd"
      ),
      trialEnd: format(
        fromUnixTime(subscription.current_period_end),
        "yyyy-MM-dd"
      ),
    })
    .eq("customer_id", event.customer);
  if (error) {
    console.log(error);
    return;
  }
  return data;
};
