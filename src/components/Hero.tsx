'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { AppStoreBadge } from '@/components/AppStoreBadge';
import { GooglePlayBadge } from '@/components/GooglePlayBadge';
import { Modal } from '@/components/ui/Modal';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface Recipe {
  name: string;
  time: string;
  difficulty: string;
}

const spinachRecipes: Recipe[] = [
  { name: "Creamy Spinach Pasta", time: "20 min", difficulty: "Easy" },
  { name: "Spinach & Feta Stuffed Chicken", time: "35 min", difficulty: "Medium" },
  { name: "Green Smoothie Bowl", time: "5 min", difficulty: "Easy" },
];

const tomatoRecipes: Recipe[] = [
  { name: "Fresh Tomato Bruschetta", time: "15 min", difficulty: "Easy" },
  { name: "Homemade Marinara Sauce", time: "45 min", difficulty: "Easy" },
  { name: "Caprese Salad", time: "10 min", difficulty: "Easy" },
];

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer">
      <div className="w-10 h-10 bg-tomato/10 rounded-lg flex items-center justify-center">
        <span className="material-symbols-outlined text-tomato">restaurant</span>
      </div>
      <div className="flex-1">
        <p className="font-medium text-charcoal text-sm">{recipe.name}</p>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span>{recipe.time}</span>
          <span>•</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
      <span className="material-symbols-outlined text-text-muted">arrow_forward</span>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<'spinach' | 'tomatoes' | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Fridge door animation based on scroll
  const fridgeDoorRotate = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  return (
    <>
      <motion.div
        ref={containerRef}
        className="mx-auto flex flex-col items-center relative receipt bg-white drop-shadow-xl overflow-hidden"
        data-testid="hero-receipt"
        style={{ scale }}
      >
        {/* Parallax background blurs */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-tomato/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stem/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"
        />

        <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10 py-12 md:py-24">
          <div className="flex flex-col-reverse gap-12 md:gap-16 lg:flex-row items-center">
            <motion.div
              className="flex flex-col gap-8 flex-1 text-center lg:text-left z-10"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col gap-6">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 self-center lg:self-start bg-white border border-stone-200 rounded-full px-4 py-1.5 shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <span className="material-symbols-outlined text-tomato text-sm">local_fire_department</span>
                  <span className="text-xs font-bold text-charcoal uppercase tracking-wider font-display">Your Kitchen&apos;s Second Brain</span>
                </motion.div>
                <motion.h1
                  variants={fadeInUp}
                  className="text-charcoal text-5xl md:text-7xl font-display font-extrabold leading-[1.05] tracking-tight"
                >
                  Stop staring at your fridge. <br />
                  <span className="text-tomato relative inline-block">
                    Just Shelfie it.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-stem opacity-40" preserveAspectRatio="none" viewBox="0 0 100 10">
                      <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                    </svg>
                  </span>
                </motion.h1>
                <motion.h2
                  variants={fadeInUp}
                  className="text-text-muted text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 font-body"
                >
                  The intelligent kitchen co-pilot that transforms chaotic cupboards into delicious dinners. Join the cycle of smart cooking.
                </motion.h2>
              </div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 items-center"
                data-testid="hero-badges"
              >
                <motion.a
                  href="#"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <AppStoreBadge />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <GooglePlayBadge />
                </motion.a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-text-muted"
              >
                <div className="flex -space-x-3">
                  <motion.div
                    className="size-10 rounded-full border-2 border-cream bg-stone-200"
                    style={{ backgroundImage: "url('/avatar-1.webp')", backgroundSize: 'cover' }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  />
                  <motion.div
                    className="size-10 rounded-full border-2 border-cream bg-stone-200"
                    style={{ backgroundImage: "url('/avatar-2.webp')", backgroundSize: 'cover' }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  />
                  <motion.div
                    className="size-10 rounded-full border-2 border-cream bg-stone-200"
                    style={{ backgroundImage: "url('/avatar-3.webp')", backgroundSize: 'cover' }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  />
                  <motion.div
                    className="size-10 rounded-full border-2 border-cream bg-charcoal text-white flex items-center justify-center text-xs font-bold font-display"
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    +50k
                  </motion.div>
                </div>
                <p className="font-medium">Home cooks saving money</p>
              </motion.div>
            </motion.div>

            {/* Hero image with fridge door effect */}
            <motion.div
              className="w-full flex-1 relative group"
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                style={{ opacity }}
                className="absolute -inset-4 bg-gradient-to-tr from-tomato/20 to-stem/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000"
              />
              <motion.div
                className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-soft border-4 border-white"
                style={{ rotateY: fridgeDoorRotate, transformOrigin: 'left' }}
                whileHover={{ rotateY: -5 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                <Image alt="Shelfie App Interface" src="/hero-image.webp" fill className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-500 scale-105" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border-2 border-white/50 rounded-2xl flex items-center justify-center pointer-events-none shadow-inner">
                  <motion.div
                    className="absolute top-6 left-6 bg-charcoal/90 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-display font-medium flex items-center gap-2 shadow-lg z-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.span
                      className="size-2 rounded-full bg-tomato"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    <span className="uppercase tracking-wide text-xs">AI Vision Active</span>
                  </motion.div>

                  {/* Expiring item - Spinach (pulsing orange glow) */}
                  <motion.button
                    onClick={() => setSelectedItem('spinach')}
                    className="absolute top-[25%] right-[5%] bg-cream border border-orange-300 shadow-xl px-3 py-2 rounded-lg text-xs font-bold text-charcoal flex gap-2 items-center z-20 cursor-pointer expiring-soon"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="size-2 rounded-full bg-orange-500"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                    <div className="flex flex-col leading-none gap-0.5">
                      <span className="font-display">Spinach</span>
                      <span className="text-orange-600 font-normal text-[10px]">Expires in 2d!</span>
                    </div>
                    <span className="material-symbols-outlined text-orange-500 text-sm">arrow_forward</span>
                  </motion.button>

                  {/* Regular item - Tomatoes */}
                  <motion.button
                    onClick={() => setSelectedItem('tomatoes')}
                    className="absolute bottom-[30%] left-[8%] bg-cream border border-stone-200 shadow-xl px-3 py-2 rounded-lg text-xs font-bold text-charcoal flex gap-2 items-center z-20 cursor-pointer hover:border-tomato transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="size-2 rounded-full bg-tomato"></div>
                    <div className="flex flex-col leading-none gap-0.5">
                      <span className="font-display">Tomatoes</span>
                      <span className="text-text-muted font-normal text-[10px]">Great for Sauce</span>
                    </div>
                    <span className="material-symbols-outlined text-text-muted text-sm">arrow_forward</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Click hint */}
              <motion.p
                className="text-center mt-4 text-xs text-text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="material-symbols-outlined text-sm align-middle mr-1">touch_app</span>
                Click on items for recipe suggestions
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Recipe suggestion modal for Spinach */}
      <Modal
        isOpen={selectedItem === 'spinach'}
        onClose={() => setSelectedItem(null)}
        title="Spinach expires in 2 days!"
      >
        <div className="mb-4">
          <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-2 rounded-lg mb-4">
            <span className="material-symbols-outlined">schedule</span>
            <span className="text-sm font-medium">Use it before it goes bad</span>
          </div>
          <p className="text-text-muted text-sm mb-4">Here are some recipes to help you use your spinach:</p>
        </div>
        <div className="space-y-3">
          {spinachRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>
      </Modal>

      {/* Recipe suggestion modal for Tomatoes */}
      <Modal
        isOpen={selectedItem === 'tomatoes'}
        onClose={() => setSelectedItem(null)}
        title="Recipe ideas for Tomatoes"
      >
        <div className="mb-4">
          <div className="flex items-center gap-2 text-stem bg-green-50 px-3 py-2 rounded-lg mb-4">
            <span className="material-symbols-outlined">eco</span>
            <span className="text-sm font-medium">Fresh and ready to use</span>
          </div>
          <p className="text-text-muted text-sm mb-4">Make something delicious with your tomatoes:</p>
        </div>
        <div className="space-y-3">
          {tomatoRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>
      </Modal>
    </>
  );
}
