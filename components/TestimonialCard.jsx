import Image from "next/image";

const TestimonialCard = ({ image, name, country, rating, children }) => {
  return (
    <div className="text-white bg-darkBg2 p-4 rounded-md min-w-[300px] flex-1 ">
      <div className="flex gap-8 items-center mb-3">
        <div className="w-[80px] rounded-full border border-mainColor overflow-hidden">
          <Image src={image} className="w-full " />
        </div>
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-200 text-sm">{country}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <i class="ri-star-fill text-mainColor mr-2 text-xl"></i>
        <span>{rating.toString().length < 2 ? `${rating}.0` : rating}</span>
      </div>
      <p className="text-gray-200 font-light">{children}</p>
    </div>
  );
};

export default TestimonialCard;
