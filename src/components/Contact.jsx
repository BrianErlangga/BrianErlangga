import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Contact.css";

function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Get In Touch</h2>
        </div>

        <div
          ref={ref}
          className={`contact-content fade-in ${isVisible ? "visible" : ""}`}
        >
          <p>
            I'm currently looking for new opportunities! Whether you have a
            question or just want to say hi, I'll do my best to get back to you.
          </p>

          <div className="contact-card glass-card">
            <div className="contact-links">
              <a href="mailto:berlangg@uwaterloo.ca" className="contact-link">
                <span className="contact-link-icon">✉️</span>
                berlangg@uwaterloo.ca
              </a>

              <a href="tel:+16478199989" className="contact-link">
                <span className="contact-link-icon">📱</span>
                +1 647-819-9989
              </a>

              <a
                href="https://www.linkedin.com/in/brianerlangga/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">💼</span>
                linkedin.com/in/brianerlangga
              </a>

              <a
                href="https://github.com/BrianErlangga"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">💻</span>
                github.com/BrianErlangga
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <a href="mailto:berlangg@uwaterloo.ca" className="btn btn-primary">
              Say Hello 👋
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          Built with <span className="footer-heart">♥</span> by Brian Erlangga
        </p>
        <p style={{ marginTop: "0.5rem" }}>© 2025 All Rights Reserved</p>
      </footer>
    </section>
  );
}

export default Contact;
