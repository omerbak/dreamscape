"use client";
import { useState } from "react";
import SignInForm from "../SignInForm";
import SignUpForm from "../SignUpForm";

const SignForm = () => {
  const [selectedForm, setSelectedForm] = useState(1);
  return (
    <>
      <div className=" bg-darkBg2 w-fit p-4 shadow-inner rounded-md mx-auto flex gap-6">
        <button
          className={`text-white px-6 py-2 rounded-md transition-all  border-2 border-transparent hover:border-mainColor   ${
            selectedForm === 1 ? "bg-mainColor" : ""
          }`}
          onClick={() => setSelectedForm(1)}
        >
          SignIn
        </button>
        <button
          className={`text-white px-6 py-2 rounded-md transition-all  border-2 border-transparent hover:border-mainColor  ${
            selectedForm === 2 ? "bg-mainColor" : ""
          }`}
          onClick={() => setSelectedForm(2)}
        >
          SignUp
        </button>
      </div>
      <div className=" bg-darkBg2 p-4 mx-auto max-w-[600px] rounded-md shadow-inner mt-4">
        {selectedForm === 1 ? <SignInForm /> : <SignUpForm />}
      </div>
    </>
  );
};

export default SignForm;
