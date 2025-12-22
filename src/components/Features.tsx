'use client';

import { motion, type Variants } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const featureCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export function Features() {
  return (
    <div className="bg-cream py-20 md:py-32" id="features">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-tomato font-bold tracking-widest uppercase text-sm mb-2 block"
            >
              Powerful Features
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-charcoal text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
            >
              Everything you need to <br /> master your kitchen.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              A complete operating system for your modern culinary life.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Food Shelfie - Large card */}
            <motion.div
              variants={featureCardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="col-span-2 row-span-2 bg-white rounded-3xl p-8 relative overflow-hidden group flex flex-col cursor-pointer shadow-soft hover:shadow-lg transition-shadow"
            >
              <div className="p-4 md:p-8 pb-0 flex-1">
                <motion.div
                  className="size-12 bg-tomato/10 rounded-xl flex items-center justify-center text-tomato mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="material-symbols-outlined text-2xl">photo_camera</span>
                </motion.div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Food Shelfie</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Shelfie recognizes that wilted spinach and the half-jar of pesto from a single photo, instantly updating your digital cupboard.
                </p>
              </div>
              <div className="mt-8 mx-4 md:mx-8 mb-8 relative rounded-2xl bg-stone-100 h-64 overflow-hidden border-4 border-stone-50 shadow-inner flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-[200px] space-y-2">
                  <motion.div
                    className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center text-green-600 font-bold text-xs">SP</div>
                    <div className="flex-1">
                      <div className="h-2 w-16 bg-stone-200 rounded mb-1"></div>
                      <div className="h-1.5 w-8 bg-stone-100 rounded"></div>
                    </div>
                    <motion.span
                      className="material-symbols-outlined text-green-500 text-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      viewport={{ once: true }}
                    >
                      check_circle
                    </motion.span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center text-yellow-600 font-bold text-xs">EG</div>
                    <div className="flex-1">
                      <div className="h-2 w-12 bg-stone-200 rounded mb-1"></div>
                      <div className="h-1.5 w-10 bg-stone-100 rounded"></div>
                    </div>
                    <motion.span
                      className="material-symbols-outlined text-green-500 text-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6, type: 'spring' }}
                      viewport={{ once: true }}
                    >
                      check_circle
                    </motion.span>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-sm z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="material-symbols-outlined text-stem">check_circle</span>
                  <div className="text-xs font-bold text-charcoal">Identified: Pesto, Spinach, Eggs...</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Match Recipes - Large card */}
            <motion.div
              variants={featureCardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="col-span-2 row-span-2 bg-orange-50 rounded-3xl p-8 flex flex-col cursor-pointer shadow-soft hover:shadow-lg transition-shadow"
            >
              <div className="p-4 md:p-8 pb-0 flex-1">
                <motion.div
                  className="size-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
                </motion.div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Match Recipes</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Recipes that save your avocados from the compost bin. Get instant ideas based on what you already have.
                </p>
              </div>
              <div className="mt-8 mx-4 md:mx-8 mb-8 relative rounded-2xl bg-stone-100 h-64 overflow-hidden border-4 border-stone-50 shadow-inner">
                <div className="absolute inset-0 p-4">
                  <motion.div
                    className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="h-32 bg-orange-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="material-symbols-outlined text-orange-300 text-6xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                        >
                          lunch_dining
                        </motion.span>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="h-4 w-3/4 bg-stone-100 rounded mb-2"></div>
                      <div className="flex gap-2">
                        <div className="h-2 w-12 bg-green-100 rounded"></div>
                        <div className="h-2 w-12 bg-orange-100 rounded"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute top-4 right-4 bg-tomato text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  Use it up!
                </motion.div>
              </div>
            </motion.div>

            {/* Smart Grocery List - Small card */}
            <motion.div
              variants={featureCardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-yellow-50 rounded-3xl p-6 flex flex-col cursor-pointer shadow-soft hover:shadow-lg transition-shadow"
            >
              <motion.div
                className="size-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-4"
                whileHover={{ rotate: 10 }}
              >
                <span className="material-symbols-outlined text-xl">checklist</span>
              </motion.div>
              <h3 className="text-lg font-bold font-display text-charcoal mb-2">Smart Grocery List</h3>
              <p className="text-text-muted leading-relaxed text-xs">
                Your grocery list knows when you run out of milk.
              </p>
            </motion.div>

            {/* Meal Planner - Small card */}
            <motion.div
              variants={featureCardVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-green-50 rounded-3xl p-6 flex flex-col cursor-pointer shadow-soft hover:shadow-lg transition-shadow"
            >
              <motion.div
                className="size-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4"
                whileHover={{ rotate: -10 }}
              >
                <span className="material-symbols-outlined text-xl">calendar_month</span>
              </motion.div>
              <h3 className="text-lg font-bold font-display text-charcoal mb-2">Meal Planner</h3>
              <p className="text-text-muted leading-relaxed text-xs">
                Plan your week around your leftovers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
