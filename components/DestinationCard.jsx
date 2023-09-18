"use client";
import Image from "next/image";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const DestinationCard = ({ result, userEmail }) => {
  const { city, country, period, price, photos, title, _id: id } = result;
  const [loading, setLoding] = useState(false);

  async function reserve(id) {
    setLoding(true);
    console.log(id, userEmail);
    const res = await fetch("http://localhost:3001/user/addReservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destId: id,
        userEmail: userEmail,
      }),
    });
    console.log(res);
    if (res.status == 200) {
      toast.success("Your reservation added successfully", {
        position: "top-center",
      });
    } else if (res.status == 204) {
      toast.error("This destination is already reserved", {
        position: "top-center",
      });
    } else {
      toast.error("Server error, can't perform this action at the moment", {
        position: "top-center",
      });
    }
    setLoding(false);
  }

  return (
    <div className="bg-darkBg2 p-4 w-[350px] h-[300px] rounded-md relative overflow-hidden group">
      <Image
        src={photos[0]}
        className="absolute w-full h-full object-cover"
        fill
        sizes="400px"
      />
      <div className="absolute w-full h-1/4 bg-[rgba(37,47,19,0.58)] bottom-0 left-0 px-2 flex flex-col justify-end group-hover:h-full transition-all ">
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
      <button
        className="absolute top-1/2 left-1/2 px-6 py-3 -translate-x-1/2 -translate-y-1/2 bg-mainColor text-white hadow-md  rounded-md z-10 opacity-0 group-hover:opacity-100  transition-all  hover:scale-110"
        onClick={() => reserve(id)}
      >
        {loading ? "Loading..." : "Reserve"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default DestinationCard;
