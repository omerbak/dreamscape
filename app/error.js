"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" h-screen flex justify-center content-center bg-darkBg">
      <h2 className=" text-red-500">
        Sorry it's our fault, something went wrong
      </h2>
    </div>
  );
}
