"use client";

const NumberInput = ({ num, decreaseNum, increaseNum }) => {
  return (
    <div className="grid grid-cols-3 h-10 w-32 justify-between items-center  bg-slate-200 rounded-full overflow-hidden">
      <span
        className=" cursor-pointer  transition hover:bg-red-400 h-full grid place-items-center "
        onClick={decreaseNum}
      >
        <i class="ri-subtract-fill"></i>
      </span>
      <p className="h-full grid place-items-center">{num}</p>
      <span
        className=" cursor-pointer transition  hover:bg-mainColor h-full grid place-items-center"
        onClick={increaseNum}
      >
        <i class="ri-add-line"></i>
      </span>
    </div>
  );
};

export default NumberInput;
