"use client";
import SectionContainer from "./SectionContainer";
import { Icon } from "@iconify/react";
import { useState } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";

const accordionData = [
  {
    id: uuid(),
    title: "What is the Indie Hacker Kit?",
    isOpen: true,
    content:
      "Indie Hacker Kit is a combination of a code boilerplate with auth/payments/DB already set up along with a resource sheet, notion template, and AI prompts to help you launch a product today.",
  },
  {
    id: uuid(),
    title: "If I can build it, why should I buy it?",
    isOpen: false,
    content:
      "In the words of the great Marc Louvion, 'Others are launching while you're building.'",
  },
  {
    id: uuid(),
    title: "How do I get started?",
    isOpen: false,
    content:
      "Choose a plan, get access to the resources, put in your keys, follow the roadmap, and Launch!",
  },
  {
    id: uuid(),
    title: "What all do I get?",
    isOpen: false,
    content:
      "IHK is a combination of a boilerplate with launch instructions, templates, resource sheet, roadmaps, and a subscription to the newsletter.",
  },
  {
    id: uuid(),
    title: "Can I use this as a junior dev?",
    isOpen: false,
    content:
      "Yes, you can, given you've already worked with JS, Tailwind CSS, and Next JS. The instructions do the job of making it easy to use and launch.",
  },
  {
    id: uuid(),
    title: "What if my question is not listed here?",
    isOpen: false,
    content:
      "Not a problem, reach out to me via Mail, Twitter, or LinkedIn and I'll be very happy to answer. Links in Footer.",
  },
];

const accordionItemType = {
  top: "rounded-t-lg",
  default: "border rounded-none border-t-0",
  bottom: "border border-t-0 rounded-b-lg",
};

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionClickHandle = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
      {accordionData.map((accordionItem, index) => (
        <div
          key={accordionItem.id}
          id={accordionItem.id}
          className={clsx(
            // "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
            "accordion-item--container border border-neutral-200 bg-white ",

            {
              [accordionItemType.top]: index === 0,
              [accordionItemType.default]:
                index > 0 && index < accordionData.length - 1,
              [accordionItemType.bottom]: index === accordionData.length - 1,
            }
          )}
        >
          <h2 className="accordion-item--heading mb-0">
            <button
              // className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
              className="flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
              type="button"
              aria-expanded={accordionItem.isOpen}
              onClick={() => accordionClickHandle(accordionItem.id)}
            >
              {accordionItem.title}
              <Icon
                icon="material-symbols:keyboard-arrow-up-rounded"
                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none text-gray-400"
              />
            </button>
          </h2>
          <div
            className={clsx("accordion-item--content py-4 px-5 text-base", {
              hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
              "!visibility block": activeAccordion === accordionItem.id, // Use block class to show content again
            })}
          >
            <p className="font-medium text-black">{accordionItem.content}</p>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};

export default Accordion;
