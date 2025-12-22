// Shared animation variants for Framer Motion
import type { Variants, Transition } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// Spring physics for draggable items (matches Shelfie app behavior)
export const dragSpring: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 30
};

export const bounceSpring: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 25
};

// Hover effects
export const hoverScale = {
  scale: 1.05,
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 }
};

export const tapScale = {
  scale: 0.95,
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 }
};

// Flying item animation (for voice demo)
export const flyToTarget = (targetX: number, targetY: number) => ({
  x: targetX,
  y: targetY,
  scale: [1, 1.2, 0.8],
  opacity: [1, 1, 0],
  transition: {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94] as const
  }
});

// Pulse animation for expiring items
export const expiryPulse = {
  scale: [1, 1.02, 1],
  boxShadow: [
    '0 0 0 0 rgba(234, 88, 12, 0.4)',
    '0 0 0 12px rgba(234, 88, 12, 0)',
    '0 0 0 0 rgba(234, 88, 12, 0)'
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1] as const
  }
};

// Fridge door animation
export const fridgeDoorOpen = {
  rotateY: -110,
  transition: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20
  }
};

export const fridgeDoorClosed = {
  rotateY: 0,
  transition: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20
  }
};
