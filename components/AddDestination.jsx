"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { destinationSchema } from "@/lib/destinationSchema";

const AddDestination = ({ session }) => {
  const formRef = useRef();

  const onSubmit = async (values, actions) => {
    const formData = new FormData();
    formData.append("userEmail", session?.user?.email);
    formData.append("title", values.title);
    formData.append("desc", values.desc);
    formData.append("city", values.city);
    formData.append("country", values.country);
    formData.append("price", values.price);
    formData.append("period", values.period);
    values.photos.forEach((file) => {
      formData.append("photos", file, file.name);
    });
    /*  for (let key of formData) {
      console.log(key);
    } */
    //console.log(typeof formData.get("photos"));
    console.log(...formData);
    const res = await fetch(
      "http://localhost:3001/destinations/addDestination",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    console.log(data);
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      desc: "",
      country: "",
      city: "",
      price: "",
      period: "",
      photos: [],
    },
    validationSchema: destinationSchema,
    onSubmit,
  });

  return (
    <div className="p-6">
      <div className=" bg-darkBg2 rounded-md">
        <form
          action=""
          className="w-full"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="w-full gap-2 mb-4">
            <label htmlFor="title" className="block text-mainColor mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter a destination title"
              className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                      ${
                        errors.title && touched.title
                          ? "border-red-400 "
                          : "border-white focus:border-mainColor"
                      }`}
            />
            <span className="text-red-400  h-[20px] block ml-1">
              {errors.title && touched.title ? errors.title : null}
            </span>
          </div>
          <div className="w-full gap-2 mb-4">
            <label htmlFor="desc" className="block text-mainColor mb-1">
              Description
            </label>
            <textarea
              id="desc"
              type="text"
              name="desc"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter a description"
              className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                      ${
                        errors.desc && touched.desc
                          ? "border-red-400 "
                          : "border-white focus:border-mainColor"
                      }`}
            ></textarea>
            <span className="text-red-400  h-[20px] block ml-1">
              {errors.desc && touched.desc ? errors.desc : null}
            </span>
          </div>
          <div className="display flex basis-1/2 gap-2">
            <div className="w-full gap-2 mb-4">
              <label htmlFor="country" className="block text-mainColor mb-1">
                Country
              </label>
              <input
                id="country"
                type="text"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter a country"
                className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                      ${
                        errors.country && touched.country
                          ? "border-red-400 "
                          : "border-white focus:border-mainColor"
                      }`}
              />
              <span className="text-red-400  h-[20px] block ml-1">
                {errors.country && touched.country ? errors.country : null}
              </span>
            </div>
            <div className="w-full gap-2 mb-4">
              <label htmlFor="city" className="block text-mainColor mb-1">
                City
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter a city"
                className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                      ${
                        errors.city && touched.city
                          ? "border-red-400 "
                          : "border-white focus:border-mainColor"
                      }`}
              />
              <span className="text-red-400  h-[20px] block ml-1">
                {errors.city && touched.city ? errors.city : null}
              </span>
            </div>
          </div>
          <div className="display flex basis-1/2 gap-2">
            <div className="w-full gap-2 mb-4">
              <label htmlFor="price" className="block text-mainColor mb-1">
                Price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                min={0}
                placeholder="Enter the price"
                className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                      ${
                        errors.price && touched.price
                          ? "border-red-400 "
                          : "border-white focus:border-mainColor"
                      }`}
              />
              <span className="text-red-400  h-[20px] block ml-1">
                {errors.price && touched.price ? errors.price : null}
              </span>
            </div>
            <div className="w-full gap-2 mb-4">
              <label htmlFor="period" className="block text-mainColor mb-1">
                Period
              </label>
              <input
                id="period"
                type="number"
                name="period"
                min={1}
                value={values.period}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter a period in days"
                className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                      ${
                        errors.period && touched.period
                          ? "border-red-400 "
                          : "border-white focus:border-mainColor"
                      }`}
              />
              <span className="text-red-400  h-[20px] block ml-1">
                {errors.period && touched.period ? errors.period : null}
              </span>
            </div>
          </div>
          <div className="w-full gap-2 mb-4">
            <label htmlFor="photos" className="block text-mainColor mb-1">
              Photos
            </label>
            <input
              id="photos"
              type="file"
              name="photos"
              multiple
              accept="image/*"
              onChange={(event) => {
                const files = event.target.files;
                let myFiles = Array.from(files);
                setFieldValue("photos", myFiles);
              }}
              onBlur={handleBlur}
              min={0}
              placeholder="Enter the price"
              className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                      ${
                        errors.photos && touched.photos
                          ? "border-red-400 "
                          : "border-white focus:border-mainColor"
                      }`}
            />
            <span className="text-red-400  h-[20px] block ml-1">
              {errors.photos && touched.photos ? errors.photos : null}
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
              "Add"
            )}
          </motion.button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddDestination;
