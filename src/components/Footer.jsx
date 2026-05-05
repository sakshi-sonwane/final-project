import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20 px-10 py-16 text-white">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* Brand — col span 2 */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-3">NovaEdge Digital Labs</h2>
          <p className="text-[#8892A4] text-sm leading-relaxed mb-6">
            Pushing the boundaries of digital engineering through innovative
            design, advanced AI, and world-class software development.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#6E00FF] transition-all duration-300 text-[#8892A4] hover:text-white"
            >
              <FaTwitter size={15} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#6E00FF] transition-all duration-300 text-[#8892A4] hover:text-white"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#6E00FF] transition-all duration-300 text-[#8892A4] hover:text-white"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#6E00FF] transition-all duration-300 text-[#8892A4] hover:text-white"
            >
              <FaInstagram size={15} />
            </a>
          </div>
        </div>

        {/* Laboratory */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white">Laboratory</h4>
          <ul className="space-y-3 text-sm text-[#8892A4]">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Tools
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Academy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white">Company</h4>
          <ul className="space-y-3 text-sm text-[#8892A4]">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Store
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-[#8892A4]">
            <li>
              575, Jain Temple, Kalani Nagar, Indore, Madhya Pradesh 452005, IN
            </li>
            <li>
              <a
                href="mailto:contact@novaedgedigitallabs.in"
                className="hover:text-white transition-colors duration-200"
              >
                contact@novaedgedigitallabs.in
              </a>
            </li>
            <li>
              <a
                href="tel:+916391486456"
                className="hover:text-white transition-colors duration-200"
              >
                +91 (63) 9148-6456
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#8892A4] text-sm">
          © 2026 NovaEdge Digital Labs. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[#8892A4] text-sm">Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
