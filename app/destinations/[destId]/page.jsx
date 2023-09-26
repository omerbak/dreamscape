import Image from "next/image";
import ImagesShow from "@/components/ImagesShow";
import ReserveDest from "@/components/ReserveDest";
import { getServerSession } from "next-auth";
import { nextOptions } from "@/app/api/auth/[...nextauth]/route";

const Destination = async ({ params: { destId } }) => {
  const session = await getServerSession(nextOptions);

  const url = `http://localhost:3001/destinations/getDestinationById?destId=${destId}`;
  const res = await fetch(url);
  const { title, desc, country, city, price, period, photos } =
    await res.json();

  return (
    <div className="  min-h-screen bg-darkBg2 pt-[120px]">
      <div className=" page-container grid md:grid-cols-2 justify-center md:gap-x-16 gap-y-8">
        <ImagesShow photos={photos} />
        <div className="">
          <h1 className="text-white uppercase text-xl md:text-3xl font-bold mb-4">
            {title}
          </h1>
          <p className=" text-gray-200 max-w-[350px] mb-10 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae distinctio ipsa sint eos reiciendis officiis, voluptatem
            omnis harum. Possimus, provident?
          </p>

          <div className=" text-white flex gap-x-8 text-lg mb-4 font-semibold">
            <p>{city[0].toLocaleUpperCase() + city.slice(1)}</p>
            <p>{country[0].toLocaleUpperCase() + country.slice(1)}</p>
          </div>
          <div className="text-white flex gap-x-8 text-lg font-semibold mb-8">
            <p>
              {price} <span className="text-gray-200 text-sm">$</span>
            </p>
            <p>
              {period} <span className="text-gray-200 text-sm">days</span>
            </p>
          </div>
          <ReserveDest
            destId={destId}
            price={price}
            title={title}
            session={session}
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
