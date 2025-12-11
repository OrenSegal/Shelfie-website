import Image from 'next/image';

export function ScrollingBanner() {
  return (
    <div className="w-full bg-charcoal overflow-hidden whitespace-nowrap py-12 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="flex animate-scroll gap-6 px-6">
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group">
          <Image src="/banner-1.webp" alt="Basil Pesto" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Basil Pesto</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800">
          <Image src="/banner-2.webp" alt="Fresh Produce" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Fresh Produce</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800">
          <Image src="/banner-3.webp" alt="Chef Mode" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Chef Mode</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800">
          <Image src="/banner-4.webp" alt="Easy Scan" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Easy Scan</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800 flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-tomato mb-2">auto_awesome</span>
            <div className="text-white font-display font-bold text-xl">2500+ Recipes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
