import "./Blog.scss";
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
      <div className="double-icon">
        <FaReact />
        <SiAngular />
      </div>
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
      <div className="double-icon">
        <SiClaude />
        <SiPerplexity />
      </div>
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
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-tag">Technical Expertise</p>

        <h2 className="section-title">My Skills</h2>

        <p className="section-subtitle">
          Experienced Frontend Developer with expertise in modern web
          technologies, responsive design, API integration, UI development,
          WordPress customization, and AI-assisted workflows.
        </p>

        <div className="skills-list">
          {services.map((service) => (
            <div className="skill-item" key={service.id}>
              <div className="skill-icon">{service.icon}</div>

              <div className="skill-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="skill-number">
                {String(service.id).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}