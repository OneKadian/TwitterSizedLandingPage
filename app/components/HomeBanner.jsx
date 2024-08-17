"use client";

// Importing components from Button folder
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

// Importing Content component
import Content from "./Content";

import BadgeGroup from "./BadgeGroup";
import BadgeIcon from "./BadgeIcon";
import BadgeMessage from "./BadgeMessage";

// Importing components from Motion folder
import MotionBTTContainer from "./MotionBTTContainer";

// Importing SectionContainer component
import SectionContainer from "./SectionContainer";

// Importing PageTitle component
import PageTitle from "./PageTitle";
import MainGraphic from "../public/MainGaphix.png";
import Image from "next/image";

const bannerTextContent = {
  badgeMessage: "Turns projects into products - Brian Jenney",
  title: "The Ultimate Guide to Unbundling Reddit",
  description:
    "Don't let procrastination stop you, Launch your product fast, without starting from scratch.",
  buttons: {
    buttonOne: {
      text: "Create Your SaaS Now",
      href: "#features",
    },
    buttonTwo: {
      text: "Build Your Portfolio",
      href: "https://github.com/onekadian",
    },
  },
};

const HomeBanner = () => {
  return (
    // <SectionContainer className="page-banner--container py-16">
    //   <SectionContainer className="page-banner--inner-container wrap wrap-px z-10 flex flex-col lg:flex-row">
    //     {/* Left Side: Text Content */}
    //     <div className="flex-1 lg:mr-4">
    //       {/* Appear First */}
    //       <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
    //         <BadgeGroup alignment="center">
    //           <BadgeMessage>{bannerTextContent.badgeMessage}</BadgeMessage>
    //         </BadgeGroup>
    //       </MotionBTTContainer>
    //       {/* Appear Second */}
    //       <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
    //         <PageTitle className="text-center mx-auto text-black" type="heavy">
    //           {bannerTextContent.title}
    //         </PageTitle>
    //       </MotionBTTContainer>
    //       {/* Appear Third */}
    //       <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
    //         <Content className="text-center " alignment="center">
    //           <p>{bannerTextContent.description}</p>
    //         </Content>

    //         <div className="mt-6 mb-16 text-center">
    //           <ButtonGroup alignment="center">
    //             <Button
    //               href={bannerTextContent.buttons.buttonOne.href}
    //               className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold text-black transition-colors duration-300 bg-secondary-500 md:w-auto"
    //             >
    //               {bannerTextContent.buttons.buttonOne.text}
    //             </Button>
    //           </ButtonGroup>
    //         </div>
    //       </MotionBTTContainer>
    //     </div>

    //     {/* Right Side: Image */}
    //     <div className="flex-1 mt-6 lg:mt-0">
    //       {/* Appear Fourth */}
    //       <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
    //         <div className="page-banner--image">
    //           <Image
    //             src={MainGraphic}
    //             width={1024}
    //             height={680}
    //             alt="Page Banner"
    //             objectFit="cover"
    //             className="mx-auto rounded-md shadow-xl border border-gray-200"
    //           />
    //         </div>
    //       </MotionBTTContainer>
    //     </div>
    //   </SectionContainer>
    // </SectionContainer>
    <SectionContainer className="w-[96%] page-banner--container py-16 flex flex-col md:flex-row">
      <SectionContainer className="page-banner--inner-container wrap wrap-px z-10 md:w-1/2">
        {/* Appear First */}
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <BadgeGroup alignment="center">
            <BadgeMessage>{bannerTextContent.badgeMessage}</BadgeMessage>
          </BadgeGroup>
        </MotionBTTContainer>
        {/* Appear Second */}
        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
          {/* <PageTitle className="text-center mx-auto text-black" type="heavy"> */}
          {/* <PageTitle className="text- mx-auto text-black" type="default"> */}
          <PageTitle className="text-center mx-auto text-black" type="default">
            {bannerTextContent.title}
          </PageTitle>
          {/* </PageTitle> */}
        </MotionBTTContainer>
        {/* Appear Third */}
        <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
          <Content className="flex justify-center" alignment="">
            <div className="w-4/5">
              <p className="mb-4">
                I have generated $13.4M using this exact playbook for finding
                business ideas on Reddit…. and I'm giving it away for free
              </p>
              <p className="">
                1. How to find trending topics
                <br />
                2. How to build an audience and community and launch a
                profitable business
              </p>
            </div>
          </Content>

          <div className="mt-6 mb-16 text-center">
            <ButtonGroup alignment="center">
              <Button
                href={bannerTextContent.buttons.buttonOne.href}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold text-black transition-colors duration-300 bg-secondary-500 md:w-auto"
              >
                {bannerTextContent.buttons.buttonOne.text}
              </Button>
            </ButtonGroup>
          </div>
        </MotionBTTContainer>
      </SectionContainer>
      <SectionContainer className="page-banner--image md:w-1/2 flex justify-center items-center">
        <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
          <Image
            src={MainGraphic}
            width={920}
            height={612}
            alt="Page Banner"
            objectFit="cover"
            className="rounded-md shadow-xl border border-gray-200 mx-6"
          />
        </MotionBTTContainer>
      </SectionContainer>
    </SectionContainer>
  );
};

export default HomeBanner;
