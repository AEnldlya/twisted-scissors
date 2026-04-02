'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, MapPin, Calendar, Star } from 'lucide-react';

// Floating Particle Component
const FloatingParticle = ({ delay, size, left, duration }: { delay: number; size: number; left: string; duration: number }) => (
  <div
    className="absolute rounded-full bg-[#B87333]/20 pointer-events-none"
    style={{
      width: size,
      height: size,
      left,
      bottom: '-20px',
      animation: `floatUp ${duration}s linear infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

// Magnetic Button Component
const MagneticButton = ({ 
  children, 
  href, 
  external = false,
  variant = 'copper'
}: { 
  children: React.ReactNode; 
  href: string;
  external?: boolean;
  variant?: 'copper' | 'outline';
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = variant === 'copper'
    ? 'inline-flex items-center gap-2 px-6 py-3 bg-[#B87333] text-white font-medium text-sm tracking-wide uppercase'
    : 'inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium text-sm tracking-wide uppercase hover:bg-white/10';

  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      ref={buttonRef}
      href={href}
      className={baseClasses}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s ease-out, background-color 0.3s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </a>
  );
};

// Text Reveal Component
const TextReveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <div
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
};

// 3D Tilt Card Component
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      ref={cardRef}
      style={{
        transform,
        transition: 'transform 0.3s ease-out',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Scroll Progress Bar
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-white/10 z-[9999]">
      <div
        className="h-full bg-[#B87333] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default function HeroAceternity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    size: Math.random() * 6 + 2,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <>
      <ScrollProgressBar />
      
      <section
        ref={containerRef}
        className="relative min-h-screen bg-[#1a1a1a] overflow-hidden"
      >
        {/* Mouse Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-40"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(184, 115, 51, 0.15), transparent 40%)`,
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <FloatingParticle key={p.id} {...p} />
          ))}
        </div>

        {/* Background Image with subtle zoom */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent z-10" />
          <Image
            src="/images/insideview.png"
            alt="Twisted Scissors Interior"
            fill
            className="object-cover opacity-40 scale-105"
            style={{
              animation: 'subtleZoom 20s ease-in-out infinite alternate',
            }}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <TextReveal delay={200}>
                  <span className="inline-block text-[#B87333] font-body text-sm tracking-wider uppercase">
                    Hanover, NH
                  </span>
                </TextReveal>

                <div className="space-y-2">
                  <TextReveal delay={400}>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                      Haircuts in
                    </h1>
                  </TextReveal>
                  <TextReveal delay={550}>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#B87333] leading-tight">
                      Hanover, NH
                    </h1>
                  </TextReveal>
                </div>

                <TextReveal delay={700}>
                  <p className="font-body text-lg text-white/70 max-w-md leading-relaxed">
                    Brooke has been cutting hair here for over 20 years.
                    She takes her time and listens to what you want.
                  </p>
                </TextReveal>

                <TextReveal delay={850}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <MagneticButton
                      href="https://bookoapp.com/book/twisted-scissors"
                      external
                      variant="copper"
                    >
                      Book Appointment
                      <ArrowRight size={18} />
                    </MagneticButton>
                    <MagneticButton
                      href="/services"
                      variant="outline"
                    >
                      View Services
                    </MagneticButton>
                  </div>
                </TextReveal>
              </div>

              {/* Right Side - 3D Tilt Stats Card */}
              <div className="lg:pl-12">
                <TextReveal delay={1000}>
                  <TiltCard>
                    <div className="bg-[#2a2a2a] p-8 border-l-4 border-[#B87333] shadow-2xl">
                      <div className="flex items-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-[#B87333] fill-[#B87333]"
                            style={{
                              animation: `starPulse 2s ease-in-out infinite`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="font-display text-5xl text-white mb-2">5.0</div>
                      <div className="font-body text-white/60 text-sm mb-8">
                        Google Rating
                      </div>

                      <div className="space-y-4 pt-6 border-t border-white/10">
                        <div
                          className="flex items-center gap-3 group"
                          style={{
                            transform: 'translateZ(20px)',
                          }}
                        >
                          <Award className="w-5 h-5 text-[#B87333] group-hover:scale-110 transition-transform" />
                          <span className="font-body text-white/80">20+ Years Experience</span>
                        </div>
                        <div
                          className="flex items-center gap-3 group"
                          style={{
                            transform: 'translateZ(20px)',
                          }}
                        >
                          <MapPin className="w-5 h-5 text-[#B87333] group-hover:scale-110 transition-transform" />
                          <span className="font-body text-white/80">53 S. Main St</span>
                        </div>
                        <div
                          className="flex items-center gap-3 group"
                          style={{
                            transform: 'translateZ(20px)',
                          }}
                        >
                          <Calendar className="w-5 h-5 text-[#B87333] group-hover:scale-110 transition-transform" />
                          <span className="font-body text-white/80">Wed-Sat</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </TextReveal>
              </div>
            </div>
          </div>
        </div>

        {/* Keyframe Animations */}
        <style jsx>{`
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
              transform: translateY(-10vh) scale(1);
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(-110vh) scale(0.5);
              opacity: 0;
            }
          }

          @keyframes subtleZoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }

          @keyframes starPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        `}</style>
      </section>
    </>
  );
}
