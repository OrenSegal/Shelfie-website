"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export function ScrollingBanner() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const rafRef = useRef<number>();

  // Auto-scroll animation using CSS animation
  useEffect(() => {
    if (isDragging && scrollContainer.current) {
      // Pause CSS animation when dragging
      scrollContainer.current.style.animationPlayState = 'paused';
    } else if (scrollContainer.current) {
      // Resume CSS animation when not dragging
      scrollContainer.current.style.animationPlayState = 'running';
    }
  }, [isDragging]);

  // iOS-style momentum scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainer.current?.offsetLeft || 0));
    setScrollLeft(scrollContainer.current?.scrollLeft || 0);
    setVelocity(0);
    lastXRef.current = e.pageX;
    lastTimeRef.current = Date.now();
    
    if (scrollContainer.current) {
      scrollContainer.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Apply momentum
    if (Math.abs(velocity) > 0.5 && scrollContainer.current) {
      const momentumScroll = () => {
        if (!scrollContainer.current) return;
        
        const currentVelocity = velocity * 0.95; // Friction
        scrollContainer.current.scrollLeft += currentVelocity;
        
        if (Math.abs(currentVelocity) > 0.1) {
          setVelocity(currentVelocity);
          rafRef.current = requestAnimationFrame(momentumScroll);
        } else {
          // Resume auto-scroll after momentum stops
          setTimeout(() => {
            if (scrollContainer.current) {
              scrollContainer.current.style.animationPlayState = 'running';
            }
          }, 1000);
        }
      };
      momentumScroll();
    } else {
      // Resume auto-scroll immediately if no momentum
      setTimeout(() => {
        if (scrollContainer.current) {
          scrollContainer.current.style.animationPlayState = 'running';
        }
      }, 1000);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX;
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const deltaX = x - lastXRef.current;
    
    // Calculate velocity for momentum
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime * 16); // Normalize to 60fps
    }
    
    const walk = (x - startX) * 1.2; // Scroll speed multiplier
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = scrollLeft - walk;
    }
    
    lastXRef.current = x;
    lastTimeRef.current = currentTime;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - (scrollContainer.current?.offsetLeft || 0));
    setScrollLeft(scrollContainer.current?.scrollLeft || 0);
    setVelocity(0);
    lastXRef.current = touch.pageX;
    lastTimeRef.current = Date.now();
    
    if (scrollContainer.current) {
      scrollContainer.current.style.animationPlayState = 'paused';
    }
  };

  const handleTouchEnd = () => {
    handleMouseUp(); // Same logic as mouse
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const deltaX = touch.pageX - lastXRef.current;
    
    // Calculate velocity for momentum
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime * 16); // Normalize to 60fps
    }
    
    const walk = (touch.pageX - startX) * 1.2; // Scroll speed multiplier
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = scrollLeft - walk;
    }
    
    lastXRef.current = touch.pageX;
    lastTimeRef.current = currentTime;
  };

  return (
    <div className="w-full bg-charcoal overflow-hidden whitespace-nowrap py-12 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div 
        ref={scrollContainer}
        className="flex animate-scroll gap-6 px-6 will-change-transform cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{ 
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
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
            <img 
              src="/logo.png" 
              alt="Shelfie Logo" 
              className="w-12 h-12 mb-2 object-contain"
            />
            <div className="text-white font-display font-bold text-xl">2500+ Recipes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
