import Image from "next/image";
import { motion } from "framer-motion";

const Pack = ({ image, city, days }) => {
  return (
    <motion.div className="relative h-[370px] rounded-md w-[270px] md:w-[350px]  overflow-hidden pointer-events-none">
      <Image
        src={image}
        alt="city of destination"
        className=" w-full h-full object-cover"
        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
      />
      <div className="absolute bottom-0 left-0 w-full z-10 p-2 text-white  bg-[rgb(0,0,0,0.6)]">
        <div className="flex gap-2 mb-1">
          <i class="ri-map-pin-fill text-lg"></i>
          <h5 className="text-lg font-semibold">{city}</h5>
        </div>
        <h6 className="text-sm">{days} days</h6>
      </div>
    </motion.div>
  );
};

export default Pack;
