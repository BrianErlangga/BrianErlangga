import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Floating Particles Background */}
      <div className="hero-particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-image-wrapper">
          <img
            src="./headshot.jpg"
            alt="Brian Erlangga"
            className="hero-image"
          />
        </div>

        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">
          <span className="gradient-text">Brian Erlangga</span>
        </h1>

        <p className="hero-title">
          Computer Engineering Student & Software Developer
        </p>

        <p className="hero-description">
          Passionate about building elegant web experiences. Currently studying
          at the University of Waterloo with hands-on experience at companies
          like Purolator, Sun Life, OANDA, and OpenText.
        </p>

        <div className="hero-buttons">
          <a href="#experience" className="btn btn-primary">
            View My Work
            <span>→</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="mailto:berlangg@uwaterloo.ca"
            className="social-link"
            aria-label="Email"
            title="Email"
          >
            ✉️
          </a>
          <a
            href="https://github.com/BrianErlangga"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
            title="GitHub"
          >
            💻
          </a>
          <a
            href="https://www.linkedin.com/in/brianerlangga/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            💼
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
