import React, { useRef, useEffect, useState } from "react";
import "./ToolsSection3.css";
import mockupImg from "../../assets/tools-img-phone-3.webp"; // Update with your actual path

const ToolsSection3 = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.8);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    transform: `scale(${0.85 + scrollProgress * 0.15})`,
    opacity: 0.9 + scrollProgress * 0.7,
    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
    transformOrigin: "center center",
  };

  return (
    <section className="tools3-section" ref={sectionRef}>
      <div className="tools3-container" style={containerStyle}>
        {/* Header Section */}
        <div className="tools3-header">
          <h2>AI Email Assistant</h2>
          <p>
            Write Smarter, Faster, and More Effectively with AI-Powered
            <br />
            Tools Designed to Elevate Every Word You Create.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="tools3-layout">
          {/* Left Column */}
          <div className="tools3-column">
            <div className="tools3-card active-tools3-card">
              <div className="tools3-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email Writer</h3>
              <p>
                Instantly fix grammar and style issues <br />
                <span className="highlight-orange">(Most Popular)</span>
              </p>
            </div>

            <div className="tools3-card">
              <div className="tools3-icon">
                <svg
                  width="20"
                  height="20"
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
              <p>Upgrade any content for impact and engagement</p>
            </div>
          </div>

          {/* Center Column */}
          <div className="tools3-center-mockup">
            <div className="tools3-mockup-frame">
              <img
                src={mockupImg}
                alt="Email Assistant Interface"
                className="tools3-mockup-image"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="tools3-column">
            <div className="tools3-card">
              <div className="tools3-icon">
                <svg
                  width="20"
                  height="20"
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
              <h3>Cold Email Generator</h3>
              <p>Rewrite text in seconds with better clarity and tone</p>
            </div>

            <div className="tools3-card">
              <div className="tools3-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Bulk Email Generator</h3>
              <p>Rewrite text in seconds with better clarity and tone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection3;
