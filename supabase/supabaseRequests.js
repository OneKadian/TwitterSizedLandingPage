import { supabaseReadAuth } from "./supabaseClient";

// fetches the data according to the user id
export const getIdeas = async ({ userId, token }) => {
  const supabase = await supabaseReadAuth(token);
  const { data: ideas } = await supabase
    .from("Ideas")
    .select("*")
    .eq("user_id", userId);
  return ideas;
};

export const addIdeas = async ({ event, userId, token }) => {
  const supabase = await supabaseReadAuth(token);
  const { data, error } = await supabase.from("Ideas").insert({
    user_id: userId,
    idea: event.target[0].value,
    details: event.target[1].value,
  });
  if (error) {
    console.log(error);
    return;
  }
  return data;
};

export const getSubscriptionStatus = async ({ userId, token }) => {
  const supabase = await supabaseReadAuth(token);
  const { data: status } = await supabase
    .from("Subscription")
    .select("status")
    .eq("clerk_userId", userId);
  return status;
};
