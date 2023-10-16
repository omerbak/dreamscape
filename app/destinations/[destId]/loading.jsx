import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="  min-h-screen bg-darkBg2 pt-[120px]">
        <div className=" page-container grid md:grid-cols-2 justify-center md:gap-x-16 gap-y-8">
          <div>
            <Skeleton count={8} />
            <div className="mb-8"></div>
            <Skeleton count={2} />
          </div>
          <div className="">
            <h2 className="text-white uppercase text-xl md:text-3xl font-bold mb-4 ">
              <Skeleton />
            </h2>
            <p className=" text-gray-200 max-w-[350px] mb-10 ">
              <Skeleton count={5} />
            </p>
            <h2 className="text-white uppercase text-xl md:text-3xl font-bold mb-4">
              <Skeleton />
            </h2>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default loading;
