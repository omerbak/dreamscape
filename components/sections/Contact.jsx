"use client";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import image from "../../public/images_compressed/main_bg.jpg";
import Reveal from "../Reveal";
import { useState } from "react";
import { motion } from "framer-motion";
import { addMessageFirestore } from "@/lib/firebase";

const Contact = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      addMessageFirestore(formInfo);
      setFormInfo({
        name: "",
        email: "",
        text: "",
      });
      setLoading(false);
    }, 1000);
  }
  return (
    <section className=" mt-32" id="contact">
      {/*  <Reveal> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader num={5} title="Contact Us">
          Let Us Help You Plan Your Dream Vacation. Contact Us Now!
        </SectionHeader>
        <div className="flex  bg-darkBg2 rounded-md overflow-hidden items-center">
          <div className="w-1/2 overflow-hidden hidden md:block ">
            <Image src={image} className="h-[600px] object-cover object-top" />
          </div>
          <form
            action=""
            className="w-full md:w-1/2 p-6"
            onSubmit={handleFormSubmit}
          >
            <div className="w-full gap-2 mb-4">
              <label htmlFor="name" className="block text-mainColor mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formInfo.name}
                onChange={handleFormChange}
                placeholder="Enter your name"
                className="border focus:border-mainColor border-white w-full p-3 bg-transparent rounded-md outline-none text-white"
              />
            </div>
            <div className="w-full gap-2 mb-4">
              <label htmlFor="email" className="block text-mainColor mb-1">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formInfo.email}
                onChange={handleFormChange}
                placeholder="Enter your Email"
                className="border focus:border-mainColor border-white w-full p-3 bg-transparent rounded-md outline-none text-white"
              />
            </div>
            <div className="w-full gap-2 ">
              <label htmlFor="email" className="block text-mainColor mb-1">
                Message
              </label>
              {/*  <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  className="border focus:border-mainColor border-white w-full p-3 bg-transparent rounded-md outline-none text-white"
                /> */}
              <textarea
                name="text"
                id="text"
                value={formInfo.text}
                onChange={handleFormChange}
                placeholder="Enter your message "
                className="min-h-[300px] border focus:border-mainColor border-white w-full p-3 bg-transparent rounded-md outline-none text-white"
              ></textarea>
            </div>
            <motion.button
              className="px-7 py-3 bg-mainColor text-white rounded-md mt-3 font-semibold"
              whileHover={{ scale: 1.1 }}
              type="submit"
            >
              {loading ? "loading..." : "Submit"}
            </motion.button>
          </form>
        </div>
      </div>
      {/* </Reveal> */}
    </section>
  );
};

export default Contact;
