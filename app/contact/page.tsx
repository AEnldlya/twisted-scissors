'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, ArrowRight, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function ContactPage() {
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
              Get In Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              CONTACT US
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Book online or give us a call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-bold text-[#1A1A2E] mb-8">
                VISIT THE <span className="text-[#C9A227]">SHOP</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#C9A227]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1A1A2E] mb-2">Address</h3>
                    <p className="text-[#4A4A4A] text-lg">53 S. Main Street</p>
                    <p className="text-[#4A4A4A] text-lg">Hanover, NH 03755</p>
                    <p className="text-[#8A8A8A] text-sm mt-1">In the Nugget Building, Downtown Hanover</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C9A227]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1A1A2E] mb-2">Phone</h3>
                    <a href="tel:6032779842" className="text-[#4A4A4A] text-lg hover:text-[#C9A227] transition-colors">
                      (603) 277-9842
                    </a>
                    <p className="text-[#8A8A8A] text-sm mt-1">Call or text to book</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#C9A227]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1A1A2E] mb-2">Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[#4A4A4A]">
                        <span>Wednesday - Friday</span>
                        <span className="font-medium">9AM - 5PM</span>
                      </div>
                      <div className="flex justify-between text-[#4A4A4A]">
                        <span>Saturday</span>
                        <span className="font-medium">9AM - 12:30PM</span>
                      </div>
                      <div className="flex justify-between text-[#8A8A8A]">
                        <span>Sunday - Tuesday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#C9A227]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-[#C9A227]" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1A1A2E] mb-2">Online Booking</h3>
                    <p className="text-[#4A4A4A]">Book your appointment online 24/7</p>
                    <a 
                      href="https://bookoapp.com/book/twisted-scissors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C9A227] font-medium mt-2 hover:underline"
                    >
                      Book Now <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/frontdoor.png"
                  alt="Twisted Scissors Barbershop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C9A227] text-[#1A1A2E] px-8 py-6">
                <div className="font-display text-3xl font-bold">Walk-ins</div>
                <div className="text-sm font-medium">Welcome when schedule permits</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Book CTA */}
      <section className="py-20 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-[#1A1A2E] mb-6">Ready to Look Your Best?</h2>
          <p className="text-xl text-[#1A1A2E]/80 mb-8">Book your appointment online in just a few clicks.</p>
          <a
            href="https://bookoapp.com/book/twisted-scissors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A2E] text-[#C9A227] font-display text-xl font-bold hover:bg-[#2A2A4E] transition-all"
          >
            Book Appointment <ArrowRight size={24} />
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
