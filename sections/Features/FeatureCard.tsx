"use client";

import type { Feature } from "@/types/feature";
import styles from "./Features.module.css";

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
  variant: "bento";
}

export default function FeatureCard({ feature, index, isActive, onActivate, variant }: FeatureCardProps) {
  return (
    <div
      role="listitem"
      tabIndex={0}
      className={`${styles.bentoCard} ${styles[`bentoCard${feature.size ?? "sm"}`] ?? ""} ${
        isActive ? styles.bentoCardActive : ""
      }`}
      onMouseEnter={() => onActivate(index)}
      onFocus={() => onActivate(index)}
      data-variant={variant}
      data-index={index}
    >
      <span className={styles.bentoIcon} aria-hidden="true">
        {feature.icon}
      </span>
      <h3 className={styles.bentoTitle}>{feature.title}</h3>
      <p className={styles.bentoDescription}>{feature.description}</p>
    </div>
  );
}