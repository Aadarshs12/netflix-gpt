import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
        <form
          action=""
          className="absolute sm:w-4/12 md:w-3/12 right-0 top-2 left-0 my-36 p-12 bg-black mx-auto text-white bg-opacity-80 rounded-lg"
        >
          <h1 className="font-bold text-3xl my-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (<input
            className="w-full p-3 my-4 bg-gray-700 bg-opacity-35 rounded-md"
            type="password"
            placeholder="Full Name"
          />)}
          <input
            className="w-full p-3 my-4 bg-gray-700 bg-opacity-35 rounded-md"
            type="text"
            placeholder="Email or Phone number"
          />
          <input
            className="w-full p-3 my-4 bg-gray-700 bg-opacity-35 rounded-md"
            type="password"
            placeholder="Password"
          />
          <button className="w-full p-3 my-6  rounded-lg bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="font-light text-sm mx-2 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "New to Netflix? " : "Already a User? "}
            <span className="font-semibold text-sm">
              {isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
