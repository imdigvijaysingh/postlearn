import React, { useRef, useEffect, useState } from "react";
import "./CtaSection.css";

// Import your actual phone mockup images here
import mockupLeft from "../../assets/phone-img.png";
import mockupRight from "../../assets/phone-img2.png";

const CtaSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress:
      // 0 = top of section enters bottom of screen
      // 1 = center of section reaches center of screen
      const rawProgress = (windowHeight - rect.top) / (windowHeight * 0.7);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pushInward = (1 - scrollProgress) * 350;

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="cta-container">
        {/* Dynamic Left Phone */}
        <div
          className="cta-phone-left-wrapper"
          style={{
            transform: `translate(${pushInward}px, ${pushInward}px) rotate(50deg)`,
          }}
        >
          <div className="cta-cards-left-glow"></div>
          <img
            src={mockupLeft}
            alt="App Interface Left"
            className="cta-phone-img"
          />
        </div>

        {/* Dynamic Right Phone */}
        <div
          className="cta-phone-right-wrapper"
          style={{
            transform: `translate(-${pushInward}px, -${pushInward}px) rotate(-50deg)`,
          }}
        >
          <div className="cta-cards-right-glow"></div>
          <img
            src={mockupRight}
            alt="App Interface Right"
            className="cta-phone-img"
          />
        </div>

        {/* Center Content */}
        <div className="cta-content">
          <h2>
            Unlock Your Learning{" "}
            <span className="highlight-green">Potential</span>
          </h2>
          <h3>Start Learning Smarter Today!</h3>
          <p>
            The all-in-one education platform designed to help students practice
            smarter, track progress, and achieve academic success anytime,
            anywhere.
          </p>

          <div className="cta-buttons">
            <button className="download-btn btn-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 19.12H7V4.88h10M16.5 2H7.5A1.5 1.5 0 0 0 6 3.5v17A1.5 1.5 0 0 0 7.5 22h9a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 16.5 2z" />
              </svg>
              Download For IOS
            </button>
            <button className="download-btn btn-outlined">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 19.12H7V4.88h10M16.5 2H7.5A1.5 1.5 0 0 0 6 3.5v17A1.5 1.5 0 0 0 7.5 22h9a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 16.5 2z" />
              </svg>
              Download For Android
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
