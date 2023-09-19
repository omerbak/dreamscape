"use client";
import Image from "next/image";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const ReservationCard = ({ result, userEmail, mutate }) => {
  const { photos, title, _id: id } = result;
  const [loading, setLoding] = useState(false);

  async function removeReservation(id) {
    /* console.log("remove reservation"); */
    setLoding(true);
    /* console.log(id, userEmail); */
    const res = await fetch(
      `https://dreamscape-api-iswd.onrender.com/destinations/removeDestination`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destId: id,
          userEmail: userEmail,
        }),
      }
    );
    /*  console.log(res); */
    if (res.status == 200) {
      toast.success("Reservation cancelled successfully", {
        position: "top-center",
      });
      mutate();
    } else {
      toast.error("Server error, can't perform this action at the moment", {
        position: "top-center",
      });
    }
    setLoding(false);
  }

  return (
    <div className="bg-darkBg2 p-4 w-[250px] h-[200px] rounded-md relative overflow-hidden group">
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
        </div>
      </div>
      <button
        className="absolute top-1/2 left-1/2 px-5 py-2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white hadow-md  rounded-md z-10 opacity-0 group-hover:opacity-100  transition-all  hover:scale-110"
        onClick={() => removeReservation(id)}
      >
        {loading ? "Loading..." : "Cancel"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default ReservationCard;
