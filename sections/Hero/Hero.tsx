import Container from '@/components/layout/Container';
import HeroContent from './HeroContent';
import HeroPipeline from './HeroPipeline';
import HeroMetrics from './HeroMetrics';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero section">
      {/* Background layers */}
      <div className={styles.bg}>
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
      </div>

      {/* Main content */}
      <Container className={styles.inner}>
        <div className={styles.grid}>
          {/* Left — text + CTA + metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <HeroContent />
            <HeroMetrics />
          </div>

          {/* Right — pipeline visual */}
          <HeroPipeline />
        </div>
      </Container>
    </section>
  );
}