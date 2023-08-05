import SectionHeader from "../SectionHeader";
import Image from "next/image";
import image from "../../public/images_compressed/vinessa.jpg";
import Service from "../Service";

const Services = () => {
  return (
    <section className="mt-32" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader title="Services" num={3}>
          Your Dream Vacation, Our Expertise: We Help You Make Your Travel
          Dreams Come True!
        </SectionHeader>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className=" md:w-1/3">
            <Image
              src={image}
              alt="I'm not sure but the city looks like vinessa"
              className="max-w-full rounded-md object-cover h-[300px] md:h-full md:max-h-[500px] object-bottom "
              sizes="(max-width: 768px) 100vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="md:w-2/3 space-y-3">
            <Service
              title="Travel Planning"
              desc="We have a team of experienced travel agents who can help you with everything from finding the perfect destination to booking your flights and accommodations."
              iconRemixClasses="ri-calendar-check-line"
            />
            <Service
              title="24 Customer Service"
              desc="Our team of experienced customer service representatives is available 24 hours a day, 7 days a week, to answer your calls, emails, and chats. "
              iconRemixClasses="ri-customer-service-2-line"
            />
            <Service
              title="Travel Advice"
              desc="We can provide you with information on destinations, transportation, accommodations, activities, and more. We can also help you with things like getting a visa and making travel arrangements."
              iconRemixClasses="ri-book-2-line"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
