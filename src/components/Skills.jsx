import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Skills.css";

const skillCategories = [
  {
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Python", primary: true },
      { name: "C++", primary: false },
      { name: "Java", primary: false },
      { name: "Swift", primary: false },
      { name: "Kotlin", primary: false },
      { name: "HTML", primary: true },
      { name: "CSS", primary: true },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "⚛️",
    skills: [
      { name: "React", primary: true },
      { name: "React Native", primary: true },
      { name: "Next.js", primary: true },
      { name: "Angular", primary: false },
      { name: "Node.js", primary: false },
      { name: "Apollo GraphQL", primary: true },
      { name: "Jest", primary: false },
      { name: "Sass", primary: false },
    ],
  },
  {
    name: "Platforms & Databases",
    icon: "☁️",
    skills: [
      { name: "AWS", primary: true },
      { name: "Google Cloud", primary: true },
      { name: "Firebase", primary: true },
      { name: "Supabase", primary: true },
      { name: "MongoDB", primary: false },
      { name: "PostgreSQL", primary: false },
      { name: "Room DB", primary: false },
      { name: "Git", primary: true },
    ],
  },
];

function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Skills & Technologies</h2>
        </div>

        <div
          ref={ref}
          className={`skills-container fade-in ${isVisible ? "visible" : ""}`}
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skills-category"
              style={{ transitionDelay: `${catIndex * 0.15}s` }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-tag ${skill.primary ? "primary" : ""}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
