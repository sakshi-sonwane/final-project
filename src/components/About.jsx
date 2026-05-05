import React from "react";
import { FaCode, FaBrain, FaRocket, FaUsers } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "5+", label: "Years of Excellence" },
    { number: "200+", label: "Projects Delivered" },
    { number: "50+", label: "Expert Engineers" },
    { number: "98%", label: "Client Retention" },
  ];

  const values = [
    {
      icon: <FaCode size={20} color="#6E00FF" />,
      title: "Engineering First",
      desc: "We write clean, scalable, and maintainable code that stands the test of time.",
    },
    {
      icon: <FaBrain size={20} color="#6E00FF" />,
      title: "AI Driven",
      desc: "Leveraging cutting-edge artificial intelligence to deliver smarter solutions.",
    },
    {
      icon: <FaRocket size={20} color="#6E00FF" />,
      title: "Ship Fast",
      desc: "Agile workflows and rapid iteration ensure your product reaches market quickly.",
    },
    {
      icon: <FaUsers size={20} color="#6E00FF" />,
      title: "People First",
      desc: "Our team and clients are at the heart of every decision we make.",
    },
  ];

  return (
    <div className="text-white px-10 py-10">
      {/* Top Label */}
      <p className="text-[#6E00FF] text-sm font-semibold tracking-widest uppercase mb-4">
        Who We Are
      </p>

      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-xl">
          We Are <span className="text-[#6E00FF]">NovaEdge</span> <br />
          Digital Labs
        </h2>
        <p className="text-[#8892A4] text-lg leading-relaxed max-w-lg mt-4">
          A premier digital engineering studio based in Indore, India. We
          partner with startups and enterprises to build world-class digital
          products — from concept to deployment and beyond.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 text-center hover:border-[#6E00FF] transition-all duration-300"
          >
            <h3 className="text-4xl font-extrabold text-white mb-1">
              {stat.number}
            </h3>
            <p className="text-[#8892A4] text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mb-20" />

      {/* Values Section */}
      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Left */}
        <div className="md:w-1/2">
          <p className="text-[#6E00FF] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Values
          </p>
          <h3 className="text-4xl font-extrabold mb-6 leading-tight">
            Built on Principles <br />
            That <span className="text-[#6E00FF]">Matter</span>
          </h3>
          <p className="text-[#8892A4] text-lg leading-relaxed">
            At NovaEdge, we don't just build software — we build trust,
            partnerships, and lasting digital legacies. Our core values drive
            every line of code and every client interaction.
          </p>
        </div>

        {/* Right — Values Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((val, index) => (
            <div
              key={index}
              className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 hover:border-[#6E00FF] transition-all duration-300 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#6E00FF]/20 group-hover:bg-[#6E00FF]/40 transition-all duration-300 mb-4">
                {val.icon}
              </div>
              <h4 className="text-white font-semibold mb-2">{val.title}</h4>
              <p className="text-[#8892A4] text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="mt-20 bg-[#1A1A2E] border border-[#2A2A3E] rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-2xl font-extrabold mb-2">
            Want to work with us?
          </h4>
          <p className="text-[#8892A4] text-sm">
            We're always looking for ambitious projects and talented people.
          </p>
        </div>
        <button className="px-8 py-3 bg-[#6E00FF] rounded-3xl font-semibold hover:bg-[#5A1F8F] transition-all duration-300 whitespace-nowrap">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default About;
