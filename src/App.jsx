import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Section from "./components/Section";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import { FaCode, FaBrain, FaGraduationCap, FaStore } from "react-icons/fa";

const data = [
  {
    icon: <FaCode size={24} color="#6E00FF" />,
    title: "Software Engineering",
    desc: "Bespoke digital solutions built with precision and scale in mind.",
  },
  {
    icon: <FaBrain size={24} color="#6E00FF" />,
    title: "Startup Solutions",
    desc: "Launch your ideas with cutting-edge tech and strategy.",
  },
  {
    icon: <FaGraduationCap size={24} color="#6E00FF" />,
    title: "UI/UX Design",
    desc: "Beautiful and intuitive designs for better user experience.",
  },
  {
    icon: <FaStore size={24} color="#6E00FF" />,
    title: "Marketplace",
    desc: "A curated hub for premium digital assets and software components.",
  },
];

const Home = () => (
  <>
    <Hero />
    <div className="text-center mt-20 text-white px-10">
      <h2 className="font-extrabold text-5xl">Our Ecosystem</h2>
      <p className="text-lg mt-4 text-white/70 mb-10">
        A comprehensive suite of services and platforms designed to push the
        boundaries of digital excellence.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
      {data.map((elem, index) => (
        <Card
          key={index}
          icon={elem.icon}
          title={elem.title}
          desc={elem.desc}
        />
      ))}
    </div>
    <Section />
    <Project />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="bg-[#0A0A0F] min-h-screen pt-20">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
