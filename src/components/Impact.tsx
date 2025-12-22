'use client';

import { motion, type Variants } from 'framer-motion';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { staggerContainer, fadeInUp, slideInLeft } from '@/lib/animations';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export function Impact() {
  return (
    <div className="bg-charcoal py-20 md:py-28 relative overflow-hidden" id="impact">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
      <div className="mx-auto flex flex-col items-center relative z-10">
        <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-block px-3 py-1 bg-tomato/20 rounded-md text-tomato text-xs font-bold uppercase tracking-wider mb-6"
              >
                The Reality
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-white text-4xl md:text-5xl font-display font-bold leading-tight mb-8"
              >
                Your trash can <br/><span className="text-stone-400">eats better than you do.</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-stone-300 text-lg leading-relaxed mb-10 font-light"
              >
                It happens to everyone: the forgotten salad, the leftovers pushed to the back. These small habits contribute to a massive global problem and a bigger hole in your wallet.
              </motion.p>
              <motion.div
                className="flex flex-col gap-6"
                variants={staggerContainer}
              >
                <motion.div
                  variants={slideInLeft}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all"
                >
                  <motion.span
                    className="material-symbols-outlined text-tomato text-3xl mt-1"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    delete_forever
                  </motion.span>
                  <div>
                    <h3 className="text-white text-6xl md:text-7xl font-bold font-display">
                      <AnimatedNumber value={32} suffix="%" />
                    </h3>
                    <p className="text-stone-400 text-sm mt-1">of food is wasted by the average US household.</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={slideInLeft}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="relative receipt bg-white text-charcoal p-6 pb-12 shadow-2xl transform rotate-1 transition-transform"
                >
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="material-symbols-outlined text-stem text-4xl mt-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      savings
                    </motion.span>
                    <div>
                      <h3 className="text-charcoal text-7xl md:text-8xl font-bold font-display tracking-tighter">
                        -$<AnimatedNumber value={3} suffix="k" />
                      </h3>
                      <div className="h-px w-full bg-stone-300 my-2 dashed-line opacity-50"></div>
                      <p className="text-stone-600 font-mono text-xs uppercase tracking-widest mt-1">Annual Loss / Family of 4</p>
                      <div className="mt-4 flex gap-2 items-center">
                        <span className="text-[10px] font-mono text-stone-400">ITEM: GROCERIES</span>
                        <span className="flex-1 border-b border-stone-300 border-dotted"></span>
                        <span className="text-[10px] font-mono text-stone-400">WASTED</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-tomato rounded-full blur-[100px] opacity-20"></div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="space-y-4 translate-y-8">
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="bg-stone-800 rounded-2xl p-6 border border-stone-700 h-64 flex flex-col justify-end overflow-hidden relative group"
                  >
                    <div className="absolute inset-0 opacity-20" style={{backgroundImage: "repeating-linear-gradient(45deg, #444 0, #444 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px"}}></div>
                    <div className="relative z-10">
                      <motion.div
                        className="w-12 h-12 rounded-full border-4 border-tomato/50 mb-4 flex items-center justify-center"
                        animate={{ borderColor: ['rgba(229,62,62,0.5)', 'rgba(229,62,62,0.8)', 'rgba(229,62,62,0.5)'] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <span className="material-symbols-outlined text-tomato text-2xl">warning</span>
                      </motion.div>
                      <div className="text-3xl font-bold text-white mb-1">
                        <AnimatedNumber value={119} suffix=" lbs" />
                      </div>
                      <div className="text-xs text-stone-300 uppercase tracking-wide">Food waste / person / yr</div>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="bg-cream rounded-2xl p-6 h-40 flex flex-col justify-center items-center text-center"
                  >
                    <motion.span
                      className="material-symbols-outlined text-4xl text-charcoal mb-2"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                    >
                      eco
                    </motion.span>
                    <div className="font-display font-bold text-charcoal">Save the planet</div>
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="bg-tomato rounded-2xl p-6 h-40 flex flex-col justify-center items-center text-center text-white"
                  >
                    <motion.span
                      className="material-symbols-outlined text-4xl mb-2"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      savings
                    </motion.span>
                    <div className="font-display font-bold">Save your wallet</div>
                  </motion.div>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="bg-stone-800 rounded-2xl p-6 border border-stone-700 h-64 flex flex-col justify-end overflow-hidden relative group"
                  >
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-10"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <span className="material-symbols-outlined text-9xl text-white">check_circle</span>
                    </motion.div>
                    <div className="relative z-10">
                      <div className="w-full bg-stone-700 h-2 rounded-full overflow-hidden mb-4">
                        <motion.div
                          className="bg-stem h-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">Zero</div>
                      <div className="text-xs text-stone-300 uppercase tracking-wide">Waste Goal</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
