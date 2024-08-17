"use client";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import PageTitle from "./PageTitle";
import MotionBTTContainer from "./MotionBTTContainer";
import Content from "./Content";
import { Switch } from "@headlessui/react";
import CustomLink from "./CustomLink";

const PricingTableToggler = ({ userStatus }) => {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      title: "Current",
      per: "/month",
      prices: [
        {
          price: "0",
          priceType: "zeroMonthly",
        },
        {
          price: "0",
          priceType: "zeroAnnual",
        },
      ],
      description:
        "Your current situation where the idea is nowhere near Launch",
      features: [
        {
          text: "Creating from scratch",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Unorganized flow of work",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Searching for resources",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Launch: Delayed",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Targets: Missed",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      id: "noPlan",
      buttonDisplay: "",
      buttonText: "LAUNCH",
    },
    {
      title: "Innovator",
      per: "/month",
      prices: [
        {
          price: "25",
          // priceType: "BasicMonthly",
          priceType: "monthly",
        },
        {
          price: "240",
          // priceType: "BasicAnnual",
          priceType: "annual",
        },
      ],
      description: "Take off with us and build your SaaS venture at warp speed",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Unavailable",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      id: "monthly",
      buttonDisplay: "",
      buttonText: "LAUNCH",
    },
    {
      title: "Pioneer",
      per: "/month",
      prices: [
        {
          price: "50",
          // priceType: "AdvanceMonthly",
          priceType: "monthly",
        },
        {
          price: "480",
          // priceType: "AdvanceAnnual",
          priceType: "annual",
        },
      ],
      description:
        "If you're in it for the long haul, this plan is tailor-made for you.",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Available",
          Icon: <DoneIcon className="text-green-400" />,
        },
      ],
      id: "annual",
      buttonDisplay: "",
      buttonText: "LAUNCH",
      link: "https://buy.stripe.com/test_4gw5kQ9H91Ob4GQ9AD",
    },
  ];

  return (
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
      <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
        <div
          className="flex flex-col justify-center items-center mx-auto max-w-screen-md mb-8 lg:mb-12"
          id="pricing-section"
        >
          {/* Other content */}
          <div
            className="mx-auto max-w-screen-md text-center mb-8 lg:mb-8"
            id="pricing-section"
          >
            <PageTitle
              className="text-center text-black py-1 mx-auto"
              type="default"
            >
              Pricing
            </PageTitle>
            <Content className="text-center mt-2" alignment="center">
              <p>Buy Once , Launch forever</p>
            </Content>
          </div>
          {/* Toggler */}
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only" />
            <span class="m-3 font-light text-primary-900 text-base">
              Monthly Billing
            </span>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-blue-600" : "bg-gray-900"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <span class="m-3 font-light text-primary-900 text-base">
              Annual Billing
            </span>
          </label>
        </div>
      </MotionBTTContainer>

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
        {pricingOptions.map((option, index) => (
          <MotionBTTContainer
            transition={{ delay: 0.2, duration: 0.5 }}
            key={index}
          >
            <div
              key={index}
              className="flex flex-col p-6 mx-auto max-w-lg text-center border border-white-600/30 bg-white-600/20 rounded-lg shadow text-white"
            >
              <h3 className="mb-4 text-3xl font-semibold text-black">
                {option.title}
              </h3>
              <p className="font-light text-primary-900 sm:text-lg m-0">
                {option.description}
              </p>
              {/* here */}
              <div className="flex flex-col items-center justify-center min-h-[100px] space-y-4 bg-opacity-70 p-6 bg-[#ffffff14]">
                <div className="flex flex-row">
                  <div className="flex items-end">
                    <div className="flex text-left text-[34px] lg:text-[38px] font-semibold text-gray-600 p-1 leading-6">
                      {enabled && option.prices[0].price > 0 ? (
                        <>
                          {/* <span className="mr-2 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 line-through"> */}
                          <span className="mr-2 font-semibold text-gray-500 line-through">
                            ${option.prices[0].price}
                          </span>
                          <span>${option.prices[1].price / 12}</span>
                        </>
                      ) : (
                        `$${option.prices[0].price}`
                      )}
                    </div>
                    <div className="-mb-[3px] text-left text-base lg:text-lg lg:ml-1 font-medium text-gray-600">
                      <div>/month</div>
                    </div>
                  </div>
                </div>
                {option.prices[0].price > 0 ? (
                  <div className="text-left text-xs lg:text-sm  text-gray-600">
                    {enabled
                      ? `$${option.prices[1].price} will be charged when annual`
                      : "when charged monthly"}
                  </div>
                ) : null}
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {option.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    {feature.Icon} {/* Use the predefined icon */}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <CustomLink
                locationID={option.id}
                modelType={
                  enabled
                    ? option.prices[1].priceType
                    : option.prices[0].priceType
                }
                user={userStatus}
                display={option.buttonText}
                // className={`text-white bg-primary-700 ${option.buttonDisplay} font-medium rounded-lg w-fit mx-auto text-sm px-20 py-3 text-center`}
                className={`inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold  text-black transition-colors duration-300 bg-secondary-500 md:w-auto ${option.buttonDisplay} `}
              />
            </div>
          </MotionBTTContainer>
        ))}
      </div>
    </div>
  );
};

export default PricingTableToggler;
