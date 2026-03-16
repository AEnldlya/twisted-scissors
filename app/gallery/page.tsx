'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function GalleryPage() {
  const transformations = [
    { id: 1, service: 'Classic Haircut', client: 'Client 1', before: null, after: null },
    { id: 2, service: 'Fade & Beard Trim', client: 'Client 2', before: null, after: null },
    { id: 3, service: 'Color & Style', client: 'Client 3', before: null, after: null },
    { id: 4, service: 'Full Grooming', client: 'Client 4', before: null, after: null },
    { id: 5, service: 'Precision Cut', client: 'Client 5', before: null, after: null },
    { id: 6, service: 'Beard Shaping', client: 'Client 6', before: null, after: null },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-gold font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              BEFORE & AFTER
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Real transformations. Real results. See the difference quality grooming makes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {transformations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                {/* Before/After Comparison */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="relative aspect-[3/4] bg-grey-100 rounded-lg overflow-hidden border-2 border-dashed border-grey-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-grey-400">
                      <Camera size={32} className="mb-2" />
                      <span className="text-sm font-medium">BEFORE</span>
                      <span className="text-xs text-grey-400 mt-1">Upload photo</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs font-bold rounded">
                      BEFORE
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative aspect-[3/4] bg-grey-100 rounded-lg overflow-hidden border-2 border-dashed border-gold/50">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-grey-400">
                      <Camera size={32} className="mb-2 text-gold" />
                      <span className="text-sm font-medium text-gold">AFTER</span>
                      <span className="text-xs text-grey-400 mt-1">Upload photo</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 text-xs font-bold rounded">
                      AFTER
                    </div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <h3 className="font-display text-xl font-bold text-black">{item.service}</h3>
                    <p className="text-grey-500 text-sm">{item.client}</p>
                  </div>
                  <div className="text-gold font-display font-bold text-2xl">
                    #{String(item.id).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-black mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl text-black/80 mb-8">Book your appointment and be our next before & after success story.</p>
          <a
            href="https://bookoapp.com/book/twisted-scissors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-gold font-display text-xl font-bold hover:bg-grey-900 transition-all"
          >
            Book Now <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="font-display text-xl font-bold">TWISTED SCISSORS</span>
              <p className="text-grey-400 text-sm mt-2">Premium barbershop in Hanover, NH.</p>
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
              <Link href="/" className="text-gold hover:underline">← Back to Home</Link>
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
