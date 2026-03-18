'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current === pathname) return;
    
    const container = containerRef.current;
    const curtain = curtainRef.current;
    if (!container || !curtain) return;

    // Create timeline for page transition
    const tl = gsap.timeline();

    // Curtain reveal animation
    tl.set(curtain, { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      display: 'block'
    })
    .to(curtain, {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      duration: 0.8,
      ease: 'power3.inOut',
    })
    .set(curtain, { display: 'none' });

    prevPathRef.current = pathname;

    return () => {
      tl.kill();
    };
  }, [pathname]);

  // Initial page load animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(container,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      }
    );
  }, []);

  return (
    <>
      {/* Curtain overlay for page transitions */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[9998] bg-[#B87333] hidden pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
      />
      
      {/* Page content */}
      <div ref={containerRef} className="min-h-screen">
        {children}
      </div>
    </>
  );
}
