import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'subtle' | 'outline';
  className?: string;
}

export default function Badge({
  children,
  variant = 'accent',
  className,
}: BadgeProps) {
  const styles = {
    accent: {
      background: 'rgba(255, 200, 1, 0.15)',
      border: '1px solid rgba(255, 200, 1, 0.3)',
      color: 'var(--forsythia)',
    },
    subtle: {
      background: 'rgba(217, 232, 226, 0.08)',
      border: '1px solid rgba(217, 232, 226, 0.15)',
      color: 'var(--text-secondary)',
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-muted)',
    },
  };

  return (
    <span
      className={cn('pipeline-label', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        borderRadius: '100px',
        fontSize: '0.7rem',
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}