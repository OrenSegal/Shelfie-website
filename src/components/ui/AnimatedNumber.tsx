'use client';

import CountUp from 'react-countup';
import { useInViewport } from '@/hooks/useScrollAnimation';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 2.5,
  decimals = 0,
  className = ''
}: AnimatedNumberProps) {
  const { ref, isInView } = useInViewport({ threshold: 0.3 });

  return (
    <span ref={ref} className={className}>
      {isInView ? (
        <CountUp
          start={0}
          end={value}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          useEasing
          enableScrollSpy
          scrollSpyOnce
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
