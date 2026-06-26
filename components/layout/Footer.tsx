import Container from '@/components/layout/Container';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'SOC2', href: '#' },
  ],
};

const socialLinks = [
  { label: 'Twitter', short: '𝕏' },
  { label: 'LinkedIn', short: 'in' },
  { label: 'GitHub', short: 'gh' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-primary)',
        paddingTop: '64px',
        paddingBottom: '32px',
      }}
    >
      <Container>
        <div style={{ display: 'grid', gap: '48px', marginBottom: '64px' }} className="footer-grid">
          {/* Brand Section */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--forsythia), var(--deep-saffron))',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                ⚡
              </div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '1.1rem' }}>
                FluxMind<span style={{ color: 'var(--forsythia)' }}>.ai</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '280px' }}>
              The AI Automation Operating System for modern data teams.
            </p>
            <nav style={{ display: 'flex', gap: '12px', marginTop: '8px' }} aria-label="Social links">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: '36px', height: '36px', borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none'
                  }}
                >
                  {social.short}
                </a>
              ))}
            </nav>
          </section>

          {/* Nav Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h4 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {category}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} FluxMind AI.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              All systems operational
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}