'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface FoodItem {
  id: string;
  name: string;
  emoji: string;
  location: 'fridge' | 'freezer' | 'pantry' | 'cupboard';
  expiresIn?: number;
}

const initialItems: FoodItem[] = [
  { id: '1', name: 'Milk', emoji: '🥛', location: 'fridge', expiresIn: 3 },
  { id: '2', name: 'Avocados', emoji: '🥑', location: 'fridge', expiresIn: 2 },
  { id: '3', name: 'Ice Cream', emoji: '🍦', location: 'freezer' },
  { id: '4', name: 'Pasta', emoji: '🍝', location: 'pantry' },
  { id: '5', name: 'Tomatoes', emoji: '🍅', location: 'fridge', expiresIn: 4 },
  { id: '6', name: 'Frozen Peas', emoji: '🟢', location: 'freezer' },
  { id: '7', name: 'Rice', emoji: '🍚', location: 'pantry' },
  { id: '8', name: 'Cereal', emoji: '🥣', location: 'cupboard' },
];

const locations = [
  { id: 'fridge', name: 'Fridge', icon: 'kitchen', color: 'bg-blue-50 border-blue-200' },
  { id: 'freezer', name: 'Freezer', icon: 'ac_unit', color: 'bg-cyan-50 border-cyan-200' },
  { id: 'pantry', name: 'Pantry', icon: 'inventory_2', color: 'bg-amber-50 border-amber-200' },
  { id: 'cupboard', name: 'Cupboard', icon: 'door_sliding', color: 'bg-stone-50 border-stone-200' },
] as const;

interface DraggableItemProps {
  item: FoodItem;
  onDragEnd: (item: FoodItem, location: string | null) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function DraggableItem({ item, onDragEnd, containerRef }: DraggableItemProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(
    [x, y],
    ([latestX, latestY]: number[]) => {
      const distance = Math.sqrt(latestX * latestX + latestY * latestY);
      return Math.min(1.15, 1 + distance / 500);
    }
  );

  const handleDragEnd = () => {
    const container = containerRef.current;
    if (!container) return;

    // Get all drop zones
    const dropZones = container.querySelectorAll('[data-location]');
    const itemRect = { x: x.get(), y: y.get() };

    let targetLocation: string | null = null;

    dropZones.forEach((zone) => {
      const rect = zone.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Check if item is over this zone (simplified check)
      const zoneCenter = {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2
      };

      const distance = Math.sqrt(
        Math.pow(itemRect.x - zoneCenter.x + 100, 2) +
        Math.pow(itemRect.y - zoneCenter.y + 50, 2)
      );

      if (distance < 150) {
        targetLocation = zone.getAttribute('data-location');
      }
    });

    onDragEnd(item, targetLocation);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ zIndex: 100, cursor: 'grabbing' }}
      style={{ x, y, scale }}
      className="bg-white rounded-xl px-3 py-2 shadow-md border border-stone-100 cursor-grab active:cursor-grabbing flex items-center gap-2 select-none hover:shadow-lg transition-shadow"
    >
      <span className="text-xl">{item.emoji}</span>
      <span className="text-sm font-medium text-charcoal">{item.name}</span>
      {item.expiresIn && item.expiresIn <= 3 && (
        <span className="text-[10px] text-orange-500 font-bold">{item.expiresIn}d</span>
      )}
    </motion.div>
  );
}

export function InteractiveDemo() {
  const [items, setItems] = useState(initialItems);
  const [lastMoved, setLastMoved] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (item: FoodItem, newLocation: string | null) => {
    if (newLocation && newLocation !== item.location) {
      setItems(prev =>
        prev.map(i =>
          i.id === item.id
            ? { ...i, location: newLocation as FoodItem['location'] }
            : i
        )
      );
      setLastMoved(item.id);
      setTimeout(() => setLastMoved(null), 1000);
    }
  };

  return (
    <div className="bg-cream-dark py-20 md:py-28" id="demo">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10">
          <motion.div
            className="text-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-tomato font-bold tracking-widest uppercase text-sm mb-2 block"
            >
              Try It Yourself
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-charcoal text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
            >
              Drag & drop like the real app
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              Move items between your fridge, freezer, pantry, and cupboard.
              Feel the spring physics that makes organizing satisfying.
            </motion.p>
          </motion.div>

          <motion.div
            ref={containerRef}
            className="relative bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-stone-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {locations.map(location => (
                <motion.div
                  key={location.id}
                  data-location={location.id}
                  className={`${location.color} rounded-2xl p-4 min-h-[200px] border-2 border-dashed transition-colors`}
                  whileHover={{ borderColor: '#E53E3E', borderStyle: 'solid' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-charcoal/70">{location.icon}</span>
                    <h3 className="font-display font-bold text-charcoal">{location.name}</h3>
                    <span className="ml-auto text-xs text-text-muted bg-white/50 px-2 py-0.5 rounded-full">
                      {items.filter(i => i.location === location.id).length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence mode="popLayout">
                      {items
                        .filter(item => item.location === location.id)
                        .map(item => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: lastMoved === item.id ? [1, 1.2, 1] : 1,
                              opacity: 1
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          >
                            <DraggableItem
                              item={item}
                              onDragEnd={handleDragEnd}
                              containerRef={containerRef}
                            />
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-center gap-4 text-sm text-text-muted">
              <span className="material-symbols-outlined text-lg">touch_app</span>
              <span>Drag items to move them between storage locations</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
