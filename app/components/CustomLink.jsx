"use client";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("");

function CustomLink({ className, display, user, locationID, modelType }) {
  const [toastDisplay, setToastDisplay] = useState(false);
  const pricingBracketRef = useRef(null);

  const handleClick = async (usir, locationID, modelType) => {
    if (!usir) {
      setToastDisplay(true);
      if (pricingBracketRef.current) {
        pricingBracketRef.current.scrollIntoView({ behavior: "auto" });
      }
      window.location.href = `/#${locationID}`; // Redirect with hash
    } else {
      try {
        const stripe = await stripePromise;
        if (!stripe) {
          return;
        }
        const { session } = await (
          await fetch(`/api/stripe-${modelType}-session`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();

        await stripe.redirectToCheckout({
          sessionId: session.id,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <button
        className={className}
        onClick={() => {
          handleClick(user, locationID, modelType);
        }}
      >
        {display}
        <FaArrowRightLong />
      </button>

      {toastDisplay && (
        <AnimatePresence>
          {toastDisplay && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              id="toast-bottom-right"
              className="fixed flex items-center w-max p-4 space-x-4 text-gray-500 bg-gray-200 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 lg:max-w-xs"
              role="alert"
            >
              <div className="flex">
                <div className="ms-3 text-sm font-normal">
                  <span className="mb-1 text-sm font-semibold text-gray-900">
                    You must be logged in
                  </span>
                  <div className="mb-2 mt-2 text-sm font-normal">
                    Please login before moving forward
                  </div>
                  <div className="grid grid-cols-1 gap-2 h-10">
                    <div></div>
                    <div>
                      <Link
                        href="/sign-in"
                        className="inline-flex justify-center items-center w-3/4 h-full px-2 py-1.5 text-sm font-semibold text-center text-black bg-secondary-500 rounded-lg hover:bg-secondary-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className={`ms-auto -mx-1.5 -my-1.5  items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8`}
                  data-dismiss-target="#toast-interactive"
                  aria-label="Close"
                  onClick={() => {
                    setToastDisplay(false);
                  }}
                >
                  <RxCross1 className="text-black" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

export default CustomLink;
