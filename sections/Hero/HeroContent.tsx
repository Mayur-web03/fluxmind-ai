import Button from '@/components/ui/Button';
import { METRICS } from '@/lib/constants';
import styles from './Hero.module.css';

export default function HeroContent() {
  return (
    <div className={styles.content}>
      {/* Badge */}
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        <span className={styles.badgeText}>AI Automation OS — Now Live</span>
      </div>

      {/* Title */}
      <h1 className={styles.title}>
        Automate.{' '}
        <span className={styles.titleAccent}>Analyze.</span>
        <br />
        Predict.{' '}
        <span className={styles.titleAccent}>Scale.</span>
      </h1>

      {/* Subtitle */}
      <p className={styles.subtitle}>
        FluxMind is the intelligent automation operating system for data teams.
        Build pipelines in minutes. Deploy at any scale.
      </p>

      {/* CTA Buttons */}
      <div className={styles.actions}>
        <Button variant="primary" size="lg">
          Start Automating Free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button variant="outline" size="lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor" />
          </svg>
          Watch Demo
        </Button>
      </div>

      {/* Metrics */}
      <div className={styles.metrics}>
        {METRICS.map((metric, i) => (
          <div key={i} className={styles.metric}>
            <span className={styles.metricValue}>{metric.value}</span>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}