'use client';

import CountUp from '@/components/motion/CountUp';

const liveMetrics = [
  { label: 'PIPELINES ACTIVE', value: 12847, suffix: '' },
  { label: 'UPTIME', value: 99, suffix: '.9%' },
  { label: 'AVG LATENCY', value: 42, suffix: 'ms' },
];

export default function HeroMetrics() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <span
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            boxShadow: '0 0 6px rgba(34,197,94,0.8)',
          }}
        />
        Live System Status
      </span>
      <div
        style={{
          display: 'flex',
          gap: '24px',
          padding: '14px 20px',
          background: 'rgba(30, 51, 64, 0.7)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(12px)',
          flexWrap: 'wrap',
        }}
      >
        {liveMetrics.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
          >
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--forsythia)',
              }}
            >
              <CountUp end={m.value} suffix={m.suffix} duration={1800} />
            </span>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
              }}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}