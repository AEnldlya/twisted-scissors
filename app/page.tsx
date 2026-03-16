'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Clock, MapPin, ArrowRight, Phone, Calendar, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ delay: 0.5 });
      
      heroTl
        .from('.hero-label', { y: 50, opacity: 0, duration: 1.2, ease: 'power4.out' })
        .from('.hero-title-line', { y: 120, opacity: 0, duration: 1.4, stagger: 0.15, ease: 'expo.out' }, '-=0.8')
        .from('.hero-subtitle', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.9')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6');

      gsap.fromTo('.photo-frame', 
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.8, ease: 'power4.inOut', delay: 0.3 }
      );

      gsap.to('.float-element', {
        y: -20, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1,
        stagger: { each: 0.3, from: 'random' }
      });

      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services-section', start: 'top 70%', toggleActions: 'play none none reverse' },
        y: 80, opacity: 0, duration: 0.8, stagger: { each: 0.12, from: 'start' }, ease: 'power3.out'
      });

      gsap.fromTo('.about-image',
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          scrollTrigger: { trigger: '.about-section', start: 'top 60%', toggleActions: 'play none none reverse' },
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.5, ease: 'power4.inOut'
        }
      );

      gsap.from('.review-card', {
        scrollTrigger: { trigger: '.reviews-section', start: 'top 65%', toggleActions: 'play none none reverse' },
        y: 60, opacity: 0, scale: 0.95, duration: 0.9, stagger: { each: 0.1, from: 'start' }, ease: 'expo.out'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { name: 'Classic Haircut', price: '$35', duration: '30 min', description: 'Precision cut tailored to your style' },
    { name: 'Fade / Taper', price: '$40', duration: '35 min', description: 'Modern fade with clean lines' },
    { name: 'Beard Trim', price: '$20', duration: '15 min', description: 'Shape and style your beard' },
    { name: 'Haircut & Beard', price: '$50', duration: '45 min', description: 'Complete grooming package' },
  ];

  const reviews = [
    { name: 'Rusty S.', rating: 5, text: 'Brook listens to me, rather than merely doing the same thing every time. She\'s always good-humored, and respectful of schedules. I doubt I\'ll ever use a different person for my hair.', date: 'Dec 2024' },
    { name: 'T. N.', rating: 5, text: 'Brooke is great! She\'s pretty skilled with a pair of scissors and a razor for a men\'s haircut. Highly recommend!', date: 'Jul 2024' },
    { name: 'Susan Henderson', rating: 5, text: 'Great haircuts by Brooke. Have been there many times and always happy with how my hair is cut. Very comfy and clean salon. Super friendly atmosphere.', date: 'Jul 2024' },
    { name: 'Lynne Weaver', rating: 5, text: 'Thank you Brooke for taking the time to get my color and style just perfect!! I absolutely love it!', date: 'May 2024' },
    { name: 'Meredith Erickson', rating: 5, text: 'Stylist was friendly, haircut was exactly what I requested, salon was super clean and welcoming, and the prices were reasonable. I would definitely come back!', date: 'Feb 2024' },
    { name: 'Reagan Quinn', rating: 5, text: 'Brooke is super friendly, and the salon is very nice and clean! Brooke did a wonderful job cutting and styling my hair, and the price was extremely reasonable.', date: 'Feb 2024' },
  ];

  const features = [
    { icon: Award, title: '20+ Years Experience', desc: 'Combined barber expertise' },
    { icon: MapPin, title: 'Prime Location', desc: '53 S. Main St, Hanover' },
    { icon: Calendar, title: 'Easy Booking', desc: 'Online scheduling available' },
    { icon: Phone, title: 'Walk-ins Welcome', desc: 'When schedule permits' },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Black Background */}
      <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 right-20 w-[500px] h-[500px] bg-royal/10 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="float-element absolute top-32 left-[10%] w-2 h-2 bg-royal rounded-full" />
          <div className="float-element absolute top-48 right-[15%] w-3 h-3 bg-grey-400 rounded-full" />
          <div className="float-element absolute bottom-40 left-[20%] w-2 h-2 bg-white/20 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div style={{ opacity, y: ySpring }} className="relative z-10">
              <span className="hero-label inline-block text-royal text-sm font-mono tracking-[0.3em] uppercase mb-6">
                Hanover&apos;s Finest Barbershop
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] mb-8">
                <span className="hero-title-line block overflow-hidden"><span className="inline-block">WHERE</span></span>
                <span className="hero-title-line block overflow-hidden"><span className="inline-block text-royal">PRECISION</span></span>
                <span className="hero-title-line block overflow-hidden"><span className="inline-block">MEETS</span></span>
                <span className="hero-title-line block overflow-hidden"><span className="inline-block text-royal">STYLE</span></span>
              </h1>
              
              <p className="hero-subtitle text-xl md:text-2xl text-grey-300 mb-10 max-w-lg leading-relaxed">
                Expert haircuts and grooming services in the heart of Hanover. 
                20+ years of combined experience serving the Upper Valley.
              </p>
              
              <div className="hero-cta flex flex-wrap gap-4">
                <motion.a href="https://bookoapp.com/book/twisted-scissors" target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-royal text-white rounded-none font-semibold text-lg hover:shadow-[0_0_40px_rgba(65,105,225,0.4)] transition-all duration-300"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Book Appointment
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={20} />
                  </motion.span>
                </motion.a>
                <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-none font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  View Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div style={{ scale }} className="relative lg:pl-12">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-royal/30" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-royal/30" />
              
              <div className="photo-frame relative aspect-square overflow-hidden bg-grey-900 flex items-center justify-center p-12">
                <Image
                  src="/images/logo.png"
                  alt="Twisted Scissors Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
              
              <motion.div className="absolute -bottom-6 -left-6 bg-royal text-white px-8 py-6"
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, duration: 0.6, ease: 'back.out' }}>
                <div className="font-display text-4xl font-bold">5.0</div>
                <div className="text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" /> Google Rating
                </div>
              </motion.div>
              
              <motion.div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 shadow-lg"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8, duration: 0.6 }}>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin size={16} className="text-royal" /> 53 S. Main St, Hanover
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.8 }}>
          <span className="text-grey-400 text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div className="w-px h-12 bg-gradient-to-b from-royal to-transparent" animate={{ scaleY: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>
      </section>

      {/* Features Bar - Grey Background */}
      <section className="bg-grey-100 border-y border-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-royal" size={24} />
                </div>
                <div>
                  <div className="font-display font-bold text-black">{feature.title}</div>
                  <div className="text-grey-600 text-sm">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span className="text-royal font-mono text-sm tracking-[0.3em] uppercase mb-4 block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Our Services
            </motion.span>
            <motion.h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              PREMIUM GROOMING
            </motion.h2>
            <motion.p className="text-grey-600 text-xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              From classic cuts to modern styles, we deliver precision grooming tailored to you.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div key={service.name} className="service-card group bg-white p-8 border-l-4 border-royal shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden" whileHover={{ y: -8 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold text-black mb-3">{service.name}</h3>
                  <p className="text-grey-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center gap-4 text-grey-600 text-sm mb-4">
                    <span className="flex items-center gap-1"><Clock size={14} className="text-royal" /> {service.duration}</span>
                  </div>
                  <div className="font-display text-4xl font-bold text-royal">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-none font-semibold text-lg hover:bg-grey-800 transition-all duration-300">
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section - Black Background */}
      <section className="about-section py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234169E1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span className="text-royal font-mono text-sm tracking-[0.3em] uppercase mb-4 block" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                About Twisted Scissors
              </motion.span>
              <motion.h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                YOUR HAIR<br /><span className="text-royal">TRANSFORMATION</span><br />AWAITS
              </motion.h2>
              <motion.div className="space-y-6 text-lg text-grey-300 leading-relaxed" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <p>Welcome to our hair haven in the heart of Hanover, minutes away from Dartmouth College. With over 18 years of dedicated service to Upper Valley clients, our brand-new spot at 53 S. Main Street is ready to elevate your style.</p>
                <p>Backed by 20 years of combined barber experience, our team offers expert cuts and vibrant colors. We listen to you, respect your time, and deliver results that keep you coming back.</p>
              </motion.div>
              
              <motion.div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div><div className="font-display text-4xl font-bold text-royal">18+</div><div className="text-grey-400 text-sm mt-1">Years Serving Hanover</div></div>
                <div><div className="font-display text-4xl font-bold text-royal">20+</div><div className="text-grey-400 text-sm mt-1">Years Combined Experience</div></div>
                <div><div className="font-display text-4xl font-bold text-royal">5.0</div><div className="text-grey-400 text-sm mt-1">Google Rating</div></div>
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="about-image relative aspect-[4/3] overflow-hidden">
                <Image src="/images/insideview.png" alt="Inside Twisted Scissors" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-royal/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-royal/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section py-24 lg:py-32 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span className="text-royal font-mono text-sm tracking-[0.3em] uppercase mb-4 block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Testimonials
            </motion.span>
            <motion.h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              WHAT CLIENTS SAY
            </motion.h2>
            <motion.p className="text-grey-600 text-xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              Real reviews from real clients. All 5-star ratings on Google.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div key={index} className="review-card bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-royal" whileHover={{ y: -5 }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                      <Star className="text-royal fill-royal" size={20} />
                    </motion.div>
                  ))}
                </div>
                <p className="font-accent text-lg italic text-grey-600 mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="flex justify-between items-center">
                  <div className="font-display font-bold text-black">{review.name}</div>
                  <div className="text-grey-400 text-sm">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-royal font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Hours</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">WHEN WE&apos;RE OPEN</h2>
              <div className="space-y-4">
                {[
                  { day: 'Monday', hours: 'Closed' },
                  { day: 'Tuesday', hours: 'Closed' },
                  { day: 'Wednesday', hours: '9AM - 5PM' },
                  { day: 'Thursday', hours: '9AM - 5PM' },
                  { day: 'Friday', hours: '9AM - 5PM' },
                  { day: 'Saturday', hours: '9AM - 12:30PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((item, index) => (
                  <motion.div key={item.day} className="flex justify-between items-center py-3 border-b border-white/10" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                    <span className="text-white font-medium">{item.day}</span>
                    <span className={item.hours === 'Closed' ? 'text-grey-500' : 'text-royal'}>{item.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-royal font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Location</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">FIND US</h2>
              <div className="bg-white/5 p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-royal mt-1" size={24} />
                  <div>
                    <div className="font-display text-xl font-bold text-white mb-2">Twisted Scissors</div>
                    <div className="text-grey-300">53 S. Main Street</div>
                    <div className="text-grey-300">Hanover, NH 03755</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-royal" size={24} />
                  <a href="tel:6032779842" className="text-grey-300 hover:text-royal transition-colors text-lg">(603) 277-9842</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">READY FOR A FRESH CUT?</h2>
          <p className="text-xl text-white/80 mb-8">Book your appointment today and experience the Twisted Scissors difference.</p>
          <a href="https://bookoapp.com/book/twisted-scissors" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-display text-xl font-bold hover:bg-grey-900 transition-all">
            Book Now <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <Image src="/images/logo.png" alt="Twisted Scissors" fill className="object-contain" />
                </div>
                <span className="font-display text-xl font-bold">TWISTED SCISSORS</span>
              </div>
              <p className="text-grey-400 text-sm">Premium barbershop in Hanover, NH.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Hours</h4>
              <ul className="space-y-2 text-grey-400 text-sm">
                <li>Wed-Fri: 9am - 5pm</li>
                <li>Saturday: 9am - 12:30pm</li>
                <li>Sun-Tue: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-grey-400 text-sm">
                <li>(603) 277-9842</li>
                <li>53 S. Main St, Hanover, NH</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Book Now</h4>
              <a href="https://bookoapp.com/book/twisted-scissors" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-royal text-white rounded-none font-semibold hover:bg-blue-700 transition-all">
                Schedule Online
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-grey-500 text-sm">
            &copy; {new Date().getFullYear()} Twisted Scissors. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
