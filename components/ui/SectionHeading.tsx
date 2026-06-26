import { cn } from '@/lib/utils';
import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <div
      className={cn(className)}
      style={{
        textAlign: align,
        marginBottom: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        gap: '16px',
      }}
    >
      {badge && <Badge variant="accent">{badge}</Badge>}

      <h2 style={{ maxWidth: '700px' }}>
        {titleParts[0]}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
        {titleParts[1]}
      </h2>

      {subtitle && (
        <p
          style={{
            maxWidth: '560px',
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}