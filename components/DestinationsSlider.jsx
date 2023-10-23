import image1 from "../public/images_compressed/slider1.jpg";
import image2 from "../public/images_compressed/slider2.jpg";
import image3 from "../public/images_compressed/slider3.jpg";
import image4 from "../public/images_compressed/hero_bg-compressed.jpg";

import { useRef } from "react";
import Pack from "./Pack";

const DestinationsSlider = () => {
  const scrollRef = useRef();
  function scroll(dir) {
    if (dir === "left") {
      scrollRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: "smooth",
      });
    } else if (dir === "right") {
      scrollRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: "smooth",
      });
    }
  }
  return (
    <div
      id="carasoul"
      className="p-4 bg-darkBg2 rounded-md  overflow-hidden relative "
    >
      <span
        className=" group absolute left-0 top-0 w-[75px] h-full bg-gradient-to-l from-[rgba(32,32,30,0)] to-[#20201e] z-20 hidden md:flex justify-center items-center cursor-pointer"
        onClick={() => scroll("left")}
      >
        <i class="ri-arrow-left-line text-white text-xl group-hover:scale-125 transition opacity-30 group-hover:opacity-70"></i>
      </span>
      <div
        className="w-full overflow-x-scroll md:overflow-hidden scroll-container"
        ref={scrollRef}
      >
        <div id="inner-carasoul" className="flex gap-8 w-fit">
          <Pack image={image1} city="Rio" days="4" />
          <Pack image={image2} city="Milan" days="2" />
          <Pack image={image3} city="Manchester" days="5" />
          <Pack image={image4} city="Calefornia" days="3" />
          <Pack image={image2} city="Milan" days="2" />
          <Pack image={image4} city="Calefornia" days="3" />
        </div>
      </div>
      <span
        className=" group absolute right-0 top-0 w-[75px] h-full bg-gradient-to-r from-[rgba(32,32,30,0)] to-[#20201e] z-20 hidden md:flex justify-center items-center cursor-pointer"
        onClick={() => scroll("right")}
      >
        <i class="ri-arrow-right-line text-white text-xl group-hover:scale-125 transition opacity-30 group-hover:opacity-70"></i>
      </span>
    </div>
  );
};

export default DestinationsSlider;
