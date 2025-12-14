import { Cta } from '@/components/Cta';
import { Cycle } from '@/components/Cycle';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { ScrollingBanner } from '@/components/ScrollingBanner';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full max-w-full overflow-x-hidden flex-col">
      {/* Header */}
      <div className="w-full border-b border-stone-200/60 bg-cream/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="mx-auto max-w-[1200px] w-full">
          <div className="flex flex-1 flex-col px-4 md:px-6 lg:px-8">
            <header className="flex items-center justify-between whitespace-nowrap py-4">
              <div className="flex items-center gap-2 cursor-pointer select-none group">
                <div className="size-12 relative flex items-center justify-center">
                  <Image
                    src="/logo.png" 
                    alt="Shelfie Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-display font-bold tracking-tight text-charcoal">Shelfie</h2>
              </div>
              <div className="hidden md:flex flex-1 justify-center gap-10">
                <a className="text-text-main hover:text-tomato text-sm font-semibold transition-colors" href="#cycle">The Cycle</a>
                <a className="text-text-main hover:text-tomato text-sm font-semibold transition-colors" href="#features">Features</a>
                <a className="text-text-main hover:text-tomato text-sm font-semibold transition-colors" href="#impact">Impact</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-charcoal hover:bg-tomato transition-colors text-white text-sm font-bold shadow-lg">
                  <span className="truncate">Download</span>
                </button>
              </div>
            </header>
          </div>
        </div>
      </div>

      <main>
        <Hero />
        <ScrollingBanner />
        <Features />
        <Cycle />
        <Impact />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
