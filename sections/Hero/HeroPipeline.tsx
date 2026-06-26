'use client';

import styles from './Hero.module.css';

const nodes = [
  { label: 'SOURCE',    icon: '◈', color: 'var(--forsythia)' },
  { label: 'TRANSFORM', icon: '⟳', color: 'var(--deep-saffron)' },
  { label: 'ANALYZE',   icon: '◎', color: 'var(--mystic-mint)' },
  { label: 'PREDICT',   icon: '◆', color: 'var(--forsythia)' },
  { label: 'DEPLOY',    icon: '▲', color: 'var(--deep-saffron)' },
];

const W = 300;
const H = 540;
const cx = W / 2;
const nodeY = [54, 148, 242, 336, 430];

export default function HeroPipeline() {
  return (
    <div className={styles.visual}>
      <div className={styles.pipelineGlow} />

      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AI automation pipeline: Source, Transform, Analyze, Predict, Deploy"
        role="img"
      >
        {/* Connector lines */}
        {nodes.slice(0, -1).map((_, i) => (
          <line
            key={`line-${i}`}
            x1={cx}
            y1={nodeY[i] + 28}
            x2={cx}
            y2={nodeY[i + 1] - 28}
            stroke="rgba(217,232,226,0.15)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            className={`pipeline-line pipeline-line-${i + 1}`}
          />
        ))}

        {/* Particle dots */}
        {nodes.slice(0, -1).map((node, i) => {
          const y1 = nodeY[i] + 28;
          const y2 = nodeY[i + 1] - 28;
          return (
            <circle
              key={`particle-${i}`}
              r="2.5"
              fill={node.color}
              style={{
                offsetPath: `path('M ${cx} ${y1} L ${cx} ${y2}')`,
                animation: `particleMove 2s linear ${i * 0.4}s infinite`,
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g
            key={`node-${i}`}
            className={`pipeline-node pipeline-node-${i + 1}`}
            transform={`translate(${cx}, ${nodeY[i]})`}
          >
            {/* Outer glow ring */}
            <circle
              r="32"
              fill="rgba(255,200,1,0.02)"
              stroke={node.color}
              strokeWidth="0.5"
              opacity="0.35"
            />
            {/* Mid ring */}
            <circle
              r="22"
              fill="var(--bg-card)"
              stroke={node.color}
              strokeWidth="1"
              opacity="0.5"
            />
            {/* Inner circle */}
            <circle
              r="16"
              fill="var(--bg-surface)"
              stroke={node.color}
              strokeWidth="1.5"
            />
            {/* Icon */}
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="12"
              fill={node.color}
              fontFamily="JetBrains Mono, monospace"
            >
              {node.icon}
            </text>
            {/* Label */}
            <text
              y="44"
              textAnchor="middle"
              fontSize="8"
              fill="var(--text-muted)"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="0.1em"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      <style>{`
        @keyframes particleMove {
          0%   { offset-distance: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}