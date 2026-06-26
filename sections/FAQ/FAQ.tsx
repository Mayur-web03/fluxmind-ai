"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import Reveal from "@/components/motion/Reveal";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={styles.faq} aria-label="Frequently asked questions">
      <Reveal>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.title}>Questions, answered.</h2>
          <p className={styles.description}>
            Everything you need to know before you automate your first pipeline.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className={styles.list}>
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  id={headerId}
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={styles.panel}
                  style={{
                    maxHeight: isOpen ? "320px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}