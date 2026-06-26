"use client";

import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/motion/Reveal";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials} aria-label="Testimonials">
      <Reveal>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Social proof</span>
          <h2 className={styles.title}>Trusted by teams who automate at scale.</h2>
          <p className={styles.description}>
            Real teams, real workflows, real time saved.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.id} className={styles.card}>
              <blockquote className={styles.quote}>&ldquo;{t.content}&rdquo;</blockquote>

              {t.metric && (
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{t.metric.value}</span>
                  <span className={styles.metricLabel}>{t.metric.label}</span>
                </div>
              )}

              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.avatar}
                </span>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      {/* Logo cloud — derived from testimonial companies */}
      <Reveal>
        <div className={styles.logoCloud} aria-label="Companies using FluxMind AI">
          {testimonials.map((t) => (
            <span key={`logo-${t.id}`} className={styles.logoItem}>
              {t.company}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}