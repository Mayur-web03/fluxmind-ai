"use client";

import type { Feature } from "@/types/feature";
import FeatureCard from "./FeatureCard";
import styles from "./Features.module.css";

interface BentoGridProps {
  items: Feature[];
  activeIndex: number;
  onActivate: (index: number) => void;
}

export default function BentoGrid({ items, activeIndex, onActivate }: BentoGridProps) {
  return (
    <div className={styles.bentoGrid} role="list">
      {items.map((item, index) => (
        <FeatureCard
          key={item.id}
          feature={item}
          index={index}
          isActive={activeIndex === index}
          onActivate={onActivate}
          variant="bento"
        />
      ))}
    </div>
  );
}