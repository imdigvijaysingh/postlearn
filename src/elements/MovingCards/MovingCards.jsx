import React from "react";
import "../../components/TestimonialsSection/TestimonialsSection.css"; 

const MovingCards = ({ items, reverse = false }) => {
  // If reverse is true, reverse the original array, otherwise keep it as is.
  const rowData = reverse ? [...items].reverse() : items;
  
  // Double the array to create the infinite scrolling loop illusion
  const loopData = [...rowData, ...rowData];

  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track ${reverse ? "track-reverse" : ""}`}>
        {loopData.map((item, index) => (
          <div key={`${item.id}-${index}`} className="testimonial-card">
            <div className="quote-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-author">
              {item.avatar && (
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                />
              )}
              <div className="author-info">
                <h4>{item.name}</h4>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingCards;