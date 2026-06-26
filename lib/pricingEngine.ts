import { currencyConfig } from "@/data/pricingMatrix";
import type { Currency, BillingCycle } from "@/types/pricing";

const ANNUAL_DISCOUNT = 0.8; // 20% off
const MONTHS_PER_YEAR = 12;

export function calculatePrice(
  baseRate: number,
  currency: Currency,
  billingCycle: BillingCycle
): number {
  const multiplier = currencyConfig[currency].multiplier;
  const monthly = baseRate * multiplier;
  if (billingCycle === "monthly") return monthly;
  return monthly * MONTHS_PER_YEAR * ANNUAL_DISCOUNT;
}

export function formatPrice(amount: number, currency: Currency): string {
  const symbol = currencyConfig[currency].symbol;
  const rounded = Math.round(amount).toLocaleString("en-US");
  return `${symbol}${rounded}`;
}