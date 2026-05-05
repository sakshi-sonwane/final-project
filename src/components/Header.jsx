import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300
      ${scrolled ? "bg-[#0A0A0F]/90 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent border-b border-transparent"}`}
    >
      <header className="flex justify-between items-center px-10 py-4">
        <h2
          onClick={() => navigate("/")}
          className="px-4 py-2 font-bold rounded text-xl cursor-pointer"
        >
          NovaEdge Digital Labs
        </h2>

        <div className="flex items-center gap-8 font-medium">
          <h3
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:text-[#6E00FF] transition-colors duration-200"
          >
            About
          </h3>
          <h3
            onClick={() => navigate("/services")}
            className="cursor-pointer hover:text-[#6E00FF] transition-colors duration-200"
          >
            Services
          </h3>
          <h3
            onClick={() => navigate("/careers")}
            className="cursor-pointer hover:text-[#6E00FF] transition-colors duration-200"
          >
            Careers
          </h3>
          <h3
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-[#6E00FF] transition-colors duration-200"
          >
            Contact
          </h3>
          <button onClick={() =>navigate("/contact")} className="px-6 py-2 bg-[#6E00FF] rounded-3xl hover:bg-[#5A1F8F] transition-all duration-300">
            Start Project
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
