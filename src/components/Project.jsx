import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center m-10 p-30 bg-[#1A1A2E]/10 border border-white/20 rounded-3xl ">
      <h1 className="text-white text-4xl md:text-6xl drop-shadow-[0_0_20px_rgba(110,0,255,0.6)] font-extrabold">
        READY TO BUILD <br />
        <span className="text-[#6E00FF] font-extrabold "> THE FUTURE?</span>
      </h1>
      <h3 className="mt-6 text-xl font-extralight text-white/70">
        Join the ranks of innovative companies building next-gen digital <br />
        experiences with NovaEdge Digital Labs.
      </h3>
      <button
        onClick={() => navigate("/contact")}
        className="group mx-auto flex items-center gap-3 px-8 py-4 mt-10 rounded-4xl 
text-white text-2xl font-semibold bg-[#7B2FBE] hover:bg-[#6B28A8] transition-all duration-300"
      >
        Start Your Project
        <FaArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default Project;
