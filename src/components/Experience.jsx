import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Experience.css";

const experiences = [
  {
    title: "Front End Developer Co-op",
    company: "Purolator",
    location: "Waterloo, ON",
    date: "Sep 2025 – Dec 2025",
    bullets: [
      "Reduced bot activity and stabilized API call thresholds by integrating the AWS reCAPTCHA SDK and collaborating with DevOps to resolve domain-specific 403 error conflicts",
      "Delivered the first end-to-end site revamps in over two years for the Marketing Communications team by implementing comprehensive UI designs and engineering a dynamic FAQ component with JavaScript",
    ],
    tech: ["JavaScript", "AWS", "reCAPTCHA", "UI/UX"],
  },
  {
    title: "Associate Front-End Developer",
    company: "Sun Life",
    location: "Toronto, ON",
    date: "Jan 2025 – Apr 2025",
    bullets: [
      "Evaluated the viability of Google Lit Web Components within a React codebase by conducting a technical Proof of Concept using lit-labs/react",
      "Increased performance awareness for 100+ developers by delivering a technical presentation on Google Lighthouse and building an Excel dashboard to monitor performance regressions",
    ],
    tech: ["React", "Google Lit", "Lighthouse", "Excel"],
  },
  {
    title: "Software Developer",
    company: "Viral Nation",
    location: "Toronto, ON",
    date: "Jan 2023 – Apr 2023",
    bullets: [
      "Integrated over 50 AI content creation tools via REST APIs for a responsive TechLabs platform and maintained stability across three web projects during fast-paced sprints",
    ],
    tech: ["React", "TypeScript", "MaterialUI", "REST APIs"],
  },
  {
    title: "React Native Software Developer",
    company: "OANDA",
    location: "Toronto, ON",
    date: "Sep 2021 – Aug 2022",
    bullets: [
      "Developed an assets holding list for forex and crypto services using React Native, TypeScript, and Apollo GraphQL currently used by global customers",
      "Optimized front-end data propagation by building custom Apollo GraphQL queries and ensured high reliability through JEST test coverage across three trading platforms",
    ],
    tech: ["React Native", "TypeScript", "Apollo GraphQL", "Jest"],
  },
  {
    title: "Software Developer",
    company: "OpenText",
    location: "Waterloo, ON",
    date: "Jan 2021 – Apr 2021",
    bullets: [
      "Engineered a search query for the OpenText CSS library and implemented a dynamic folder widget using Angular and Sass, both adopted for internal use",
    ],
    tech: ["React", "Angular", "Sass", "JavaScript"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Work Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index }) {
  const [ref, isVisible] = useScrollAnimation();
  const animationClass = index % 2 === 0 ? "fade-in-right" : "fade-in-left";

  return (
    <div
      ref={ref}
      className={`timeline-item ${animationClass} ${isVisible ? "visible" : ""}`}
    >
      <div className="timeline-card glass-card">
        <div className="job-header">
          <div>
            <h3 className="job-title">{experience.title}</h3>
            <p className="company-name">{experience.company}</p>
          </div>
          <div className="job-meta">
            <p className="job-date">{experience.date}</p>
            <p className="job-location">{experience.location}</p>
          </div>
        </div>

        <ul className="job-bullets">
          {experience.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        <div className="job-tech">
          {experience.tech.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
