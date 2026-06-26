'use client';

import { useEffect, useRef, useState } from 'react';
import { useIntersection } from '@/hooks/useIntersection';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountUp({
  end,
  duration = 1500,
  suffix = '',
  prefix = '',
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersection<HTMLSpanElement>({ once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    }

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}