import React from "react";

const Card = (props) => {
  return (
    <div className="bg-[#1d1d1d] w-full max-w-xs mt-8 border border-[#2A2A3E] rounded-2xl p-5 md:p-6 hover:border-[#6E00FF] transition-all duration-300 group text-white">
      {/* Icon Box */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6E00FF]/10 group-hover:bg-[#6E00FF]/40 transition-all duration-300 mb-4">
        {props.icon}
      </div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold mb-2">{props.title}</h3>

      {/* Description */}
      <p className="text-[#8892A4] text-sm leading-relaxed">{props.desc}</p>
    </div>
  );
};

export default Card;
