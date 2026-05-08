import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaArrowRight } from "react-icons/fa";

const jobs = [
  {
    title: "Senior Fullstack Engineer",
    location: "Remote / Bangalore",
    type: "Full-time",
    tags: ["React", "Node.js", "Next.js"],
  },
  {
    title: "UI/UX Laboratory Lead",
    location: "Remote / Bangalore",
    type: "Full-time",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    title: "AI Research Scientist",
    location: "Remote / Bangalore",
    type: "Full-time",
    tags: ["LLMs", "Python", "ML"],
  },
  {
    title: "Technical Product Manager",
    location: "Remote / Bangalore",
    type: "Full-time",
    tags: ["Agile", "Roadmapping", "Strategy"],
  },
];

const Careers = () => {
  return (
    <div className="text-white px-6 md:px-10 py-10">
      {/* Header */}
      <p className="text-[#6E00FF] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
        Join Our Lab
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Careers
        </h1>
        <p className="text-[#8892A4] text-base md:text-lg leading-relaxed max-w-lg mt-2">
          We are always looking for visionary engineers, designers, and thinkers
          to join our lab. Build the future with us.
        </p>
      </div>

      {/* Job Listings */}
      <div className="flex flex-col gap-4 mb-16 md:mb-20">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl px-5 md:px-8 py-5 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#6E00FF] transition-all duration-300 group"
          >
            {/* Left */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">
                {job.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 md:gap-6 text-[#8892A4] text-xs md:text-sm mb-3">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt size={12} />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <FaBriefcase size={12} />
                  {job.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-[#2A2A3E] text-[#8892A4] group-hover:border-[#6E00FF]/40 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#6E00FF] rounded-3xl text-sm font-semibold hover:bg-[#5A1F8F] transition-all duration-300 whitespace-nowrap">
              Apply Now
              <FaArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h4 className="text-xl md:text-2xl font-extrabold mb-2">
            Don't see your role?
          </h4>
          <p className="text-[#8892A4] text-sm">
            Send us your portfolio and we'll reach out when the right
            opportunity opens up.
          </p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 border border-[#6E00FF] rounded-3xl font-semibold hover:bg-[#6E00FF] transition-all duration-300 whitespace-nowrap">
          Send Portfolio
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default Careers;
