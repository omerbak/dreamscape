"use client";
import Image from "next/image";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const DestinationCard = ({ result }) => {
  const { city, country, period, price, photos, title, _id: id } = result;

  return (
    <div className="bg-darkBg2 p-4 w-[250px] h-[200px] md:h-[300px] md:w-[350px] rounded-md relative overflow-hidden group">
      <Image
        src={photos[0]}
        className="absolute w-full h-full object-cover"
        fill
        sizes="400px"
        alt={title}
      />
      <div className="absolute w-full h-2/5 md:h-1/4 bg-[rgba(37,47,19,0.58)] bottom-0 left-0 px-2 flex flex-col justify-end group-hover:h-full transition-all ">
        <div className="flex justify-between text-gray-300 mb-3 ">
          <p className="text-gray-100 font-semibold">
            {title[0].toUpperCase() + title.slice(1)}
          </p>
          <p className=" text-gray-100 font-semibold">
            {city[0].toUpperCase() + city.slice(1)},{" "}
            {country[0].toUpperCase() + country.slice(1)}
          </p>
        </div>
        <div className="flex justify-between text-gray-300 mb-2">
          <p>
            <span className=" text-gray-100 font-semibold">{price}</span> $
          </p>
          <p>
            <span className=" text-gray-100 font-semibold">{period}</span> days
          </p>
        </div>
      </div>
      <Link href={`/destinations/${id}`}>
        <button className="absolute top-1/2 left-1/2 px-4 py-2 md:px-6 md:py-3 -translate-x-1/2 -translate-y-1/2 bg-mainColor text-white hadow-md  rounded-md z-10 opacity-0 group-hover:opacity-100  transition-all  hover:scale-110">
          See Details
        </button>
      </Link>
      <ToastContainer />
    </div>
  );
};

export default DestinationCard;
