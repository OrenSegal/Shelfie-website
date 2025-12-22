'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface FlyingItem {
  id: number;
  emoji: string;
  name: string;
}

const voiceCommands = [
  { text: "Add 2 avocados to fridge", items: [{ emoji: '🥑', name: 'Avocado' }, { emoji: '🥑', name: 'Avocado' }] },
  { text: "Move milk to shopping list", items: [{ emoji: '🥛', name: 'Milk' }] },
  { text: "Add eggs and butter to fridge", items: [{ emoji: '🥚', name: 'Eggs' }, { emoji: '🧈', name: 'Butter' }] },
  { text: "3 tomatoes expiring soon", items: [{ emoji: '🍅', name: 'Tomato' }, { emoji: '🍅', name: 'Tomato' }, { emoji: '🍅', name: 'Tomato' }] },
];

export function VoiceDemo() {
  const [isListening, setIsListening] = useState(false);
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const { text, isTyping, type, reset } = useTypewriter({ speed: 40 });

  const simulateVoice = useCallback(async () => {
    if (isListening) return;

    setIsListening(true);
    setShowSuccess(false);
    reset();

    // Wait for "listening" animation
    await new Promise(resolve => setTimeout(resolve, 800));

    const command = voiceCommands[currentCommand];

    // Type out the command
    await type(command.text);

    // Wait a moment, then fly items
    await new Promise(resolve => setTimeout(resolve, 500));

    // Create flying items
    const items = command.items.map((item, index) => ({
      id: Date.now() + index,
      emoji: item.emoji,
      name: item.name
    }));

    setFlyingItems(items);

    // Wait for animation
    await new Promise(resolve => setTimeout(resolve, 1200));

    setFlyingItems([]);
    setShowSuccess(true);
    setIsListening(false);

    // Cycle to next command
    setCurrentCommand(prev => (prev + 1) % voiceCommands.length);

    // Hide success after a moment
    await new Promise(resolve => setTimeout(resolve, 2000));
    setShowSuccess(false);
    reset();
  }, [isListening, currentCommand, type, reset]);

  return (
    <div className="bg-charcoal py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>

      <div className="mx-auto flex flex-col items-center relative z-10">
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
              Voice Control
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-white text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
            >
              Just say it. Shelfie gets it.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone-400 text-lg max-w-2xl mx-auto"
            >
              Hands covered in flour? Just tell Shelfie what you need.
              Voice commands make kitchen management effortless.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative bg-stone-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-stone-700 max-w-2xl mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Fridge visualization */}
            <div className="absolute top-8 right-8 w-24 h-32 bg-stone-700 rounded-xl border-2 border-stone-600 overflow-hidden">
              <div className="absolute top-2 right-2 w-1 h-6 bg-stone-500 rounded-full"></div>
              <div className="p-2 pt-4 flex flex-wrap gap-1 justify-center">
                <AnimatePresence>
                  {flyingItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="text-lg"
                      initial={{ x: -200, y: 100, opacity: 0, scale: 0.5 }}
                      animate={{
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: index * 0.15,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15
                        }
                      }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      {item.emoji}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Microphone button */}
            <div className="flex flex-col items-center">
              <motion.button
                onClick={simulateVoice}
                disabled={isListening}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                  isListening
                    ? 'bg-tomato shadow-glow'
                    : 'bg-stone-700 hover:bg-stone-600'
                }`}
                whileHover={!isListening ? { scale: 1.05 } : {}}
                whileTap={!isListening ? { scale: 0.95 } : {}}
                animate={isListening ? {
                  scale: [1, 1.1, 1],
                  transition: { repeat: Infinity, duration: 1 }
                } : {}}
              >
                <span className="material-symbols-outlined text-3xl text-white">
                  {isListening ? 'graphic_eq' : 'mic'}
                </span>
              </motion.button>

              <p className="mt-4 text-stone-400 text-sm">
                {isListening ? 'Listening...' : 'Click to simulate voice input'}
              </p>

              {/* Transcript area */}
              <div className="mt-8 min-h-[60px] w-full">
                <AnimatePresence mode="wait">
                  {text && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-stone-900/50 rounded-xl px-6 py-4 border border-stone-700"
                    >
                      <p className="text-white text-lg font-medium text-center">
                        &ldquo;{text}&rdquo;
                        {isTyping && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="inline-block w-0.5 h-5 bg-tomato ml-1 align-middle"
                          />
                        )}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="mt-4 flex items-center justify-center gap-2 text-stem"
                    >
                      <span className="material-symbols-outlined">check_circle</span>
                      <span className="font-medium">Added to your fridge!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Voice command suggestions */}
            <div className="mt-8 pt-6 border-t border-stone-700">
              <p className="text-stone-500 text-xs uppercase tracking-wider mb-3 text-center">Try saying</p>
              <div className="flex flex-wrap justify-center gap-2">
                {voiceCommands.map((cmd, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentCommand(index);
                      simulateVoice();
                    }}
                    disabled={isListening}
                    className="text-xs bg-stone-700/50 hover:bg-stone-700 text-stone-300 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50"
                  >
                    &ldquo;{cmd.text}&rdquo;
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
