'use client';

import { useState, useCallback } from 'react';

export function useAccordionState(defaultIndex: number = -1) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  const toggle = useCallback((index: number) => {
    setActiveIndex(prev => (prev === index ? -1 : index));
  }, []);

  const setIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const isActive = useCallback(
    (index: number) => activeIndex === index,
    [activeIndex]
  );

  return { activeIndex, toggle, setIndex, isActive };
}