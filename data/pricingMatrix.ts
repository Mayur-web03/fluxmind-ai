import { PricingMatrix, CurrencyConfig, PricingPlan } from '@/types/pricing';

export const pricingMatrix: PricingMatrix = {
  starter: {
    baseRate: 100,
  },
  pro: {
    baseRate: 200,
  },
  enterprise: {
    baseRate: 500,
  },
};

export const currencyConfig: Record<string, CurrencyConfig> = {
  USD: {
    symbol: '$',
    multiplier: 1,
    label: 'USD',
  },
  EUR: {
    symbol: '€',
    multiplier: 0.92,
    label: 'EUR',
  },
  INR: {
    symbol: '₹',
    multiplier: 83,
    label: 'INR',
  },
};

export const pricingPlans: PricingPlan[] = [
  {
    tier: 'starter',
    name: 'Starter',
    description: 'For small teams getting started with AI automation.',
    highlighted: false,
    features: [
      '5 Automation Pipelines',
      '10,000 API calls/month',
      'Basic Analytics',
      'Email Support',
      '1 Workspace',
    ],
  },
  {
    tier: 'pro',
    name: 'Pro',
    description: 'For growing teams that need advanced automation.',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Unlimited Pipelines',
      '100,000 API calls/month',
      'Advanced Analytics',
      'Priority Support',
      '5 Workspaces',
      'Custom Integrations',
    ],
  },
  {
    tier: 'enterprise',
    name: 'Enterprise',
    description: 'For large teams with mission-critical automation needs.',
    highlighted: false,
    features: [
      'Unlimited Everything',
      'Unlimited API calls',
      'Real-time Analytics',
      'Dedicated Support',
      'Unlimited Workspaces',
      'SLA Guarantee',
      'Custom Contracts',
    ],
  },
];