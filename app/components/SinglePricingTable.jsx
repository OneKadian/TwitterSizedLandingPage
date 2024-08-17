"use client";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import DoneIcon from "@mui/icons-material/Done";
import PageTitle from "./PageTitle";

const pricingData = {
  title: "Simple no-tricks pricing",
  toggle: {
    monthly: "Nah, I'm a freeloader",
    annual: "You deserve this",
  },
  plans: {
    monthly: {
      title: "Lifetime membership",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
      includedFeatures: [
        { icon: "DoneIcon", text: "4 ready to launch themes" },
        { icon: "DoneIcon", text: "Notion template" },
        { icon: "DoneIcon", text: "Resource sheet" },
        { icon: "CloseIcon", text: "Creator gets nothing" },
      ],
      billing: { price: 0, type: "monthly", text: "will be charged monthly" },
      button: {
        text: "Get access",
        className:
          "block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        link: "https://anirudhkadian1.gumroad.com/l/ewqdo",
      },
    },
    annual: {
      title: "Lifetime membership",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.",
      includedFeatures: [
        { icon: "DoneIcon", text: "4 ready to launch themes" },
        { icon: "DoneIcon", text: "Notion template" },
        { icon: "DoneIcon", text: "Resource sheet" },
        { icon: "DoneIcon", text: "Creator gets something" },
      ],
      billing: {
        price: 5,
        type: "annual",
        text: "will be charged once annually",
      },
      button: {
        text: "Get access",
        className:
          "block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
        link: "https://anirudhkadian1.gumroad.com/l/vezcsg",
      },
    },
  },
};

export default function SinglePricingTable() {
  const [isYearly, setIsYearly] = useState(true);
  const toggleBilling = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  const currentPlan = isYearly
    ? pricingData.plans.annual
    : pricingData.plans.monthly;

  return (
    <div className="bg-[#F3F5F8] py-24 sm:py-32" id="pricing-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <PageTitle
            className="text-center text-black py-1 mx-auto"
            type="default"
          >
            {pricingData.title}
          </PageTitle>

          <div className="mt-6 flex justify-center items-center">
            <label className="flex justify-center items-center cursor-pointer w-full max-w-xs sm:max-w-none sm:inline-flex">
              <span className="text-sm font-medium text-gray-900 text-center sm:text-left sm:w-auto sm:flex-none">
                {pricingData.toggle.monthly}
              </span>
              <Switch
                className="text-black mx-3"
                checked={isYearly}
                onChange={toggleBilling}
                sx={{
                  "& .MuiSwitch-track": {
                    backgroundColor: "#CBD5E0",
                  },
                }}
              />
              <span className="text-sm font-medium text-gray-900 text-center sm:text-right sm:w-auto sm:flex-none">
                {pricingData.toggle.annual}
              </span>
            </label>
          </div>
        </div>
        <div className="mx-auto mt-10 lg:mt-12 max-w-2xl rounded-3xl ring-1 ring-gray-300 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-black">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-300" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:grid-cols-2 sm:gap-6"
            >
              {currentPlan.includedFeatures.map((feature) => (
                <li key={feature.text} className="flex gap-x-3">
                  {feature.icon === "DoneIcon" ? (
                    <DoneIcon
                      className="h-6 w-5 flex-none text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <CloseIcon
                      className="h-6 w-5 flex-none text-red-600"
                      aria-hidden="true"
                    />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-300 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-900">
                  Pay once, own it forever
                </p>
                <div className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${currentPlan.billing.price}
                  </span>
                </div>
                <div className="flex justify-center mt-10">
                  <script src="https://gumroad.com/js/gumroad.js"></script>
                  <a
                    className="gumroad-button"
                    href={
                      isYearly
                        ? pricingData.plans.annual.button.link
                        : pricingData.plans.monthly.button.link
                    }
                  >
                    Buy on
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
