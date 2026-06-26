"use client";

import Reveal from "@/components/motion/Reveal";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section id="cta" className={styles.cta} aria-label="Get started">
      <Reveal>
        <div className={styles.card}>
          <span className={styles.eyebrow}>Ready when you are</span>
          <h2 className={styles.title}>Start automating in minutes, not months.</h2>
          <p className={styles.description}>
            No credit card required. Full feature access for 14 days. Cancel anytime.
          </p>

          <div className={styles.actions}>
            <button type="button" className={styles.primaryBtn}>
              Start free trial
            </button>
            <button type="button" className={styles.secondaryBtn}>
              Talk to sales
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}