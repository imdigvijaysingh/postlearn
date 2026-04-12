import React, { useRef, useEffect, useState } from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const textRef = useRef(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when the text is 80% down the screen.
      // Finish filling when it reaches the middle (20%) of the screen.
      const startFill = windowHeight * 0.8;
      const endFill = windowHeight * 0.2;

      let progress = (startFill - rect.top) / (startFill - endFill);

      // Keep the value strictly between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      setFillProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        {/* We pass the progress as a CSS variable */}
        <h1
          className="scroll-fill-text"
          ref={textRef}
          style={{ "--fill": `${fillProgress * 100}%` }}
        >
          How it works
        </h1>

        {/* You can add your phone mockup and cards below this later */}
      </div>
    </section>
  );
};

export default HowItWorks;
