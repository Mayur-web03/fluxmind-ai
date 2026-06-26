"use client";

import { useState, useCallback } from "react";
import { features } from "@/data/features";
import Reveal from "@/components/motion/Reveal";
import BentoGrid from "./BentoGrid";
import Accordion from "./Accordion";
import styles from "./Features.module.css";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleActivate = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section id="features" className={styles.features} aria-label="Features">
      <Reveal>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Capabilities</span>
          <h2 className={styles.title}>One pipeline. Every workflow.</h2>
          <p className={styles.description}>
            Built for teams who need automation that adapts to context, not the other way around.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.contextLockRoot}>
          <div className={styles.desktopView}>
            <BentoGrid items={features} activeIndex={activeIndex} onActivate={handleActivate} />
          </div>
          <div className={styles.mobileView}>
            <Accordion items={features} activeIndex={activeIndex} onActivate={handleActivate} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}