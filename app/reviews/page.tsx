'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function ReviewsPage() {
  const reviews = [
    { name: 'Fin', rating: 5, text: 'Always the best haircut in Hanover!', date: '2024' },
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
              Customer Love
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              REVIEWS
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-[#C9A227] fill-[#C9A227]" size={32} />
              ))}
            </div>
            <p className="text-xl text-white/70">5.0 Average Rating on Google</p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#C9A227]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-[#C9A227] fill-[#C9A227]" size={20} />
                  ))}
                </div>
                <p className="font-accent text-lg italic text-[#4A4A4A] mb-6 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="font-display font-bold text-[#1A1A2E]">{review.name}</div>
                  <div className="text-[#8A8A8A] text-sm">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#C9A227]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-[#1A1A2E] mb-6">Join Our Happy Clients</h2>
          <p className="text-xl text-[#1A1A2E]/80 mb-8">Experience the Twisted Scissors difference for yourself.</p>
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
