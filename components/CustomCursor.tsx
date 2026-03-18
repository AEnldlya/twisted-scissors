'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Magnetic effect for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const magneticElement = target.closest('[data-magnetic]');
      
      if (magneticElement) {
        setIsHovering(true);
        const rect = magneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Pull cursor toward center of element
        const pullStrength = 0.3;
        targetRef.current = {
          x: e.clientX + (centerX - e.clientX) * pullStrength,
          y: e.clientY + (centerY - e.clientY) * pullStrength
        };
      } else if (target.closest('a, button, [role="button"], input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Animation loop
    const animate = () => {
      // Smooth follow with lerp
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px)`;
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate(${targetRef.current.x - 4}px, ${targetRef.current.y - 4}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`w-full h-full border transition-all duration-300 ${
            isHovering 
              ? 'border-[#B87333] scale-150 bg-[#B87333]/10' 
              : 'border-white scale-100'
          }`}
          style={{ borderRadius: 0 }}
        />
      </div>
      
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-[#B87333] pointer-events-none z-[9999] transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          borderRadius: 0,
          willChange: 'transform'
        }}
      />
    </>
  );
}
