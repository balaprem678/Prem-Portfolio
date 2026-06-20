export default function CTABanner() {
  return (
    <section style={{ background: '#1e1e2e', padding: '80px 24px', textAlign: 'center' }}>
      <p style={{ fontSize: 13, color: '#a78bfa', fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Let&apos;s Work Together</p>
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
        Do you have Project Idea?<br />Let&apos;s discuss your project!
      </h2>
      <p style={{ fontSize: 15, color: '#9ca3af', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
        There are many variations of passages of lorem ipsum available but the majority have suffered alteration.
      </p>
      <a href="#contact" className="btn-primary cta-btn">
        Let&apos;s Work Together →
      </a>
      <style>{`.cta-btn:hover { background: #6d28d9 !important; }`}</style>
    </section>
  )
}
