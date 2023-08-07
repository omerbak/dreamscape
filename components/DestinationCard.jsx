"use client";
import Image from "next/image";

const DestinationCard = ({ result }) => {
  const { city, country, duration, price, photos } = result;
  return (
    <div className="bg-darkBg2 p-4 w-[350px] h-[300px] rounded-md relative overflow-hidden group">
      <Image
        src={photos[0]}
        className="absolute w-full h-full object-cover"
        fill
        sizes="400px"
      />
      <div className="absolute w-full h-1/4 bg-[rgba(37,47,19,0.58)] bottom-0 left-0 p-2 flex flex-col justify-end group-hover:h-full transition-all ">
        <div className="flex justify-between text-gray-300 mb-3">
          <p>
            <span className=" text-gray-100 font-semibold">{price}</span> $
          </p>
          <p>
            <span className=" text-gray-100 font-semibold">{duration}</span>{" "}
            days
          </p>
        </div>
        <p className=" text-gray-100 font-semibold">
          {city[0].toUpperCase() + city.slice(1)},{" "}
          {country[0].toUpperCase() + country.slice(1)}
        </p>
      </div>
      <button className="absolute top-1/2 left-1/2 px-6 py-3 -translate-x-1/2 -translate-y-1/2 bg-mainColor text-white hadow-md  rounded-md z-10 opacity-0 group-hover:opacity-100  transition-all">
        Reserve
      </button>
    </div>
  );
};

export default DestinationCard;
