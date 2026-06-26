'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all var(--transition-layout)',
        background: scrolled ? 'rgba(23, 43, 54, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          
          {/* Logo */}
          <a
            href="/"
            aria-label="FluxMind AI Home"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--forsythia), var(--deep-saffron))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px'
            }}>
              ⚡
            </div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              FluxMind<span style={{ color: 'var(--forsythia)' }}>.ai</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500,
                    color: 'var(--text-muted)', padding: '8px 14px', borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none', display: 'block'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="primary" size="sm">Start Free Trial</Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            style={{
              display: 'none', flexDirection: 'column', gap: '5px', padding: '8px',
              background: 'none', border: 'none', cursor: 'pointer'
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)',
                  borderRadius: '2px', transition: 'all var(--transition-micro)',
                  transform: menuOpen && i === 0 ? 'translateY(7px) rotate(45deg)' : 
                             menuOpen && i === 2 ? 'translateY(-7px) rotate(-45deg)' : 
                             menuOpen && i === 1 ? 'scaleX(0)' : 'none'
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu" style={{
          maxHeight: menuOpen ? '400px' : '0', opacity: menuOpen ? 1 : 0,
          overflow: 'hidden', transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out'
        }}>
          <div style={{ paddingBottom: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 500,
                  color: 'var(--text-secondary)', padding: '12px 8px', textDecoration: 'none',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Button variant="secondary" size="md">Sign In</Button>
              <Button variant="primary" size="md">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </Container>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}