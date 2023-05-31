"use client";
import TestimonialCard from "../TestimonialCard";
import SectionHeader from "../SectionHeader";
import Reveal from "../Reveal";
import avatar1 from "../../public/images_compressed/avatar1.png";
import avatar2 from "../../public/images_compressed/avatar2.png";
import avatar3 from "../../public/images_compressed/avatar.png";

const Testimonials = () => {
  return (
    <section className=" my-32" id="testimonials">
      {/* <Reveal> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader title="Testimonials" num={4}>
          Dreamscape Customers Love Us!
        </SectionHeader>
        <div
          className="flex flex-col md:flex-row flex-grow-0 gap-3"
          style={{ "flex-wrap": "wrap" }}
        >
          <TestimonialCard
            name="Omer Bak"
            country="Yemen"
            rating={4.9}
            image={avatar1}
          >
            "Dreamscape exceeded my expectations! They were so helpful in
            planning my trip, and everything went off without a hitch. I would
            definitely recommend them to anyone looking for a travel agency."
          </TestimonialCard>
          <TestimonialCard
            name="Jake Meller"
            country="United State"
            rating={5}
            image={avatar2}
          >
            "I was looking for a travel agency that could help me plan a trip to
            Europe that was both affordable and enjoyable. I was also looking
            for an agency that could help me find the best deals on flights and
            hotels. Dreamscape exceeded my expectations in every way."
          </TestimonialCard>
          <TestimonialCard
            name="Lucas"
            country="France"
            rating={4.8}
            image={avatar3}
          >
            "Dreamscape Travel helped me plan my dream trip to the Galapagos
            Islands. They took the time to understand my needs and created a
            personalized itinerary that was perfect for me. I had an amazing
            trip and would highly recommend them to anyone planning a vacation."
          </TestimonialCard>
        </div>
      </div>
      {/* </Reveal> */}
    </section>
  );
};

export default Testimonials;
