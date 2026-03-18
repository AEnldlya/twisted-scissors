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
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  shearAmount?: number;
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.03,
  as: Component = 'span',
  shearAmount = 10,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.char');
    
    gsap.set(chars, {
      y: '100%',
      skewX: -shearAmount,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(chars, {
      y: '0%',
      skewX: 0,
      opacity: 1,
      duration: 0.8,
      stagger: stagger,
      ease: 'power3.out',
      delay: delay,
    });

    return () => {
      tl.kill();
    };
  }, [children, delay, stagger, shearAmount]);

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
              className="char inline-block"
              style={{ willChange: 'transform, opacity' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
