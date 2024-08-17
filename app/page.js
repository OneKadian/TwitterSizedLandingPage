import Accordion from "./components/Accordion.jsx";
import HomeBanner from "./components/HomeBanner.jsx";
import CardBody from "./components/CardBody";
import CardGroup from "./components/CardGroup";
import CardHeader from "./components/CardHeader";
import CardImage from "./components/CardImage";
import Card from "./components/Card";
import feature3 from "./public/features3.png";
import mainGraphic from "./public/MainGaphix.png";
import feature4 from "./public/features4.png";
import Columns from "./components/Columns.jsx";
import ContentImage from "./components/ContentImage.jsx";
import Footer from "./components/Footer.jsx";
import PriceTable2 from "./components/PriceTable.jsx";
import SinglePricingTable from "./components/SinglePricingTable.jsx";
import SectionContainer from "./components/SectionContainer.jsx";
import MotionBTTContainer from "./components/MotionBTTContainer.jsx";
import BadgeGroup from "./components/BadgeGroup.jsx";
import BadgeMessage from "./components/BadgeMessage.jsx";
import PageTitle from "./components/PageTitle.jsx";
import Content from "./components/Content.jsx";
import CallToAction from "./components/CTA.jsx";

// import ContentImage from "./components/ContentImage.jsx";
export default function Home() {
  const textContent = {
    featuresBadge: "Features",
    featuresTitle: "Designed for Speed",
    featuresDescription: "Unleash innovation, save time, and launch swiftly",
    moreFeaturesBadge: "More Features",
    moreFeaturesTitle: "Developers Who Build From Scratch Almost Never Launch",
    moreFeaturesDescription:
      "Most indie hackers suffer from either of these two problems: Starting from scratch or searching like crazy",
    card1Title: "Build like crazy",
    card1Description: "",
    card2Title: "Search like crazy",
    card2Description: "",
    testimonialsBadge: "Testimonials",
    testimonialsTitle: "This is what people have said about this boilerplate",
    faqBadge: "FAQ",
    faqTitle: "Got some burning questions about Indie Hacker Kit?",
  };

  return (
    <>
      <div className="main-wrapper bg-[#F3F5F8] relative z-10 pt-20 ">
        {/* Page Banner  */}
        <HomeBanner />
        {/* Components Container */}
        {/* <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="features" className="features pt-10">
              <BadgeGroup alignment="center">
                <BadgeMessage>{textContent.featuresBadge}</BadgeMessage>
              </BadgeGroup>
              <PageTitle
                className="text-center mx-auto text-black"
                type="default"
              >
                {textContent.featuresTitle}
              </PageTitle>
              <Content className="text-center mt-6" alignment="center">
                <p>{textContent.featuresDescription}</p>
              </Content>
              <ContentImage />
            </SectionContainer>
          </MotionBTTContainer>
        </SectionContainer> */}
      </div>

      <Footer />
    </>
  );
}
