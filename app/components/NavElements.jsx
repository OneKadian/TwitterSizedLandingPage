"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

const navigation = [
  { name: "Features", to: "#features", href: "/#features" },
  { name: "Testimonials", to: "#testimonials", href: "/#testimonials" },
  { name: "FAQ?", to: "#faq", href: "/#faq" },
];

const NavElements = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [user, setUser] = useState(true);

  const router = useRouter();

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="header-nav--container">
      {/* Burger menu icon */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        data-collapse-toggle="navbar-default"
        type="button"
        className="mobile-menu text-white"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <RxHamburgerMenu
          icon="material-symbols:menu-rounded"
          className="h-6 w-auto text-white"
        />
      </button>
      {/* Sidebar */}
      <div
        className={`header-nav--menu-container z-20 ${
          isNavOpen ? "show" : "hide"
        }`}
        id="navbar-default"
      >
        <ul className="header-nav--menu mr-4">
          {navigation.map((item) => (
            <li
              key={item.name}
              className={
                item.isArrow
                  ? `inline-flex cursor-pointer ${
                      user ? "block" : "hidden"
                    } gap-3 rounded-lg justify-center lg:hidden md:hidden font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300 w-[30%]`
                  : "header-nav--menu-item"
              }
            >
              <Link
                key={item.name}
                href={item.href}
                className={`menu-item--link flex items-center
                                ${router.pathname === item.href ? "active" : ""}
                              `}
                onClick={closeNav}
                target={item.target ? item.target : "_self"}
              >
                {item.name}
                {item.isArrow && (
                  <span className="ml-2 inline-block text-sm font-medium text-inherit">
                    {/* <FaArrowRightLong className="h-6 w-auto text-gray-300" /> */}
                    <FaArrowRight className="h-4 w-auto text-gray-300" />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavElements;
