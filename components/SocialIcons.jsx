"use client";

import { motion } from "framer-motion";
const iconsVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const iconVariants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {},
  },
};
const SocialIcons = ({ gap }) => {
  return (
    <motion.div
      variants={iconsVariants}
      initial="hidden"
      animate="show"
      className={`flex items-center gap-${gap}`}
    >
      <motion.a href="#" variants={iconVariants} whileHover={{ rotate: 360 }}>
        <i class="ri-instagram-line text-white text-2xl md:text-3xl  transition hover:bg-white hover:text-darkBg rounded-full p-1"></i>
      </motion.a>
      <motion.a href="#" variants={iconVariants} whileHover={{ rotate: 360 }}>
        <i class="ri-facebook-box-line text-white text-2xl md:text-3xl  transition hover:bg-white hover:text-darkBg rounded-full p-1"></i>
      </motion.a>
      <motion.a href="#" variants={iconVariants} whileHover={{ rotate: 360 }}>
        <i class="ri-pinterest-line text-white text-2xl md:text-3xl  transition hover:bg-white hover:text-darkBg rounded-full p-1"></i>
      </motion.a>
      <motion.a href="#" variants={iconVariants} whileHover={{ rotate: 360 }}>
        <i class="ri-twitter-line text-white text-2xl md:text-3xl  transition hover:bg-white hover:text-darkBg rounded-full p-1"></i>
      </motion.a>
    </motion.div>
  );
};

export default SocialIcons;
