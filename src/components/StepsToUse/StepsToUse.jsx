import React, { useRef, useEffect, useState } from "react";
import "./StepsToUse.css";

// IMPORT YOUR 4 MOCKUP IMAGES HERE
import mockup1 from "../../assets/step-1.png";
import mockup2 from "../../assets/step-2.png";
import mockup3 from "../../assets/step-3.png";
import mockup4 from "../../assets/step-4.png";
import mockup5 from "../../assets/step-5.png";
import mockup6 from "../../assets/step-6.png";
import mockup7 from "../../assets/step-7.png";

const images = [mockup1, mockup2, mockup3, mockup4, mockup5, mockup6, mockup7];

const stepsData = [
  {
    title: (
      <>
        Select Your <span className="steps-gradient">Class</span>
      </>
    ),
    desc: "Select your current class to unlock personalized subjects, study materials, and learning resources tailored to your academic journey.",
    icon: (
      // Graduation Cap / Layers
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
  },
  {
    title: (
      <>
        Choose Your <span className="steps-gradient">Subject</span>
      </>
    ),
    desc: "Choose a subject to explore chapters, access study materials, and begin learning with content tailored to your curriculum.",
    icon: (
      // Open Book
      <svg
        width="28"
        height="28"
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
  {
    title: (
      <>
        Track Your <span className="steps-gradient">Progress</span>
      </>
    ),
    desc: "Track your learning progress through detailed statistics, performance insights, and growth metrics to stay motivated throughout your journey.",
    icon: (
      // Trending Up Line Chart
      <svg
        width="28"
        height="28"
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
    ),
  },
  {
    title: (
      <>
        Build Consistency with <span className="steps-gradient">Streaks</span>
      </>
    ),
    desc: "Stay disciplined and motivated by maintaining daily streaks, tracking your growth, and building consistent learning habits over time.",
    icon: (
      // Flame / Fire for Streaks
      <svg
        width="28"
        height="28"
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
    title: (
      <>
        Refer Friends & Earn <span className="steps-gradient">Rewards</span>
      </>
    ),
    desc: "Invite friends to join Postlearn and earn reward coins that can be used to unlock premium features, special perks, and exclusive content.",
    icon: (
      // Gift Box
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="8" width="18" height="4" rx="1"></rect>
        <path d="M12 8v13"></path>
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
      </svg>
    ),
  },
  {
    title: (
      <>
        Unlock Achievements &{" "}
        <span className="steps-gradient">Celebrate Progress</span>
      </>
    ),
    desc: "Unlock achievements as you complete milestones, celebrate your progress, and stay motivated throughout your learning journey.",
    icon: (
      // Trophy
      <svg
        width="28"
        height="28"
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
  {
    title: (
      <>
        Practice with Custom <span className="steps-gradient">Quizzes</span>
      </>
    ),
    desc: "Create personalized practice sessions by selecting your level, subject, and question count to strengthen your knowledge through focused quizzes.",
    icon: (
      // Clipboard with Checklist
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <polyline points="9 14 11 16 15 11"></polyline>
      </svg>
    ),
  },
];

const StepsToUse = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const triggerOffset = windowHeight * 0.3;

      // Tracking scroll relative to section size
      const maxScroll = rect.height - windowHeight;
      const currentScroll = triggerOffset - rect.top;

      let scrollFraction = 0;
      if (maxScroll > 0) {
        scrollFraction = Math.max(0, Math.min(1, currentScroll / maxScroll));
      }

      setProgress(scrollFraction);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.min(
    stepsData.length - 1,
    Math.floor(progress * stepsData.length),
  );

  // Map progress (0 to 1) to rotation (Starts 15deg tilted, ends 0deg straight)
  const currentRotation = 15 - progress * 15;

  return (
    <section className="steps-scroller-section" ref={sectionRef}>
      <div className="steps-scroller-container">
        {/* LEFT COLUMN: Sticky Phone */}
        <div className="sticky-phone-col">
          <div className="steps-phone-glow"></div>

          <div
            className="phone-image-wrapper"
            style={{ transform: `rotate(${currentRotation}deg)` }}
          >
            {/* OVERLAP LOGIC: 
                We use index as zIndex so Image 1 is lowest, Image 4 is highest.
                Conditional class applies the 'rise-in' transition. */}
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Step ${idx + 1} Interface`}
                /* NEW CONDITIONAL CLASS: It stays active if activeIndex is >= index. 
                   This keeps older mockups underneath the newer ones. */
                className={`steps-phone-mockup ${activeIndex >= idx ? "image-visible" : ""}`}
                style={{
                  zIndex: idx, // Forces the stacking order based on index (0, 1, 2, 3)
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Text Steps */}
        <div className="scrolling-steps-col">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className={`step-scroll-block ${activeIndex === index ? "step-active" : ""}`}
            >
              <div className="steps-icon-wrapper">{step.icon}</div>
              <div className="steps-content">
                <h2>{step.title}</h2>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsToUse;
