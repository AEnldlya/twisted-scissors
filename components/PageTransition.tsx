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

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        prevPathRef.current = pathname;
      }
    });

    // Reset positions
    tl.set([scissorLeft, scissorRight], { 
      y: '-120%',
      rotation: 0,
      scale: 1
    })
    .set(overlay, { 
      clipPath: 'inset(0 50% 0 50%)',
      display: 'block'
    })
    // Scissors drop in with bounce
    .to([scissorLeft, scissorRight], {
      y: '-10%',
      duration: 0.6,
      ease: 'bounce.out',
      stagger: 0.08
    })
    // Snip animation - blades close
    .to(scissorLeft, {
      rotation: -8,
      x: '+=10',
      duration: 0.12,
      ease: 'power2.in',
      yoyo: true,
      repeat: 1
    }, '-=0.2')
    .to(scissorRight, {
      rotation: 8,
      x: '-=10',
      duration: 0.12,
      ease: 'power2.in',
      yoyo: true,
      repeat: 1
    }, '<')
    // Cut reveal - overlay expands from center
    .to(overlay, {
      clipPath: 'inset(0 0% 0 0%)',
      duration: 0.4,
      ease: 'power3.out'
    }, '-=0.15')
    // Scissors exit
    .to([scissorLeft, scissorRight], {
      y: '120%',
      duration: 0.35,
      ease: 'power2.in'
    }, '-=0.25')
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
      { opacity: 0, y: 15 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.1
      }
    );
  }, []);

  return (
    <>
      {/* Left Scissor Blade */}
      <div
        ref={scissorLeftRef}
        className={`fixed top-0 left-1/2 z-[9999] pointer-events-none transition-opacity duration-200 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          width: '80px',
          height: '140vh',
          marginLeft: '-80px',
          transform: 'translateY(-120%)'
        }}
      >
        <svg viewBox="0 0 80 1200" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            {/* Metallic gradient for blade */}
            <linearGradient id="metalLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="20%" stopColor="#3d3d3d" />
              <stop offset="45%" stopColor="#8a8a8a" />
              <stop offset="50%" stopColor="#e0e0e0" />
              <stop offset="55%" stopColor="#8a8a8a" />
              <stop offset="80%" stopColor="#3d3d3d" />
              <stop offset="100%" stopColor="#B87333" />
            </linearGradient>
            {/* Shine effect */}
            <linearGradient id="shineLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="48%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="52%" stopColor="transparent" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            {/* Shadow */}
            <filter id="bladeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5"/>
            </filter>
          </defs>
          
          {/* Main blade shape */}
          <path
            d="M75 0 L80 0 L80 1200 L70 1200 L60 1100 L55 900 L50 700 L45 500 L40 300 L35 150 L30 50 L25 0 Z"
            fill="url(#metalLeft)"
            filter="url(#bladeShadow)"
          />
          
          {/* Shine overlay */}
          <path
            d="M75 0 L80 0 L80 1200 L70 1200 L60 1100 L55 900 L50 700 L45 500 L40 300 L35 150 L30 50 L25 0 Z"
            fill="url(#shineLeft)"
          />
          
          {/* Copper accent at blade edge */}
          <path
            d="M78 0 L80 0 L80 1200 L78 1200 Z"
            fill="#B87333"
            opacity="0.8"
          />
          
          {/* Screw/pivot point */}
          <circle cx="72" cy="200" r="8" fill="#4a4a4a" stroke="#B87333" strokeWidth="2"/>
          <circle cx="72" cy="200" r="4" fill="#2a2a2a"/>
        </svg>
      </div>

      {/* Right Scissor Blade */}
      <div
        ref={scissorRightRef}
        className={`fixed top-0 left-1/2 z-[9999] pointer-events-none transition-opacity duration-200 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          width: '80px',
          height: '140vh',
          transform: 'translateY(-120%)'
        }}
      >
        <svg viewBox="0 0 80 1200" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="metalRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="20%" stopColor="#3d3d3d" />
              <stop offset="45%" stopColor="#8a8a8a" />
              <stop offset="50%" stopColor="#e0e0e0" />
              <stop offset="55%" stopColor="#8a8a8a" />
              <stop offset="80%" stopColor="#3d3d3d" />
              <stop offset="100%" stopColor="#B87333" />
            </linearGradient>
            <linearGradient id="shineRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="48%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="52%" stopColor="transparent" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Main blade shape (mirrored) */}
          <path
            d="M5 0 L0 0 L0 1200 L10 1200 L20 1100 L25 900 L30 700 L35 500 L40 300 L45 150 L50 50 L55 0 Z"
            fill="url(#metalRight)"
            filter="url(#bladeShadow)"
          />
          
          {/* Shine overlay */}
          <path
            d="M5 0 L0 0 L0 1200 L10 1200 L20 1100 L25 900 L30 700 L35 500 L40 300 L45 150 L50 50 L55 0 Z"
            fill="url(#shineRight)"
          />
          
          {/* Copper accent at blade edge */}
          <path
            d="M2 0 L0 0 L0 1200 L2 1200 Z"
            fill="#B87333"
            opacity="0.8"
          />
          
          {/* Screw/pivot point */}
          <circle cx="8" cy="200" r="8" fill="#4a4a4a" stroke="#B87333" strokeWidth="2"/>
          <circle cx="8" cy="200" r="4" fill="#2a2a2a"/>
        </svg>
      </div>

      {/* Cut overlay */}
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
