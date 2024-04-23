import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen bg-teal-950 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-mono text-black tracking-wide">Home</h1>
      </div>
    </div>
  );
};

export default Home;
