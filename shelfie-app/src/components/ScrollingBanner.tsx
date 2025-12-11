import Image from 'next/image';

export function ScrollingBanner() {
  return (
    <div className="w-full bg-charcoal overflow-hidden whitespace-nowrap py-12 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="flex animate-scroll gap-6 px-6">
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group -rotate-2">
          <Image src="/banner-1.webp" alt="Basil Pesto" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Basil Pesto</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800 rotate-2">
          <Image src="/hero-image.webp" alt="Fridge Scan" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Fridge Scan</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl p-8 shrink-0 border border-white/10 bg-stone-800 flex flex-col justify-center items-center text-center text-white rotate-2">
            <p className="text-lg font-body mb-4">&quot;Shelfie has been a game-changer for my family. We waste less and eat better.&quot;</p>
            <span className="text-sm font-bold font-display">- Sarah J.</span>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800 -rotate-2">
          <Image src="/feature-2.webp" alt="Recipe Match" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Recipe Match</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800 rotate-2">
          <Image src="/banner-4.webp" alt="Easy Scan" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-display font-bold">Easy Scan</span>
          </div>
        </div>
        <div className="w-72 h-48 rounded-2xl p-8 shrink-0 border border-white/10 bg-stone-800 flex flex-col justify-center items-center text-center text-white -rotate-2">
            <p className="text-lg font-body mb-4">&quot;I love the recipe suggestions! It&apos;s like having a personal chef.&quot;</p>
            <span className="text-sm font-bold font-display">- Michael B.</span>
        </div>
        <div className="w-72 h-48 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 group bg-stone-800 flex items-center justify-center -rotate-2">
          <div className="text-center">
            <span className="material-symbols-outlined text-4xl text-tomato mb-2">auto_awesome</span>
            <div className="text-white font-display font-bold text-xl">2500+ Recipes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
