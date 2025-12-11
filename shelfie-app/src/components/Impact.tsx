import Image from 'next/image';

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
                The unspoken cost of <br/><span className="text-stone-400">your dinner.</span>
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-10 font-light">
                It happens to everyone: the forgotten salad, the leftovers pushed to the back. These small habits contribute to a massive global problem and a bigger hole in your wallet.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="material-symbols-outlined text-tomato text-3xl mt-1">delete_forever</span>
                  <div>
                    <h3 className="text-white text-8xl font-bold font-display">32%</h3>
                    <p className="text-stone-400 text-sm mt-1">of food is wasted by the average US household.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="material-symbols-outlined text-stem text-3xl mt-1">payments</span>
                  <div>
                    <h3 className="text-white text-8xl font-bold font-display">$3k</h3>
                    <p className="text-stone-400 text-sm mt-1">lost annually by a family of four.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-tomato rounded-full blur-[100px] opacity-20"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 h-64 flex flex-col justify-end overflow-hidden relative group">
                    <Image alt="Fresh veggies" src="/impact-1.webp" fill className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative z-10">
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
                    <Image alt="Cooking" src="/impact-2.webp" fill className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative z-10">
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
