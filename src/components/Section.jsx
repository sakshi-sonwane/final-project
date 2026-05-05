import React from "react";
import { FaShoppingBag, FaHome } from "react-icons/fa";

const Section = () => {
  return (
    <div
      className="text-white px-10 py-20 mt-30 mb-30 mx-10 rounded-3xl 
bg-[#1A1A2E]/10 backdrop-blur-lg border border-white/20 shadow-2xl 
 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left — Text + Buttons */}
        <div className="flex-1">
          <h3 className="text-5xl font-extrabold mb-6 leading-tight">
            Empowering Developers
            <br />
            with
            <span className="text-[#6E00FF]"> Next-Gen Tools</span>
          </h3>
          <p className="text-[#8892A4] text-lg font-light mb-8 leading-relaxed">
            We don't just build for clients; we build for the community. Our
            tools and marketplace provide high-performance components, assets,
            and libraries to accelerate your development workflow.
          </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-base rounded-3xl hover:border-[#6E00FF] transition-all duration-300">
              <FaShoppingBag />
              Professional Grade
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-base rounded-3xl hover:border-[#6E00FF] transition-all duration-300">
              <FaHome />
              Ready to Use
            </button>
          </div>
        </div>

        {/* Right — Stats Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 text-center hover:border-[#6E00FF] transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-white mb-1">50+</h3>
            <p className="text-[#8892A4] text-sm">Components</p>
          </div>
          <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 text-center hover:border-[#6E00FF] transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-white mb-1">15+</h3>
            <p className="text-[#8892A4] text-sm">Active Tools</p>
          </div>
          <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 text-center hover:border-[#6E00FF] transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-white mb-1">200k</h3>
            <p className="text-[#8892A4] text-sm">Downloads</p>
          </div>
          <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 text-center hover:border-[#6E00FF] transition-all duration-300">
            <h3 className="text-4xl font-extrabold text-white mb-1">99%</h3>
            <p className="text-[#8892A4] text-sm">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
