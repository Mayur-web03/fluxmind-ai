'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { cn } from '@/lib/utils';
import { ReactNode, ElementType, useRef } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: ElementType;
}

export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <Tag
      ref={ref}
      className={cn(
        'reveal',
        isVisible && 'visible',
        delay > 0 && `reveal-delay-${delay}`,
        className
      )}
    >
      {children}
    </Tag>
  );
}