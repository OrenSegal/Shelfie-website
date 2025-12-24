import Image from 'next/image';

const icons = [
    'avocado', 'tomato', 'bread', 'cheese', 'milk_carton', 'strawberry', 'carrot', 'egg', 'pizza', 'wine'
];

export function Marquee() {
  return (
    <div className="w-full bg-tomato py-3 overflow-hidden border-y-4 border-white/20 rotate-1 scale-105 my-12">
      <div className="flex animate-scroll whitespace-nowrap gap-12">
        {[...icons, ...icons, ...icons].map((icon, i) => (
          <div key={i} className="flex items-center gap-2 text-white/90 font-display font-bold uppercase tracking-widest text-sm">
             <Image 
                src={`/icons/ingredients/${icon}.webp`} 
                width={24} 
                height={24} 
                alt="" 
                className="brightness-0 invert opacity-80" 
             />
             <span>{icon.replace('_', ' ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
}