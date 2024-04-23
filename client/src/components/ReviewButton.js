import React from "react";
import { Link } from "react-router-dom";

const ReviewButton = () => {
  return (
    <Link
      to="/2023"
      className="flex items-center gap-2.5 group mb-8 rounded-full bg-[#002B31] px-4 py-2.5 transition-[shadow,filter] w-fit hover:shadow-md"
    >
      <span class="bg-text-gradient bg-clip-text text-transparent group-hover:underline">
        Explore our 2023 Year in Review
      </span>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        shape-rendering="geometricPrecision"
        viewBox="0 0 20 20"
        class="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1"
      >
        <path
          d="m12 4 6 6-6 6M2 10h16"
          stroke="currentColor"
          vector-effect="non-scaling-stroke"
        ></path>
      </svg>
    </Link>
  );
};

export default ReviewButton;
