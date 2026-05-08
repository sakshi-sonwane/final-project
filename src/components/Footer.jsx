import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-16 md:mt-20 px-6 md:px-10 py-12 md:py-16 text-white">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
        {/* Brand — col span 2 */}
        <div className="col-span-2">
          <h2 className="text-base md:text-xl font-bold mb-3">
            NovaEdge Digital Labs
          </h2>
          <p className="text-[#8892A4] text-sm leading-relaxed mb-5 md:mb-6 max-w-xs">
            Pushing the boundaries of digital engineering through innovative
            design, advanced AI, and world-class software development.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[FaTwitter, FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#6E00FF] transition-all duration-300 text-[#8892A4] hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Laboratory */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs md:text-sm mb-3 md:mb-4 text-white">
            Laboratory
          </h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#8892A4]">
            {["Services", "Tools", "Academy", "Marketplace", "Blog"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Company */}
        <div className="col-span-1">
          <h4 className="font-semibold text-xs md:text-sm mb-3 md:mb-4 text-white">
            Company
          </h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#8892A4]">
            {["About Us", "Careers", "Store", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — full width on mobile */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-semibold text-xs md:text-sm mb-3 md:mb-4 text-white">
            Contact
          </h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-[#8892A4]">
            <li>575, Jain Temple, Kalani Nagar, Indore, MP 452005, IN</li>
            <li>
              <a
                href="mailto:contact@novaedgedigitallabs.in"
                className="hover:text-white transition-colors duration-200 break-all"
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
      <div className="border-t border-white/10 pt-5 md:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[#8892A4] text-xs md:text-sm text-center sm:text-left">
          © 2026 NovaEdge Digital Labs. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[#8892A4] text-xs md:text-sm">
            Systems Operational
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
