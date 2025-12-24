"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const cycleSteps = [
  {
    title: "Scan.",
    subtitle: "The Magic Camera",
    description: "Point at your messy fridge. Our AI identifies ingredients, brands, and expiry dates instantly.",
    icon: "/icons/interface/scan.webp",
    color: "bg-charcoal text-white",
    image: "/banner-4.webp" 
  },
  {
    title: "Track.",
    subtitle: "The Digital Twin",
    description: "Your physical pantry is now digital. Search it, sort it, and get notified before food spoils.",
    icon: "/icons/interface/inventory.webp",
    color: "bg-purple-100 text-purple-600",
    image: "/cubes.webp"
  },
  {
    title: "Cook.",
    subtitle: "The Chef Engine",
    description: "Get recipes based strictly on what you have right now. No 'run to the store' required.",
    icon: "/icons/kitchen_tools/kitchen_knife.webp",
    color: "bg-orange-100 text-orange-600",
    image: "/feature-2.webp"
  },
  {
    title: "Restock.",
    subtitle: "The Auto-List",
    description: "Used the last egg? It's already on your shopping list. The cycle completes itself.",
    icon: "/icons/interface/grocery.webp",
    color: "bg-green-100 text-stem",
    image: "/banner-3.webp"
  },
];

export function Cycle() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStep();
          return 0;
        }
        return prev + 1; // Adjust speed here
      });
    }, 50); // 50ms * 100 = 5 seconds per slide
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % cycleSteps.length);
  };

  const setStep = (index: number) => {
    setActiveStep(index);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeStep]);

  return (
    <section className="relative bg-cream-dark py-24 overflow-hidden" id="cycle">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        
        <div className="mb-12 text-center md:text-left">
           <span className="text-tomato font-bold tracking-widest uppercase text-xs mb-3 block">How it works</span>
           <h2 className="text-4xl md:text-6xl font-display font-black text-charcoal">
              The Loop.
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LEFT: The Interactive Phone */}
          <div className="w-full max-w-md lg:w-5/12 aspect-[9/18] relative flex-shrink-0">
             <div className="absolute inset-0 bg-charcoal rounded-[3rem] shadow-2xl border-[8px] border-charcoal overflow-hidden ring-1 ring-white/20 z-10 transform transition-transform duration-500 hover:scale-[1.02]">
                {/* Dynamic Image Layer */}
                {cycleSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  >
                    <div className="absolute inset-0 bg-stone-100">
                      <Image 
                          src={step.image} 
                          alt={step.title}
                          fill
                          className="object-cover"
                      />
                       {/* Gradient Overlay for Text Visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      
                      {/* Phone Internal UI */}
                      <div className="absolute bottom-10 left-6 right-6 text-white">
                          <div className="flex items-center gap-3 mb-4">
                              <div className={`p-2 rounded-xl backdrop-blur-md bg-white/20`}>
                                   <Image src={step.icon} width={24} height={24} alt="icon" />
                              </div>
                              <span className="text-sm font-bold uppercase tracking-wider opacity-80">{step.subtitle}</span>
                          </div>
                          <h3 className="font-display font-bold text-3xl leading-tight">{step.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-12 flex justify-between items-center px-6 z-20">
                    <span className="text-white/80 text-xs font-bold">9:41</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-2.5 bg-white/80 rounded-[1px]"></div>
                        <div className="w-0.5 h-2.5 bg-white/30 rounded-[1px]"></div>
                    </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-charcoal rounded-b-2xl z-20"></div>
             </div>
             
             {/* Decorative Background Blob behind phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-tomato/20 blur-[100px] -z-10"></div>
          </div>

          {/* RIGHT: The Controls (Story Mode) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center gap-4">
             {cycleSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setStep(index)}
                  className={`text-left group relative p-6 rounded-3xl transition-all duration-300 ${
                      activeStep === index 
                      ? 'bg-white shadow-soft scale-100' 
                      : 'hover:bg-white/50 scale-95 opacity-60 hover:opacity-100'
                  }`}
                >
                   {/* Progress Bar (Only visible when active) */}
                   {activeStep === index && (
                       <div className="absolute bottom-0 left-6 right-6 h-1 bg-stone-100 rounded-full overflow-hidden">
                           <div 
                              className="h-full bg-tomato transition-all duration-100 ease-linear"
                              style={{ width: `${progress}%` }}
                           ></div>
                       </div>
                   )}

                   <div className="flex items-center justify-between mb-2">
                       <h3 className="text-xl md:text-2xl font-bold text-charcoal">{step.title}</h3>
                       <span className="text-xs font-bold uppercase text-text-muted/50 tracking-wider hidden md:block">{step.subtitle}</span>
                   </div>
                   <p className="text-text-muted leading-relaxed font-medium max-w-md">
                       {step.description}
                   </p>
                </button>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}