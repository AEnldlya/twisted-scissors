'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  shearAmount?: number;
  duration?: number;
  start?: string;
  once?: boolean;
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.03,
  as: Component = 'span',
  shearAmount = 10,
  duration = 0.8,
  start = 'top 85%',
  once = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.char');
    
    // Set initial state
    gsap.set(chars, {
      y: '100%',
      skewX: -shearAmount,
      opacity: 0,
    });

    // Create animation timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: start,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
        onEnter: () => {
          // Store trigger reference for cleanup
          if (tl.scrollTrigger) {
            triggersRef.current.push(tl.scrollTrigger);
          }
        }
      },
    });

    tl.to(chars, {
      y: '0%',
      skewX: 0,
      opacity: 1,
      duration: duration,
      stagger: stagger,
      ease: 'power3.out',
      delay: delay,
    });

    return () => {
      // Clean up only this component's ScrollTrigger
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      tl.kill();
    };
  }, [children, delay, stagger, shearAmount, duration, start, once]);

  const words = children.split(' ');

  return (
    <Component
      ref={containerRef as any}
      className={`inline-block overflow-hidden ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="char inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
