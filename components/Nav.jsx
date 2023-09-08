"use client";
import { useState, useRef, useEffect } from "react";
import logo from "../public/Dreamscape-logo/vector/default-monochrome.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import MobileMenu from "./MobileMenu";
import { redirect } from "next/dist/server/api-utils";

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

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [changeNavBg, setChangeNavBg] = useState(false);
  const navRef = useRef();
  let navHeight;

  const { data: session, status } = useSession();
  console.log("session", session);
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
        changeNavBg && "bg-white/10  backdrop-blur"
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
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image src={logo} height={30} />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-white  transition hover:text-mainColor"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white  transition hover:text-mainColor"
                      href="/destinations"
                    >
                      Destinations
                    </Link>
                  </li>
                  {session?.user ? (
                    <>
                      <li className="w-[44px] h-[44px] relative rounded-full overflow-hidden">
                        <Image src={session.user.image} fill />
                      </li>
                      <li>
                        <div
                          className="bg-transparent rounded-md px-5 py-2 shadow-md border-2 text-gray-300  font-semibold border-gray-300 hover:bg-gray-300 hover:text-gray-900 transition-all cursor-pointer "
                          onClick={() => signOut({ redirect: false })}
                        >
                          SignOut
                        </div>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link
                        className="bg-transparent rounded-md px-5 py-2 shadow-md border-2 text-white font-semibold border-white hover:bg-mainColor hover:border-mainColor hover:text-white transition-all cursor-pointer "
                        href="/sign"
                      >
                        SignIn
                      </Link>
                    </li>
                  )}
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
            <MobileMenu
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
              user={session?.user}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Nav;
