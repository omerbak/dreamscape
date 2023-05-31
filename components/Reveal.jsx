"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Reveal = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 1,
        delay: 0.25,
      },
    },
  };

  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
