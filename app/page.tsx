'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scissors, Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function HomePage() {
  const services = [
    { name: 'Classic Haircut', price: '$35', duration: '30 min' },
    { name: 'Fade / Taper', price: '$40', duration: '35 min' },
    { name: 'Beard Trim', price: '$20', duration: '15 min' },
    { name: 'Hot Towel Shave', price: '$35', duration: '30 min' },
  ];

  const reviews = [
    { name: 'Rusty S.', rating: 5, text: 'Brook listens to me, rather than merely doing the same thing every time. She\'s always good-humored, and respectful of schedules. I doubt I\'ll ever use a different person for my hair.' },
    { name: 'T. N.', rating: 5, text: 'Brooke is great! She\'s pretty skilled with a pair of scissors and a razor for a men\'s haircut. Highly recommend!' },
    { name: 'Susan Henderson', rating: 5, text: 'Great haircuts by Brooke. Have been there many times and always happy with how my hair is cut. Very comfy and clean salon. Super friendly atmosphere.' },
    { name: 'Lynne Weaver', rating: 5, text: 'Thank you Brooke for taking the time to get my color and style just perfect!! I absolutely love it!' },
    { name: 'Meredith Erickson', rating: 5, text: 'Stylist was friendly, haircut was exactly what I requested, salon was super clean and welcoming, and the prices were reasonable. I would definitely come back!' },
    { name: 'Reagan Quinn', rating: 5, text: 'Brooke is super friendly, and the salon is very nice and clean! Brooke did a wonderful job cutting and styling my hair, and the price was extremely reasonable.' },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F0]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A227] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#E94560] rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C9A227] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
                Hanover&apos;s Finest Barbershop
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                WHERE PRECISION<br />
                <span className="text-[#C9A227]">MEETS STYLE</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-lg">
                Expert haircuts, beard grooming, and traditional barbering services in the heart of Hanover, NH.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://bookoapp.com/book/twisted-scissors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-lg"
                >
                  Book Appointment <ArrowRight size={20} />
                </a>
                <Link href="/services" className="btn-primary text-lg">
                  View Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/frontdoor.png"
                  alt="Twisted Scissors Barbershop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C9A227] text-[#1A1A2E] px-6 py-4 rounded-sm">
                <div className="font-display text-3xl font-bold">5.0</div>
                <div className="text-sm font-medium">Google Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
              PREMIUM GROOMING
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              From classic cuts to modern styles, we deliver precision grooming tailored to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 border-l-4 border-[#C9A227] shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-xl font-bold text-[#1A1A2E] mb-2">{service.name}</h3>
                <div className="flex items-center gap-4 text-[#4A4A4A] text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {service.duration}
                  </span>
                </div>
                <div className="font-display text-3xl font-bold text-[#C9A227]">{service.price}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A227] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
                Why Twisted Scissors
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
                THE DIFFERENCE IS<br />IN THE DETAILS
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center flex-shrink-0">
                    <Scissors className="text-[#1A1A2E]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">Expert Barbers</h3>
                    <p className="text-white/70">Skilled professionals who understand modern styles and classic cuts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#1A1A2E]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">On-Time Service</h3>
                    <p className="text-white/70">We respect your time. Appointments start when scheduled.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1A1A2E]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">Hanover Location</h3>
                    <p className="text-white/70">Conveniently located in the heart of Hanover, NH.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/insideview.png"
                alt="Inside Twisted Scissors"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
              WHAT CLIENTS SAY
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-[#C9A227] fill-[#C9A227]" size={20} />
                  ))}
                </div>
                <p className="font-accent text-lg italic text-[#4A4A4A] mb-6">&ldquo;{review.text}&rdquo;</p>
                <div className="font-display font-bold text-[#1A1A2E]">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6">
            READY FOR A FRESH CUT?
          </h2>
          <p className="text-xl text-[#1A1A2E]/80 mb-8">
            Book your appointment today and experience the Twisted Scissors difference.
          </p>
          <a
            href="https://bookoapp.com/book/twisted-scissors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A2E] text-[#C9A227] font-display text-xl font-bold hover:bg-[#2A2A4E] transition-all"
          >
            Book Now <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo.png"
                    alt="Twisted Scissors"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-xl font-bold">TWISTED SCISSORS</span>
              </div>
              <p className="text-white/60 text-sm">
                Premium barbershop in Hanover, NH. Expert cuts, classic style.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Hours</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Mon-Fri: 9am - 7pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>603-678-0701</li>
                <li>Hanover, NH</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Book Now</h4>
              <a
                href="https://bookoapp.com/book/twisted-scissors"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Schedule Online
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Twisted Scissors. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
