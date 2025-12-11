import Image from 'next/image';

export function Features() {
  return (
    <div className="bg-cream py-20 md:py-32" id="features">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10">
          <div className="text-center mb-16">
            <span className="text-tomato font-bold tracking-widest uppercase text-sm mb-2 block">Powerful Features</span>
            <h2 className="text-charcoal text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Everything you need to <br /> master your kitchen.
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A complete operating system for your modern culinary life.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 relative overflow-hidden group flex flex-col cursor-pointer active:scale-95 transition-transform">
              <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-tomato/10 rounded-xl flex items-center justify-center text-tomato mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">photo_camera</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Food Shelfie</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Log your entire grocery haul in seconds. Our AI recognizes ingredients from receipts, voice commands, or a quick snap of your fridge.
                </p>
              </div>
              <div className="mt-8 mx-8 mb-8 relative rounded-2xl bg-stone-100 h-64 overflow-hidden border-4 border-stone-50 shadow-inner">
                <Image alt="Scanning Feature Screenshot" src="/feature-1.webp" fill className="object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-sm">
                  <span className="material-symbols-outlined text-stem">check_circle</span>
                  <div className="text-xs font-bold text-charcoal">Scan Complete: 14 items</div>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
              <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Match Recipes</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Wondering what&apos;s for dinner? Get instant, chef-curated recipes based on the ingredients you already have.
                </p>
              </div>
              <div className="mt-8 mx-8 mb-8 relative rounded-2xl bg-stone-100 h-64 overflow-hidden border-4 border-stone-50 shadow-inner">
                <Image alt="Recipe Matching Screenshot" src="/feature-2.webp" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-tomato text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  100% Match
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
              <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Smart Pantry Data</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Always know what you have. Automatically track freshness, quantities, and even get storage tips.
                </p>
              </div>
              <div className="mt-8 mx-8 mb-8 relative rounded-2xl bg-stone-100 h-64 overflow-hidden border-4 border-stone-50 shadow-inner flex flex-col p-4 gap-2">
                <div className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><span className="material-symbols-outlined text-sm">egg</span></div>
                    <div className="text-sm font-bold text-charcoal">Eggs</div>
                  </div>
                  <div className="text-xs text-text-muted">12 ct</div>
                </div>
                <div className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600"><span className="material-symbols-outlined text-sm">water_drop</span></div>
                    <div className="text-sm font-bold text-charcoal">Milk</div>
                  </div>
                  <div className="text-xs text-red-500 font-bold">Exp: 2 days</div>
                </div>
                <div className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600"><span className="material-symbols-outlined text-sm">chess</span></div>
                    <div className="text-sm font-bold text-charcoal">Cheese</div>
                  </div>
                  <div className="text-xs text-text-muted">1 block</div>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
                <div className="p-8 pb-0 flex-1">
                    <div className="size-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">monitoring</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Nutrition Data</h3>
                    <p className="text-text-muted leading-relaxed text-sm">
                       Eat smarter with automatic macro tracking and nutritional insights for every meal you cook.
                    </p>
                </div>
                <div className="mt-8 mx-8 mb-8 relative rounded-2xl bg-stone-50 h-64 overflow-hidden border-4 border-stone-50 shadow-inner flex items-center justify-center p-6">
                    <div className="relative size-32">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-stone-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8"></path>
                            <path className="text-stem" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeWidth="3.8"></path>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold font-display text-charcoal">75%</span>
                            <span className="text-[10px] font-bold text-text-muted uppercase">Protein Goal</span>
                        </div>
                    </div>
                </div>
            </div>
        <div className="bg-yellow-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
            <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">checklist</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Grocery Automation</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Shop smarter. Your grocery list auto-populates when you&apos;re low on staples or planning a new recipe.
                </p>
            </div>
            <div className="mt-8 mx-8 mb-8 relative rounded-2xl bg-stone-50 h-64 overflow-hidden border-4 border-stone-50 shadow-inner p-4">
                <div className="flex justify-between items-end mb-4 border-b border-stone-200 pb-2">
                    <span className="font-bold text-lg text-charcoal">Trader Joe&apos;s</span>
                    <span className="text-xs text-tomato font-bold bg-tomato/10 px-2 py-1 rounded">4 items</span>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="size-5 rounded border-2 border-stone-300"></div>
                        <span className="text-charcoal font-medium">Olive Oil</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="size-5 rounded border-2 border-stone-300"></div>
                        <span className="text-charcoal font-medium">Garlic</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-40">
                        <div className="size-5 rounded border-2 border-stem bg-stem flex items-center justify-center"><span className="material-symbols-outlined text-white text-xs">check</span></div>
                        <span className="text-charcoal font-medium line-through">Pasta</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-green-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
            <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">calendar_month</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Meal Planner</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                    Plan meals without the stress. Simply drag and drop recipes into your week, tailored to your diet and current inventory.
                </p>
            </div>
            <div className="mt-8 mx-8 mb-8 relative rounded-2xl bg-stone-50 h-64 overflow-hidden border-4 border-stone-50 shadow-inner p-4">
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    <div className="flex-shrink-0 w-12 flex flex-col items-center gap-1">
                        <span className="text-[10px] uppercase font-bold text-text-muted">Mon</span>
                        <div className="size-8 rounded-full bg-charcoal text-white flex items-center justify-center text-xs font-bold">12</div>
                    </div>
                    <div className="flex-shrink-0 w-12 flex flex-col items-center gap-1 opacity-40">
                        <span className="text-[10px] uppercase font-bold text-text-muted">Tue</span>
                        <div className="size-8 rounded-full bg-stone-200 text-charcoal flex items-center justify-center text-xs font-bold">13</div>
                    </div>
                    <div className="flex-shrink-0 w-12 flex flex-col items-center gap-1 opacity-40">
                        <span className="text-[10px] uppercase font-bold text-text-muted">Wed</span>
                        <div className="size-8 rounded-full bg-stone-200 text-charcoal flex items-center justify-center text-xs font-bold">14</div>
                    </div>
                </div>
                <div className="bg-white p-3 rounded-xl border-l-4 border-tomato shadow-sm mb-2">
                    <div className="text-xs font-bold text-tomato mb-1">Dinner</div>
                    <div className="text-sm font-bold text-charcoal">Spicy Basil Chicken</div>
                </div>
                <div className="bg-white p-3 rounded-xl border-l-4 border-stem shadow-sm">
                    <div className="text-xs font-bold text-stem mb-1">Lunch</div>
                    <div className="text-sm font-bold text-charcoal">Leftover Salad</div>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
