"use client";

import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { signInSchema } from "@/lib/signinSchema";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

const SignInForm = () => {
  const searchParams = useSearchParams();
  const loginErorr = searchParams.get("error");
  /* if (loginErorr) {
    toast.error("Wrong Password Or Email", {
      position: "top-center",
    });
    
  } */
  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/destinations",
      });
    } catch (err) {
      console.log(err);
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
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit,
  });

  return (
    <div className="p-6">
      <div className=" bg-darkBg2 rounded-md">
        {/*  <button
          className="border-2 border-mainColor py-2 px-6 rounded-md mb-4 block mx-auto"
          onClick={() =>
            signIn("google" , { callbackUrl: "/destinations" })
          }
        >
          <i className="ri-google-fill text-mainColor">
            <span className="text-white">oogle</span>
          </i>
        </button> */}
        <form action="" className="w-full" onSubmit={handleSubmit}>
          {/* <div className="w-3/4  mx-auto mb-4 text-center text-white">Or</div> */}
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
          <div className="w-full gap-2 mb-4">
            <label htmlFor="email" className="block text-mainColor mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
              className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                    ${
                      errors.password && touched.password
                        ? "border-red-400 "
                        : "border-white focus:border-mainColor"
                    }`}
            />
            <span className="text-red-400  h-[20px] block ml-1">
              {errors.password && touched.password ? errors.password : null}
            </span>
          </div>
          {loginErorr && <p className="text-red-300">Wrong Email or Passwor</p>}
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
              "SignIn"
            )}
          </motion.button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignInForm;
