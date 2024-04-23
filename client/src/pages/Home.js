import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen bg-teal-950 flex flex-col ">
      <Navbar />
      <div className="bg-violet-400 mx-auto max-w-8xl pb-16 pt-28">
        <a
          class="mb-8 flex items-center gap-2.5 rounded-full bg-blue-800 px-4 py-2.5 text-white transition duration-300 hover:shadow-lg hover:brightness-105"
          href="/2023"
        >
          <span class="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Explore our 2023 Year in Review
          </span>
          <svg
            class="fill-current text-white group-hover:translate-x-1 transition duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12 4l6 6-6 6zM2 10h16v-a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
