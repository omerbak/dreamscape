"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const btnVariants = {
  hidden: {
    opacity: 0,
    y: 500,
  },
  show: {
    opacity: 0.4,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const checkBtn = () => {
    /*  console.log(window.scrollY);
    console.log("showBtn", showBtn); */
    if (window.scrollY > 600) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkBtn);
    //console.log("scroll listener added");

    return () => {
      window.removeEventListener("scroll", checkBtn);
      //console.log("scroll listener removed");
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <AnimatePresence>
      {showBtn && (
        <motion.div
          className=" fixed bottom-2 right-4 z-50 cursor-pointer"
          onClick={scrollToTop}
          variants={btnVariants}
          initial="hidden"
          animate="show"
          exit={{
            opacity: 0,
            y: 500,
            transition: {
              duration: 2,
            },
          }}
          whileHover={{
            translateY: -5,
            opacity: 1,
          }}
        >
          <i class="ri-arrow-up-double-fill text-2xl md:text-3xl p-1 transition bg-white text-darkBg rounded-full"></i>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
