import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300
      ${scrolled ? "bg-[#0A0A0F]/90 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent border-b border-transparent"}`}
    >
      <header className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <h2
          onClick={() => handleNav("/")}
          className="font-bold rounded text-base md:text-xl cursor-pointer"
        >
          NovaEdge Digital Labs
        </h2>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <h3
              key={link.label}
              onClick={() => handleNav(link.path)}
              className="cursor-pointer hover:text-[#6E00FF] transition-colors duration-200"
            >
              {link.label}
            </h3>
          ))}
          <button
            onClick={() => handleNav("/contact")}
            className="px-6 py-2 bg-[#6E00FF] rounded-3xl hover:bg-[#5A1F8F] transition-all duration-300"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <h3
              key={link.label}
              onClick={() => handleNav(link.path)}
              className="cursor-pointer text-lg font-medium hover:text-[#6E00FF] transition-colors duration-200"
            >
              {link.label}
            </h3>
          ))}
          <button
            onClick={() => handleNav("/contact")}
            className="w-full py-3 bg-[#6E00FF] rounded-3xl font-semibold hover:bg-[#5A1F8F] transition-all duration-300"
          >
            Start Project
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
