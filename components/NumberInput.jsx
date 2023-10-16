"use client";

const NumberInput = ({ num, decreaseNum, increaseNum }) => {
  return (
    <div className="grid grid-cols-3 h-10 w-32 justify-between items-center  bg-slate-200 rounded-full overflow-hidden">
      <span
        className=" cursor-pointer  transition hover:bg-red-400 h-full grid place-items-center group "
        onClick={decreaseNum}
      >
        <i className="ri-subtract-fill group-active:scale-105"></i>
      </span>
      <p className="h-full grid place-items-center">{num}</p>
      <span
        className=" cursor-pointer transition  hover:bg-mainColor h-full grid place-items-center group"
        onClick={increaseNum}
      >
        <i className="ri-add-line group-active:scale-105"></i>
      </span>
    </div>
  );
};

export default NumberInput;
