import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-white text-5xl mt-10 text-center">
      <span
        className="flex items-center gap-2 w-fit mx-auto 
      text-sm px-4 py-2 
      bg-white/10 backdrop-blur-md 
      rounded-full border border-white/20"
      >
        <FiLayers className="text-purple-400" />
        The Future of Digital Innovation
      </span>

      <div className="mt-5">
        <h1 className="font-bold text-8xl mb-10">
          <span>NOVAEDGE</span>
          <br />
          <span className="text-[#6E00FF]">DIGITAL</span>
          <span className="text-[#6E00FF]"> LABS</span>
        </h1>
        <p className="text-xl font-extralight mb-10 text-white/70">
          Transforming complex challenges into elegant digital experiences
          <br />
          through world-class engineering and innovative design.
        </p>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          className="group text-xl flex items-center gap-2 px-10 font-bold 
    py-4 bg-[#7B2FBE] rounded-4xl 
    hover:bg-[#6B28A8] transition-all duration-300"
        >
          Explore Our Lab
          <FaRocket className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
        </button>

        <button
          className=" flex items-center gap-2 text-xl text-white px-10 py-4 
    bg-[#7B2FBE]/20 backdrop-blur-md 
    rounded-full border border-[#7B2FBE] shadow-2xl hover:bg-white/20 hover:border-white/20"
        >
          View Services
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
