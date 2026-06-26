"use client";

import Reveal from "@/components/motion/Reveal";
import { usePricing } from "@/hooks/usePricing";
import PricingControls from "./PricingControls";
import PricingCards from "./PricingCards";
import styles from "./Pricing.module.css";

/**
 * STATE ISOLATION BOUNDARY
 * All pricing state lives inside usePricing(), called ONLY here.
 * page.tsx / Navbar / Hero / Features never know this state exists.
 */
export default function Pricing() {
  const { currency, billingCycle, updateCurrency, toggleBillingCycle } = usePricing();

  return (
    <section id="pricing" className={styles.pricing} aria-label="Pricing">
      <Reveal>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Pricing</span>
          <h2 className={styles.title}>Pay for what you automate.</h2>
          <p className={styles.description}>
            Transparent, usage-aware pricing. Switch currency or billing cycle —
            nothing else on the page moves.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <PricingControls
          currency={currency}
          billingCycle={billingCycle}
          onCurrencyChange={updateCurrency}
          onBillingCycleToggle={toggleBillingCycle}
        />
      </Reveal>

      <Reveal>
        <PricingCards currency={currency} billingCycle={billingCycle} />
      </Reveal>
    </section>
  );
}