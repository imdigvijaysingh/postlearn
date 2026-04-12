import React from "react";
import "./HeroSection.css";

const HeroSection = ({ parallaxStyle, scrollProgress, isInteractive }) => {
  const blurOverlayStyle = isInteractive
    ? {
        transform: `translate(-50%, calc(-50% - ${scrollProgress * 1200}px))`,
        opacity: Math.max(0, 1 - scrollProgress * 2.5),
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      }
    : {};

  return (
    <div className="hero-content-wrapper">
      {/* NEW: Localized ambient lighting behind the text */}
      <div className="hero-ambient-glow"></div>

      <div className="text-container">
        <h1 className="hero-text">
          <span className="line">THE FUTURE</span>
          <span className="line">OF LEARNING</span>
        </h1>
      </div>

      <p className="hero-description">
        PostLearn transforms teaching into an interactive journey. Classroom
        concepts turn into engaging quizzes, daily practice builds mastery, and
        every student achieves deeper understanding with real results.
      </p>

      <div className="hero-buttons">
        <button className="cta-button secondary">
          <span
            className="btn-text-wrapper desktop-text"
            data-text="Learn More"
          >
            <span>Learn More</span>
          </span>
          <span className="btn-text-wrapper mobile-text" data-text="Learn More">
            <span>Learn More</span>
          </span>
        </button>

        <button className="cta-button primary">
          <span
            className="btn-text-wrapper desktop-text"
            data-text="Download the App"
          >
            <span>Download the App</span>
          </span>
          <span className="btn-text-wrapper mobile-text" data-text="Download">
            <span>Download</span>
          </span>
          <span className="arrow-icon" data-icon="↗">
            <span>↗</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
