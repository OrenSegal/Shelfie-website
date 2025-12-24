import Image from 'next/image';

const Tape = ({ className }: { className?: string }) => (
    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-1 z-30 ${className}`}></div>
);

export function Features() {
  return (
    <div className="bg-cream py-24 md:py-32 relative overflow-hidden" id="features">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-30 bg-[url('/noise.svg')] pointer-events-none mix-blend-multiply"></div>

      <div className="mx-auto max-w-[1200px] w-full px-4 md:px-8 relative z-10">

        <div className="mb-20 text-center">
            <span className="font-hand text-3xl text-tomato rotate-[-2deg] inline-block mb-2">Everything you need</span>
            <h2 className="text-charcoal text-4xl md:text-6xl font-display font-black tracking-tight">
              Your kitchen, <br />
              <span className="text-text-muted/60">but smarter.</span>
            </h2>
        </div>

        <div className="flex flex-col gap-20">

            {/* FEATURE 1: Pantry Intelligence (Room Organization) */}
            <div className="relative group">
                <div className="absolute top-0 right-0 w-full h-full bg-white rounded-[3rem] -rotate-1 shadow-soft"></div>
                <div className="relative bg-stone-50 rounded-[3rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-12 border-4 border-white shadow-card rotate-1 transition-transform hover:rotate-0">
                    <div className="flex-1 space-y-6 z-10">
                        <div className="flex gap-3">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                               <Image src="/icons/food_rooms/fridge.webp" width={32} height={32} alt="Fridge" />
                            </div>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                               <Image src="/icons/food_rooms/freezer.webp" width={32} height={32} alt="Freezer" />
                            </div>
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                               <Image src="/icons/food_rooms/pantry.webp" width={32} height={32} alt="Pantry" />
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-charcoal">
                            Know what you have. <br />
                            <span className="text-text-muted">Everywhere.</span>
                        </h3>
                        <p className="text-lg text-text-muted font-medium leading-relaxed">
                            Organize your kitchen the way you actually use it—fridge, freezer, pantry, counter, even that weird spice drawer.
                            <br/><br/>
                            Snap a photo of your groceries, and we'll sort them into the right spots. No typing. No hassle.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <span className="inline-flex items-center gap-2 bg-fresh/10 text-fresh px-4 py-2 rounded-full text-sm font-bold">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                Photo recognition
                            </span>
                            <span className="inline-flex items-center gap-2 bg-stem/10 text-stem px-4 py-2 rounded-full text-sm font-bold">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                Auto-categorized
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full h-[300px] md:h-[400px]">
                        {/* Visual representation */}
                        <div className="absolute top-10 left-10 w-64 h-72 bg-white p-3 pb-12 shadow-card rotate-[-6deg] z-10 transition-transform group-hover:translate-x-4 group-hover:-rotate-12">
                            <div className="relative w-full h-full bg-stone-200 overflow-hidden rounded-lg">
                                <Image src="/feature-1.webp" fill className="object-cover" alt="Organized pantry" />
                            </div>
                            <div className="absolute bottom-3 left-4 font-hand text-xl text-charcoal/80">Before</div>
                        </div>
                         <div className="absolute top-4 left-32 w-64 h-72 bg-white p-3 pb-12 shadow-card rotate-6 z-0 transition-transform group-hover:translate-x-8">
                             <div className="relative w-full h-full bg-cream overflow-hidden rounded-lg">
                                <Image src="/feature-2.webp" fill className="object-cover" alt="Sorted items" />
                            </div>
                            <div className="absolute bottom-3 left-4 font-hand text-xl text-charcoal/80">After ✨</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURE 2 & 3: Expiry Tracking + Rescue Recipes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Expiry Tracking */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-card border border-stone-100 hover:shadow-elevated transition-all relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-48 h-48 bg-warning/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center">
                            <span className="text-4xl">⏰</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-display text-charcoal">
                            Never forget <br />what's expiring.
                        </h3>
                        <p className="text-text-muted leading-relaxed">
                            We track expiry dates and give you a heads-up before things go bad. Fresh items stay green, soon-to-expire turn yellow, urgent ones flash orange.
                        </p>
                        {/* Status badges example */}
                        <div className="flex gap-3 flex-wrap pt-4">
                            <div className="flex items-center gap-2 bg-fresh/10 px-3 py-2 rounded-lg border border-fresh/20">
                                <div className="w-2 h-2 rounded-full bg-fresh"></div>
                                <span className="text-sm font-bold text-fresh">Fresh (7+ days)</span>
                            </div>
                            <div className="flex items-center gap-2 bg-warning/10 px-3 py-2 rounded-lg border border-warning/20">
                                <div className="w-2 h-2 rounded-full bg-warning"></div>
                                <span className="text-sm font-bold text-warning">Use soon (3-7 days)</span>
                            </div>
                            <div className="flex items-center gap-2 bg-urgent/10 px-3 py-2 rounded-lg border border-urgent/20">
                                <div className="w-2 h-2 rounded-full bg-urgent"></div>
                                <span className="text-sm font-bold text-urgent">Urgent (1-3 days)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rescue Recipes */}
                <div className="bg-charcoal text-white rounded-[2.5rem] p-8 md:p-10 shadow-elevated relative overflow-hidden hover:scale-[1.02] transition-transform">
                    <Tape />
                    <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 bg-stem/20 rounded-2xl flex items-center justify-center">
                            <span className="text-4xl">🦸</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-display">
                            Save food. <br />
                            Save money.
                        </h3>
                        <p className="text-stone-300 leading-relaxed">
                            Got avocados going soft? Tomatoes about to turn? We suggest recipes that use what's expiring first. Turn potential waste into tonight's dinner.
                        </p>
                        <div className="bg-stone-800/50 backdrop-blur-sm rounded-xl p-4 border border-stone-700">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">This week you saved:</span>
                                <span className="text-2xl font-black text-stem">$47</span>
                            </div>
                            <div className="flex gap-2">
                                <Image src="/icons/ingredients/avocado.webp" width={24} height={24} alt="Saved" className="opacity-60" />
                                <Image src="/icons/ingredients/tomato.webp" width={24} height={24} alt="Saved" className="opacity-60" />
                                <Image src="/icons/ingredients/basil.webp" width={24} height={24} alt="Saved" className="opacity-60" />
                                <span className="text-stone-500 text-sm self-center">+ 8 more items</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURE 4: Smart Grocery Lists */}
            <div className="bg-gradient-to-br from-stem/5 to-fresh/5 rounded-[3rem] p-8 md:p-12 border-2 border-stem/10 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-stem/10 rounded-full blur-3xl"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                            <Image src="/icons/interface/grocery.webp" width={32} height={32} alt="Grocery" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-charcoal">
                            Grocery lists that <br />
                            <span className="text-stem">write themselves.</span>
                        </h3>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Just say "2 lbs ground beef" or "6 tomatoes." No categories, no dropdowns. We figure it out.
                            <br/><br/>
                            Shopping with family? Everyone sees the same list in real-time. Check off items as you go.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-charcoal shadow-sm">
                                Voice input
                            </span>
                            <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-charcoal shadow-sm">
                                Family sync
                            </span>
                            <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-charcoal shadow-sm">
                                Store layout sorting
                            </span>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-card">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                <input type="checkbox" className="w-5 h-5 rounded" />
                                <div className="flex-1">
                                    <div className="font-bold text-charcoal">Milk (1 gallon)</div>
                                    <div className="text-xs text-text-muted">Dairy section</div>
                                </div>
                                <span className="text-xs text-stem font-bold">Added by Jordan</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                <input type="checkbox" checked className="w-5 h-5 rounded" />
                                <div className="flex-1 opacity-50 line-through">
                                    <div className="font-bold text-charcoal">Eggs (12 ct)</div>
                                    <div className="text-xs text-text-muted">Dairy section</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                                <input type="checkbox" className="w-5 h-5 rounded" />
                                <div className="flex-1">
                                    <div className="font-bold text-charcoal">Tomatoes × 6</div>
                                    <div className="text-xs text-text-muted">Produce</div>
                                </div>
                                <span className="text-xs text-stem font-bold">Added by you</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURE 5 & 6: Recipe Discovery + Meal Planning */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recipe Discovery */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-card border border-stone-100 space-y-6 hover:shadow-elevated transition-all">
                    <div className="w-14 h-14 bg-spice/10 rounded-xl flex items-center justify-center">
                        <Image src="/icons/interface/recipes.webp" width={28} height={28} alt="Recipes" />
                    </div>
                    <h4 className="text-2xl font-bold font-display text-charcoal">
                        Recipes you can <br />actually make tonight.
                    </h4>
                    <p className="text-text-muted leading-relaxed">
                        No more "Oh, I don't have paprika." We only show recipes you can make with what's already in your kitchen.
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                        <div className="flex items-center justify-between mb-2">
                            <div className="font-bold text-charcoal">Pasta Carbonara</div>
                            <div className="flex items-center gap-1 text-xs">
                                <svg className="w-4 h-4 text-stem" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <span className="font-bold text-stem">92% match</span>
                            </div>
                        </div>
                        <div className="text-xs text-text-muted">
                            You have: Pasta, eggs, cheese ✓ <br />
                            Missing: Bacon (suggest pancetta?)
                        </div>
                    </div>
                </div>

                {/* Meal Planning */}
                <div className="bg-gradient-to-br from-charcoal to-stone-800 text-white rounded-[2.5rem] p-8 shadow-elevated space-y-6 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-spice/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Image src="/icons/interface/calendar.webp" width={28} height={28} alt="Calendar" className="brightness-0 invert" />
                        </div>
                        <h4 className="text-2xl font-bold font-display mt-6">
                            Plan your week. <br />
                            Actually stick to it.
                        </h4>
                        <p className="text-stone-300 leading-relaxed mt-4">
                            Drag recipes onto your calendar. We'll prioritize what's expiring first and track nutrition automatically.
                        </p>
                        {/* Mini calendar preview */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 mt-6 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="text-xs font-bold text-stone-400">MON</div>
                                <div className="flex-1 bg-white/10 rounded-lg p-2 text-xs">
                                    Use avocados → Guacamole 🥑
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-xs font-bold text-stone-400">TUE</div>
                                <div className="flex-1 bg-white/10 rounded-lg p-2 text-xs">
                                    Pasta night 🍝
                                </div>
                            </div>
                            <div className="flex items-center gap-3 opacity-40">
                                <div className="text-xs font-bold text-stone-400">WED</div>
                                <div className="flex-1 bg-white/10 rounded-lg p-2 text-xs">
                                    Click to plan...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURE 7: Cooking Mode */}
            <div className="bg-stone-100 rounded-[3rem] p-8 md:p-12 border-4 border-white shadow-card relative overflow-hidden">
                <div className="absolute -left-20 top-1/2 w-64 h-64 bg-spice/10 rounded-full blur-3xl"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                            <span className="text-3xl">👨‍🍳</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-charcoal">
                            Hands-free cooking mode.
                        </h3>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Your hands are messy. Just say "next step" or "set timer for 5 minutes." Screen stays on, text is extra large, and we guide you through every step.
                        </p>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-stem/20 flex items-center justify-center text-sm font-bold text-stem">3</div>
                                <div className="text-xs font-bold text-stone-400 uppercase tracking-wide">Step 3 of 8</div>
                            </div>
                            <p className="text-charcoal font-medium leading-relaxed">
                                Whisk eggs and cheese together until smooth and creamy.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-lg text-sm font-bold text-charcoal hover:bg-stone-200 transition-colors">
                                    <span>🎤</span> Voice command
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-stem text-white rounded-lg text-sm font-bold hover:bg-stem/90 transition-colors">
                                    Next step →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-charcoal text-white rounded-2xl p-8 text-center shadow-elevated transform -rotate-2 hover:rotate-0 transition-transform">
                            <div className="text-6xl mb-4">⏱️</div>
                            <div className="text-5xl font-black font-display mb-2 tabular-nums">05:00</div>
                            <div className="text-stone-400 text-sm font-bold uppercase tracking-wide">Simmer timer</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
