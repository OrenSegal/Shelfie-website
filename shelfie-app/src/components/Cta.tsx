import { AppleLogo } from '@/components/AppleLogo';
import { GooglePlayLogo } from '@/components/GooglePlayLogo';

export function Cta() {
  return (
    <div className="py-24 md:py-32 relative overflow-hidden bg-tomato">
        <div className="absolute inset-0 bg-[url('/cubes.webp')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-tomato to-red-600"></div>
        <div className="mx-auto flex flex-col items-center text-center px-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full mb-8 inline-block">
                <span className="material-symbols-outlined text-white text-4xl block">nutrition</span>
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-display font-black mb-6 tracking-tight leading-tight">
                Ready to close the loop?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-12 font-medium">
                Join thousands of smart kitchens today. Download Shelfie and put your fridge to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <button className="flex items-center justify-center gap-3 bg-charcoal text-white rounded-xl px-6 py-3 h-16 min-w-[200px] hover:bg-black transition-all hover:scale-105 shadow-xl group w-full sm:w-auto">
                    <AppleLogo />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] font-medium opacity-80">Download on the</span>
                        <span className="text-lg font-bold font-display">App Store</span>
                    </div>
                </button>
                <button className="flex items-center justify-center gap-3 bg-white text-charcoal rounded-xl px-6 py-3 h-16 min-w-[200px] hover:bg-stone-50 transition-all hover:scale-105 shadow-xl group w-full sm:w-auto border border-white">
                    <GooglePlayLogo />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] font-medium opacity-80">GET IT ON</span>
                        <span className="text-lg font-bold font-display">Google Play</span>
                    </div>
                </button>
            </div>
            <p className="mt-8 text-white/60 text-sm">Available on iOS and Android. Free 14-day trial for premium features.</p>
        </div>
    </div>
  );
}
