import React from "react";
import "./TestimonialsSection.css";
import MovingCards from "../../elements/MovingCards/MovingCards";
import TestimonialAvatar1 from "../../assets/testi-1.webp";
import TestimonialAvatar2 from "../../assets/testi-2.webp";
import TestimonialAvatar3 from "../../assets/testi-3.webp";

const testimonials = [
  {
    id: 1,
    name: "Abhinav Mehra",
    title: "Class 10 Student",
    text: "PostLearn made it so much easier to keep up with my studies. I don’t leave everything for the last minute anymore.",
    avatar: { TestimonialAvatar1 },
  },
  {
    id: 2,
    name: "Riya Kapoor",
    title: "Class 9 Student",
    text: "I used to get bored while revising, but now it feels more like a game. I actually look forward to it!",
    avatar: { TestimonialAvatar2 },
  },
  {
    id: 3,
    name: "Karan Joshi",
    title: "Class 8 Student",
    text: "It’s helped me figure out which topics I’m weak at, so I can focus better. My test scores have improved a lot.",
    avatar: { TestimonialAvatar3 },
  },
];

// Helper to create a single scrolling row
const MarqueeRow = ({ reverse }) => {
  const rowData = reverse ? [...testimonials].reverse() : testimonials;
  const loopData = [...rowData, ...rowData];

  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track ${reverse ? "track-reverse" : ""}`}>
        {loopData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="author-avatar"
              />
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2>
            What Our Users <span className="highlight-green">Say?</span>
          </h2>
          <p>
            Real feedback from people who've used our platform to
            <br />
            learn, practice, and succeed.
          </p>
        </div>

        {/* Content Layout - Now Stacked Vertically */}
        <div className="testimonials-content">
          {/* ROW 1: Fixed Card + First Scrolling Marquee */}

          {/* Top Row Marquee */}
          <MovingCards items={testimonials} reverse={false} />
        </div>

        {/* ROW 2 & 3: Full Width Scrolling Marquees */}
        {/* <MovingCards items={testimonials} reverse={true} /> */}
        {/* <MovingCards items={testimonials} reverse={false} /> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
