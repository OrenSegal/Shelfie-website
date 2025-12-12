"use client";
import { useState, useEffect, useRef } from 'react';

const cycleSteps = [
  {
    title: "Snap your haul",
    description: "Don't type a thing. Snap a photo of your receipt, scan your fridge shelf, or just speak your grocery list. Shelfie digitizes your kitchen instantly.",
    icon: "photo_camera",
    category: "Intake",
    color: "text-tomato",
  },
  {
    title: "AI Catalogs Everything",
    description: "Our engine identifies ingredients, estimates quantities, and automatically tags expiration dates so you never have to guess 'is this still good?'.",
    icon: "psychology",
    category: "Brain",
    color: "text-purple-600",
  },
  {
    title: "Recipes meet Pantry",
    description: "The magic moment. We match what you have with what you can make. Prioritizing ingredients that need to be used now.",
    icon: "restaurant_menu",
    category: "Match",
    color: "text-tomato",
  },
  {
    title: "Waste nothing. Repeat.",
    description: "As you cook, your pantry updates automatically. Missing staples are added to your shopping list. The cycle continues, smarter every time.",
    icon: "recycling",
    category: "Loop",
    color: "text-stem",
  },
];

const CycleVisual = ({ stepIndex }: { stepIndex: number }) => {
  switch (stepIndex) {
    case 0:
      return (
        <div className="w-full h-full bg-stone-100 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-charcoal/20">qr_code_scanner</span>
          </div>
          <div className="bg-white px-3 py-1 rounded shadow text-xs font-bold text-tomato z-10 animate-bounce">
            Scan Complete
          </div>
        </div>
      );
    case 1:
      return (
        <div className="w-full h-full bg-stone-100 p-4">
          <div className="space-y-2">
            <div className="h-2 w-full bg-stone-200 rounded animate-pulse"></div>
            <div className="h-2 w-2/3 bg-stone-200 rounded animate-pulse"></div>
            <div className="flex gap-2 mt-4">
              <span className="bg-purple-100 text-purple-600 text-[10px] px-2 py-0.5 rounded font-bold">Spinach</span>
              <span className="bg-purple-100 text-purple-600 text-[10px] px-2 py-0.5 rounded font-bold">Milk</span>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="w-full h-full bg-stone-100 relative">
          <div className="absolute top-2 left-2 right-2 bg-white p-2 rounded shadow-sm border border-stone-100">
            <div className="flex justify-between items-center mb-1">
              <div className="h-2 w-16 bg-stone-200 rounded"></div>
              <span className="text-[10px] text-green-600 font-bold">Match!</span>
            </div>
            <div className="h-10 bg-stone-50 rounded mb-1"></div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="w-full h-full bg-stone-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-charcoal mb-1">0%</div>
            <div className="text-[10px] uppercase text-text-muted tracking-widest">Waste</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export function Cycle() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
                setActiveStep(index);
            }
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
    <div className="py-16 md:py-32 bg-cream-dark relative" id="cycle">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col max-w-[800px] w-full px-0 md:px-10 relative">
          <div className="text-center mb-12 md:mb-20 px-4 relative z-10">
            <span className="text-tomato font-bold tracking-widest uppercase text-sm mb-2 block">How it works</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal">The Shelfie Cycle</h2>
            <p className="mt-4 text-text-muted text-lg">A continuous loop of smart kitchen management.</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="md:sticky md:top-1/2 md:-translate-y-1/2 hidden md:block">
                <div className="bg-white p-6 rounded-3xl shadow-soft border border-stone-100 rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[320px]">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-stone-100 mb-4">
                     <CycleVisual stepIndex={activeStep} />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Carousel / Desktop Vertical Scroll */}
            <div className="w-full md:w-1/2 flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-24 relative z-10 px-4 md:px-0 snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar">
              {cycleSteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className="min-w-[85vw] md:min-w-0 snap-center md:snap-align-none pt-0 md:min-h-screen md:pt-24 flex-shrink-0"
                >
                  <div className="block md:hidden mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 aspect-video relative overflow-hidden">
                       <CycleVisual stepIndex={index} />
                    </div>
                  </div>
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
