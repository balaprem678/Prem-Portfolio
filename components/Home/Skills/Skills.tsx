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
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    tags: ["HTML5", "CSS3", "SCSS", "SASS", "Bootstrap", "Tailwind", "JavaScript", "TypeScript"],
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Backend Development",
    tags: ["Node.js", "RESTful APIs", "Express.js", "API Integration"],
    icon: <FaNodeJs />,
  },
  {
    id: 3,
    title: "Frameworks & Libraries",
    tags: ["React.js", "Angular.js", "Next.js"],
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
    tags: ["MongoDB", "Database Design", "Data Modeling", "Firebase"],
    icon: <SiMongodb />,
  },
  {
    id: 5,
    title: "Version Control & Tools",
    tags: ["Git", "GitHub", "Bitbucket", "Jira", "CI/CD"],
    icon: <FaGitAlt />,
  },
  {
    id: 6,
    title: "Design & Prototyping",
    tags: ["Figma", "Photoshop", "Adobe XD", "UI/UX Design"],
    icon: <FaFigma />,
  },
  {
    id: 7,
    title: "AI Tools",
    tags: ["Claude AI", "Perplexity AI", "ChatGPT", "AI Workflows"],
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
    tags: ["Theme Customization", "Plugin Integration", "Responsive Design", "WooCommerce"],
    icon: <FaWordpress />,
  },
];

export default function Skills() {
  const containerRef = useScrollAnimation();
  return (
    <section className="skills-section" id="skills" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✦ Technical Expertise</span>

          <h2 className="section-title">
            My <span>Skills</span>
          </h2>

          <div className="title-underline"></div>

          <p className="section-subtitle">
            Experienced Frontend Developer with expertise in modern web
            technologies, responsive UI development, API integration,
            WordPress customization, and AI-powered workflows.
          </p>
        </div>

        <div className="skills-grid">
          {services.map((item) => (
            <div className="skill-card" key={item.id}>
              <div className="card-glow"></div>

              <div className="skill-icon">{item.icon}</div>

              <span className="skill-number">
                {String(item.id).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <div className="skill-tags">
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}