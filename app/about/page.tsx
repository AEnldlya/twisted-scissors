'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Clock, ArrowRight, Award, Star, Calendar } from 'lucide-react';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        const heroContent = heroRef.current.querySelector('.hero-content');
        if (heroContent) {
          gsap.set(heroContent, { y: 60, opacity: 0 });
          
          const st = ScrollTrigger.create({
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(heroContent, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.2,
              });
            },
            onLeaveBack: () => {
              gsap.to(heroContent, {
                y: 60,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.in',
              });
            }
          });
          triggersRef.current.push(st);
        }
      }

      // Story section - shear reveal
      if (storyRef.current) {
        const elements = storyRef.current.querySelectorAll('.story-reveal');
        elements.forEach((el, index) => {
          gsap.set(el, { y: 50, skewY: 2, opacity: 0 });
          
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
                delay: index * 0.1,
              });
            },
            onLeaveBack: () => {
              gsap.to(el, {
                y: 50,
                skewY: 2,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.in',
              });
            }
          });
          triggersRef.current.push(st);
        });

        // Image parallax
        const storyImage = storyRef.current.querySelector('.story-image');
        if (storyImage) {
          const st = ScrollTrigger.create({
            trigger: storyRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              gsap.set(storyImage, {
                y: (self.progress - 0.5) * 30,
              });
            }
          });
          triggersRef.current.push(st);
        }
      }

      // Values cards - clip reveal
      if (valuesRef.current) {
        const cards = valuesRef.current.querySelectorAll('.value-card');
        cards.forEach((card, index) => {
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

      // Shop section - staggered reveal
      if (shopRef.current) {
        const shopElements = shopRef.current.querySelectorAll('.shop-reveal');
        shopElements.forEach((el, index) => {
          gsap.set(el, { y: 40, opacity: 0 });
          
          const st = ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                delay: index * 0.1,
              });
            },
            onLeaveBack: () => {
              gsap.to(el, {
                y: 40,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
              });
            }
          });
          triggersRef.current.push(st);
        });

        // Image hover scale
        const shopImages = shopRef.current.querySelectorAll('.shop-image');
        shopImages.forEach((img) => {
          const st = ScrollTrigger.create({
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              const scale = 1 + Math.sin(self.progress * Math.PI) * 0.05;
              gsap.set(img, { scale });
            }
          });
          triggersRef.current.push(st);
        });
      }

      // Location section
      if (locationRef.current) {
        const elements = locationRef.current.querySelectorAll('.location-reveal');
        elements.forEach((el, index) => {
          gsap.set(el, { y: 40, opacity: 0 });
          
          const st = ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                delay: index * 0.08,
              });
            },
            onLeaveBack: () => {
              gsap.to(el, {
                y: 40,
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in',
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

  const values = [
    {
      icon: Award,
      title: 'Experience',
      description: '20+ years of cutting hair means Brooke has seen it all and knows how to deliver results.'
    },
    {
      icon: Star,
      title: 'Quality',
      description: 'No rushed cuts. Every appointment gets the time and attention it deserves.'
    },
    {
      icon: Clock,
      title: 'Respect',
      description: 'Your time matters. Brooke runs on schedule and keeps appointments moving smoothly.'
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] bg-[#1a1a1a] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/95 to-[#2a2a2a] z-10" />
          <Image
            src="/images/frontdoor.png"
            alt="Twisted Scissors"
            fill
            className="object-cover opacity-30"
          />
        </div>

        {/* Barber Pole Accent */}
        <div className="absolute top-0 right-0 w-2 h-full opacity-20 z-10">
          <div className="w-full h-full barber-stripes-animated" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="hero-content max-w-3xl">
            <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
              Our Story
            </span>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9] mb-8">
              <TextReveal>
                Two Decades
              </TextReveal>
              <br />
              <span className="text-[#B87333]">
                <TextReveal delay={0.2}>
                  of Craft
                </TextReveal>
              </span>
            </h1>
            
            <p className="font-body text-xl text-white/60 max-w-xl leading-relaxed">
              From learning the trade to opening her own shop in Hanover, 
              Brooke&apos;s journey has always been about one thing: quality work.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Editorial Layout */}
      <section 
        ref={storyRef}
        className="py-24 lg:py-32 bg-[#F8F6F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image - Offset */}
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="relative story-reveal story-image">
                <div className="aspect-[3/4] relative overflow-hidden mirror-hover">
                  <Image
                    src="/images/insideview.png"
                    alt="Twisted Scissors Interior"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Quote */}
                <div className="absolute -bottom-8 -right-8 lg:-right-16 bg-[#1a1a1a] p-8 max-w-xs">
                  <p className="font-display text-xl text-white italic leading-relaxed">
                    &ldquo;I believe every cut should be a collaboration between stylist and client.&rdquo;
                  </p>
                  <p className="font-body text-[#B87333] mt-4 text-sm tracking-wider uppercase">
                    — Brooke
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0">
              <div className="story-reveal">
                <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                  The Journey
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-8 story-reveal">
                From Apprentice<br />
                to <span className="text-[#B87333]">Shop Owner</span>
              </h2>
              
              <div className="space-y-6 font-body text-lg text-[#1a1a1a]/70 leading-relaxed">
                <p className="story-reveal">
                  Brooke started cutting hair over 20 years ago, learning the fundamentals 
                  from seasoned barbers who emphasized precision and attention to detail. 
                  Those early lessons stuck with her.
                </p>
                <p className="story-reveal">
                  For 18 years, she built a loyal following in the Upper Valley, working 
                  in various shops and refining her craft. Clients appreciated her consistency, 
                  her ability to listen, and her respect for their time.
                </p>
                <p className="story-reveal">
                  In 2024, Brooke opened Twisted Scissors at 53 S. Main Street in Hanover. 
                  The shop represents everything she believes in: quality over quantity, 
                  personal attention over rushed appointments, and building relationships 
                  that last years, not just visits.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#1a1a1a]/10">
                <div className="story-reveal">
                  <div className="font-display text-4xl text-[#B87333] mb-1">20+</div>
                  <div className="font-body text-[#1a1a1a]/50 text-sm">Years Cutting</div>
                </div>
                <div className="story-reveal">
                  <div className="font-display text-4xl text-[#B87333] mb-1">18+</div>
                  <div className="font-body text-[#1a1a1a]/50 text-sm">Years in Hanover</div>
                </div>
                <div className="story-reveal">
                  <div className="font-display text-4xl text-[#B87333] mb-1">5.0</div>
                  <div className="font-body text-[#1a1a1a]/50 text-sm">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className="py-24 lg:py-32 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-4">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              <TextReveal>Our Values</TextReveal>
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="value-card bg-[#2a2a2a] p-8 lg:p-10 border-l-4 border-[#B87333]"
              >
                <div className="w-14 h-14 bg-[#B87333]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#B87333]" />
                </div>
                <h3 className="font-display text-2xl text-white mb-4">{value.title}</h3>
                <p className="font-body text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Shop Section */}
      <section ref={shopRef} className="py-24 lg:py-32 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6 shop-reveal">
                The Space
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] leading-[1.1] mb-8 shop-reveal">
                A Shop Built<br />
                <span className="text-[#B87333]">for Quality</span>
              </h2>
              
              <div className="space-y-6 font-body text-lg text-[#1a1a1a]/70 leading-relaxed">
                <p className="shop-reveal">
                  Twisted Scissors sits at 53 S. Main Street in the heart of Hanover, 
                  just steps from Dartmouth College. The space is clean, comfortable, 
                  and designed for one thing: great haircuts.
                </p>
                <p className="shop-reveal">
                  Brooke has created an environment where clients can relax, chat if 
                  they want to, or enjoy quiet focus. It&apos;s a judgment-free zone where 
                  everyone is welcome—men, women, students, professionals, and families.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-3 shop-reveal">
                  <div className="w-2 h-2 bg-[#B87333]" />
                  <span className="font-body text-[#1a1a1a]/80">Clean & Modern</span>
                </div>
                <div className="flex items-center gap-3 shop-reveal">
                  <div className="w-2 h-2 bg-[#B87333]" />
                  <span className="font-body text-[#1a1a1a]/80">Welcoming Atmosphere</span>
                </div>
                <div className="flex items-center gap-3 shop-reveal">
                  <div className="w-2 h-2 bg-[#B87333]" />
                  <span className="font-body text-[#1a1a1a]/80">Downtown Location</span>
                </div>
                <div className="flex items-center gap-3 shop-reveal">
                  <div className="w-2 h-2 bg-[#B87333]" />
                  <span className="font-body text-[#1a1a1a]/80">Easy Parking</span>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative overflow-hidden shop-image">
                <Image
                  src="/images/frontdoor.png"
                  alt="Twisted Scissors Exterior"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="aspect-[3/4] relative overflow-hidden mt-8 shop-image">
                <Image
                  src="/images/insideview.png"
                  alt="Twisted Scissors Interior"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section 
        ref={locationRef}
        className="py-24 lg:py-32 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Location */}
            <div>
              <div className="location-reveal">
                <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                  Visit Us
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10 location-reveal">
                Find Us in<br />
                <span className="text-[#B87333]">Hanover</span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4 location-reveal">
                  <div className="w-12 h-12 bg-[#B87333]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#B87333]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-2">Address</h3>
                    <p className="font-body text-white/60">53 S. Main Street</p>
                    <p className="font-body text-white/60">Hanover, NH 03755</p>
                    <p className="font-body text-white/40 text-sm mt-1">In the Nugget Building</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 location-reveal">
                  <div className="w-12 h-12 bg-[#B87333]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#B87333]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-2">Phone</h3>
                    <a href="tel:6032779842" className="font-body text-white/60 hover:text-[#B87333] transition-colors">
                      (603) 277-9842
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 location-reveal">
                  <div className="w-12 h-12 bg-[#B87333]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-[#B87333]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-2">Online Booking</h3>
                    <a 
                      href="https://bookoapp.com/book/twisted-scissors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[#B87333] hover:underline"
                    >
                      bookoapp.com/book/twisted-scissors
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="location-reveal">
                <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                  Schedule
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10 location-reveal">
                Opening<br />
                <span className="text-[#B87333]">Hours</span>
              </h2>

              <div className="space-y-4">
                {[
                  { day: 'Monday', hours: 'Closed' },
                  { day: 'Tuesday', hours: 'Closed' },
                  { day: 'Wednesday', hours: '9AM - 5PM' },
                  { day: 'Thursday', hours: '9AM - 5PM' },
                  { day: 'Friday', hours: '9AM - 5PM' },
                  { day: 'Saturday', hours: '9AM - 12:30PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((item) => (
                  <div 
                    key={item.day}
                    className="flex justify-between items-center py-4 border-b border-white/10 location-reveal"
                  >
                    <span className="font-body text-white">{item.day}</span>
                    <span className={`font-body ${item.hours === 'Closed' ? 'text-white/40' : 'text-[#B87333]'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-body text-white/40 text-sm mt-6 location-reveal">
                Walk-ins welcome when schedule permits. Appointments recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#B87333]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="font-body text-xl text-white/80 mb-10">
            Book your appointment with Brooke today.
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
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="font-display text-xl">TWISTED <span className="text-[#B87333]">SCISSORS</span></span>
              <p className="font-body text-white/50 text-sm mt-2">Premium barbershop in Hanover, NH.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Hours</h4>
              <ul className="space-y-2 font-body text-white/60 text-sm">
                <li>Wed-Fri: 9am - 5pm</li>
                <li>Saturday: 9am - 12:30pm</li>
                <li>Sun-Tue: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-white/60 text-sm">
                <li>(603) 277-9842</li>
                <li>53 S. Main St, Hanover, NH</li>
              </ul>
            </div>
            <div>
              <Link href="/" className="text-[#B87333] hover:underline font-body">← Back to Home</Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center font-body text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Twisted Scissors. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
