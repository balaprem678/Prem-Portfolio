import { Images } from "./Utilis/Images"

const navLinks = ['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services']

export default function Footer() {
  return (
    <footer style={{ background: '#1e1e2e', color: '#fff', padding: '32px 24px' }}>
      <style>{`
        .footer-link:hover { color: #fff !important; }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', }}> <img src={Images.logo.src} alt="" /></div>
        
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {navLinks.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="footer-link" style={{ fontSize: 13, color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#6b7280' }}>© 2024 prem. All rights reserved.</p>
      </div>
    </footer>
  )
}
