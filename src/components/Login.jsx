import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import Validate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmitButton = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrrorMessage(message);
    if(message)return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrrorMessage(errorCode+"-"+errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrrorMessage(errorCode+"-"+errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="bg-black h-screen  w-full ">
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="absolute w-full sm:w-1/2 md:w-1/2 lg:w-3/12 right-0 top-2 left-0 my-36 p-12 bg-black mx-auto text-white bg-opacity-80 rounded-lg"
        >
          <h1 className="font-bold text-3xl my-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="w-full p-3 my-4 bg-gray-700 bg-opacity-35 rounded-md"
              type="text"
              placeholder="Full Name"
            />
          )}
          
          <input
            ref={email}
            className="w-full p-3 my-4 bg-gray-700 bg-opacity-35 rounded-md"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            ref={password}
            className="w-full p-3 my-4 bg-gray-700 bg-opacity-35 rounded-md"
            type="password"
            placeholder="Password"
          />
          <p className="text-sm font-bold text-red-500">{errorMessage}</p>
          <button
            className="w-full p-3 my-6  rounded-lg bg-red-700"
            onClick={handleSubmitButton}
          >
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
