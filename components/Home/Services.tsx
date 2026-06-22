'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const services = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive, scalable, and high-performance web applications using React.js, Next.js, Angular, JavaScript, and TypeScript. Focused on clean code, maintainability, and exceptional user experiences.',
    active: true,
  },
  {
    title: 'UI/UX Implementation',
    desc: 'Converting Figma, Adobe XD, and Photoshop designs into pixel-perfect, mobile-first interfaces with modern styling solutions including SCSS, Tailwind CSS, Bootstrap, and CSS3.',
  },
  {
    title: 'CMS & E-Commerce Development',
    desc: 'Creating custom CMS platforms, admin dashboards, and eCommerce websites with product management, analytics, API integrations, secure workflows, and optimized user journeys.',
  },
];

export default function Services() {
  const containerRef = useScrollAnimation();
  return (
    <section ref={containerRef}
      id="services"
      style={{ padding: '80px 0', background: '#fafafa' }}
    >
      <div
        className="services-grid"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Left Content */}
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
            My Services
          </p>

          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#1e1e2e',
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Creating Modern Web Experiences
          </h2>

          <p
            style={{
              fontSize: 15,
              color: '#6b7280',
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            I am a Frontend Developer with 2.5+ years of experience building
            scalable, responsive, and user-focused web applications. From
            business dashboards and CMS platforms to eCommerce solutions, I
            transform ideas into fast, accessible, and visually engaging digital
            products using React.js, Next.js, Angular, and modern frontend
            technologies.
          </p>

          <a href="#portfolio" className="btn-primary">
            View My Work
          </a>
        </div>

        {/* Right Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: service.active ? '#fff' : 'transparent',
                border: service.active
                  ? '1px solid #e5e7eb'
                  : '1px solid transparent',
                borderLeft: `4px solid ${service.active ? '#7c3aed' : '#e5e7eb'
                  }`,
                borderRadius: service.active ? 16 : 0,
                padding: '24px',
                boxShadow: service.active
                  ? '0 4px 24px rgba(0,0,0,0.08)'
                  : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#1e1e2e',
                  marginBottom: 10,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: '#6b7280',
                  lineHeight: 1.8,
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}