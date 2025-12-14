export function Impact() {
  return (
    <div className="bg-charcoal py-20 md:py-28 relative overflow-hidden" id="impact">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
      <div className="mx-auto flex flex-col items-center relative z-10">
        <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-tomato/20 rounded-md text-tomato text-xs font-bold uppercase tracking-wider mb-6">The Reality</div>
              <h2 className="text-white text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                Your trash can <br/><span className="text-stone-400">eats better than you do.</span>
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-10 font-light">
                It happens to everyone: the forgotten salad, the leftovers pushed to the back. These small habits contribute to a massive global problem and a bigger hole in your wallet.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="material-symbols-outlined text-tomato text-3xl mt-1">delete_forever</span>
                  <div>
                    <h3 className="text-white text-6xl md:text-7xl font-bold font-display">32%</h3>
                    <p className="text-stone-400 text-sm mt-1">of food is wasted by the average US household.</p>
                  </div>
                </div>
                <div className="relative receipt bg-white text-charcoal p-6 pb-12 shadow-2xl transform rotate-1 transition-transform hover:rotate-0">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-stem text-4xl mt-1">savings</span>
                    <div>
                      <h3 className="text-charcoal text-7xl md:text-8xl font-bold font-display tracking-tighter">-$3k</h3>
                      <div className="h-px w-full bg-stone-300 my-2 dashed-line opacity-50"></div>
                      <p className="text-stone-600 font-mono text-xs uppercase tracking-widest mt-1">Annual Loss / Family of 4</p>
                      <div className="mt-4 flex gap-2 items-center">
                         <span className="text-[10px] font-mono text-stone-400">ITEM: GROCERIES</span>
                         <span className="flex-1 border-b border-stone-300 border-dotted"></span>
                         <span className="text-[10px] font-mono text-stone-400">WASTED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-tomato rounded-full blur-[100px] opacity-20"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 h-64 flex flex-col justify-end overflow-hidden relative group">
                    <div className="absolute inset-0 opacity-20" style={{backgroundImage: "repeating-linear-gradient(45deg, #444 0, #444 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px"}}></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full border-4 border-tomato/50 mb-4 flex items-center justify-center">
                        <span className="material-symbols-outlined text-tomato text-2xl">warning</span>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">119 lbs</div>
                      <div className="text-xs text-stone-300 uppercase tracking-wide">Food waste / person / yr</div>
                    </div>
                  </div>
                  <div className="bg-cream rounded-2xl p-6 h-40 flex flex-col justify-center items-center text-center">
                    <span className="material-symbols-outlined text-4xl text-charcoal mb-2">eco</span>
                    <div className="font-display font-bold text-charcoal">Save the planet</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-tomato rounded-2xl p-6 h-40 flex flex-col justify-center items-center text-center text-white">
                    <span className="material-symbols-outlined text-4xl mb-2">savings</span>
                    <div className="font-display font-bold">Save your wallet</div>
                  </div>
                  <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 h-64 flex flex-col justify-end overflow-hidden relative group">
                     <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <span className="material-symbols-outlined text-9xl text-white">check_circle</span>
                     </div>
                    <div className="relative z-10">
                      <div className="w-full bg-stone-700 h-2 rounded-full overflow-hidden mb-4">
                        <div className="bg-stem h-full w-full"></div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">Zero</div>
                      <div className="text-xs text-stone-300 uppercase tracking-wide">Waste Goal</div>
                    </div>
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
