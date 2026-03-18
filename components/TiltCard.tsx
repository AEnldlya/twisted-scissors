'use client';

import { useRef, useState, ReactNode, useCallback } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  perspective?: number;
  scale?: number;
  glareEnabled?: boolean;
}

export default function TiltCard({ 
  children, 
  className = '',
  tiltAmount = 10,
  perspective = 1000,
  scale = 1.02,
  glareEnabled = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -tiltAmount;
      const rotateY = ((x - centerX) / centerX) * tiltAmount;
      
      setTransform(`perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`);
      
      // Update glare position
      if (glareEnabled) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlarePosition({ x: glareX, y: glareY });
      }
    });
  }, [tiltAmount, perspective, scale, glareEnabled]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform('');
    setGlarePosition({ x: 50, y: 50 });
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-300 ease-out ${className}`}
      style={{ 
        transform: transform || `perspective(${perspective}px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare effect */}
      {glareEnabled && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      
      {/* Content with 3D depth */}
      <div 
        className="relative z-0 transition-transform duration-300"
        style={{ 
          transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)',
        }}
      >
        {children}
      </div>
      
      {/* Dynamic shadow that follows tilt */}
      <div 
        className="absolute inset-0 -z-10 transition-all duration-300 pointer-events-none"
        style={{
          background: 'rgba(26, 26, 26, 0.15)',
          transform: isHovered 
            ? `translateZ(-40px) translate(${(glarePosition.x - 50) / 5}px, ${(glarePosition.y - 50) / 5}px) scale(0.95)` 
            : 'translateZ(-40px) translate(8px, 8px) scale(0.98)',
          opacity: isHovered ? 0.8 : 0.4,
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
}
