"use client";

import { useEffect, useRef } from "react";
import type { Feature } from "@/types/feature";
import styles from "./Features.module.css";

interface AccordionProps {
  items: Feature[];
  activeIndex: number;
  onActivate: (index: number) => void;
}

export default function Accordion({ items, activeIndex, onActivate }: AccordionProps) {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const node = itemRefs.current[activeIndex];
    if (node) {
      node.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (index: number) => {
    onActivate(activeIndex === index ? -1 : index);
  };

  return (
    <div className={styles.accordion} role="list">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const panelId = `feature-panel-${item.id}`;
        const headerId = `feature-header-${item.id}`;

        return (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
          >
            <button
              id={headerId}
              type="button"
              className={styles.accordionTrigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span className={styles.accordionIcon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.accordionTitle}>{item.title}</span>
              <span className={styles.accordionChevron} aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={styles.accordionPanel}
              style={{
                maxHeight: isOpen ? "480px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p className={styles.accordionBody}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}