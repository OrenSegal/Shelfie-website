import Image from 'next/image';

export function SocialProof() {
  return (
    <div className="py-12 border-y border-stone-100 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-text-muted mb-8">
            Join 50,000+ Smart Kitchens
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* These simulate press/partner logos - replace with real ones if you have them, or use illustrative placeholders */}
            <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl">TheVerge</span>
            </div>
            <div className="flex items-center gap-2">
                 <span className="font-display font-black text-xl">BonAppétit</span>
            </div>
            <div className="flex items-center gap-2">
                 <span className="font-display font-black text-xl">ProductHunt</span>
            </div>
             <div className="flex items-center gap-2">
                 <span className="font-display font-black text-xl">Apple</span>
            </div>
        </div>
        
        {/* User Review Ticker */}
        <div className="mt-12 flex gap-6 overflow-hidden relative">
            <div className="flex gap-6 animate-scroll whitespace-nowrap">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="w-[300px] bg-stone-50 p-4 rounded-xl border border-stone-100 flex-shrink-0">
                        <div className="flex gap-1 text-tomato mb-2">★★★★★</div>
                        <p className="text-sm text-charcoal font-medium mb-3">"I used to throw away so much food. This app literally paid for itself in week one."</p>
                        <div className="flex items-center gap-2 opacity-60">
                            <div className="w-6 h-6 bg-stone-300 rounded-full"></div>
                            <span className="text-xs font-bold">Sarah J.</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}