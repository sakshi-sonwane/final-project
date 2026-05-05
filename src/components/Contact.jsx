import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Project Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="text-white px-10 py-10">
      {/* Header */}
      <p className="text-[#6E00FF] text-sm font-semibold tracking-widest uppercase mb-4">
        Get in Touch
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Contact
        </h1>
        <p className="text-[#8892A4] text-lg leading-relaxed max-w-lg mt-2">
          Have a visionary project in mind? Reach out to our experts and let's
          build something extraordinary together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left — Info Cards */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 hover:border-[#6E00FF] transition-all duration-300 group">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#6E00FF]/20 group-hover:bg-[#6E00FF]/40 transition-all duration-300 mb-4">
              <FaEnvelope size={16} color="#6E00FF" />
            </div>
            <h4 className="font-semibold mb-1">Email Us</h4>
            <p className="text-[#8892A4] text-sm">
              hello@novaedgedigitallabs.in
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 hover:border-[#6E00FF] transition-all duration-300 group">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#6E00FF]/20 group-hover:bg-[#6E00FF]/40 transition-all duration-300 mb-4">
              <FaMapMarkerAlt size={16} color="#6E00FF" />
            </div>
            <h4 className="font-semibold mb-1">Visit Our Lab</h4>
            <p className="text-[#8892A4] text-sm">
              Bangalore, India | Global Remote
            </p>
          </div>

          <div className="bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-6 hover:border-[#6E00FF] transition-all duration-300 group">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#6E00FF]/20 group-hover:bg-[#6E00FF]/40 transition-all duration-300 mb-4">
              <FaPhone size={16} color="#6E00FF" />
            </div>
            <h4 className="font-semibold mb-1">Call Support</h4>
            <p className="text-[#8892A4] text-sm">+91 (800) NOVA-LAB</p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="md:w-2/3 bg-[#1A1A2E] border border-[#2A2A3E] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-[#8892A4] mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#6E00FF] transition-all duration-300 placeholder:text-[#8892A4]/50"
              />
            </div>
            <div>
              <label className="text-sm text-[#8892A4] mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#6E00FF] transition-all duration-300 placeholder:text-[#8892A4]/50"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm text-[#8892A4] mb-2 block">Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#6E00FF] transition-all duration-300"
            >
              <option>New Project Inquiry</option>
              <option>Tech Academy Question</option>
              <option>Career Opportunities</option>
              <option>Other Inquiry</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-sm text-[#8892A4] mb-2 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full bg-[#0A0A0F] border border-[#2A2A3E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#6E00FF] transition-all duration-300 placeholder:text-[#8892A4]/50 resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-[#6E00FF] rounded-xl font-semibold hover:bg-[#5A1F8F] transition-all duration-300"
          >
            Initiate Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
