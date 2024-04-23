import React from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <div class="drawer drawer-end">
      <div className="bg-transparent flex justify-between py-4 px-8 text-white font-semibold">
        <h1 className="text-xl">WebAuth</h1>
        <div className="drawer-content lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <label
            for="my-drawer-4"
            className="drawer-button btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <Drawer />
        </div>
        <div className="lg:flex gap-4 hidden">
          <Link
            className="py-2 px-4 hover:bg-stone-700 hover:bg-opacity-50 font-medium rounded-md transition ease-in-out delay-50"
            to={"/login"}
          >
            Sign in
          </Link>
          <Link
            className="text-teal-950 bg-white py-2 px-4 rounded-md font-medium"
            to={"/register"}
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
