'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const blackScreenRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const prevPathRef = useRef(pathname);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const line = lineRef.current;
    const blackScreen = blackScreenRef.current;
    const container = containerRef.current;
    
    if (!line || !blackScreen || !container) return;

    // First load animation
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      
      const tl = gsap.timeline({
        onComplete: () => {
          setIsTransitioning(false);
        }
      });

      // Start with black screen
      tl.set(blackScreen, { display: 'block', opacity: 1 })
        .set(line, { left: '-10%', opacity: 0 })
        .set(container, { opacity: 0 })
        // Wait a moment on black
        .to({}, { duration: 0.3 })
        // Line appears and draws across
        .to(line, { opacity: 1, duration: 0.1 })
        .to(line, {
          left: '110%',
          duration: 0.6,
          ease: 'power2.inOut'
        })
        // Black screen fades to reveal content
        .to(blackScreen, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out'
        }, '-=0.3')
        .to(container, {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        }, '<')
        .set(blackScreen, { display: 'none' })
        .set(line, { left: '-10%', opacity: 0 });

      return;
    }

    // Page change animation
    if (prevPathRef.current !== pathname) {
      setIsTransitioning(true);
      
      const tl = gsap.timeline({
        onComplete: () => {
          setIsTransitioning(false);
          prevPathRef.current = pathname;
        }
      });

      // Fade to black
      tl.set(blackScreen, { display: 'block', opacity: 0 })
        .to(blackScreen, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.in'
        })
        // Brief hold on black
        .to({}, { duration: 0.15 })
        // Line draws across
        .set(line, { left: '-10%', opacity: 1 })
        .to(line, {
          left: '110%',
          duration: 0.5,
          ease: 'power2.inOut'
        })
        // Fade from black to reveal new page
        .to(blackScreen, {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.out'
        }, '-=0.2')
        .set(blackScreen, { display: 'none' })
        .set(line, { left: '-10%', opacity: 0 });
    }
  }, [pathname]);

  return (
    <>
      {/* Full black screen */}
      <div
        ref={blackScreenRef}
        className="fixed inset-0 z-[9997] bg-[#0a0a0a] pointer-events-none"
        style={{ display: 'block' }}
      />

      {/* The snip line */}
      <div
        ref={lineRef}
        className={`fixed top-1/2 -translate-y-1/2 z-[9998] pointer-events-none ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          left: '-10%',
          width: '120%',
          height: '3px'
        }}
      >
        {/* Glowing line */}
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #B87333 15%, #ffffff 50%, #B87333 85%, transparent 100%)',
            boxShadow: '0 0 30px rgba(184, 115, 51, 0.9), 0 0 60px rgba(184, 115, 51, 0.5), 0 0 90px rgba(255, 255, 255, 0.3)'
          }}
        />
      </div>
      
      {/* Page content */}
      <div ref={containerRef} className="min-h-screen" style={{ opacity: 0 }}>
        {children}
      </div>
    </>
  );
}
