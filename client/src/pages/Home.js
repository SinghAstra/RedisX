import React from "react";
import Navbar from "../components/Navbar";
import ReviewButton from "../components/ReviewButton";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-teal-950 flex flex-col">
      <Navbar />
      <div className="w-full px-10">
        <div className="pt-44 pb-16 hero-text">
          <ReviewButton />
          <div className="flex w-full flex-col items-start gap-8">
            <h1 className="w-full text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-purple-300 font-medium">
              Built to scale
              <br />
              all private funds
            </h1>
            <h2 className="text-xl md:text-3xl leading-[1.3] text-purple-300 font-medium">
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
      {/* <div className="bg-violet-400 overflow-hidden">
        <div className="mx-auto bg-cyan-400 w-full px-5 sm:px-9 md:px-10 xl:px-12">
          <div className="mx-auto max-w-8xl">
            <div className="flex gap-4  overflow-x-scroll cursor-grab active:cursor-grabbing">
              <div className="flex  h-40 flex-1 min-w-[70vw] border-y slate-border xs:min-w-[35vw] sm:min-w-[28vw] bg-yellow-400"></div>
              <div className="flex  h-40 flex-1 min-w-[70vw] border-y slate-border xs:min-w-[35vw] sm:min-w-[28vw] bg-yellow-400"></div>
              <div className="flex  h-40 flex-1 min-w-[70vw] border-y slate-border xs:min-w-[35vw] sm:min-w-[28vw] bg-yellow-400"></div>
              <div className="flex  h-40 flex-1 min-w-[70vw] border-y slate-border xs:min-w-[35vw] sm:min-w-[28vw] bg-yellow-400"></div>
              <div className="flex  h-40 flex-1 min-w-[70vw] border-y slate-border xs:min-w-[35vw] sm:min-w-[28vw] bg-yellow-400"></div>
              <div className="flex  h-40 flex-1 min-w-[70vw] border-y slate-border xs:min-w-[35vw] sm:min-w-[28vw] bg-yellow-400"></div>
              <div className="flex  h-40 flex-1 min-w-[70vw] border-y slate-border xs:min-w-[35vw] sm:min-w-[28vw] bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-yellow-400 flex gap-4 mt-20 overflow-x-scroll cursor-grab active:cursor-grabbing scroll">
        <div className="min-w-96 h-40 flex-1 bg-pink-400"></div>
        <div className="min-w-96 h-40 flex-1 bg-pink-400"></div>
        <div className="min-w-96 h-40 flex-1 bg-pink-400"></div>
        <div className="min-w-96 h-40 flex-1 bg-pink-400"></div>
        <div className="min-w-96 h-40 flex-1 bg-pink-400"></div>
        <div className="min-w-96 h-40 flex-1 bg-pink-400"></div>
      </div> */}
      <div className="inline-grid bg-black p-2 gap-2">
        <div className="bg-pink-400">01</div>
        <div className="bg-pink-400">02</div>
        <div className="bg-pink-400">03</div>
        <div className="bg-pink-400">04</div>
        <div className="bg-pink-400">05</div>
        <div className="bg-pink-400">06</div>
      </div>
    </div>
  );
};

export default Home;
