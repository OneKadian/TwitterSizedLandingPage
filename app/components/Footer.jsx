import SectionContainer from "./SectionContainer";
import Link from "next/link";
import Image from "next/image";
import ButtonGroup from "./ButtonGroup";
import footerLogo from "../public/nutritrack.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const DATA = [
  {
    title: "Template",
    items: [
      {
        label: "Features",
        href: "#features",
      },
      {
        label: "Testimonials",
        href: "#testimonials",
      },
      {
        label: "FAQ",
        href: "#faq",
      },
    ],
  },
  {
    title: "Founder",
    items: [
      {
        label: "Twitter",
        href: "https://x.com/onekadian",
        target: "_blank",
      },
      {
        label: "Linkedin",
        href: "https://www.linkedin.com/in/onekadian",
        target: "_blank",
      },
      {
        label: "Work with me",
        href: "https://cal.com/onekadian/30min",
        target: "_blank",
      },
    ],
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className="bg-white text-black bottom-0 ">
      {/* Footer Links */}
      {/* <SectionContainer className="footer--container wrap wrap-px relative z-10">
        <div className="footer--content-container py-16">
          <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-6">
              <div className="footer--logo grid gap-8">
                <ButtonGroup alignment="left">
                  <Link
                    role="button"
                    href="https://anirudhkadian1.gumroad.com/l/ewqdo"
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold btn btn--secondary md:w-auto"
                  >
                    Get Boilerplate
                    <FaArrowRightLong className="text-black" />
                  </Link>
                </ButtonGroup>
              </div>
            </div>
            <div className="col-span-6">
              <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                {DATA.map((footerLinks) => (
                  <div
                    key={footerLinks.title}
                    className="font-bold text-base  col-span-1 md:col-span-4"
                  >
                    <h3 className="font-bold text-base mb-2">
                      {footerLinks.title}
                    </h3>
                    <ul className="footer-menu--list">
                      {footerLinks.items.map((footerItem) => (
                        <li
                          key={footerItem.label}
                          className="footer-menu--list-item gap-2"
                        >
                          <a
                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                            href={footerItem.href}
                            target={footerItem.target}
                          >
                            {footerItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer> */}
      {/* Footer Credits */}
      <SectionContainer className="footer-credits relative z-10">
        <div className="wrap wrap-px py-6">
          <p className="my-0">
            © {year} Indie Hacker Kit. All rights reserved{"  "}
          </p>
        </div>
      </SectionContainer>
      <div className="footer--background"></div>
    </footer>
  );
};

export default Footer;
