"use client";
import whiteLogo from "../public/Dreamscape-logo/vector/default-monochrome-white.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AccountImg from "../public/images_compressed/account.jpg";
import { signOut } from "next-auth/react";

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

const MobileMenu = ({ showMobileMenu, setShowMobileMenu, session }) => {
  return (
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
          <Link
            className=" hover:text-white  transition text-darkBg text-xl font-semibold"
            href="/"
          >
            Home
          </Link>
        </li>
        <li onClick={() => setShowMobileMenu(false)}>
          <Link
            className=" hover:text-white  transition text-darkBg text-xl font-semibold"
            href="/destinations"
          >
            Destinations
          </Link>
        </li>
        {session?.user ? (
          <>
            <li
              className="w-[44px] h-[44px] relative rounded-full overflow-hidden cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            >
              <Link href="/account">
                <Image
                  src={session.user?.image ? session.user.image : AccountImg}
                  fill
                  className=" object-cover"
                />
              </Link>
            </li>
            <li>
              <div
                className={`hover:text-white  transition text-darkBg text-xl font-semibold cursor-pointer`}
                onClick={() => {
                  setShowMobileMenu(false);
                  signOut({ callbackUrl: "/" });
                }}
              >
                SignOut
              </div>
            </li>
          </>
        ) : (
          <li onClick={() => setShowMobileMenu(false)}>
            <Link
              className={`hover:text-white  transition text-darkBg text-xl font-semibold
                          `}
              href="/sign"
            >
              Sign
            </Link>
          </li>
        )}

        <li onClick={() => setShowMobileMenu(false)}>
          <a href="#hero-section">
            <Image src={whiteLogo} className=" w-[300px] mt-36" />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default MobileMenu;
