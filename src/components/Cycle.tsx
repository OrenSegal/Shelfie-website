"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const cycleSteps = [
  {
    image: "/cycle-1.webp",
    alt: "Scanning receipt",
    title: "Snap your haul",
    description: "Don't type a thing. Snap a photo of your receipt, scan your fridge shelf, or just speak your grocery list. Shelfie digitizes your kitchen instantly.",
    icon: "photo_camera",
    category: "Intake",
    color: "text-tomato",
  },
  {
    image: "/feature-1.webp",
    alt: "AI categorizing items",
    title: "AI Catalogs Everything",
    description: "Our engine identifies ingredients, estimates quantities, and automatically tags expiration dates so you never have to guess 'is this still good?'.",
    icon: "psychology",
    category: "Brain",
    color: "text-purple-600",
  },
  {
    image: "/cycle-3.webp",
    alt: "Gourmet meal",
    title: "Recipes meet Inventory",
    description: "The magic moment. We match what you have with what you can make. Prioritizing ingredients that need to be used now.",
    icon: "restaurant_menu",
    category: "Match",
    color: "text-tomato",
  },
  {
    image: "/impact-2.webp",
    alt: "Impact report",
    title: "Waste nothing. Repeat.",
    description: "As you cook, your inventory updates automatically. Missing staples are added to your shopping list. The cycle continues, smarter every time.",
    icon: "recycling",
    category: "Loop",
    color: "text-stem",
  },
];

export function Cycle() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="py-24 md:py-32 bg-cream-dark relative" id="cycle">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col max-w-[800px] w-full px-4 md:px-10 relative">
          <div className="text-center mb-20 relative z-10">
            <span className="text-tomato font-bold tracking-widest uppercase text-sm mb-2 block">How it works</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal">The Shelfie Cycle</h2>
            <p className="mt-4 text-text-muted text-lg">A continuous loop of smart kitchen management.</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="sticky top-1/2 -translate-y-1/2">
                <div className="bg-white p-6 rounded-3xl shadow-soft border border-stone-100 rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[320px]">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-stone-100 mb-4">
                    <Image alt={cycleSteps[activeStep].alt} src={cycleSteps[activeStep].image} fill className="object-cover transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-24 relative z-10">
              {cycleSteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className="min-h-screen pt-24"
                >
                  <div className="inline-flex items-center gap-2 font-bold mb-3">
                    <span className={`material-symbols-outlined ${step.color}`}>{step.icon}</span>
                    <span className={`uppercase tracking-wide text-xs ${step.color}`}>{step.category}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-charcoal mb-4">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
