"use client";

import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

const WebsiteLoader = () => {
  const [showLoader, setShowLoader] = useState(false);

  function changeLoader() {
    /*  setTimeout(() => {
      setShowLoader((prev) => !prev);
    }, 3000); */
    setShowLoader((prev) => false);
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
          <InfinitySpin width="250" color="#000000" />
        </div>
      )}
    </>
  );
};

export default WebsiteLoader;
