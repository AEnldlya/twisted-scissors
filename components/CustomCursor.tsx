'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const isTouchRef = useRef(false);

  // Check for touch device on mount
  useEffect(() => {
    isTouchRef.current = window.matchMedia('(pointer: coarse)').matches;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    targetRef.current = { x: e.clientX, y: e.clientY };
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  // Magnetic effect handler
  const handleElementHover = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const magneticElement = target.closest('[data-magnetic]') as HTMLElement;
    
    if (magneticElement) {
      setIsHovering(true);
      
      // Check for cursor text
      const cursorTextAttr = magneticElement.getAttribute('data-cursor-text');
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
      }
      
      const rect = magneticElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Stronger pull toward center of element
      const pullStrength = 0.4;
      targetRef.current = {
        x: e.clientX + (centerX - e.clientX) * pullStrength,
        y: e.clientY + (centerY - e.clientY) * pullStrength
      };
    } else if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
      setIsHovering(true);
      setCursorText('');
    } else {
      setIsHovering(false);
      setCursorText('');
    }
  }, []);

  // Animation loop with smooth follow
  useEffect(() => {
    if (isTouchRef.current) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorTrail = cursorTrailRef.current;
    if (!cursor || !cursorDot || !cursorTrail) return;

    const animate = () => {
      // Smooth follow with different lerp speeds for each cursor element
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12;

      // Main cursor ring
      cursor.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px)`;
      
      // Cursor dot (follows faster)
      const dotX = targetRef.current.x + (posRef.current.x - targetRef.current.x) * 0.5;
      const dotY = targetRef.current.y + (posRef.current.y - targetRef.current.y) * 0.5;
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      
      // Trail (follows slower)
      const trailX = posRef.current.x + (targetRef.current.x - posRef.current.x) * 0.3;
      const trailY = posRef.current.y + (targetRef.current.y - posRef.current.y) * 0.3;
      cursorTrail.style.transform = `translate(${trailX - 6}px, ${trailY - 6}px)`;

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
  }, [handleMouseMove, handleElementHover, handleMouseEnter, handleMouseLeave]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`w-full h-full border transition-all duration-300 flex items-center justify-center ${
            isHovering 
              ? 'border-[#B87333] scale-150 bg-[#B87333]/10' 
              : 'border-white scale-100'
          }`}
          style={{ borderRadius: 0 }}
        >
          {cursorText && (
            <span className="text-[8px] font-body uppercase tracking-wider text-white whitespace-nowrap">
              {cursorText}
            </span>
          )}
        </div>
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
      
      {/* Cursor trail */}
      <div
        ref={cursorTrailRef}
        className={`fixed top-0 left-0 w-3 h-3 border border-[#B87333]/30 pointer-events-none z-[9998] transition-opacity duration-300 ${
          isVisible && isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          borderRadius: 0,
          willChange: 'transform'
        }}
      />
    </>
  );
}
