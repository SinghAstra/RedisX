import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReviewButton from "../components/ReviewButton";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-teal-950 flex flex-col ">
      <Navbar />
      <div className=" w-full px-10">
        <div className="pt-44 pb-16 ">
          <ReviewButton />
          <div className="flex w-full flex-col items-start gap-8">
            <h1 className="w-full text-9xl tracking-tight leading-[0.9] text-purple-300 font-medium">
              Built to scale
              <br />
              all private funds
            </h1>
            <h2 className="text-3xl leading-[1.3] text-purple-300 font-medium">
              AngelList provides investors and innovators
              <br />
              with the tools to grow.
            </h2>
            <Link
              className="text-teal-950 bg-white py-2 px-4 rounded-md font-medium hover:opacity-80 text-xl"
              to={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
