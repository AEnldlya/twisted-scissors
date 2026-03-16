'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Scissors } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function ServicesPage() {
  const services = [
    { 
      name: 'Classic Haircut', 
      price: '$35', 
      duration: '30 min', 
      description: 'A precision cut tailored to your personal style. Includes consultation, wash, cut, and styling.',
      features: ['Consultation', 'Shampoo', 'Precision Cut', 'Styling']
    },
    { 
      name: 'Fade / Taper', 
      price: '$40', 
      duration: '35 min', 
      description: 'Modern fade or taper cut with clean lines and smooth transitions. Perfect for a fresh, contemporary look.',
      features: ['Skin Fade', 'Low/Mid/High Fade', 'Taper', 'Line Up']
    },
    { 
      name: 'Beard Trim', 
      price: '$20', 
      duration: '15 min', 
      description: 'Professional beard shaping and trimming to complement your haircut and facial structure.',
      features: ['Shape & Style', 'Neck Cleanup', 'Hot Towel', 'Beard Oil']
    },
    { 
      name: 'Hot Towel Shave', 
      price: '$35', 
      duration: '30 min', 
      description: 'Classic straight razor shave with hot towel treatment for the ultimate grooming experience.',
      features: ['Hot Towel Prep', 'Straight Razor', 'Aftershave', 'Moisturizer']
    },
    { 
      name: 'Haircut & Beard', 
      price: '$50', 
      duration: '45 min', 
      description: 'Complete grooming package. Get a fresh cut and perfectly styled beard in one visit.',
      features: ['Full Haircut', 'Beard Trim', 'Hot Towel', 'Styling']
    },
    { 
      name: 'Kids Cut', 
      price: '$25', 
      duration: '20 min', 
      description: 'Gentle and patient service for young clients. Ages 12 and under.',
      features: ['Patient Service', 'Kid-Friendly', 'Wash & Cut', 'Fun Experience']
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F0]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[#C9A227] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              OUR SERVICES
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Premium grooming services tailored to your style. Every cut is a masterpiece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white p-8 border-t-4 border-[#C9A227] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Scissors className="text-[#C9A227]" size={24} />
                  <h3 className="font-display text-2xl font-bold text-[#1A1A2E]">{service.name}</h3>
                </div>
                <p className="text-[#4A4A4A] mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-[#C9A227]/10 text-[#1A1A2E] text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-[#4A4A4A]">
                    <Clock size={16} className="text-[#C9A227]" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-display text-3xl font-bold text-[#C9A227]">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-[#1A1A2E] mb-6">Ready to Book?</h2>
          <p className="text-xl text-[#1A1A2E]/80 mb-8">Schedule your appointment online in minutes.</p>
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
              <span className="font-display text-xl font-bold">TWISTED SCISSORS</span>
              <p className="text-white/60 text-sm mt-2">Premium barbershop in Hanover, NH.</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Hours</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>Wed-Fri: 9am - 5pm</li>
                <li>Saturday: 9am - 12:30pm</li>
                <li>Sun-Tue: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>(603) 277-9842</li>
                <li>53 S. Main St, Hanover, NH</li>
              </ul>
            </div>
            <div>
              <Link href="/" className="text-[#C9A227] hover:underline">← Back to Home</Link>
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
