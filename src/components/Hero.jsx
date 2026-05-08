import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white mt-20 text-center px-6 md:px-10">
      <div className="mt-5">
        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-10 leading-tight">
          <span>NOVAEDGE</span>
          <br />
          <span className="text-[#6E00FF]">DIGITAL</span>
          <span className="text-[#6E00FF]"> LABS</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-extralight mb-8 md:mb-10 text-white/70 max-w-2xl mx-auto">
          Transforming complex challenges into elegant digital experiences
          through world-class engineering and innovative design.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          className="group w-full sm:w-auto text-base md:text-xl flex items-center justify-center gap-2 px-8 md:px-10 font-bold 
    py-3 md:py-4 bg-[#7B2FBE] rounded-4xl 
    hover:bg-[#6B28A8] transition-all duration-300"
        >
          Explore Our Lab
          <FaRocket className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
        </button>

        <button
          onClick={() => navigate("/services")}
          className="w-full sm:w-auto flex items-center justify-center gap-2 text-base md:text-xl text-white px-8 md:px-10 py-3 md:py-4 
    bg-[#7B2FBE]/20 backdrop-blur-md 
    rounded-full border border-[#7B2FBE] shadow-2xl hover:bg-white/20 hover:border-white/20 transition-all duration-300"
        >
          View Services
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
