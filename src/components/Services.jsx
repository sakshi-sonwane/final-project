import React from "react";
import {
  FaCode,
  FaCloud,
  FaBrain,
  FaPaintBrush,
  FaShieldAlt,
  FaBolt,
  FaDatabase,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={20} color="#6E00FF" />,
    title: "Custom Software Engineering",
    desc: "We build robust, scalable, and high-performance software solutions tailored to your unique business needs.",
    tags: ["Next.js", "Go", "Rust", "Cloud Native"],
  },
  {
    icon: <FaCloud size={20} color="#6E00FF" />,
    title: "Cloud Transformation",
    desc: "Scale your infrastructure with confidence using our expert cloud architecture and migration services.",
    tags: ["AWS", "GCP", "Azure", "Kubernetes"],
  },
  {
    icon: <FaBrain size={20} color="#6E00FF" />,
    title: "AI & Machine Learning",
    desc: "Integrate cutting-edge AI models and data intelligence into your workflows for a competitive edge.",
    tags: ["LLMs", "Computer Vision", "Predictive Analytics"],
  },
  {
    icon: <FaPaintBrush size={20} color="#6E00FF" />,
    title: "UI/UX Design Systems",
    desc: "Design and implement premium user experiences and maintainable design systems for your products.",
    tags: ["Figma", "Prototyping", "Design-to-Code"],
  },
  {
    icon: <FaShieldAlt size={20} color="#6E00FF" />,
    title: "Cybersecurity & Audits",
    desc: "Protect your digital assets with our comprehensive security audits and hardened infrastructure setups.",
    tags: ["Pen-Testing", "Compliance", "Security Arch"],
  },
  {
    icon: <FaBolt size={20} color="#6E00FF" />,
    title: "Performance Optimization",
    desc: "Maximize your application speed and efficiency with deep-level performance tuning and optimization.",
    tags: ["Core Web Vitals", "WASM", "DB Tuning"],
  },
  {
    icon: <FaDatabase size={20} color="#6E00FF" />,
    title: "Data Engineering",
    desc: "Build robust data pipelines and storage solutions to turn raw data into actionable insights.",
    tags: ["Big Data", "ETL", "Real-time Streaming"],
  },
  {
    icon: <FaMobileAlt size={20} color="#6E00FF" />,
    title: "Mobile Development",
    desc: "Native-feel mobile experiences for iOS and Android using the latest cross-platform technologies.",
    tags: ["React Native", "Flutter", "Swift"],
  },
];

const Services = () => {
  return (
    <div className="text-white px-10 py-10">
      {/* Header */}
      <p className="text-[#6E00FF] text-sm font-semibold tracking-widest uppercase mb-4">
        Our Expertise
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Services
        </h1>
        <p className="text-[#8892A4] text-lg leading-relaxed max-w-lg mt-2">
          We provide a full spectrum of digital services, from initial
          conceptualization to high-performance engineering and global scaling.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 hover:border-[#6E00FF] transition-all duration-300 group flex flex-col justify-between"
          >
            {/* Icon + Title */}
            <div>
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#6E00FF]/20 group-hover:bg-[#6E00FF]/40 transition-all duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-[#8892A4] text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border border-[#2A2A3E] text-[#8892A4] group-hover:border-[#6E00FF]/40 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-2xl font-extrabold mb-2">
            Ready to start your journey?
          </h4>
          <p className="text-[#8892A4] text-sm leading-relaxed max-w-lg">
            Whether you have a specific project in mind or just want to explore
            the possibilities, our team is ready to help you navigate the
            digital edge.
          </p>
        </div>
        <button className="flex items-center gap-2 px-8 py-3 bg-[#6E00FF] rounded-3xl font-semibold hover:bg-[#5A1F8F] transition-all duration-300 whitespace-nowrap">
          Consult with our Engineers
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Services;
