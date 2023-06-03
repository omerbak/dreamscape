"use client";

import Nav from "./Nav";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

const h1Variants = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {},
  },
};
const h3Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const buttonVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};
const arrowVariants = {
  hidden: {
    y: 100,
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

const HeroSection = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  return (
    <section id="hero-section" className="h-[100vh] relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div id="hero-text" className="relative pt-52 ">
          <motion.h1
            variants={h1Variants}
            initial="hidden"
            animate="show"
            className=" text-mainColor text-5xl md:text-7xl font-bold mb-4"
          >
            Dreamscape
          </motion.h1>
          <motion.h3
            variants={h3Variants}
            initial="hidden"
            animate="show"
            className="text-white text-xl md:text-3xl font-semibold tracking-wider mb-14 "
          >
            Your One-Stop Shop for Travel Dreams
          </motion.h3>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            className="flex justify-between items-center gap-3 bg-mainColor md:py-3 md:px-7 py-2 px-5 rounded-md mb-6"
          >
            <span className="block text-white font-medium text-md md:text-lg tracking-wide">
              Start Planning
            </span>
            <i class="ri-play-fill text-white text-xl md:text-2xl"></i>
          </motion.button>
          <SocialIcons gap={2} />
        </div>
      </div>
      <motion.div
        variants={arrowVariants}
        initial="hidden"
        animate="show"
        whileHover={{ translateY: 5 }}
        className="absolute bottom-5 left-1/2 -translate-x-full cursor-pointer"
        onClick={handleScroll}
      >
        <i class="ri-arrow-down-double-fill text-white text-3xl p-1 transition hover:bg-white hover:text-darkBg rounded-full"></i>
      </motion.div>
    </section>
  );
};

export default HeroSection;
