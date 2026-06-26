'use client';

import { useEffect, useRef } from 'react';

interface FlowLineProps {
  width?: number;
  height?: number;
}

export default function FlowLine({ width = 400, height = 500 }: FlowLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const nodes = [
    { label: 'SOURCE', y: 60, icon: '◈' },
    { label: 'TRANSFORM', y: 165, icon: '⟳' },
    { label: 'ANALYZE', y: 270, icon: '◎' },
    { label: 'PREDICT', y: 375, icon: '◆' },
    { label: 'DEPLOY', y: 460, icon: '▲' },
  ];

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AI Pipeline Visualization"
    >
      {/* Connecting lines */}
      {nodes.slice(0, -1).map((node, i) => (
        <line
          key={i}
          x1={width / 2}
          y1={node.y + 28}
          x2={width / 2}
          y2={nodes[i + 1].y - 28}
          stroke="var(--border-subtle)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className={`pipeline-line pipeline-line-${i + 1}`}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g
          key={i}
          className={`pipeline-node pipeline-node-${i + 1}`}
          transform={`translate(${width / 2}, ${node.y})`}
        >
          {/* Outer glow ring */}
          <circle
            r="32"
            fill="rgba(255,200,1,0.04)"
            stroke="rgba(255,200,1,0.15)"
            strokeWidth="1"
          />
          {/* Inner circle */}
          <circle
            r="22"
            fill="var(--bg-surface)"
            stroke="var(--border-accent)"
            strokeWidth="1.5"
          />
          {/* Icon */}
          <text
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="14"
            fill="var(--forsythia)"
            fontFamily="JetBrains Mono"
          >
            {node.icon}
          </text>
          {/* Label */}
          <text
            y="44"
            textAnchor="middle"
            fontSize="9"
            fill="var(--text-muted)"
            fontFamily="JetBrains Mono"
            letterSpacing="0.08em"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}