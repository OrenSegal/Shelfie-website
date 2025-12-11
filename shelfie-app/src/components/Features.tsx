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
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px] bento-grid">
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
            <div className="md:col-span-2 bg-orange-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
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

            <div className="md:col-span-1 bg-blue-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
              <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Smart Pantry Data</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Always know what you have.
                </p>
              </div>
            </div>
            <div className="md:col-span-1 bg-purple-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
                <div className="p-8 pb-0 flex-1">
                    <div className="size-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">monitoring</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Nutrition Data</h3>
                    <p className="text-text-muted leading-relaxed text-sm">
                       Eat smarter with automatic macro tracking.
                    </p>
                </div>
            </div>
        <div className="md:col-span-1 bg-yellow-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
            <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">checklist</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Grocery Automation</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  Shop smarter.
                </p>
            </div>
        </div>
        <div className="md:col-span-1 bg-green-50 rounded-3xl p-8 flex flex-col cursor-pointer active:scale-95 transition-transform">
            <div className="p-8 pb-0 flex-1">
                <div className="size-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">calendar_month</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-charcoal mb-3">Meal Planner</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                    Plan meals without the stress.
                </p>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
