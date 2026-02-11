import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Projects.css";

const projects = [
  {
    title: "Reciplan – AI-Driven Recipe Extraction",
    description:
      "A multi-layered Android application utilizing a Pipe-and-Filter processing pipeline to transform TikTok video URLs into structured recipe data. Features a 6-stage extraction pipeline integrating OpenAI Whisper, GPT-4, and PaddleOCR with an offline-first architecture delivering search results in under 500ms.",
    tech: ["Kotlin", "OpenAI Whisper", "GPT-4", "PaddleOCR", "Room DB"],
    github: "https://github.com/shezann/reciplan",
    githubBe: "https://github.com/shezann/reciplan-backend",
    icon: "🍳",
  },
  {
    title: "Music Submission Platform",
    description:
      "A web platform for music producers to manage accounts and automate music file submissions with integrated payment processing.",
    tech: ["Next.js", "Google Cloud", "Supabase", "Stripe API"],
    github: "https://github.com/automated-dev/saucefamilia",
    icon: "🎵",
  },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={ref}
              className={`project-card glass-card fade-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GitHubIcon />
                    {project.githubBe ? "Front End →" : "View on GitHub →"}
                  </a>
                )}
                {project.githubBe && (
                  <a
                    href={project.githubBe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <GitHubIcon />
                    Back End →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
