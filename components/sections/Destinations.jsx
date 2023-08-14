"use client";

import SectionHeader from "../SectionHeader";
import DestinationsSlider from "../DestinationsSlider";
import { motion } from "framer-motion";
import Link from "next/link";

const Destinations = () => {
  return (
    <section className=" mt-32" id="destinations">
      {/* <Reveal> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader num={1} title={"Destinations"}>
          Dreamscape offers a wide range of destinations to choose from. Find
          your perfect trip today!
        </SectionHeader>
        <DestinationsSlider />
        <Link href="/destinations">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 mx-auto flex justify-between items-center gap-3 bg-mainColor md:py-3 md:px-7 py-2 px-5 rounded-md mb-6"
          >
            <span className="block text-white font-medium text-md md:text-lg tracking-wide">
              Explore
            </span>
            <i class="ri-search-2-line text-white text-xl md:text-2xl"></i>
          </motion.button>
        </Link>
      </div>
      {/* </Reveal> */}
    </section>
  );
};

export default Destinations;
