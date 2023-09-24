import SectionHeader from "../SectionHeader";
import Image from "next/image";
import image1 from "../../public/images_compressed/mountain.jpg";
import image2 from "../../public/images_compressed/mile.jpg";
import Reveal from "../Reveal";

const AboutSection = () => {
  return (
    <div>
      <section id="aboutUs" className="mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <SectionHeader title="About Us" num={2}>
            Dreamscape is a travel agency that helps you plan unforgettable
            trips
          </SectionHeader>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className=" md:w-1/3 w-full min-h-[500px] relative ">
              <Image
                src={image1}
                alt="mountain image"
                className="w-[60%] md:w-[70%] h-[300px] absolute top-0 left-0 z-20 object-cover rounded-md"
                placeholder="blur"
                sizes="(max-width: 768px) 40vw, 25vw"
              />
              <Image
                src={image2}
                alt="mile image"
                className="w-[60%] md:w-[70%] h-[350px] absolute bottom-10 md:bottom-0 right-0 z-20 object-cover rounded-md"
              />
            </div>
            <div className="md:w-2/3 text-white">
              <p className=" font-light mb-2 leading-7">
                <span className="text-2xl text-mainColor font-semibold">W</span>
                e offer a wide range of travel packages to destinations all over
                the world, so you can find the perfect trip for your budget and
                interests. Whether you're looking for a relaxing beach vacation,
                an adventurous hiking trip, or a cultural city break, we can
                help you make your dream vacation a reality.
              </p>
              <p className=" font-light mb-2 leading-7">
                <span className="text-2xl text-mainColor font-semibold">W</span>
                e also offer a variety of custom travel packages that can be
                tailored to your specific needs. If you have a dream destination
                in mind, but you're not sure how to get there, we can help you
                create a package that fits your budget and schedule.
              </p>
              <p className="mb-2 font-light leading-7">
                <span className="text-2xl text-mainColor font-semibold ">
                  A
                </span>
                t Dreamscape, we believe that travel is a powerful way to learn
                about new cultures, experience new things, and make memories
                that will last a lifetime. We're here to help you make your
                travel dreams a reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
