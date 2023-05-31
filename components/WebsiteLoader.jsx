"use client";

import { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";

const WebsiteLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  function changeLoader() {
    /*  setTimeout(() => {
      setShowLoader((prev) => !prev);
    }, 3000); */
    setShowLoader((prev) => !prev);
  }

  useEffect(() => {
    window.addEventListener("load", changeLoader());

    return () => {
      window.removeEventListener("load", changeLoader());
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className="fixed w-full h-full bg-mainColor flex justify-center items-center z-[100]">
          <Triangle
            height="200"
            width="100"
            color="#000000"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default WebsiteLoader;
