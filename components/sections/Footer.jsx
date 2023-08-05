import Image from "next/image";
import logo from "../../public/Dreamscape-logo/vector/default-monochrome-white.svg";
import SocialIcons from "../SocialIcons";
import footerImage from "../../public/images_compressed/hero_bg.jpg";
const Footer = () => {
  return (
    <footer id="footer" className=" mt-32 relative text-white ">
      <Image
        src={footerImage}
        sizes="100vw"
        className=" absolute w-full h-full object-cover object-bottom"
      />
      <div className=" absolute w-full h-full left-0 top-0 bg-gradient-to-t from-[rgba(27,27,25,0.5)] to-[#20201e]"></div>
      <div className="py-10 container mx-auto px-4 sm:px-6 lg:px-20 relative">
        <div className="flex flex-1 justify-between flex-wrap">
          <div className="min-w-[150px] mb-2">
            <Image src={logo} className="w-[180px] mb-8 " />
            <SocialIcons />
          </div>
          <div className="flex flex-col gap-1 text-gray-200 font-light min-w-[150px]">
            <h4 className="mb-2 text-white font-semibold text-xl">
              Quick Links
            </h4>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex flex-col gap-1 text-gray-200 font-light min-w-[150px]">
            <h4 className="mb-2 text-white font-semibold text-xl">Resources</h4>
            <a href="#">Privacy</a>
            <a href="#">Support</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Development</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-lightBg my-8"></div>
        <div className=" text-center">
          <p className="font-semibold text-xl mb-6">
            Copyrights 2023 | All Rights Reserved
          </p>
          <p>
            Design & Development{" "}
            <a className="text-mainColor font-semibold" href="#">
              Omer Baktheer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
