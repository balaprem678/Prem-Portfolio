import './WorkProcess.scss';

type Step = {
  num: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    num: '1',
    title: 'Requirement Analysis',
    desc: 'Understand business goals, user requirements, project scope, and technical specifications to create a solid development plan.',
  },
  {
    num: '2',
    title: 'UI Development',
    desc: 'Convert Figma and design prototypes into responsive, pixel-perfect interfaces using React.js, Next.js, SCSS, and Tailwind CSS.',
  },
  {
    num: '3',
    title: 'API Integration',
    desc: 'Connect frontend applications with REST APIs, manage dynamic data, optimize performance, and ensure seamless user interactions.',
  },
  {
    num: '4',
    title: 'Testing & Deployment',
    desc: 'Perform cross-browser testing, optimize performance, fix issues, and deploy scalable applications for production environments.',
  },
];

const icons: Record<string, string> = {
  '1': '📋',
  '2': '💻',
  '3': '🔗',
  '4': '🚀',
};

export default function WorkProcess() {
  return (
    <section id="process" className="work-process">
      <div className="process-grid">
        {/* Left */}
        <div className="process-content">
          <p className="process-subtitle">How I Work</p>

          <h2 className="process-title">My Development Process</h2>

          <p className="process-description">
            I follow a structured development process to build modern,
            responsive, and scalable web applications. From understanding
            project requirements to deploying production-ready solutions, every
            stage focuses on performance, usability, maintainability, and
            delivering exceptional user experiences.
          </p>
        </div>

        {/* Right */}
        <div className="process-cards">
          {steps.map((step) => (
            <div key={step.num} className="process-card card-shadow">
              <div className="process-icon">{icons[step.num]}</div>

              <h3 className="process-card-title">
                {step.num}. {step.title}
              </h3>

              <p className="process-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}