"use client";
import { useState } from "react";
import NumberInput from "./NumberInput";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const ReserveDest = ({ destId, price, title, session }) => {
  const userEmail = session?.user?.email;
  const [num, setNum] = useState(1);
  const [loading, setLoding] = useState(false);

  const increaseNum = () => {
    setNum((prev) => prev + 1);
  };
  const decreaseNum = () => {
    setNum((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  async function reserve(id) {
    setLoding(true);
    /* console.log(id, userEmail); */
    const res = await fetch(
      "https://dreamscape-api-iswd.onrender.com/user/addReservation",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destId: id,
          userEmail: userEmail,
        }),
      }
    );
    /* console.log(res); */
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
    <div>
      <div className="flex items-center gap-x-6 mb-8">
        <p className="text-white  font-semibold ">People</p>
        <NumberInput
          num={num}
          increaseNum={increaseNum}
          decreaseNum={decreaseNum}
        />
      </div>
      <button
        className="px-8 py-3 bg-mainColor rounded-full text-white font-semibold transition hover:scale-105"
        onClick={() => reserve(destId)}
      >
        {loading ? "Loading..." : "Reserve"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default ReserveDest;
