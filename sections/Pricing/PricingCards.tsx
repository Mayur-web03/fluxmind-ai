"use client";

import { pricingMatrix, pricingPlans } from "@/data/pricingMatrix";
import type { Currency, BillingCycle } from "@/types/pricing";
import PricingCard from "./PricingCard";
import styles from "./Pricing.module.css";

interface PricingCardsProps {
  currency: Currency;
  billingCycle: BillingCycle;
}

export default function PricingCards({ currency, billingCycle }: PricingCardsProps) {
  return (
    <div className={styles.cardsGrid}>
      {pricingPlans.map((plan) => (
        <PricingCard
          key={plan.tier}
          plan={plan}
          baseRate={pricingMatrix[plan.tier].baseRate}
          currency={currency}
          billingCycle={billingCycle}
        />
      ))}
    </div>
  );
}