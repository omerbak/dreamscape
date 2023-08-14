"use client";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import image from "../../public/images_compressed/main_bg.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { addMessageFirestore } from "@/lib/firebase";
import { useFormik } from "formik";
import { basicSchema } from "@/lib/yupSchema";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await fetch("http://localhost:3001/form/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });
      console.log(res);
      if (res.status === 200) {
        toast.success(
          "Thank you for contacting us, We will get back to you soon!",
          { position: "top-center", type: "success" }
        );
        actions.resetForm();
      } else {
        console.log("toast showd appear");
        toast(
          "Sorry we are having some problemes at the moment, try agian later!",
          { position: "top-center", type: "error" }
        );
      }
    } catch (err) {
      toast(
        "Sorry we are having some problemes at the moment, try agian later!",
        { position: "top-center", type: "error" }
      );
    }
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <section className=" mt-32" id="contact">
      {/*  <Reveal> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <SectionHeader num={5} title="Contact Us">
          Let Us Help You Plan Your Dream Vacation. Contact Us Now!
        </SectionHeader>
        <div className="flex gap-2 bg-darkBg2 rounded-md overflow-hidden items-center">
          <div className="w-1/2 overflow-hidden hidden md:block ">
            <Image
              src={image}
              className="h-[700px] object-cover object-top"
              sizes="50vw"
              placeholder="blur"
            />
          </div>
          <form
            action=""
            className="w-full md:w-1/2 p-6"
            onSubmit={handleSubmit}
          >
            <div className="w-full gap-2 mb-4">
              <label htmlFor="name" className="block text-mainColor mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
                className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                ${
                  errors.name && touched.name
                    ? "border-red-400 "
                    : "border-white focus:border-mainColor"
                }`}
              />
              <span
                className={`text-red-400  h-[20px] block ml-1
                }`}
              >
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div className="w-full gap-2 mb-4">
              <label htmlFor="email" className="block text-mainColor mb-1">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your Email"
                className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                ${
                  errors.email && touched.email
                    ? "border-red-400 "
                    : "border-white focus:border-mainColor"
                }`}
              />
              <span className="text-red-400  h-[20px] block ml-1">
                {errors.email && touched.email ? errors.email : null}
              </span>
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
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your message "
                className={`min-h-[300px] border w-full p-3 bg-transparent rounded-md outline-none text-white 
                ${
                  errors.message && touched.message
                    ? "border-red-400 "
                    : "border-white focus:border-mainColor"
                }`}
              ></textarea>
              <span className="text-red-400 h-[20px] block ml-1">
                {errors.message && touched.message ? errors.message : null}
              </span>
            </div>
            <motion.button
              className="px-7 py-3 bg-mainColor text-white rounded-md mt-3 font-semibold flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              type="submit"
            >
              {isSubmitting ? (
                <ThreeDots
                  height="25"
                  width="50"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Submit"
              )}
            </motion.button>
          </form>
        </div>
      </div>
      <ToastContainer />
      {/* </Reveal> */}
    </section>
  );
};

export default Contact;
