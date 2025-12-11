import { AppStoreBadge } from '@/components/AppStoreBadge';
import { GooglePlayBadge } from '@/components/GooglePlayBadge';

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full" data-testid="cta-badges">
                <a href="#" className="transition-transform hover:scale-105">
                    <AppStoreBadge />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                    <GooglePlayBadge />
                </a>
            </div>
            <p className="mt-8 text-white/60 text-sm">Available on iOS and Android. Free 14-day trial for premium features.</p>
        </div>
    </div>
  );
}
