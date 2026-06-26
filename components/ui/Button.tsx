'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    border: 'none',
    transition: 'all var(--transition-micro)',
    whiteSpace: 'nowrap',
  };

  const sizes = {
    sm: { padding: '8px 16px', fontSize: '0.875rem' },
    md: { padding: '12px 24px', fontSize: '1rem' },
    lg: { padding: '16px 32px', fontSize: '1.1rem' },
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, var(--forsythia), var(--deep-saffron))',
      color: 'var(--oceanic-noir)',
      boxShadow: '0 4px 20px rgba(255, 200, 1, 0.3)',
    },
    secondary: {
      background: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--accent-primary)',
      border: '1px solid var(--border-accent)',
    },
  };

  return (
    <button
      className={cn('hover-lift', className)}
      style={{ ...base, ...sizes[size], ...variants[variant] }}
      {...props}
    >
      {children}
    </button>
  );
}