const SectionHeader = ({ num, title, children }) => {
  return (
    <div className="container mx-auto mb-10">
      <div className="w-full flex justify-between mb-8">
        <h2 className="text-mainColor w-1/3">
          <span className="text-xl md:text-2xl">0{num} </span>
          <p className="inline text-sm md:text-md ">{title}</p>
        </h2>
        <p className="text-white text-xl md:text-2xl w-2/3 max-w-[700px] font-light">
          {children}
        </p>
      </div>
      <div className="w-full h-[1px] bg-lightBg"></div>
    </div>
  );
};

export default SectionHeader;
