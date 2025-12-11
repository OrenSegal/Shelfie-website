import Image from 'next/image';

export function Cycle() {
  return (
    <div className="py-24 md:py-32 bg-cream-dark relative" id="cycle">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col max-w-[800px] w-full px-4 md:px-10 relative">
          <div className="text-center mb-20 relative z-10">
            <span className="text-tomato font-bold tracking-widest uppercase text-sm mb-2 block">How it works</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal">The Shelfie Cycle</h2>
            <p className="mt-4 text-text-muted text-lg">A continuous loop of smart kitchen management.</p>
          </div>
          <div className="absolute left-4 md:left-1/2 top-[180px] bottom-20 w-px -ml-px hidden md:block z-0">
            <div className="w-[2px] h-full dashed-line opacity-40 mx-auto"></div>
          </div>
          <div className="flex flex-col gap-24 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 group">
              <div className="md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
                <div className="bg-white p-6 rounded-3xl shadow-soft border border-stone-100 rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[320px]">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-stone-100 mb-4">
                    <Image alt="Scanning receipt" src="/cycle-1.webp" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="material-symbols-outlined text-white text-4xl">crop_free</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold text-charcoal uppercase tracking-wider">
                    <span>Scan Complete</span>
                    <span className="text-tomato">14 Items</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 size-12 rounded-full bg-tomato border-4 border-cream-dark items-center justify-center text-white z-10 shadow-lg">
                <span className="font-bold font-display">1</span>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-tomato font-bold mb-3">
                  <span className="material-symbols-outlined">photo_camera</span>
                  <span className="uppercase tracking-wide text-xs">Intake</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-charcoal mb-4">Snap your haul</h3>
                <p className="text-text-muted leading-relaxed">
                  Don&apos;t type a thing. Snap a photo of your receipt, scan your fridge shelf, or just speak your grocery list. Shelfie digitizes your kitchen instantly.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 group">
                <div className="md:w-1/2 order-1 text-center md:text-right">
                    <div className="inline-flex items-center gap-2 text-charcoal font-bold mb-3 md:flex-row-reverse">
                        <span className="material-symbols-outlined text-purple-600">psychology</span>
                        <span className="uppercase tracking-wide text-xs text-purple-600">Brain</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-charcoal mb-4">AI Catalogs Everything</h3>
                    <p className="text-text-muted leading-relaxed">
                        Our engine identifies ingredients, estimates quantities, and automatically tags expiration dates so you never have to guess &quot;is this still good?&quot;.
                    </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 size-12 rounded-full bg-purple-600 border-4 border-cream-dark items-center justify-center text-white z-10 shadow-lg">
                    <span className="font-bold font-display">2</span>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-2">
                    <div className="bg-white p-6 rounded-3xl shadow-soft border border-stone-100 -rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[320px]">
                        <div className="flex gap-3 mb-3">
                            <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <div>
                                <div className="h-2 w-24 bg-stone-100 rounded mb-1.5"></div>
                                <div className="h-2 w-16 bg-stone-100 rounded"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-charcoal p-2 bg-stone-50 rounded-lg">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                <span>Avocados (Ripe)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-charcoal p-2 bg-stone-50 rounded-lg">
                                <span className="material-symbols-outlined text-orange-500 text-sm">warning</span>
                                <span>Milk (Exp: 2 days)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 group">
                <div className="md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
                    <div className="bg-white p-2 rounded-3xl shadow-soft border border-stone-100 rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[320px]">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                            <Image alt="Gourmet meal" src="/cycle-3.webp" fill className="object-cover"/>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                                <div className="text-white font-bold font-display text-lg">Basil Pesto Pasta</div>
                                <div className="text-white/80 text-xs">Uses: Basil, Garlic, Pine Nuts</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 size-12 rounded-full bg-tomato border-4 border-cream-dark items-center justify-center text-white z-10 shadow-lg">
                    <span className="font-bold font-display">3</span>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-tomato font-bold mb-3">
                        <span className="material-symbols-outlined">restaurant_menu</span>
                        <span className="uppercase tracking-wide text-xs">Match</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-charcoal mb-4">Recipes meet Inventory</h3>
                    <p className="text-text-muted leading-relaxed">
                        The magic moment. We match what you <em>have</em> with what you can <em>make</em>. Prioritizing ingredients that need to be used now.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 group">
                <div className="md:w-1/2 order-1 text-center md:text-right">
                    <div className="inline-flex items-center gap-2 text-stem font-bold mb-3 md:flex-row-reverse">
                        <span className="material-symbols-outlined">recycling</span>
                        <span className="uppercase tracking-wide text-xs">Loop</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-charcoal mb-4">Waste nothing. Repeat.</h3>
                    <p className="text-text-muted leading-relaxed">
                        As you cook, your inventory updates automatically. Missing staples are added to your shopping list. The cycle continues, smarter every time.
                    </p>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 size-12 rounded-full bg-stem border-4 border-cream-dark items-center justify-center text-white z-10 shadow-lg">
                    <span className="font-bold font-display">4</span>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start order-2">
                    <div className="bg-charcoal text-white p-6 rounded-3xl shadow-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[320px]">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-display font-bold text-lg">Impact Report</span>
                            <span className="text-stem material-symbols-outlined">trending_up</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-3xl font-bold font-display">$124</div>
                                <div className="text-xs text-stone-400">Saved this month</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold font-display">4kg</div>
                                <div className="text-xs text-stone-400">Waste diverted</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center relative">
            <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] pointer-events-none opacity-20">
                <svg className="w-full h-full text-tomato" fill="none" viewBox="0 0 300 100">
                    <path className="cycle-loop-path" d="M150 100 C 50 100, 0 50, 150 0" stroke="currentColor" strokeDasharray="8 8" strokeWidth="2"></path>
                    <path d="M145 10 L 150 0 L 155 10" fill="currentColor"></path>
                </svg>
            </div>
            <div className="bg-white border border-stone-200 px-6 py-3 rounded-full shadow-sm z-10 text-sm font-bold text-charcoal flex items-center gap-2">
                <span className="material-symbols-outlined text-tomato">restart_alt</span>
                         Start the next cycle
                     </div>
          </div>
        </div>
      </div>
    </div>
  );
}
