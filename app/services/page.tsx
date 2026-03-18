'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, ArrowRight, Scissors, Sparkles } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import TiltCard from '@/components/TiltCard';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const addOnsRef = useRef<HTMLDivElement>(null);
  const policyRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const services = [
    { 
      name: 'Classic Haircut', 
      price: '$35', 
      duration: '30 min', 
      description: 'A precision cut tailored to your personal style. Includes consultation, precision cutting, and styling to finish.',
      features: ['Personal consultation', 'Precision scissor cut', 'Styling finish', 'Neck cleanup'],
      popular: false
    },
    { 
      name: 'Fade / Taper', 
      price: '$40', 
      duration: '35 min', 
      description: 'Modern fade or taper cut with clean lines and smooth transitions. Perfect for a fresh, contemporary look.',
      features: ['Skin fade options', 'Low/Mid/High fade', 'Crisp line up', 'Blended transitions'],
      popular: true
    },
    { 
      name: 'Beard Trim', 
      price: '$20', 
      duration: '15 min', 
      description: 'Professional beard shaping and trimming to complement your haircut and facial structure.',
      features: ['Shape & style', 'Neck cleanup', 'Hot towel treatment', 'Beard oil finish'],
      popular: false
    },
    { 
      name: 'Haircut & Beard', 
      price: '$50', 
      duration: '45 min', 
      description: 'Complete grooming package. Get a fresh cut and perfectly styled beard in one visit. Best value.',
      features: ['Full haircut service', 'Beard trim & shape', 'Hot towel treatment', 'Complete styling'],
      popular: true
    },
  ];

  const addOns = [
    { name: 'Hot Towel Treatment', price: '$10', description: 'Relaxing hot towel prep and finish' },
    { name: 'Beard Conditioning', price: '$8', description: 'Deep conditioning treatment for your beard' },
    { name: 'Neck Shave', price: '$5', description: 'Clean razor finish on the neck' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - content reveal
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

      // Services cards - diagonal clip reveal with stagger
      if (servicesRef.current) {
        const cards = servicesRef.current.querySelectorAll('.service-card');
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

      // Add-ons reveal - slide from left with shear
      if (addOnsRef.current) {
        const items = addOnsRef.current.querySelectorAll('.addon-item');
        items.forEach((item, index) => {
          gsap.set(item, { x: -50, skewX: -3, opacity: 0 });
          
          const st = ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(item, {
                x: 0,
                skewX: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                delay: index * 0.12,
              });
            },
            onLeaveBack: () => {
              gsap.to(item, {
                x: -50,
                skewX: -3,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
              });
            }
          });
          triggersRef.current.push(st);
        });

        // Add-ons image parallax
        const addOnImage = addOnsRef.current.querySelector('.addons-image');
        if (addOnImage) {
          const st = ScrollTrigger.create({
            trigger: addOnsRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              gsap.set(addOnImage, {
                y: (self.progress - 0.5) * 40,
              });
            }
          });
          triggersRef.current.push(st);
        }
      }

      // Policy section reveal
      if (policyRef.current) {
        gsap.set(policyRef.current, { y: 40, opacity: 0 });
        
        const st = ScrollTrigger.create({
          trigger: policyRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            gsap.to(policyRef.current, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(policyRef.current, {
              y: 40,
              opacity: 0,
              duration: 0.5,
              ease: 'power3.in',
            });
          }
        });
        triggersRef.current.push(st);
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
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] bg-[#1a1a1a] flex items-center overflow-hidden"
      >
        {/* Background with parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/95 to-[#2a2a2a] z-10" />
          <Image
            src="/images/insideview.png"
            alt="Twisted Scissors"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Barber Pole Accent */}
        <div className="absolute top-0 left-0 w-2 h-full opacity-20 z-10">
          <div className="w-full h-full barber-stripes-animated" />
        </div>

        {/* Steam Particles */}
        <div className="steam-container">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="steam-particle"
              style={{
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${7 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="hero-content">
            <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
              Our Menu
            </span>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9] mb-8">
              <TextReveal>
                Services
              </TextReveal>
              <br />
              <span className="text-[#B87333]">
                <TextReveal delay={0.2}>
                  & Pricing
                </TextReveal>
              </span>
            </h1>
            
            <p className="font-body text-xl text-white/60 max-w-xl leading-relaxed">
              Straightforward pricing for quality work. Every service begins with 
              a consultation to ensure you get exactly what you want.
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Scissors className="w-full h-full text-[#B87333]" strokeWidth={0.5} />
        </div>
      </section>

      {/* Services Grid */}
      <section 
        ref={servicesRef}
        className="py-24 lg:py-32 bg-[#F8F6F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <TiltCard key={service.name} className="service-card" glareEnabled={true}>
                <div className={`relative bg-white p-8 lg:p-10 border-l-4 ${
                  service.popular ? 'border-[#B87333]' : 'border-[#1a1a1a]'
                } shadow-sharp hover:shadow-sharp-copper transition-all duration-500`}>
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 right-8 bg-[#B87333] px-4 py-1">
                      <span className="font-body text-xs text-white tracking-wider uppercase">Popular</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                      <Scissors className="w-6 h-6 text-[#B87333]" />
                    </div>
                    <div className="text-right">
                      <span className="font-display text-4xl text-[#B87333]">{service.price}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl lg:text-3xl text-[#1a1a1a] mb-4">
                    {service.name}
                  </h3>
                  
                  <p className="font-body text-[#1a1a1a]/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 font-body text-sm text-[#1a1a1a]/60">
                        <span className="w-1 h-1 bg-[#B87333]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-[#1a1a1a]/10">
                    <div className="flex items-center gap-2 text-[#1a1a1a]/40">
                      <Clock className="w-4 h-4" />
                      <span className="font-body text-sm">{service.duration}</span>
                    </div>
                    <a 
                      href="https://bookoapp.com/book/twisted-scissors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-[#B87333] hover:text-[#1a1a1a] transition-colors flex items-center gap-1"
                      data-magnetic
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section 
        ref={addOnsRef}
        className="py-24 lg:py-32 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative addons-image">
              <div className="aspect-[4/3] relative overflow-hidden mirror-hover">
                <Image
                  src="/images/insideview.png"
                  alt="Twisted Scissors Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#B87333] p-8">
                <Sparkles className="w-8 h-8 text-white mb-2" />
                <div className="font-body text-white/80 text-sm tracking-wider uppercase">
                  Premium Add-ons
                </div>
              </div>
            </div>

            {/* Right - Add-ons List */}
            <div>
              <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                Enhance Your Visit
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-12">
                Add-On Services
              </h2>

              <div className="space-y-6">
                {addOns.map((addon, index) => (
                  <div 
                    key={addon.name}
                    className="addon-item flex items-center justify-between py-6 border-b border-white/10"
                  >
                    <div>
                      <h3 className="font-display text-xl text-white mb-1">{addon.name}</h3>
                      <p className="font-body text-white/50 text-sm">{addon.description}</p>
                    </div>
                    <span className="font-display text-2xl text-[#B87333]">{addon.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a 
                  href="https://bookoapp.com/book/twisted-scissors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-copper"
                  data-magnetic
                  data-cursor-text="Book"
                >
                  Book with Add-ons
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section ref={policyRef} className="py-24 lg:py-32 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] mb-8">
              <TextReveal>Booking Policy</TextReveal>
            </h2>
            <div className="space-y-4 font-body text-[#1a1a1a]/70 leading-relaxed">
              <p>
                We respect your time and ask that you respect ours. If you need to cancel 
                or reschedule, please give us at least 24 hours notice.
              </p>
              <p>
                Walk-ins are welcome when the schedule permits, but appointments are 
                always recommended to ensure you get your preferred time slot.
              </p>
              <p>
                Running late? Give us a call at <a href="tel:6032779842" className="text-[#B87333] hover:underline">(603) 277-9842</a> and 
                we&apos;ll do our best to accommodate you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#B87333]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Ready to Book?
          </h2>
          <p className="font-body text-xl text-white/80 mb-10">
            Schedule your appointment online in just a few clicks.
          </p>
          <a 
            href="https://bookoapp.com/book/twisted-scissors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white font-body text-sm tracking-wider uppercase hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
            data-magnetic
            data-cursor-text="Book"
            style={{ borderRadius: 0 }}
          >
            Schedule Now
            <ArrowRight size={18} />
          </a>
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
