import image1 from "../public/images_compressed/slider1.jpg";
import image2 from "../public/images_compressed/slider2.jpg";
import image3 from "../public/images_compressed/slider3.jpg";
import image4 from "../public/images_compressed/hero_bg-compressed.jpg";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Pack from "./Pack";

const DestinationsSlider = () => {
  const inner = useRef();
  const [width, setWidth] = useState();

  useEffect(() => {
    console.log("scrollWidth", inner.current.scrollWidth);
    console.log("offsetWidth", inner.current.offsetWidth);
    setWidth(inner.current.scrollWidth - inner.current.offsetWidth);
  }, []);

  return (
    <motion.div
      id="carasoul"
      className="p-4 bg-darkBg2 rounded-md  overflow-hidden cursor-grab"
      ref={inner}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        id="inner-carasoul"
        className="flex gap-8 w-fit"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        <Pack image={image1} city="Rio" days="4" />
        <Pack image={image2} city="Milan" days="2" />
        <Pack image={image3} city="Manchester" days="5" />
        <Pack image={image4} city="Calefornia" days="3" />
        <Pack image={image2} city="Milan" days="2" />
        <Pack image={image4} city="Calefornia" days="3" />
      </motion.div>
    </motion.div>
  );
};

export default DestinationsSlider;
