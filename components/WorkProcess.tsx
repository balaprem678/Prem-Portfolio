const steps = [
  {
    num: '1',
    title: 'Requirement Analysis',
    desc: 'Understand business goals, user requirements, project scope, and technical specifications to create a solid development plan.',
  },
  {
    num: '2',
    title: 'UI Development',
    desc: 'Convert Figma and design prototypes into responsive, pixel-perfect interfaces using React.js, Next.js, Angular, SCSS, and Tailwind CSS.',
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

const icons = {
  '1': '📋',
  '2': '💻',
  '3': '🔗',
  '4': '🚀',
};

export default function WorkProcess() {
  return (
    <section
      id="process"
      style={{ padding: '80px 0', background: '#fafafa' }}
    >
      <div
        className="process-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: 13,
              color: '#7c3aed',
              fontWeight: 600,
              marginBottom: 8,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            How I Work
          </p>

          <h2
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 800,
              color: '#1e1e2e',
              marginBottom: 20,
            }}
          >
            My Development Process
          </h2>

          <p
            style={{
              fontSize: 15,
              color: '#6b7280',
              lineHeight: 1.75,
            }}
          >
            I follow a structured development process to build modern,
            responsive, and scalable web applications. From understanding
            project requirements to deploying production-ready solutions, every
            stage focuses on performance, usability, maintainability, and
            delivering exceptional user experiences.
          </p>
        </div>

        {/* Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="card-shadow"
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: '24px',
                border: '1px solid #f0f0f0',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: '#f3e8ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  marginBottom: 16,
                }}
              >
                {icons[step.num]}
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#1e1e2e',
                  marginBottom: 8,
                }}
              >
                {step.num}. {step.title}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: '#9ca3af',
                  lineHeight: 1.65,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}