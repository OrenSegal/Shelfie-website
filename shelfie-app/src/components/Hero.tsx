import Image from 'next/image';
import { AppleLogo } from '@/components/AppleLogo';
import { GooglePlayLogo } from '@/components/GooglePlayLogo';

export function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tomato/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stem/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>
      <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10 py-12 md:py-24">
        <div className="flex flex-col-reverse gap-12 md:gap-16 lg:flex-row items-center">
          <div className="flex flex-col gap-8 flex-1 text-center lg:text-left z-10">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-center lg:self-start bg-white border border-stone-200 rounded-full px-4 py-1.5 shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="material-symbols-outlined text-tomato text-sm">local_fire_department</span>
                <span className="text-xs font-bold text-charcoal uppercase tracking-wider font-display">Intelligent Kitchen OS v2.0</span>
              </div>
              <h1 className="text-charcoal text-5xl md:text-7xl font-display font-extrabold leading-[1.05] tracking-tight">
                Stop staring at your fridge. <br />
                <span className="text-tomato relative inline-block">
                  Just Shelfie it.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-stem opacity-40" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                  </svg>
                </span>
              </h1>
              <h2 className="text-text-muted text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 font-body">
                The intelligent kitchen co-pilot that transforms chaotic inventory into delicious dinners. Join the cycle of smart cooking.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 items-center">
              <button className="flex items-center justify-center gap-3 bg-charcoal text-white rounded-xl px-5 py-3 h-16 min-w-[180px] hover:bg-black transition-all hover:-translate-y-1 shadow-xl group w-full sm:w-auto">
                <AppleLogo />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium opacity-80">Download on the</span>
                  <span className="text-lg font-bold font-display">App Store</span>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-charcoal text-white rounded-xl px-5 py-3 h-16 min-w-[180px] hover:bg-black transition-all hover:-translate-y-1 shadow-xl group w-full sm:w-auto">
                <GooglePlayLogo />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium opacity-80">GET IT ON</span>
                  <span className="text-lg font-bold font-display">Google Play</span>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-text-muted">
              <div className="flex -space-x-3">
                <div className="size-10 rounded-full border-2 border-cream bg-stone-200" style={{ backgroundImage: "url('/avatar-1.webp')", backgroundSize: 'cover' }}></div>
                <div className="size-10 rounded-full border-2 border-cream bg-stone-200" style={{ backgroundImage: "url('/avatar-2.webp')", backgroundSize: 'cover' }}></div>
                <div className="size-10 rounded-full border-2 border-cream bg-stone-200" style={{ backgroundImage: "url('/avatar-3.webp')", backgroundSize: 'cover' }}></div>
                <div className="size-10 rounded-full border-2 border-cream bg-charcoal text-white flex items-center justify-center text-xs font-bold font-display">+50k</div>
              </div>
              <p className="font-medium">Home cooks saving money</p>
            </div>
          </div>
          <div className="w-full flex-1 relative group" style={{ perspective: '1000px' }}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-tomato/20 to-stem/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-soft border-4 border-white transform transition-transform duration-700 hover:rotate-1">
              <Image alt="Shelfie App Interface" src="/hero-image.webp" fill className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-500 scale-105" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border-2 border-white/50 rounded-2xl flex items-center justify-center pointer-events-none shadow-inner">
                <div className="absolute top-6 left-6 bg-charcoal/90 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-display font-medium flex items-center gap-2 shadow-lg z-20">
                  <span className="size-2 rounded-full bg-tomato animate-pulse"></span>
                  <span className="uppercase tracking-wide text-xs">AI Vision Active</span>
                </div>
                <div className="absolute top-[25%] right-[5%] bg-cream border border-stone-200 shadow-xl px-3 py-2 rounded-lg text-xs font-bold text-charcoal flex gap-2 items-center animate-bounce z-20" style={{ animationDuration: '3s' }}>
                  <div className="size-2 rounded-full bg-stem"></div>
                  <div className="flex flex-col leading-none gap-0.5">
                    <span className="font-display">Spinach</span>
                    <span className="text-text-muted font-normal text-[10px]">Expires in 2d</span>
                  </div>
                </div>
                <div className="absolute bottom-[30%] left-[8%] bg-cream border border-stone-200 shadow-xl px-3 py-2 rounded-lg text-xs font-bold text-charcoal flex gap-2 items-center animate-bounce z-20" style={{ animationDuration: '4s' }}>
                  <div className="size-2 rounded-full bg-tomato"></div>
                  <div className="flex flex-col leading-none gap-0.5">
                    <span className="font-display">Tomatoes</span>
                    <span className="text-text-muted font-normal text-[10px]">Great for Sauce</span>
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
