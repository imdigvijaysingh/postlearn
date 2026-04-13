import React from "react";
import "./Footer.css";
import footerLogoImg from "../../assets/logo-nav.png";
import marqueeLogo from "../../assets/logo-nav.png";

const Footer = () => {
  // We create an array of 10 items to ensure the marquee is wide enough to loop seamlessly
  const marqueeItems = [...Array(10)].map((_, i) => (
    <div key={i} className="marquee-item">
      <img src={marqueeLogo} alt="PostLearn Logo" className="marquee-img" />
    </div>
  ));

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* TOP ROW: Logo, Links, Newsletter, Socials */}
        <div className="footer-top">
          {/* Left Side: Logo & Links */}
          <div className="footer-left">
            <div className="footer-logo">
              <img
                src={footerLogoImg}
                alt="Company Logo"
                className="footer-logo-img"
              />
            </div>
            <nav className="footer-nav">
              <a href="/">Home</a>
              <a href="#features">Features</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#faqs">FAQs</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>

          {/* Right Side: Newsletter & Socials */}
          <div className="footer-right">
            <h3>Sign up for updates!</h3>
            <div className="newsletter-social-wrapper">
              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" placeholder="example@gmail.com" required />
                <button type="submit">Submit</button>
              </form>
              <div className="social-links">
                <a href="#linkedin" aria-label="LinkedIn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#email" aria-label="Email">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.833l5.567-6.812zm9.201-1.259l4.623-3.747v9.463l-4.623-5.716z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: The Infinite Scrolling Marquee */}
        {/* The wrapper applies the gradient mask to fade the edges to black */}
        <div className="footer-marquee-wrapper">
          {/* Two identical tracks animate together to create the infinite loop */}
          <div className="marquee-track">{marqueeItems}</div>
          <div className="marquee-track">{marqueeItems}</div>
        </div>

        {/* BOTTOM ROW: Copyright & Legal */}
        <div className="footer-bottom">
          <div className="footer-legal-links">
            <a href="#license">License</a>
            <a href="#howitworks">How it works</a>
          </div>
          <div className="footer-copyright">
            © Copyright -{" "}
            <a href="#genienova" className="underline">
              PostLearn
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
