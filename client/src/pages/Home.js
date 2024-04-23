import React from "react";
import Navbar from "../components/Navbar";
import ReviewButton from "../components/ReviewButton";

const Home = () => {
  return (
    <div className="h-screen bg-teal-950 flex flex-col ">
      <Navbar />
      <div className=" w-full px-5">
        <div className="pt-28 pb-16 ">
          <ReviewButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
