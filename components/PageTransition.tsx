'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const overlayTopRef = useRef<HTMLDivElement>(null);
  const overlayBottomRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current === pathname) return;
    
    const line = lineRef.current;
    const overlayTop = overlayTopRef.current;
    const overlayBottom = overlayBottomRef.current;
    
    if (!line || !overlayTop || !overlayBottom) return;

    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        prevPathRef.current = pathname;
      }
    });

    // Reset
    tl.set(line, { 
      left: '-10%',
      opacity: 1
    })
    .set([overlayTop, overlayBottom], {
      scaleY: 0,
      display: 'block'
    })
    // Line draws across (the "snip")
    .to(line, {
      left: '110%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
    // Top half slides up
    .to(overlayTop, {
      scaleY: 1,
      duration: 0.35,
      ease: 'power3.in'
    }, '-=0.3')
    // Bottom half slides down
    .to(overlayBottom, {
      scaleY: 1,
      duration: 0.35,
      ease: 'power3.in'
    }, '<')
    // Brief hold
    .to({}, { duration: 0.1 })
    // Reset for exit
    .set([overlayTop, overlayBottom], {
      scaleY: 0,
      transformOrigin: 'center'
    })
    .set(line, { 
      left: '-10%',
      opacity: 0
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  // Initial page load
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(container,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.5,
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <>
      {/* The "snip" line - scissors cutting across */}
      <div
        ref={lineRef}
        className={`fixed top-1/2 -translate-y-1/2 z-[9999] pointer-events-none ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          left: '-10%',
          width: '120%',
          height: '4px'
        }}
      >
        {/* Main line */}
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #B87333 10%, #e0e0e0 50%, #B87333 90%, transparent 100%)',
            boxShadow: '0 0 20px rgba(184, 115, 51, 0.8), 0 0 40px rgba(184, 115, 51, 0.4)'
          }}
        />
        {/* Scissor icons at ends */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <svg width="40" height="40" viewBox="0 0 40 40" className="rotate-90">
            <path d="M20 5 L35 35 L20 30 L5 35 Z" fill="#B87333" stroke="#1a1a1a" strokeWidth="2"/>
            <circle cx="20" cy="25" r="3" fill="#1a1a1a"/>
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90">
            <path d="M20 5 L35 35 L20 30 L5 35 Z" fill="#B87333" stroke="#1a1a1a" strokeWidth="2"/>
            <circle cx="20" cy="25" r="3" fill="#1a1a1a"/>
          </svg>
        </div>
      </div>

      {/* Top overlay - slides up */}
      <div
        ref={overlayTopRef}
        className="fixed top-0 left-0 right-0 z-[9998] bg-[#1a1a1a] hidden pointer-events-none origin-bottom"
        style={{ 
          height: '50%',
          transform: 'scaleY(0)'
        }}
      />

      {/* Bottom overlay - slides down */}
      <div
        ref={overlayBottomRef}
        className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#1a1a1a] hidden pointer-events-none origin-top"
        style={{ 
          height: '50%',
          transform: 'scaleY(0)'
        }}
      />
      
      {/* Page content */}
      <div ref={containerRef} className="min-h-screen">
        {children}
      </div>
    </>
  );
}
