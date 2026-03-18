'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Clock, ArrowRight, Calendar, Send } from 'lucide-react';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

      // Info section reveal - staggered cards
      if (infoRef.current) {
        const cards = infoRef.current.querySelectorAll('.info-card');
        cards.forEach((card, index) => {
          gsap.set(card, { y: 50, opacity: 0 });
          
          const st = ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to(card, {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                delay: index * 0.15,
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                y: 50,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
              });
            }
          });
          triggersRef.current.push(st);
        });
      }

      // Form section - scale and fade
      if (formRef.current) {
        gsap.set(formRef.current, { y: 60, opacity: 0 });
        
        const st = ScrollTrigger.create({
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            gsap.to(formRef.current, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
            });
          },
          onLeaveBack: () => {
            gsap.to(formRef.current, {
              y: 60,
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: ['53 S. Main Street', 'Hanover, NH 03755', 'In the Nugget Building'],
      action: null
    },
    {
      icon: Phone,
      title: 'Call or Text',
      lines: ['(603) 277-9842'],
      action: { label: 'Call Now', href: 'tel:6032779842' }
    },
    {
      icon: Calendar,
      title: 'Book Online',
      lines: ['Available 24/7', 'Instant Confirmation'],
      action: { label: 'Book Now', href: 'https://bookoapp.com/book/twisted-scissors' }
    },
  ];

  const hours = [
    { day: 'Wednesday', hours: '9AM - 5PM' },
    { day: 'Thursday', hours: '9AM - 5PM' },
    { day: 'Friday', hours: '9AM - 5PM' },
    { day: 'Saturday', hours: '9AM - 12:30PM' },
    { day: 'Sunday - Tuesday', hours: 'Closed' },
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-[#1a1a1a] flex items-center overflow-hidden"
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
              Get In Touch
            </span>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9] mb-8">
              <TextReveal>
                Let&apos;s Talk
              </TextReveal>
              <br />
              <span className="text-[#B87333]">
                <TextReveal delay={0.2}>
                  Hair
                </TextReveal>
              </span>
            </h1>
            
            <p className="font-body text-xl text-white/60 max-w-xl leading-relaxed">
              Questions? Want to book? Reach out however works best for you. 
              We&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section 
        ref={infoRef}
        className="py-24 lg:py-32 bg-[#F8F6F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <div 
                key={info.title}
                className="info-card bg-white p-8 lg:p-10 border-l-4 border-[#B87333] shadow-sharp"
              >
                <div className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center mb-6">
                  <info.icon className="w-7 h-7 text-[#B87333]" />
                </div>
                
                <h3 className="font-display text-2xl text-[#1a1a1a] mb-4">{info.title}</h3>
                
                <div className="space-y-1 mb-6">
                  {info.lines.map((line, i) => (
                    <p key={i} className={`font-body ${i === info.lines.length - 1 && info.lines.length > 1 ? 'text-[#1a1a1a]/50 text-sm' : 'text-[#1a1a1a]/70'}`}>
                      {line}
                    </p>
                  ))}
                </div>
                
                {info.action && (
                  <a 
                    href={info.action.href}
                    target={info.action.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 font-body text-sm text-[#B87333] hover:text-[#1a1a1a] transition-colors"
                    data-magnetic
                  >
                    {info.action.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Form Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Hours */}
            <div>
              <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                When We&apos;re Open
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
                Opening Hours
              </h2>

              <div className="space-y-0">
                {hours.map((item) => (
                  <div 
                    key={item.day}
                    className="flex justify-between items-center py-5 border-b border-white/10"
                  >
                    <span className="font-body text-lg text-white">{item.day}</span>
                    <span className={`font-body ${item.hours === 'Closed' ? 'text-white/40' : 'text-[#B87333]'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#2a2a2a] border-l-4 border-[#B87333]">
                <p className="font-body text-white/70">
                  <span className="text-[#B87333]">Note:</span> Walk-ins are welcome when the schedule permits, 
                  but appointments are always recommended to ensure you get your preferred time slot.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 aspect-video bg-[#2a2a2a] relative overflow-hidden">
                <Image
                  src="/images/frontdoor.png"
                  alt="Location"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href="https://maps.google.com/?q=53+S+Main+St+Hanover+NH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-copper"
                    data-magnetic
                    data-cursor-text="Map"
                  >
                    <MapPin className="w-5 h-5" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef}>
              <span className="inline-block text-[#B87333] font-body text-sm tracking-[0.3em] uppercase mb-6">
                Send a Message
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
                Get In Touch
              </h2>

              {submitted ? (
                <div className="bg-[#2a2a2a] p-10 border-l-4 border-[#B87333]">
                  <div className="w-16 h-16 bg-[#B87333]/10 flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-[#B87333]" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-4">Message Sent!</h3>
                  <p className="font-body text-white/60">
                    Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm text-white/60 mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#2a2a2a] border border-white/10 px-5 py-4 font-body text-white placeholder:text-white/30 focus:outline-none focus:border-[#B87333] transition-colors"
                      style={{ borderRadius: 0 }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-body text-sm text-white/60 mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#2a2a2a] border border-white/10 px-5 py-4 font-body text-white placeholder:text-white/30 focus:outline-none focus:border-[#B87333] transition-colors"
                        style={{ borderRadius: 0 }}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm text-white/60 mb-2 uppercase tracking-wider">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#2a2a2a] border border-white/10 px-5 py-4 font-body text-white placeholder:text-white/30 focus:outline-none focus:border-[#B87333] transition-colors"
                        style={{ borderRadius: 0 }}
                        placeholder="(603) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-white/60 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#2a2a2a] border border-white/10 px-5 py-4 font-body text-white placeholder:text-white/30 focus:outline-none focus:border-[#B87333] transition-colors resize-none"
                      style={{ borderRadius: 0 }}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-copper justify-center"
                    data-magnetic
                    data-cursor-text="Send"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-24 lg:py-32 bg-[#B87333]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Prefer to Book Online?
          </h2>
          <p className="font-body text-xl text-white/80 mb-10">
            Schedule your appointment instantly through our booking system.
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
            Book Appointment
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
