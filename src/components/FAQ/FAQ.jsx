import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is PostLearn?",
    answer:
      "PostLearn is a learning app that helps students practice what’s taught in school through daily MCQs, progress tracking, and rewards.",
  },
  {
    question: "Is PostLearn free to use?",
    answer:
      "Yes! You can start with our free tier that includes daily practice quizzes across all major subjects",
  },
  {
    question: "What's included in the subscription pack?",
    answer:
      "Subscriptions unlock the full experience — advanced quizzes, chapter-wise practice, detailed analytics, and smart progress tracking.",
  },
  {
    question: "How does the coin system work?",
    answer:
      "Coins can only be earned through referrals — invite friends and get rewarded!",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes. You’ll see detailed reports, unlock badges, and earn rewards as you improve over time.",
  },
  {
    question: "What if I only want one subject?",
    answer:
      "You can unlock individual subject packs without needing a full subscription.",
  },
];

// Reusable Chat/Question Icon
const QuestionIcon = () => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="10" r="1"></circle>
    <path d="M12 14v-1a2 2 0 0 0-2-2"></path>
  </svg>
);

const FAQ = () => {
  // State to track which accordion item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // If clicking the already open item, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Column: Header */}
        <div className="faq-left">
          <h2>
            Your Ques<span className="text-gradient">tions,</span>
            <br />
            Answered
          </h2>
          <p>
            Real feedback from people who've used our platform to create, grow,
            and succeed.
          </p>
        </div>

        {/* Right Column: Accordion List */}
        <div className="faq-right">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question Row */}
                <div className="faq-question-row">
                  <div className="faq-question-content">
                    <div className="faq-icon-wrapper">
                      <QuestionIcon />
                    </div>
                    <h3 className="faq-question-text">{item.question}</h3>
                  </div>

                  {/* Plus/Minus Toggle Icon */}
                  <div className={`faq-toggle-icon ${isOpen ? "rotated" : ""}`}>
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
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>

                {/* Expandable Answer Row */}
                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
