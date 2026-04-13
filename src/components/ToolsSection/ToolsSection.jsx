import React, { useRef, useEffect, useState } from "react";
import "./ToolsSection.css";
import mockupImg from "../../assets/tools-img-phone.png"; // Update with your actual path

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
          <h2>Learn Smarter. Grow Stronger.</h2>
          <p>
            PostLearn empowers students to practice daily, build confidence, and
            improve consistently with
            <br />
            beginner-friendly learning tools designed for everyone.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="tools-layout">
          {/* Left Column: Cards */}
          <div className="tools-column">
            {/* CARD 1: Daily Practice (Calendar Check Icon) */}
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M9 16l2 2 4-4"></path>
                </svg>
              </div>
              <h3>Daily Practice</h3>
              <p>
                Build consistency every day with free MCQs across all subjects
                designed to strengthen concepts and boost confidence.
              </p>
            </div>

            {/* CARD 2: Smart Quizzes (Checklist Icon) */}
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
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h3>Smart Quizzes</h3>
              <p>
                Practice chapter-wise and topic-focused quizzes tailored to help
                you master every concept effectively.
              </p>
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
            {/* CARD 3: Performance Analytics (Trending Up Icon) */}
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
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h3>Performance Analytics</h3>
              <p>
                Track your growth with detailed insights, progress reports, and
                performance-based recommendations.
              </p>
            </div>

            {/* CARD 4: Rewards & Badges (Award/Medal Icon) */}
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
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <h3>Rewards & Badges</h3>
              <p>
                Celebrate milestones with achievements, badges, and rewards that
                make learning motivating and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
