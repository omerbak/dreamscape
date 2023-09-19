"use client";

import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { signUpSchema } from "@/lib/signupSchema";
const SignUnForm = () => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await fetch(
        "https://dreamscape-api-iswd.onrender.com/user/addUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            role: "user",
          }),
        }
      );
      console.log("signUp form: ", res);
      if (res.status === 200) {
        toast.success("You are singup successfully, Please signIn now", {
          position: "top-center",
          type: "success",
        });
        actions.resetForm();
      } else if (res.status === 409) {
        toast.error("User already existe", {
          position: "top-center",
          type: "error",
        });
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
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <div div className="p-6">
      {/*  <button className="border-2 border-mainColor py-2 px-6 rounded-md mb-4 block mx-auto">
        <i className="ri-google-fill text-mainColor">
          <span className="text-white">oogle</span>
        </i>
      </button> */}
      <form action="" className="w-full " onSubmit={handleSubmit}>
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
          <label htmlFor="password" className="block text-mainColor mb-1">
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
        <div className="w-full gap-2 mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-mainColor mb-1"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Confirm your password"
            className={`border  w-full p-3 bg-transparent rounded-md outline-none text-white 
                    ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-400 "
                        : "border-white focus:border-mainColor"
                    }`}
          />
          <span className="text-red-400  h-[20px] block ml-1">
            {errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : null}
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
            "SignUp"
          )}
        </motion.button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SignUnForm;
