import React, { useRef, useEffect, useState } from "react";
import "./ToolsSection2.css";
import mockupImg from "../../assets/tools-img-phone-2.png"; // Update with your actual path

// Extracting data outside the component keeps the file clean
// and prevents the array from being recreated on every single render.
const toolsData = [
  {
    id: 1,
    title: "Performance Reports",
    description: "Monitor quiz scores and academic progress.",
    icon: (
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
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Smart Insights",
    description:
      "Identify strengths and weak areas instantly through learning analytics.",
    icon: (
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
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Streak Tracking",
    description:
      "Build discipline by maintaining daily learning streaks and consistency goals.",
    icon: (
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
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Goal Achievement",
    description:
      "Set milestones, track achievements, and stay motivated toward success.",
    icon: (
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
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
];

const ToolsSection2 = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how far the element has scrolled into view
      const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.8);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Netflix-style rise animation
  const containerStyle = {
    transform: `scale(${0.85 + scrollProgress * 0.15})`,
    opacity: 0.9 + scrollProgress * 0.7,
    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
    transformOrigin: "center center",
  };

  // Helper component to render a card
  const renderCard = (card) => (
    <div className="tools2-card" key={card.id}>
      <div className="tools2-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );

  return (
    <section className="tools2-section" ref={sectionRef}>
      <div className="tools2-container" style={containerStyle}>
        {/* Header Section */}
        <div className="tools2-header">
          <h2>Track Progress. Unlock Potential.</h2>
          <p>
            Monitor your learning journey with detailed analytics, identify
            strengths, and unlock your full academic potential.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="tools2-layout">
          {/* Left Column: Cards (Indexes 0 and 1) */}
          <div className="tools2-column">
            {toolsData.slice(0, 2).map(renderCard)}
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="tools2-center-mockup">
            <div className="tools2-mockup-frame">
              <img
                src={mockupImg}
                alt="Social Media Interface"
                className="tools2-mockup-image"
              />
            </div>
          </div>

          {/* Right Column: Cards (Indexes 2 and 3) */}
          <div className="tools2-column">
            {toolsData.slice(2, 4).map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection2;
