export type PricingTier = "starter" | "pro" | "enterprise";

export interface PricingTierConfig {
  baseRate: number;
}

export type PricingMatrix = Record<PricingTier, PricingTierConfig>;

export interface CurrencyConfig {
  symbol: string;
  multiplier: number;
  label: string;
}

export interface PricingPlan {
  tier: PricingTier;
  name: string;
  description: string;
  highlighted: boolean;
  badge?: string;
  features: string[];
}

export type BillingCycle = "monthly" | "annual";