'use client';

import { useRef, useState, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export default function TiltCard({ 
  children, 
  className = '',
  tiltAmount = 10 
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -tiltAmount;
    const rotateY = ((x - centerX) / centerX) * tiltAmount;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('');
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{ 
        transform: transform || 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="transition-transform duration-300"
        style={{ 
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
        }}
      >
        {children}
      </div>
      
      {/* Shadow that moves with tilt */}
      <div 
        className="absolute inset-0 -z-10 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'rgba(26, 26, 26, 0.1)',
          transform: isHovered ? 'translateZ(-20px) translate(8px, 8px)' : 'translateZ(-20px)',
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}
