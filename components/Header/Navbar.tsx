'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Images } from '../Utilis/Images'

const navLinks = ['Home', 'About', 'Process', 'Portfolio', 'Skills', 'Services']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 80, height: 80,  display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>  <img src={Images.logo.src} alt="Logo" /></div>

        </div>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(link => (
            <li key={link}>
              <Link href={`#${link.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 500, color: '#374151', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                onMouseLeave={e => (e.currentTarget.style.color = '#374151')}
              >{link}</Link>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden-mobile" style={{ padding: '9px 24px', fontSize: 14 }}>Contact</a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5 }} className="hamburger">
          {[0, 1, 2].map(i => <span key={i} style={{ width: 24, height: 2, background: '#1e1e2e', display: 'block', borderRadius: 2 }} />)}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #f0f0f0', padding: '16px 24px' }} className="mobile-menu">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500, color: '#374151', textDecoration: 'none', borderBottom: '1px solid #f9f9f9' }}>
              {link}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: 16, display: 'inline-block' }}>Contact</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
