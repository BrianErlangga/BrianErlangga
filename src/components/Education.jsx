import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Education.css";

function Education() {
  const [ref, isVisible] = useScrollAnimation();

  const courses = [
    "Software Design & Architectures",
    "Machine Learning",
    "Computer Networks",
    "Compilers",
    "Algorithms & Data Structures",
    "Systems Programming & Concurrency",
    "Real-time Operating Systems",
  ];

  const honors = [
    "President's Scholarship",
    "Faculty of Engineering Entrance Scholarship",
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Education</h2>
        </div>

        <div
          ref={ref}
          className={`education-card glass-card fade-in ${isVisible ? "visible" : ""}`}
        >
          <div className="education-icon">🎓</div>

          <div className="education-content">
            <h3>B.A.Sc. in Computer Engineering</h3>
            <p className="education-school">University of Waterloo</p>
            <p className="education-date">September 2020 – Present</p>

            <div className="education-courses">
              <h4>Honors</h4>
              <div className="course-tags">
                {honors.map((honor, index) => (
                  <span key={index} className="course-tag honor-tag">
                    {honor}
                  </span>
                ))}
              </div>
            </div>

            <div className="education-courses">
              <h4>Relevant Coursework</h4>
              <div className="course-tags">
                {courses.map((course, index) => (
                  <span key={index} className="course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
