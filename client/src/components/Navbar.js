import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="drawer drawer-end">
      <div
        className={`flex justify-between items-center py-4 px-8 text-white font-semibold fixed left-0 top-0 z-50 w-full ${
          isScrolled ? "bg-teal-800" : "bg-transparent"
        } transition-colors`}
      >
        <div className="flex gap-8 items-center">
          <Link className="text-2xl " to={"/"}>
            WebAuth
          </Link>
          <div className="hidden lg:flex gap-4 items-center">
            <Link
              className="text-xl text-slate-400 hover:text-white"
              to={"/layout/multi-column-layout"}
            >
              MCL
            </Link>
            <Link
              className="text-xl text-slate-400 hover:text-white"
              to={"/layout/holy-grail-layout"}
            >
              HGL
            </Link>
            <Link
              className="text-xl text-slate-400 hover:text-white"
              to={"/layout/masonry-style-layout"}
            >
              MSL
            </Link>
            <Link
              className="text-xl text-slate-400 hover:text-white"
              to={"/layout/portfolio-layout"}
            >
              PL
            </Link>
          </div>
        </div>
        <div className="drawer-content lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <Drawer />
        </div>
        <div className="lg:flex gap-4 hidden">
          <Link
            className="py-2 px-4 hover:bg-stone-700 hover:bg-opacity-50 font-medium rounded-md transition ease-in-out delay-50"
            to={"/log-in"}
          >
            Sign in
          </Link>
          <Link
            className="text-teal-950 bg-white py-2 px-4 rounded-md font-medium hover:opacity-80"
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
