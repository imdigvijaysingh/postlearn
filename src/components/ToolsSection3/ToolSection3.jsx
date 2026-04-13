import React, { useRef, useEffect, useState } from "react";
import "./ToolsSection3.css";
import mockupImg from "../../assets/tools-img-phone-3.png"; // Update with your actual path

const toolsData = [
  {
    id: 1,
    title: "Earn Badges",
    description:
      "Unlock achievement badges as you complete milestones and learning goals.",
    icon: (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Daily Challenges",
    description:
      "Take on exciting daily tasks to maintain consistency and sharpen skills.",
    icon: (
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
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Reward Points",
    description:
      "Collect points for every activity and redeem exciting learning benefits.",
    icon: (
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
        <circle cx="12" cy="12" r="8"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Celebrate Wins",
    description:
      "Track milestones and celebrate every success throughout your journey.",
    icon: (
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
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ),
  },
];

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

  const renderCard = (card, index) => (
    <div
      className={`tools3-card ${index === 0 ? "active-tools3-card" : ""}`}
      key={card.id}
    >
      <div className="tools3-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );

  return (
    <section className="tools3-section" ref={sectionRef}>
      <div className="tools3-container" style={containerStyle}>
        <div className="tools3-header">
          <h2>Stay Motivated. Get Rewarded.</h2>
          <p>
            Turn learning into an exciting journey with achievements, rewards,
            and fun challenges that keep you inspired every day.
          </p>
        </div>

        <div className="tools3-layout">
          <div className="tools3-column">
            {toolsData.slice(0, 2).map((card, i) => renderCard(card, i))}
          </div>

          <div className="tools3-center-mockup">
            <div className="tools3-mockup-frame">
              <img
                src={mockupImg}
                alt="Rewards Interface"
                className="tools3-mockup-image"
              />
            </div>
          </div>

          <div className="tools3-column">
            {toolsData.slice(2, 4).map((card, i) => renderCard(card, i + 2))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection3;
