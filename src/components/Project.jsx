import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mx-4 md:mx-10 my-10 p-8 md:p-16 lg:p-24 bg-[#1A1A2E]/10 border border-white/20 rounded-3xl">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_20px_rgba(110,0,255,0.6)] font-extrabold">
        READY TO BUILD <br />
        <span className="text-[#6E00FF] font-extrabold">THE FUTURE?</span>
      </h1>
      <h3 className="mt-4 md:mt-6 text-base md:text-xl font-extralight text-white/70 max-w-xl mx-auto">
        Join the ranks of innovative companies building next-gen digital
        experiences with NovaEdge Digital Labs.
      </h3>
      <button
        onClick={() => navigate("/contact")}
        className="group mx-auto flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 mt-8 md:mt-10 rounded-4xl 
text-white text-lg md:text-2xl font-semibold bg-[#7B2FBE] hover:bg-[#6B28A8] transition-all duration-300"
      >
        Start Your Project
        <FaArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default Project;
