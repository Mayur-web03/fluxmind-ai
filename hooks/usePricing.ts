'use client';

import { useState, useCallback, useTransition } from 'react';
import { Currency, BillingCycle } from '@/types/pricing';

export function usePricing() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [isPending, startTransition] = useTransition();

  const updateCurrency = useCallback((newCurrency: Currency) => {
    startTransition(() => {
      setCurrency(newCurrency);
    });
  }, []);

  const updateBillingCycle = useCallback((newCycle: BillingCycle) => {
    startTransition(() => {
      setBillingCycle(newCycle);
    });
  }, []);

  const toggleBillingCycle = useCallback(() => {
    startTransition(() => {
      setBillingCycle(prev => (prev === 'monthly' ? 'annual' : 'monthly'));
    });
  }, []);

  return {
    currency,
    billingCycle,
    isPending,
    updateCurrency,
    updateBillingCycle,
    toggleBillingCycle,
  };
}