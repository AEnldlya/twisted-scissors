'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#1a1a1a]/95 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              data-magnetic
            >
              <div className="relative w-10 h-10 overflow-hidden">
                <Image 
                  src="/images/logo.png" 
                  alt="Twisted Scissors" 
                  fill 
                  className="object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <span className="font-display text-xl font-medium text-white tracking-wide">
                TWISTED <span className="text-[#B87333]">SCISSORS</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="relative text-white/80 hover:text-white transition-colors font-body text-sm tracking-wider uppercase group"
                  data-magnetic
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B87333] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              
              <a 
                href="tel:6032779842" 
                className="flex items-center gap-2 text-[#B87333] hover:text-white transition-colors"
                data-magnetic
              >
                <Phone size={16} />
                <span className="font-body text-sm">(603) 277-9842</span>
              </a>
              
              <a 
                href="https://bookoapp.com/book/twisted-scissors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#B87333] text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
                data-magnetic
                style={{ borderRadius: 0 }}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white p-2"
              data-magnetic
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#1a1a1a] transition-transform duration-500 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="font-display text-3xl text-white hover:text-[#B87333] transition-colors"
              style={{ 
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {link.label}
            </Link>
          ))}
          
          <a 
            href="tel:6032779842" 
            className="flex items-center gap-2 text-[#B87333] mt-4"
            style={{ 
              transitionDelay: isOpen ? '300ms' : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            <Phone size={20} />
            <span className="font-body text-lg">(603) 277-9842</span>
          </a>
          
          <a 
            href="https://bookoapp.com/book/twisted-scissors" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 px-10 py-4 bg-[#B87333] text-white font-body text-lg tracking-wider uppercase"
            onClick={() => setIsOpen(false)}
            style={{ 
              borderRadius: 0,
              transitionDelay: isOpen ? '400ms' : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
