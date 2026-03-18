'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Clock, MapPin, ArrowRight, Phone, Calendar, Award, Scissors } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import TiltCard from '@/components/TiltCard';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const services = [
    { name: 'Classic Haircut', price: '$35', duration: '30 min', description: 'A precision cut tailored to your style' },
    { name: 'Fade / Taper', price: '$40', duration: '35 min', description: 'Clean fade with sharp lines' },
    { name: 'Beard Trim', price: '$20', duration: '15 min', description: 'Keep your beard looking sharp' },
    { name: 'Haircut & Beard', price: '$50', duration: '45 min', description: 'The complete grooming package' },
  ];

  const reviews = [
    { name: 'Rusty S.', rating: 5, text: 'Brooke listens to me, rather than merely doing the same thing every time. She\'s always good-humored, and respectful of schedules.', date: 'Dec 2024' },
    { name: 'T. N.', rating: 5, text: 'Brooke is great! She\'s pretty skilled with a pair of scissors and a razor for a men\'s haircut. Highly recommend!', date: 'Jul 2024' },
    { name: 'Susan Henderson', rating: 5, text: 'Great haircuts by Brooke. Have been there many times and always happy with how my hair is cut.', date: 'Jul 2024' },
    { name: 'Lynne Weaver', rating: 5, text: 'Thank you Brooke for taking the time to get my color and style just perfect!! I absolutely love it!', date: 'May 2024' },
    { name: 'Meredith Erickson', rating: 5, text: 'Stylist was friendly, haircut was exactly what I requested, salon was super clean and welcoming.', date: 'Feb 2024' },
    { name: 'Reagan Quinn', rating: 5, text: 'Brooke is super friendly, and the salon is very nice and clean! Wonderful job cutting and styling.', date: 'Feb 2024' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax - multi-layer depth effect
      if (heroRef.current && heroImageRef.current) {
        const st = ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (heroImageRef.current) {
              gsap.set(heroImageRef.current, {
                yPercent: self.progress * 30,
                scale: 1 + self.progress * 0.1,
              });
            }
          }
        });
        triggersRef.current.push(st);
      }

      // Hero content fade out with parallax
      if (heroContentRef.current && heroRef.current) {
        const st = ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: '50% top',
          scrub: 1,
          onUpdate: (self) => {
            if (heroContentRef.current) {
              gsap.set(heroContentRef.current, {
                opacity: 1 - self.progress,
                y: -self.progress * 80,
              });
            }
          }
        });
        triggersRef.current.push(st);
      }

      // Services section - diagonal clip reveal with stagger
      if (servicesRef.current) {
        const serviceCards = servicesRef.current.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
          gsap.set(card, { 
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            opacity: 0 
          });
          
          const st = ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(card, {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                opacity: 1,
                duration: 1.2,
                ease: 'power3.inOut',
                delay: index * 0.15,
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                opacity: 0,
                duration: 0.8,
                ease: 'power3.inOut',
              });
            }
          });
          triggersRef.current.push(st);
        });
      }

      // About section - shear reveal with stagger
      if (aboutRef.current) {
        const aboutElements = aboutRef.current.querySelectorAll('.about-reveal');
        aboutElements.forEach((el, index) => {
          gsap.set(el, { y: 60, skewY: 3, opacity: 0 });
          
          const st = ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(el, {
                y: 0,
                skewY: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                delay: index * 0.12,
              });
            },
            onLeaveBack: () => {
              gsap.to(el, {
                y: 60,
                skewY: 3,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.in',
              });
            }
          });
          triggersRef.current.push(st);
        });
      }

      // Reviews - staggered fade with shear
      if (reviewsRef.current) {
        const reviewCards = reviewsRef.current.querySelectorAll('.review-card');
        reviewCards.forEach((card, index) => {
          gsap.set(card, { y: 50, skewY: 2, opacity: 0 });
          
          const st = ScrollTrigger.create({
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(card, {
                y: 0,
                skewY: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                delay: index * 0.1,
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                y: 50,
                skewY: 2,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
              });
            }
          });
          triggersRef.current.push(st);
        });
      }

      // CTA section - scale reveal
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { scale: 0.95, opacity: 0 });
        
        const st = ScrollTrigger.create({
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            gsap.to(ctaRef.current, {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(ctaRef.current, {
              scale: 0.95,
              opacity: 0,
              duration: 0.6,
              ease: 'power3.in',
            });
          }
        });
        triggersRef.current.push(st);
      }
    });

    return () => {
      // Clean up all ScrollTriggers
      triggersRef.current.forEach(st => st.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section - Asymmetric Editorial Layout */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-[#1a1a1a] overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div 
          ref={heroImageRef}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10" />
          <Image
            src="/images/insideview.png"
            alt="Twisted Scissors Interior"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* Steam/Mist Particles */}
        <div className="steam-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="steam-particle"
              style={{
                left: `${15 + i * 14}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${7 + i * 1.5}s`,
              }}
            />
          ))}
        </div>

        {/* Barber Pole Stripe Accent */}
        <div className="absolute top-0 right-0 w-2 h-full opacity-20 z-10">
          <div className="w-full h-full barber-stripes-animated" />
        </div>

        {/* Hero Content - Asymmetric Layout */}
        <div 
          ref={heroContentRef}
          className="relative z-20 min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Content - Offset */}
              <div className="lg:col-span-7 lg:col-start-1">
                <div className="mb-8">
                  <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                    Est. Hanover, NH
                  </span>
                </div>
                
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9] mb-8">
                  <TextReveal delay={0.2} stagger={0.04}>
                    Precision
                  </TextReveal>
                  <br />
                  <TextReveal delay={0.4} stagger={0.04}>
                    Cuts.
                  </TextReveal>
                  <br />
                  <span className="text-[#B87333]">
                    <TextReveal delay={0.6} stagger={0.04}>
                      Timeless Style.
                    </TextReveal>
                  </span>
                </h1>
                
                <p className="font-body text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
                  Brooke brings 20+ years of expertise to every cut. 
                  No rushed appointments. No cookie-cutter styles. 
                  Just sharp work that speaks for itself.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://bookoapp.com/book/twisted-scissors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-copper"
                    data-magnetic
                    data-cursor-text="Book"
                  >
                    Book Appointment
                    <ArrowRight size={18} />
                  </a>
                  <Link 
                    href="/services" 
                    className="btn-outline-white"
                    data-magnetic
                  >
                    View Services
                  </Link>
                </div>
              </div>

              {/* Right Side - Stats Card */}
              <div className="lg:col-span-4 lg:col-start-9 mt-12 lg:mt-0">
                <div className="bg-[#2a2a2a] p-8 border-l-4 border-[#B87333]">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#B87333] fill-[#B87333]" />
                    ))}
                  </div>
                  <div className="font-display text-6xl text-white mb-2">5.0</div>
                  <div className="font-body text-white/60 text-sm tracking-wider uppercase mb-8">
                    Google Rating
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-[#B87333]" />
                      <span className="font-body text-white/80">20+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#B87333]" />
                      <span className="font-body text-white/80">53 S. Main St</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#B87333]" />
                      <span className="font-body text-white/80">Wed-Sat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs text-white/40 tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#B87333] to-transparent" />
          </div>
        </div>
      </section>

      {/* Section Divider - Scissor Snip */}
      <div className="section-divider bg-[#F8F6F3]" />

      {/* Services Preview - Asymmetric Grid */}
      <section 
        ref={servicesRef}
        className="py-24 lg:py-32 bg-[#F8F6F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header - Offset */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-4">
                What We Do
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1]">
                <TextReveal>
                  Services
                </TextReveal>
                <br />
                <span className="text-[#B87333]">
                  <TextReveal delay={0.2}>
                    & Pricing
                  </TextReveal>
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body text-lg text-[#1a1a1a]/70 leading-relaxed">
                Straightforward pricing for quality work. Every service includes 
                a consultation to ensure you get exactly what you want.
              </p>
            </div>
          </div>

          {/* Services Grid - Offset Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <TiltCard key={service.name} className="service-card" glareEnabled={true}>
                <div 
                  className={`bg-white p-8 lg:p-10 border-l-4 border-[#B87333] shadow-sharp hover:shadow-sharp-copper transition-shadow duration-500 ${
                    index % 2 === 1 ? 'md:mt-12' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <Scissors className="w-8 h-8 text-[#B87333]" />
                    <span className="font-display text-4xl text-[#B87333]">{service.price}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-[#1a1a1a] mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="font-body text-[#1a1a1a]/60 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#1a1a1a]/40">
                    <Clock className="w-4 h-4" />
                    <span className="font-body text-sm">{service.duration}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="/services" 
              className="btn-primary inline-flex"
              data-magnetic
            >
              All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Razor Line Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="razor-line" />
      </div>

      {/* About Section - Editorial Layout */}
      <section 
        ref={aboutRef}
        className="py-24 lg:py-32 bg-[#1a1a1a] relative overflow-hidden"
      >
        {/* Barber Pole Stripe Background */}
        <div className="absolute inset-0 barber-stripes opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image - Overlapping */}
            <div className="lg:col-span-6 about-reveal">
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden mirror-hover">
                  <Image
                    src="/images/insideview.png"
                    alt="Twisted Scissors Interior"
                    fill
                    className="object-cover img-shear-hover"
                  />
                </div>
                {/* Overlapping Stats Box */}
                <div className="absolute -bottom-8 -right-8 bg-[#B87333] p-8">
                  <div className="font-display text-5xl text-white mb-1">20+</div>
                  <div className="font-body text-white/80 text-sm tracking-wider uppercase">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="about-reveal">
                <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                  The Stylist
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 about-reveal">
                Meet<br />
                <span className="text-[#B87333]">Brooke</span>
              </h2>
              
              <div className="space-y-6 font-body text-lg text-white/70 leading-relaxed">
                <p className="about-reveal">
                  Brooke has been cutting hair in the Upper Valley for over two decades. 
                  She opened Twisted Scissors at 53 S. Main Street to create a space where 
                  quality comes first.
                </p>
                <p className="about-reveal">
                  She listens to what you want, respects your time, and delivers consistent 
                  results. Men, women, kids—she handles it all with the same attention to detail.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="about-reveal">
                  <div className="font-display text-4xl text-[#B87333] mb-1">20+</div>
                  <div className="font-body text-white/50 text-sm">Years Cutting</div>
                </div>
                <div className="about-reveal">
                  <div className="font-display text-4xl text-[#B87333] mb-1">18+</div>
                  <div className="font-body text-white/50 text-sm">Years in Hanover</div>
                </div>
                <div className="about-reveal">
                  <div className="font-display text-4xl text-[#B87333] mb-1">5.0</div>
                  <div className="font-body text-white/50 text-sm">Google Rating</div>
                </div>
              </div>

              <div className="mt-10 about-reveal">
                <Link 
                  href="/about" 
                  className="btn-copper"
                  data-magnetic
                >
                  Full Story
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section 
        ref={reviewsRef}
        className="py-24 lg:py-32 bg-[#F8F6F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header - Editorial */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-6">
              <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-4">
                Testimonials
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1]">
                <TextReveal>What Clients</TextReveal>
                <br />
                <span className="text-[#B87333]">
                  <TextReveal delay={0.2}>Are Saying</TextReveal>
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="font-body text-lg text-[#1a1a1a]/70">
                Real reviews from real clients. No filters, just honest feedback.
              </p>
            </div>
          </div>

          {/* Reviews Grid - Masonry-style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className={`review-card bg-white p-8 border-t-4 border-[#B87333] shadow-sharp ${
                  index % 3 === 1 ? 'lg:mt-12' : ''
                }`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#B87333] fill-[#B87333]" />
                  ))}
                </div>
                
                <p className="font-body text-[#1a1a1a]/80 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                <div className="flex justify-between items-center pt-6 border-t border-[#1a1a1a]/10">
                  <span className="font-display text-[#1a1a1a]">{review.name}</span>
                  <span className="font-body text-sm text-[#1a1a1a]/40">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-24 lg:py-32 bg-[#B87333]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready for a Fresh Cut?
          </h2>
          <p className="font-body text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book your appointment online or give us a call. Walk-ins welcome when schedule permits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://bookoapp.com/book/twisted-scissors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              data-magnetic
              data-cursor-text="Book"
              style={{ borderRadius: 0 }}
            >
              Book Online
              <ArrowRight size={18} />
            </a>
            <a 
              href="tel:6032779842"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#B87333] transition-all duration-300"
              data-magnetic
              style={{ borderRadius: 0 }}
            >
              <Phone size={18} />
              (603) 277-9842
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image src="/images/logo.png" alt="Twisted Scissors" fill className="object-contain" />
                </div>
                <span className="font-display text-xl">
                  TWISTED <span className="text-[#B87333]">SCISSORS</span>
                </span>
              </Link>
              <p className="font-body text-white/50 text-sm leading-relaxed">
                Premium barbershop in Hanover, NH. Quality cuts by Brooke with 20+ years experience.
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-display text-lg mb-6">Hours</h4>
              <ul className="space-y-3 font-body text-white/60 text-sm">
                <li className="flex justify-between">
                  <span>Wed - Fri</span>
                  <span className="text-white">9AM - 5PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">9AM - 12:30PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sun - Tue</span>
                  <span className="text-white/40">Closed</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg mb-6">Contact</h4>
              <ul className="space-y-3 font-body text-white/60 text-sm">
                <li>
                  <a href="tel:6032779842" className="hover:text-[#B87333] transition-colors">
                    (603) 277-9842
                  </a>
                </li>
                <li>53 S. Main St</li>
                <li>Hanover, NH 03755</li>
              </ul>
            </div>

            {/* Book */}
            <div>
              <h4 className="font-display text-lg mb-6">Book Now</h4>
              <a 
                href="https://bookoapp.com/book/twisted-scissors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B87333] text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
                data-magnetic
                style={{ borderRadius: 0 }}
              >
                Schedule Online
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Twisted Scissors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/services" className="font-body text-white/40 text-sm hover:text-[#B87333] transition-colors">
                Services
              </Link>
              <Link href="/about" className="font-body text-white/40 text-sm hover:text-[#B87333] transition-colors">
                About
              </Link>
              <Link href="/contact" className="font-body text-white/40 text-sm hover:text-[#B87333] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
