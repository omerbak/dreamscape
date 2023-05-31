import React from "react";

const Service = ({ title, desc, iconRemixClasses }) => {
  return (
    <div className=" bg-darkBg2 flex justify-between items-center gap-2 p-3  md:p-6 rounded-md">
      <div className=" p-2 md:p-4 bg-mainColor rounded-md">
        <i className={`${iconRemixClasses} text-6xl text-white`}></i>
      </div>
      <div className="w-3/4">
        <h5 className="text-white text-xl font-bold mb-3">{title}</h5>
        <p className="text-gray-200 text-sm md:text-md font-light">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
