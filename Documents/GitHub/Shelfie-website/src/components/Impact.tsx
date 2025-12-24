"use client";
import { useState } from 'react';
import Image from 'next/image';

export function Impact() {
  const [householdSize, setHouseholdSize] = useState<'solo' | 'couple' | 'family'>('family');

  const data = {
    solo: { label: "Just Me", amount: 800, weight: 119, items: 6 },
    couple: { label: "Couple", amount: 1600, weight: 238, items: 12 },
    family: { label: "Family of 4", amount: 3000, weight: 476, items: 24 },
  };

  const current = data[householdSize];

  return (
    <div className="bg-charcoal py-24 md:py-32 relative overflow-hidden" id="impact">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('/noise.svg')] pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] px-4 md:px-8 relative z-10">

        <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
                The average family throws away <br />
                <span className="text-tomato">$3,000 a year.</span>
             </h2>
             <p className="text-stone-400 text-xl">Don't be average.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: The "Receipt of Waste" (The Problem) */}
            <div className="relative group order-2 lg:order-1">
                {/* The Paper Receipt - more authentic */}
                <div className="bg-white p-6 md:p-8 w-full max-w-md mx-auto shadow-elevated rotate-[-2deg] hover:rotate-0 transition-transform duration-500 relative">

                    {/* Receipt Header */}
                    <div className="text-center border-b-2 border-dashed border-stone-300 pb-6 mb-6">
                        <div className="font-display font-black text-2xl text-charcoal uppercase tracking-widest mb-2">Your Kitchen</div>
                        <div className="text-stone-400 font-mono text-xs">Annual Waste Report • 2024</div>
                        <div className="text-stone-400 font-mono text-xs mt-1">━━━━━━━━━━━━━━━━━━━━</div>
                    </div>

                    {/* Receipt Items (The Brutal Truth) */}
                    <div className="space-y-4 font-mono text-sm md:text-base text-charcoal mb-8">
                        <div className="flex justify-between items-center">
                            <span className="uppercase">Food Weight Wasted</span>
                            <span className="font-bold">{current.weight} LBS</span>
                        </div>

                        <div className="text-xs text-stone-400 -mt-3 italic pl-4">
                            &quot;That's {current.items} shopping bags you paid for and never ate.&quot;
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <span className="uppercase">Groceries Unused</span>
                            <span className="font-bold">32%</span>
                        </div>
                         <div className="text-xs text-stone-400 -mt-3 italic pl-4">
                            &quot;1 in 3 items goes straight to the trash.&quot;
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <span className="uppercase">Produce Rotted</span>
                            <span className="font-bold">40%</span>
                        </div>
                        <div className="text-xs text-stone-400 -mt-3 italic pl-4">
                            &quot;Most of it is fruits and vegetables.&quot;
                        </div>

                        <div className="flex justify-between items-center opacity-50 line-through pt-2">
                            <span className="uppercase text-sm">Good Intentions</span>
                            <span>$0.00</span>
                        </div>

                        <div className="text-xs text-center text-stone-400 italic pt-2">
                            - - - - - - - - - - - - -
                        </div>
                    </div>

                    {/* Receipt Total */}
                    <div className="border-t-2 border-dashed border-stone-300 pt-6">
                        <div className="flex justify-between items-end mb-4">
                            <span className="font-display font-bold text-xl uppercase">Annual Loss</span>
                            <span className="font-mono font-bold text-3xl text-tomato">-${current.amount.toLocaleString()}</span>
                        </div>
                        <div className="text-center mt-6 font-hand text-2xl text-tomato rotate-[-2deg]">
                            That hurts. 💸
                        </div>
                        <div className="text-center text-xs text-stone-400 font-mono mt-4">
                            * Based on USDA data for average household waste
                        </div>
                    </div>
                </div>

                {/* Decorative glow */}
                <div className="absolute top-10 -left-10 w-32 h-32 bg-tomato rounded-full blur-[80px] opacity-40 pointer-events-none"></div>
            </div>

            {/* RIGHT: The Savings Calculator (The Solution) */}
            <div className="relative order-1 lg:order-2">
                <div className="bg-stone-800/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-stone-700 shadow-elevated hover:scale-[1.02] transition-transform">
                    <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white">What You'll Actually Save</h3>
                        <div className="flex bg-stone-900 p-1 rounded-full border border-stone-700">
                             {(['solo', 'couple', 'family'] as const).map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setHouseholdSize(size)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                                        householdSize === size
                                        ? 'bg-stem text-charcoal shadow-sm'
                                        : 'text-stone-400 hover:text-white'
                                    }`}
                                >
                                    {data[size].label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="text-center py-8">
                         <div className="text-[5rem] md:text-[6rem] leading-none font-display font-black text-white mb-4 tabular-nums tracking-tighter">
                            <span className="text-stem text-5xl align-top mr-2">+</span>
                            ${current.amount.toLocaleString()}
                        </div>
                        <p className="text-stone-400 text-lg font-medium">Back in your pocket. Every year.</p>
                    </div>

                    {/* Benefits breakdown */}
                    <div className="space-y-3">
                        <div className="bg-stone-900/50 rounded-xl p-4 border border-stone-700 flex items-center gap-4">
                             <div className="bg-stem/20 p-3 rounded-xl shrink-0">
                                 <span className="text-2xl">✈️</span>
                             </div>
                             <div>
                                 <p className="text-white font-bold text-lg">A real vacation</p>
                                 <p className="text-stone-400 text-sm">Not just dreaming about it</p>
                             </div>
                        </div>

                        <div className="bg-stone-900/50 rounded-xl p-4 border border-stone-700 flex items-center gap-4">
                             <div className="bg-fresh/20 p-3 rounded-xl shrink-0">
                                 <span className="text-2xl">🌍</span>
                             </div>
                             <div>
                                 <p className="text-white font-bold text-lg">Less environmental impact</p>
                                 <p className="text-stone-400 text-sm">~2,400 lbs CO₂ saved per year</p>
                             </div>
                        </div>

                        <div className="bg-stone-900/50 rounded-xl p-4 border border-stone-700 flex items-center gap-4">
                             <div className="bg-warning/20 p-3 rounded-xl shrink-0">
                                 <span className="text-2xl">🧘</span>
                             </div>
                             <div>
                                 <p className="text-white font-bold text-lg">Actually enjoy cooking</p>
                                 <p className="text-stone-400 text-sm">No more "what's for dinner?" panic</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
