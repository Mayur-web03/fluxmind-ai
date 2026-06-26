"use client";

import { memo } from "react";
import { calculatePrice, formatPrice } from "@/lib/pricingEngine";
import type { PricingPlan, Currency, BillingCycle } from "@/types/pricing";
import styles from "./Pricing.module.css";

interface PricingCardProps {
  plan: PricingPlan;
  baseRate: number;
  currency: Currency;
  billingCycle: BillingCycle;
}

function PricingCard({ plan, baseRate, currency, billingCycle }: PricingCardProps) {
  const amount = calculatePrice(baseRate, currency, billingCycle);
  const display = formatPrice(amount, currency);
  const period = billingCycle === "monthly" ? "/mo" : "/yr";

  return (
    <div className={`${styles.card} ${plan.highlighted ? styles.cardHighlight : ""}`} data-tier={plan.tier}>
      {plan.badge && <span className={styles.popularBadge}>{plan.badge}</span>}

      <h3 className={styles.cardLabel}>{plan.name}</h3>
      <p className={styles.cardSubtext}>{plan.description}</p>

      <div className={styles.priceRow}>
        <span className={styles.priceAmount} key={`${currency}-${billingCycle}`}>
          {display}
        </span>
        <span className={styles.pricePeriod}>{period}</span>
      </div>

      <ul className={styles.featureList}>
        {plan.features.map((f) => (
          <li key={f} className={styles.featureItem}>
            {f}
          </li>
        ))}
      </ul>

      <button type="button" className={styles.cardCta}>
        Get started
      </button>
    </div>
  );
}

export default memo(PricingCard);