import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container h-screen flex">
      <div className="form-data flex-1 p-10 flex items-start justify-between flex-col">
        <div>
          <Link className="hover:text-cyan-400 text-2xl" to="/">
            WebAuth
          </Link>
        </div>
        <div className="max-w-md w-full">
          <h1 className="uppercase text-neutral-400 font-bold mb-1">
            Start for free
          </h1>
          <h1 className="text-white text-2xl font-medium mb-4">
            Create New Account
          </h1>
          <h3 className="hover:cursor-pointer hover:underline mb-6">
            Already Have an Account?
            <span className="text-cyan-400 "> Sign In </span>
          </h3>
          <form className="flex flex-col gap-3">
            <div className="relative input-container">
              <input type="text" className="data-input" placeholder=" " />
              <label className="data-label text-slate-400">Username</label>
            </div>
            <div className="relative input-container">
              <input type="email" className="data-input" placeholder=" " />
              <label className="data-label text-slate-400">Email</label>
            </div>
            <div className="relative input-container">
              <input type="password" className="data-input" placeholder=" " />
              <label className="data-label text-slate-400">Password</label>
            </div>
            <button className="bg-cyan-400 group flex items-center gap-2.5 rounded-full w-fit text-black font-medium text-lg px-4 py-1 transition-[shadow,filter]  hover:bg-cyan-500 mt-4 ">
              <span>Create account</span>
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                shapeRendering="geometricPrecision"
                viewBox="0 0 20 20"
                className="w-6 h-6 transition-transform duration-250 group-hover:translate-x-1"
              >
                <path
                  d="m12 4 6 6-6 6M2 10h16"
                  stroke="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 anime-container">
        <img src={"./img/anime.png"} alt="anime" className="anime-image" />
      </div>
    </div>
  );
};

export default Register;
