'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Clock, MapPin, ArrowRight, Phone, Calendar, Award, Scissors } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const services = [
    { name: 'Haircut', price: '$35', duration: '30 min', description: 'Regular haircut for men, women, or kids' },
    { name: 'Fade or Taper', price: '$40', duration: '35 min', description: 'Short sides blended into longer top' },
    { name: 'Beard Trim', price: '$20', duration: '15 min', description: 'Trim and shape your beard' },
    { name: 'Haircut and Beard', price: '$50', duration: '45 min', description: 'Both services together' },
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
      // Simple fade-in for service cards
      if (servicesRef.current) {
        const serviceCards = servicesRef.current.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
          gsap.set(card, { opacity: 0, y: 30 });
          
          const st = ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: index * 0.1,
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                opacity: 0,
                y: 30,
                duration: 0.4,
                ease: 'power2.in',
              });
            }
          });
          triggersRef.current.push(st);
        });
      }

      // Simple fade for about section
      if (aboutRef.current) {
        const aboutElements = aboutRef.current.querySelectorAll('.about-reveal');
        aboutElements.forEach((el, index) => {
          gsap.set(el, { opacity: 0, y: 30 });
          
          const st = ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: index * 0.1,
              });
            },
            onLeaveBack: () => {
              gsap.to(el, {
                opacity: 0,
                y: 30,
                duration: 0.4,
                ease: 'power2.in',
              });
            }
          });
          triggersRef.current.push(st);
        });
      }

      // Simple fade for reviews
      if (reviewsRef.current) {
        const reviewCards = reviewsRef.current.querySelectorAll('.review-card');
        reviewCards.forEach((card, index) => {
          gsap.set(card, { opacity: 0, y: 20 });
          
          const st = ScrollTrigger.create({
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                delay: index * 0.08,
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                ease: 'power2.in',
              });
            }
          });
          triggersRef.current.push(st);
        });
      }
    });

    return () => {
      triggersRef.current.forEach(st => st.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section - Clean and Simple */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-[#1a1a1a] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent z-10" />
          <Image
            src="/images/insideview.png"
            alt="Twisted Scissors Interior"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block text-[#B87333] font-body text-sm tracking-wider uppercase mb-6">
                  Hanover, NH
                </span>
                
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
                  Haircuts in
                  <br />
                  <span className="text-[#B87333]">Hanover, NH</span>
                </h1>
                
                <p className="font-body text-lg text-white/70 max-w-md mb-8 leading-relaxed">
                  Brooke has been cutting hair here for over 20 years. 
                  She takes her time and listens to what you want.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://bookoapp.com/book/twisted-scissors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-copper"
                  >
                    Book Appointment
                    <ArrowRight size={18} />
                  </a>
                  <Link 
                    href="/services" 
                    className="btn-outline-white"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              {/* Right Side - Simple Stats */}
              <div className="lg:pl-12">
                <div className="bg-[#2a2a2a] p-8 border-l-4 border-[#B87333]">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#B87333] fill-[#B87333]" />
                    ))}
                  </div>
                  <div className="font-display text-5xl text-white mb-2">5.0</div>
                  <div className="font-body text-white/60 text-sm mb-8">
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
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-20 lg:py-28 bg-[#F8F6F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#B87333] font-body text-sm tracking-wider uppercase mb-4">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-4">
              Services and Prices
            </h2>
            <p className="font-body text-lg text-[#1a1a1a]/70 max-w-2xl mx-auto">
              Simple pricing. No surprises. Brooke will talk through what you want before she starts.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.name} 
                className="service-card bg-white p-6 border-t-4 border-[#B87333] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Scissors className="w-6 h-6 text-[#B87333]" />
                  <span className="font-display text-3xl text-[#B87333]">{service.price}</span>
                </div>
                
                <h3 className="font-display text-xl text-[#1a1a1a] mb-2">
                  {service.name}
                </h3>
                
                <p className="font-body text-[#1a1a1a]/60 text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-[#1a1a1a]/40">
                  <Clock className="w-4 h-4" />
                  <span className="font-body text-sm">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="/services" 
              className="btn-primary inline-flex"
            >
              All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-20 lg:py-28 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="about-reveal">
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/insideview.png"
                    alt="Twisted Scissors Interior"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Stats Box */}
                <div className="absolute -bottom-6 -right-6 bg-[#B87333] p-6">
                  <div className="font-display text-4xl text-white mb-1">20+</div>
                  <div className="font-body text-white/80 text-sm">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <span className="inline-block text-[#B87333] font-body text-sm tracking-wider uppercase mb-4 about-reveal">
                The Stylist
              </span>
              
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6 about-reveal">
                Meet Brooke
              </h2>
              
              <div className="space-y-4 font-body text-lg text-white/70 leading-relaxed">
                <p className="about-reveal">
                  Brooke has been cutting hair in the Upper Valley for over 20 years. 
                  She opened Twisted Scissors at 53 S. Main Street in Hanover.
                </p>
                <p className="about-reveal">
                  She listens to what you want and does not rush. Men, women, kids—she cuts hair for everyone.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                <div className="about-reveal">
                  <div className="font-display text-3xl text-[#B87333] mb-1">20+</div>
                  <div className="font-body text-white/50 text-sm">Years Cutting</div>
                </div>
                <div className="about-reveal">
                  <div className="font-display text-3xl text-[#B87333] mb-1">18+</div>
                  <div className="font-body text-white/50 text-sm">Years in Hanover</div>
                </div>
                <div className="about-reveal">
                  <div className="font-display text-3xl text-[#B87333] mb-1">5.0</div>
                  <div className="font-body text-white/50 text-sm">Google Rating</div>
                </div>
              </div>

              <div className="mt-8 about-reveal">
                <Link 
                  href="/about" 
                  className="btn-copper"
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
        className="py-20 lg:py-28 bg-[#F8F6F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-[#B87333] font-body text-sm tracking-wider uppercase mb-4">
              Reviews
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-4">
              What People Say
            </h2>
            <p className="font-body text-lg text-[#1a1a1a]/70">
              Reviews from Google.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="review-card bg-white p-6 border-t-4 border-[#B87333] shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#B87333] fill-[#B87333]" />
                  ))}
                </div>
                
                <p className="font-body text-[#1a1a1a]/80 leading-relaxed mb-4 text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-[#1a1a1a]/10">
                  <span className="font-display text-[#1a1a1a]">{review.name}</span>
                  <span className="font-body text-sm text-[#1a1a1a]/40">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#B87333]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Book an Appointment
          </h2>
          <p className="font-body text-lg text-white/80 mb-8">
            Book online or call. Walk-ins welcome if there is time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://bookoapp.com/book/twisted-scissors" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
            >
              Book Online
              <ArrowRight size={18} />
            </a>
            <a 
              href="tel:6032779842"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#B87333] transition-all duration-300"
            >
              <Phone size={18} />
              (603) 277-9842
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image src="/images/logo.png" alt="Twisted Scissors" fill className="object-contain" />
                </div>
                <span className="font-display text-xl">
                  TWISTED <span className="text-[#B87333]">SCISSORS</span>
                </span>
              </Link>
              <p className="font-body text-white/50 text-sm">
                Quality haircuts in Hanover, NH. 20+ years experience.
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-display text-lg mb-4">Hours</h4>
              <ul className="space-y-2 font-body text-white/60 text-sm">
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
              <h4 className="font-display text-lg mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-white/60 text-sm">
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
              <h4 className="font-display text-lg mb-4">Book Now</h4>
              <a 
                href="https://bookoapp.com/book/twisted-scissors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B87333] text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
              >
                Schedule Online
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
