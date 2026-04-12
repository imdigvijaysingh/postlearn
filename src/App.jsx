import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroText from "./components/HeroSection/HeroSection";
import PhoneMockup from "./components/PhoneMockup/PhoneMockup";
import "./App.css";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import ToolsSection2 from "./components/ToolsSection2/ToolsSection2";
import ToolsSection3 from "./components/ToolsSection3/ToolSection3";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import StepsToUse from "./components/StepsToUse/StepsToUse";
import WhoIsItFor from "./components/WhoIsItFor/WhoIsItFor";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import FAQ from "./components/FAQ/FAQ";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [mouseX, setMouseX] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsInteractive(true), 2500);

    const handleScroll = () => {
      const maxScroll = window.innerHeight * 2;
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isInteractive) return;
    const windowWidth = window.innerWidth;
    const position = (e.clientX / windowWidth) * 2 - 1;
    setMouseX(position);
  };

  const textParallaxStyle = {
    transform: `translateX(${isInteractive ? mouseX * 30 : 0}px)`,
    transition: "transform 0.1s ease-out",
  };

  const phoneParallaxStyle = isInteractive
    ? {
        transform: `translateX(${-mouseX * 40}px) translateY(${-scrollProgress * 1200}px)`,
        opacity: 1 - scrollProgress * 2.5,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      }
    : {};

  return (
    <div className="app-container">
      <div className="scroll-wrapper">
        <div className="sticky-hero-container" onMouseMove={handleMouseMove}>
          <Navbar />
          <div
            className="glow-scroll-controller"
            style={{ opacity: 1 - scrollProgress * 1.5 }}
          >
            <div className="background-glow-animated"></div>
          </div>

          <main className="main-content">
            <HeroText
              parallaxStyle={textParallaxStyle}
              scrollProgress={scrollProgress}
              isInteractive={isInteractive}
            />
          </main>

          <PhoneMockup parallaxStyle={phoneParallaxStyle} />
        </div>
      </div>

      <HowItWorks />

      <StepsToUse />

      {/* <div className="tools-stack-wrapper">
        <ToolsSection />
        <ToolsSection2 />
        <ToolsSection3 />
      </div> */}

      {/* <WhoIsItFor /> */}
      {/* <TestimonialsSection /> */}
      <FAQ />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;
