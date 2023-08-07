"use client";
import { useState } from "react";
import DestinationResult from "@/components/DestinationResult";

const Destinations = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.destination.value);
  };
  return (
    <div className="pt-[150px] bg-darkBg min-h-[100vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <form
          className="flex  max-w-[600px] mx-auto overflow-hidden rounded-full mb-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Enter a country"
            className="w-5/6 p-3 bg-darkBg2 outline-none border-[1px] border-transparent rounded-l-full focus:border-mainColor caret-mainColor text-white"
          />
          <button className=" bg-mainColor group font-bold w-1/6">
            <i class="ri-search-2-line text-xl group-hover:text-2xl transition-all"></i>
          </button>
        </form>
        {input && <DestinationResult country={input} />}
      </div>
    </div>
  );
};

export default Destinations;
