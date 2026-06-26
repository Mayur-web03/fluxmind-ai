"use client";

import Dropdown from "@/components/ui/Dropdown";
import type { Currency, BillingCycle } from "@/types/pricing";
import styles from "./Pricing.module.css";

interface PricingControlsProps {
  currency: Currency;
  billingCycle: BillingCycle;
  onCurrencyChange: (c: Currency) => void;
  onBillingCycleToggle: () => void;
}

export default function PricingControls({
  currency,
  billingCycle,
  onCurrencyChange,
  onBillingCycleToggle,
}: PricingControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.billingToggle} role="group" aria-label="Billing cycle">
        <button
          type="button"
          className={`${styles.toggleBtn} ${billingCycle === "monthly" ? styles.toggleBtnActive : ""}`}
          aria-pressed={billingCycle === "monthly"}
          onClick={onBillingCycleToggle}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`${styles.toggleBtn} ${billingCycle === "annual" ? styles.toggleBtnActive : ""}`}
          aria-pressed={billingCycle === "annual"}
          onClick={onBillingCycleToggle}
        >
          Annual
          <span className={styles.discountBadge}>−20%</span>
        </button>
      </div>

      <Dropdown value={currency} onChange={onCurrencyChange} />
    </div>
  );
}