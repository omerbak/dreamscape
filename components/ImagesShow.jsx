"use client";
import Image from "next/image";
import { useState } from "react";

const ImagesShow = ({ photos }) => {
  const [active, setActive] = useState(photos[0] || "");
  return (
    <div className=" justify-self-center">
      <Image
        src={active}
        width={400}
        height={400}
        className="rounded-md mb-4"
      />
      <div className="h-[150px] w-[150px] relative">
        {photos.map((photo) => (
          <Image
            key={photo}
            src={photo}
            fill
            onClick={() => setActive(photo)}
            className={`${
              active === photo ? "border-mainColor" : "border-transparent"
            } rounded-md border-2  hover:border-mainColor cursor-pointer max-w-full`}
          ></Image>
        ))}
      </div>
    </div>
  );
};

export default ImagesShow;
