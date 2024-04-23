import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent flex justify-between py-4 px-8 text-white font-semibold">
      <h1 className="text-xl">WebAuth</h1>
      <div className="flex gap-4">
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
  );
};

export default Navbar;
