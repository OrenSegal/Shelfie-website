// src/components/FloatingFood.tsx
import Image from 'next/image';

export function FloatingFood() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top Left - Blurriest (Far) */}
        <div className="absolute top-[10%] left-[5%] w-24 h-24 opacity-20 blur-[2px] animate-float" style={{ animationDuration: '8s' }}>
             <Image src="/icons/ingredients/avocado.webp" fill className="object-contain rotate-12" alt="" />
        </div>
        
        {/* Middle Right - Sharper */}
        <div className="absolute top-[40%] right-[10%] w-32 h-32 opacity-30 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>
             <Image src="/icons/ingredients/tomato.webp" fill className="object-contain -rotate-12" alt="" />
        </div>

        {/* Bottom Left - Very Blurred (Close) */}
        <div className="absolute bottom-[20%] left-[15%] w-40 h-40 opacity-10 blur-[4px] animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}>
             <Image src="/icons/ingredients/bread.webp" fill className="object-contain rotate-45" alt="" />
        </div>
    </div>
  );
}