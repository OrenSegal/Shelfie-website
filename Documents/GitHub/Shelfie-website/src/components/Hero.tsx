import Image from 'next/image';
import { AppStoreBadge } from '@/components/AppStoreBadge';
import { GooglePlayBadge } from '@/components/GooglePlayBadge';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-cream pt-10 pb-20 md:pt-20 md:pb-32">
      {/* Warm, organic background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tomato/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stem/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="mx-auto max-w-[1300px] w-full px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Headline & Copy */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-white border border-stone-200 rounded-full px-4 py-1.5 shadow-sm">
              <span className="size-2 bg-fresh rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-charcoal uppercase tracking-wider font-display">Your kitchen's new best friend</span>
            </div>

            <h1 className="text-charcoal text-5xl md:text-7xl lg:text-[5.5rem] font-display font-black leading-[0.9] tracking-tighter">
              Stop throwing <br />
              money in the <br />
              <span className="relative inline-block text-tomato">
                garbage.
                {/* Playful food icon */}
                <div className="absolute -right-16 top-0 w-14 h-14 hidden md:block">
                    <Image
                        src="/icons/ingredients/tomato.webp"
                        alt="Tomato"
                        width={56}
                        height={56}
                        className="object-contain animate-float"
                    />
                </div>
              </span>
            </h1>

            <p className="text-text-muted text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your kitchen already has everything for tonight's dinner. We help you see it, use it before it expires, and actually enjoy cooking again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
               <AppStoreBadge />
               <GooglePlayBadge />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-sm text-text-muted font-medium">
               <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-fresh" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Free to start
                </span>
               <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-fresh" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Works offline
                </span>
               <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-fresh" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    No subscriptions required
                </span>
            </div>
          </div>

          {/* Visual: App in Action */}
          <div className="relative group">
             {/* Phone mockup with real app interface */}
             <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-3 md:p-4 transform transition-transform duration-700 hover:scale-105 border-4 border-white/50">
                <div className="relative aspect-[4/5] bg-cream rounded-2xl overflow-hidden">
                    <Image src="/hero-image.webp" fill className="object-cover" alt="Shelfie app showing your pantry organized by room" />

                    {/* Floating badge: Expiring item alert */}
                    <div className="absolute top-8 -left-6 bg-white p-3 rounded-xl shadow-card border border-stone-100 flex items-center gap-3 animate-bounce-slow">
                        <div className="bg-warning/20 p-2 rounded-lg">
                             <Image src="/icons/ingredients/avocado.webp" width={32} height={32} alt="Avocado" />
                        </div>
                        <div>
                            <div className="text-xs text-warning font-bold uppercase tracking-wide">3 Days Left</div>
                            <div className="text-charcoal font-bold">Avocados</div>
                        </div>
                    </div>

                    {/* Floating badge: Recipe suggestion */}
                    <div className="absolute bottom-12 -right-4 bg-charcoal text-white p-4 rounded-xl shadow-elevated flex items-center gap-4 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                         <div>
                            <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wide">Use them in</div>
                            <div className="font-bold text-lg">Guacamole</div>
                        </div>
                        <div className="bg-stem/20 p-2 rounded-lg">
                             <Image src="/icons/ingredients/tomato.webp" width={24} height={24} alt="Recipe match" />
                        </div>
                    </div>
                </div>
             </div>

             {/* Warm glow behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-tomato/20 to-spice/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
