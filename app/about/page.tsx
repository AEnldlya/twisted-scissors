'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight, Award, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              ABOUT US
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Your hair transformation awaits in the heart of Hanover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-8">
                WELCOME TO YOUR<br />
                <span className="text-[#C9A227]">HAIR HAVEN</span>
              </h2>
              <div className="space-y-6 text-lg text-[#4A4A4A] leading-relaxed">
                <p>
                  Located in the heart of Hanover, just minutes away from Dartmouth College, 
                  Twisted Scissors is your destination for premium hair care and grooming.
                </p>
                <p>
                  With over 18 years of dedicated service to Upper Valley clients, our brand-new 
                  spot at 53 S. Main Street is ready to elevate your style. We combine traditional 
                  barbering techniques with modern trends to give you the perfect look.
                </p>
                <p>
                  Backed by 20 years of combined barber experience, our team offers expert cuts 
                  and vibrant colors. We listen to you, respect your time, and deliver results 
                  that keep you coming back.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/insideview.png"
                  alt="Inside Twisted Scissors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C9A227] text-[#1A1A2E] px-8 py-6">
                <div className="font-display text-4xl font-bold">18+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '18+', label: 'Years in Hanover' },
              { number: '20+', label: 'Years Combined Experience' },
              { number: '5.0', label: 'Google Rating' },
              { number: '1000+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl font-bold text-[#C9A227] mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Brooke */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#1A1A2E] p-12 relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A227]" />
                <div className="relative">
                  <Award className="text-[#C9A227] mb-6" size={48} />
                  <h3 className="font-display text-3xl font-bold text-white mb-4">Meet Brooke</h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    Our lead stylist with years of experience in precision cuts, fades, and color. 
                    Brooke listens to every client and delivers results that exceed expectations.
                  </p>
                  <div className="flex items-center gap-2 text-[#C9A227]">
                    <span className="font-display text-2xl font-bold">5.0</span>
                    <span className="text-white/60">Rating from 20+ reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#C9A227] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
                Our Team
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-8">
                EXPERT<br />STYLISTS
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                At Twisted Scissors, you are in good hands. Our team combines technical skill 
                with a passion for helping clients look and feel their best. Every cut is a 
                collaboration between stylist and client.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
                  <span className="text-[#4A4A4A]">Personalized consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
                  <span className="text-[#4A4A4A]">Attention to detail</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
                  <span className="text-[#4A4A4A]">Respect for your time</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 lg:py-32 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C9A227] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
                Visit Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
                FIND US IN<br />HANOVER
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#C9A227] mt-1" size={24} />
                  <div>
                    <div className="font-display text-xl font-bold text-white mb-1">Address</div>
                    <div className="text-white/70">53 S. Main Street</div>
                    <div className="text-white/70">Hanover, NH 03755</div>
                    <div className="text-white/50 text-sm mt-1">In the Nugget Building</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#C9A227]" size={24} />
                  <div>
                    <div className="font-display text-xl font-bold text-white mb-1">Phone</div>
                    <a href="tel:6032779842" className="text-white/70 hover:text-[#C9A227] transition-colors">
                      (603) 277-9842
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#C9A227] mt-1" size={24} />
                  <div>
                    <div className="font-display text-xl font-bold text-white mb-1">Hours</div>
                    <div className="text-white/70">Wednesday - Friday: 9AM - 5PM</div>
                    <div className="text-white/70">Saturday: 9AM - 12:30PM</div>
                    <div className="text-white/50">Sunday - Tuesday: Closed</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/frontdoor.png"
                  alt="Twisted Scissors Location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-[#1A1A2E] mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl text-[#1A1A2E]/80 mb-8">Book your appointment today.</p>
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
