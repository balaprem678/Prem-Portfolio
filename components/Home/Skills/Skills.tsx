'use client';
import "./Skills.scss";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaGitAlt,
  FaFigma,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiAngular,
  SiClaude,
  SiPerplexity,
} from "react-icons/si";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "HTML5, CSS3, SCSS, SASS, Bootstrap, Tailwind CSS, JavaScript, TypeScript",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Node.js, RESTful API Development",
    icon: <FaNodeJs />,
  },
  {
    id: 3,
    title: "Frameworks & Libraries",
    description: "React.js, Angular.js",
    icon: (
      <>
        <FaReact />
        <SiAngular />
      </>
    ),
  },
  {
    id: 4,
    title: "Database Management",
    description: "MongoDB Database Design & Integration",
    icon: <SiMongodb />,
  },
  {
    id: 5,
    title: "Version Control & Tools",
    description: "Git, GitHub, Bitbucket, Jira",
    icon: <FaGitAlt />,
  },
  {
    id: 6,
    title: "Design & Prototyping",
    description: "Figma, Photoshop, Adobe XD",
    icon: <FaFigma />,
  },
  {
    id: 7,
    title: "AI Tools",
    description: "Claude AI, Perplexity AI",
    icon: (
      <>
        <SiClaude />
        <SiPerplexity />
      </>
    ),
  },
  {
    id: 8,
    title: "WordPress Development",
    description:
      "Theme Customization, Plugin Integration, Responsive Design, UI Improvements",
    icon: <FaWordpress />,
  },
];

export default function Skills() {
  const containerRef = useScrollAnimation();
  return (
    <section className="skills-section" id="skills" ref={containerRef}>
      <div className="container">
        <span className="section-tag">TECHNICAL EXPERTISE</span>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <p className="section-subtitle">
          Experienced Frontend Developer with expertise in modern web
          technologies, responsive UI development, API integration,
          WordPress customization and AI-powered workflows.
        </p>

        <div className="skills-grid">
          {services.map((item) => (
            <div className="skill-card" key={item.id}>
              <div className="card-glow"></div>

              <div className="skill-icon">
                {item.icon}
              </div>

              <span className="skill-number">
                {String(item.id).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}