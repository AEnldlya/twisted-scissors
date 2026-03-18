'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const scissorLeftRef = useRef<HTMLDivElement>(null);
  const scissorRightRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current === pathname) return;
    
    const container = containerRef.current;
    const scissorLeft = scissorLeftRef.current;
    const scissorRight = scissorRightRef.current;
    const overlay = overlayRef.current;
    
    if (!container || !scissorLeft || !scissorRight || !overlay) return;

    setIsTransitioning(true);

    // Create timeline for scissor cut transition
    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        prevPathRef.current = pathname;
      }
    });

    // Reset positions
    tl.set([scissorLeft, scissorRight], { 
      y: '-100%',
      rotation: 0
    })
    .set(overlay, { 
      clipPath: 'inset(0 50% 0 50%)',
      display: 'block'
    })
    // Scissors drop in from top
    .to([scissorLeft, scissorRight], {
      y: '0%',
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.05
    })
    // Scissor snip animation (rotate blades)
    .to(scissorLeft, {
      rotation: -15,
      duration: 0.15,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    }, '-=0.1')
    .to(scissorRight, {
      rotation: 15,
      duration: 0.15,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    }, '<')
    // Overlay expands from center (the "cut" revealing new page)
    .to(overlay, {
      clipPath: 'inset(0 0% 0 0%)',
      duration: 0.5,
      ease: 'power3.inOut'
    }, '-=0.1')
    // Scissors move down and out
    .to([scissorLeft, scissorRight], {
      y: '100%',
      duration: 0.3,
      ease: 'power2.in'
    }, '-=0.3')
    // Hide overlay
    .set(overlay, { display: 'none' });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  // Initial page load animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(container,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1
      }
    );
  }, []);

  return (
    <>
      {/* Scissor blades - left */}
      <div
        ref={scissorLeftRef}
        className={`fixed top-0 left-1/2 -translate-x-full z-[9999] pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          width: '60px',
          height: '100vh',
          transform: 'translateX(-100%) translateY(-100%)'
        }}
      >
        <svg viewBox="0 0 60 800" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bladeGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#B87333" />
            </linearGradient>
          </defs>
          <path
            d="M60 0 L60 800 L10 800 L0 0 Z"
            fill="url(#bladeGradLeft)"
          />
          {/* Blade edge highlight */}
          <path
            d="M60 0 L60 800 L55 800 L50 0 Z"
            fill="#B87333"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Scissor blades - right */}
      <div
        ref={scissorRightRef}
        className={`fixed top-0 left-1/2 z-[9999] pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          width: '60px',
          height: '100vh',
          transform: 'translateY(-100%)'
        }}
      >
        <svg viewBox="0 0 60 800" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bladeGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#B87333" />
            </linearGradient>
          </defs>
          <path
            d="M0 0 L0 800 L50 800 L60 0 Z"
            fill="url(#bladeGradRight)"
          />
          {/* Blade edge highlight */}
          <path
            d="M0 0 L0 800 L5 800 L10 0 Z"
            fill="#B87333"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Overlay that expands from the cut */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] bg-[#1a1a1a] hidden pointer-events-none"
        style={{ clipPath: 'inset(0 50% 0 50%)' }}
      />
      
      {/* Page content */}
      <div ref={containerRef} className="min-h-screen">
        {children}
      </div>
    </>
  );
}
