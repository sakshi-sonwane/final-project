import React from "react";
import { FaShoppingBag, FaHome } from "react-icons/fa";

const Section = () => {
  return (
    <div
      className="text-white px-6 md:px-10 py-12 md:py-20 mt-16 md:mt-30 mb-16 md:mb-30 mx-4 md:mx-10 rounded-3xl 
bg-[#1A1A2E]/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left — Text + Buttons */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Empowering Developers
            <br />
            with
            <span className="text-[#6E00FF]"> Next-Gen Tools</span>
          </h3>
          <p className="text-[#8892A4] text-base md:text-lg font-light mb-8 leading-relaxed">
            We don't just build for clients; we build for the community. Our
            tools and marketplace provide high-performance components, assets,
            and libraries to accelerate your development workflow.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button className="flex items-center gap-2 px-5 py-3 border border-white/20 text-sm md:text-base rounded-3xl hover:border-[#6E00FF] transition-all duration-300">
              <FaShoppingBag />
              Professional Grade
            </button>
            <button className="flex items-center gap-2 px-5 py-3 border border-white/20 text-sm md:text-base rounded-3xl hover:border-[#6E00FF] transition-all duration-300">
              <FaHome />
              Ready to Use
            </button>
          </div>
        </div>

        {/* Right — Stats Grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-3 md:gap-4">
          {[
            { num: "50+", label: "Components" },
            { num: "15+", label: "Active Tools" },
            { num: "200k", label: "Downloads" },
            { num: "99%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-4 md:p-6 text-center hover:border-[#6E00FF] transition-all duration-300"
            >
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-1">
                {stat.num}
              </h3>
              <p className="text-[#8892A4] text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
