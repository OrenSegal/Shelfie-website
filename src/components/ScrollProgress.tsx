'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

export function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-tomato origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}
