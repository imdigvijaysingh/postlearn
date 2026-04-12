import React, { useRef, useEffect, useState } from "react";
import "./ToolsSection.css";
import mockupImg from "../../assets/tools-img-phone.webp"; // Update with your actual path

const ToolsSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Get the position of the section relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Math: Starts at 0 when the section enters the bottom of the screen.
      // Reaches 1 when the top of the section hits the vertical center (0.5) of the screen.
      const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.5);

      // Clamp the value strictly between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);

    // Fire once on mount to set initial state in case the user reloads halfway down the page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Dynamic Scroll Styles ---
  // Scale goes from 85% (0.85) to 100% (1)
  // Opacity goes from 30% (0.3) to 100% (1)
  const containerStyle = {
    transform: `scale(${0.85 + scrollProgress * 0.15})`,
    opacity: 0.3 + scrollProgress * 0.7,
    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
    transformOrigin: "center center", // Ensures it scales out from the middle
  };

  return (
    <section className="tools-section" ref={sectionRef}>
      {/* The dynamic scale and opacity are applied to the inner wrapper */}
      <div className="tools-container" style={containerStyle}>
        {/* Header Section */}
        <div className="tools-header">
          <h2>AI Writing Tools</h2>
          <p>
            Write Smarter, Faster, and More Effectively with AI-Powered
            <br />
            Tools Designed to Elevate Every Word You Create.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="tools-layout">
          {/* Left Column: Cards */}
          <div className="tools-column">
            <div className="tool-card tool-card-border-1 active-card">
              <div className="tool-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Grammar Checker</h3>
              <p>Instantly fix grammar and style issues (Most Popular)</p>
            </div>

            <div className="tool-card tool-card-border-1">
              <div className="tool-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Paraphraser</h3>
              <p>Rewrite text in seconds with better clarity and tone</p>
            </div>
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="tools-center-mockup">
            <div className="mockup-frame">
              <img
                src={mockupImg}
                alt="AI Writing Interface"
                className="mockup-image"
              />
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="tools-column">
            <div className="tool-card tool-card-border-2 active-card">
              <div className="tool-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3>Content Improver</h3>
              <p>Rewrite text in seconds with better clarity and tone</p>
            </div>

            <div className="tool-card tool-card-border-2">
              <div className="tool-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3>Content Improver</h3>
              <p>Rewrite text in seconds with better clarity and tone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
