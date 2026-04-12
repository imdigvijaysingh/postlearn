import React, { useEffect, useRef, useState } from "react";
import "./WhoIsItFor.css";

// Data for the top 4 cards
const standardCards = [
  {
    title: "Creators",
    desc: "Whether you're a YouTuber, blogger, or influencer, generate scripts, captions, descriptions, and more—faster than ever.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
      </svg>
    ),
  },
  {
    title: "Marketers",
    desc: "Craft compelling ad copy, email campaigns, and landing page content that converts visitors into loyal customers instantly.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    title: "Entrepreneurs",
    desc: "Draft business plans, pitch decks, and executive summaries with AI assistance to secure funding and scale rapidly.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    title: "Agencies",
    desc: "Scale your content production to handle more clients without compromising on the quality and tone of your deliverables.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
];

// Data for the bottom 2 wide cards
const wideCards = [
  {
    title: "Enterprise Teams",
    desc: "Align your entire organization with unified brand voice settings, collaborative workspaces, and enterprise-grade security protocols.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Educational Institutions",
    desc: "Empower students and educators with research assistants, essay structuring tools, and automated grading rubrics.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
];

// Specific scroll percentage thresholds for when each card should appear
const thresholds = {
  card1: 0.1, // 10% scrolled
  card2: 0.25, // 25% scrolled
  card3: 0.4, // 40% scrolled
  card4: 0.55, // 55% scrolled
  wideCards: 0.75, // 75% scrolled (Both wide cards appear together)
};

const WhoIsItFor = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the tall wrapper has been scrolled
      const maxScroll = rect.height - windowHeight;
      const currentScroll = -rect.top;

      let scrollFraction = 0;
      if (maxScroll > 0) {
        scrollFraction = Math.max(0, Math.min(1, currentScroll / maxScroll));
      }

      setProgress(scrollFraction);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="who-scroll-wrapper" ref={sectionRef}>
      <div className="who-sticky-container">
        <div className="who-inner-content">
          {/* Header Section */}
          <div className="who-header">
            <h2>
              Who Is It <span className="highlight-orange">For?</span>
            </h2>
            <p>
              Designed to empower individuals, professionals, and
              <br />
              teams across all industries
            </p>
          </div>

          {/* ROW 1: 4 Standard Cards */}
          <div className="who-grid-4">
            <div
              className={`target-card ${progress > thresholds.card1 ? "card-visible" : ""}`}
            >
              <div className="target-icon">{standardCards[0].icon}</div>
              <h3>{standardCards[0].title}</h3>
              <p>{standardCards[0].desc}</p>
            </div>

            <div
              className={`target-card ${progress > thresholds.card2 ? "card-visible" : ""}`}
            >
              <div className="target-icon">{standardCards[1].icon}</div>
              <h3>{standardCards[1].title}</h3>
              <p>{standardCards[1].desc}</p>
            </div>

            <div
              className={`target-card ${progress > thresholds.card3 ? "card-visible" : ""}`}
            >
              <div className="target-icon">{standardCards[2].icon}</div>
              <h3>{standardCards[2].title}</h3>
              <p>{standardCards[2].desc}</p>
            </div>

            <div
              className={`target-card ${progress > thresholds.card4 ? "card-visible" : ""}`}
            >
              <div className="target-icon">{standardCards[3].icon}</div>
              <h3>{standardCards[3].title}</h3>
              <p>{standardCards[3].desc}</p>
            </div>
          </div>

          {/* ROW 2: 2 Wide Cards (Appear at exactly the same time) */}
          <div className="who-grid-2">
            <div
              className={`target-card wide-card ${progress > thresholds.wideCards ? "card-visible" : ""}`}
            >
              <div className="target-icon">{wideCards[0].icon}</div>
              <h3>{wideCards[0].title}</h3>
              <p>{wideCards[0].desc}</p>
            </div>

            <div
              className={`target-card wide-card ${progress > thresholds.wideCards ? "card-visible" : ""}`}
            >
              <div className="target-icon">{wideCards[1].icon}</div>
              <h3>{wideCards[1].title}</h3>
              <p>{wideCards[1].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
