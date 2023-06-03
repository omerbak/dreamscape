"use client";
import { useState, useRef, useEffect } from "react";
import logo from "../public/Dreamscape-logo/vector/default-monochrome.svg";
import whiteLogo from "../public/Dreamscape-logo/vector/default-monochrome-white.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navVarinats = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.8,
    },
  },
};
const mobileVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {},
  },
};

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [changeNavBg, setChangeNavBg] = useState(false);
  const navRef = useRef();
  let navHeight;

  function checkScroll() {
    if (window.scrollY >= navHeight) {
      setChangeNavBg(true);
    } else {
      setChangeNavBg(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    navHeight = navRef.current.offsetHeight;
    return () => {
      return window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <motion.header
      aria-label="Site Header"
      className={`fixed top-0 w-full z-[1000] transition py-2 ${
        changeNavBg && "bg-white/10 backdrop-blur-lg"
      } `}
      variants={navVarinats}
      initial="hidden"
      animate="show"
      ref={navRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image src={logo} height={30} />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white  transition hover:text-darkBg"
                      href="/"
                    >
                      Destinations
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-darkBg"
                      href="/"
                    >
                      About us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-darkBg"
                      href="/"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white  transition hover:text-darkBg"
                      href="/"
                    >
                      Testimonials
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-darkBg"
                      href="/"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div
                  className="block md:hidden "
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <button className="rounded  p-2 text-gray-100 transition hover:text-mainColor">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showMobileMenu && (
            <motion.nav
              variants={mobileVariants}
              initial="hidden"
              animate="show"
              exit={{
                opacity: 0,
                y: -700,
                transition: {},
              }}
              aria-label="Site Nav"
              className="fixed md:hidden w-full h-[100vh] top bg-lightBg text-darkBg top-0 left-0 z-[2000]"
            >
              <div
                className="absolute  right-2 top-2 "
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <button className="rounded  p-2  transition hover:text-white">
                  <i class="ri-close-line text-2xl"></i>
                </button>
              </div>
              <ul className="flex flex-col items-center justify-center bg-mainColor h-full gap-6 text-sm">
                <li onClick={() => setShowMobileMenu(false)}>
                  <a
                    className=" hover:text-white  transition text-darkBg text-xl font-semibold"
                    href="#destinations"
                  >
                    Destinations
                  </a>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <a
                    className="hover:text-white  transition text-darkBg text-xl font-semibold"
                    href="#aboutUs"
                  >
                    About us
                  </a>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <a
                    className="hover:text-white  transition text-darkBg text-xl font-semibold"
                    href="#services"
                  >
                    Services
                  </a>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <a
                    className="hover:text-white  transition text-darkBg text-xl font-semibold"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>

                <li onClick={() => setShowMobileMenu(false)}>
                  <a
                    className="hover:text-white  transition text-darkBg text-xl font-semibold"
                    href="contact"
                  >
                    Contact
                  </a>
                </li>
                <li onClick={() => setShowMobileMenu(false)}>
                  <a href="#hero-section">
                    <Image src={whiteLogo} className=" w-[300px] mt-36" />
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Nav;
