'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ArrowRight, Phone, Calendar, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function HomePage() {
  const services = [
    { name: 'Classic Haircut', price: '$35', duration: '30 min', description: 'Precision cut tailored to your style' },
    { name: 'Fade / Taper', price: '$40', duration: '35 min', description: 'Modern fade with clean lines' },
    { name: 'Beard Trim', price: '$20', duration: '15 min', description: 'Shape and style your beard' },
    { name: 'Haircut & Beard', price: '$50', duration: '45 min', description: 'Complete grooming package' },
  ];

  const reviews = [
    { name: 'Rusty S.', rating: 5, text: 'Brook listens to me, rather than merely doing the same thing every time. She\'s always good-humored, and respectful of schedules.', date: 'Dec 2024' },
    { name: 'T. N.', rating: 5, text: 'Brooke is great! She\'s pretty skilled with a pair of scissors and a razor for a men\'s haircut. Highly recommend!', date: 'Jul 2024' },
    { name: 'Susan Henderson', rating: 5, text: 'Great haircuts by Brooke. Have been there many times and always happy with how my hair is cut.', date: 'Jul 2024' },
    { name: 'Lynne Weaver', rating: 5, text: 'Thank you Brooke for taking the time to get my color and style just perfect!! I absolutely love it!', date: 'May 2024' },
    { name: 'Meredith Erickson', rating: 5, text: 'Stylist was friendly, haircut was exactly what I requested, salon was super clean and welcoming.', date: 'Feb 2024' },
    { name: 'Reagan Quinn', rating: 5, text: 'Brooke is super friendly, and the salon is very nice and clean! Wonderful job cutting and styling.', date: 'Feb 2024' },
  ];

  const features = [
    { icon: Award, title: '20+ Years Experience', desc: 'Combined barber expertise' },
    { icon: MapPin, title: 'Prime Location', desc: '53 S. Main St, Hanover' },
    { icon: Calendar, title: 'Easy Booking', desc: 'Online scheduling available' },
    { icon: Phone, title: 'Walk-ins Welcome', desc: 'When schedule permits' },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
              <span className="inline-block text-gold text-sm font-mono tracking-[0.3em] uppercase mb-6">
                Hanover&apos;s Finest Barbershop
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] mb-8">
                <span className="block">WHERE</span>
                <span className="block text-gold">PRECISION</span>
                <span className="block">MEETS</span>
                <span className="block text-gold">STYLE</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-grey-300 mb-10 max-w-lg leading-relaxed">
                Expert haircuts and grooming services in the heart of Hanover. 
                20+ years of combined experience serving the Upper Valley.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://bookoapp.com/book/twisted-scissors" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black rounded-none font-semibold text-lg hover:bg-gold-light transition-all duration-300">
                  Book Appointment <ArrowRight size={20} />
                </a>
                <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-none font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  View Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:pl-12">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30" />
              
              <div className="relative aspect-square overflow-hidden bg-grey-900 flex items-center justify-center p-12">
                <Image src="/images/logo.png" alt="Twisted Scissors Logo" width={400} height={400} className="object-contain" priority />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gold text-black px-8 py-6">
                <div className="font-display text-4xl font-bold">5.0</div>
                <div className="text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" /> Google Rating
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin size={16} className="text-gold" /> 53 S. Main St
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-grey-100 border-y border-grey-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-gold" size={24} />
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
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Our Services</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-6">PREMIUM GROOMING</h2>
            <p className="text-grey-600 text-xl max-w-2xl mx-auto">
              From classic cuts to modern styles, we deliver precision grooming tailored to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={service.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} 
                className="group bg-white p-8 border-l-4 border-gold shadow-sm hover:shadow-xl transition-all duration-500" whileHover={{ y: -8 }}>
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold text-black mb-3">{service.name}</h3>
                  <p className="text-grey-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center gap-4 text-grey-600 text-sm mb-4">
                    <span className="flex items-center gap-1"><Clock size={14} className="text-gold" /> {service.duration}</span>
                  </div>
                  <div className="font-display text-4xl font-bold text-gold">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-none font-semibold text-lg hover:bg-grey-800 transition-all duration-300">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-gold font-mono text-sm tracking-[0.3em] uppercase mb-4 block">About Twisted Scissors</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                YOUR HAIR<br /><span className="text-gold">TRANSFORMATION</span><br />AWAITS
              </h2>
              <div className="space-y-6 text-lg text-grey-300 leading-relaxed">
                <p>Welcome to our hair haven in the heart of Hanover, minutes away from Dartmouth College. With over 18 years of dedicated service to Upper Valley clients, our brand-new spot at 53 S. Main Street is ready to elevate your style.</p>
                <p>Backed by 20 years of combined barber experience, our team offers expert cuts and vibrant colors. We listen to you, respect your time, and deliver results that keep you coming back.</p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
                <div><div className="font-display text-4xl font-bold text-gold">18+</div><div className="text-grey-400 text-sm mt-1">Years Serving Hanover</div></div>
                <div><div className="font-display text-4xl font-bold text-gold">20+</div><div className="text-grey-400 text-sm mt-1">Years Combined Experience</div></div>
                <div><div className="font-display text-4xl font-bold text-gold">5.0</div><div className="text-grey-400 text-sm mt-1">Google Rating</div></div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/insideview.png" alt="Inside Twisted Scissors" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 lg:py-32 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-6">WHAT CLIENTS SAY</h2>
            <p className="text-grey-600 text-xl max-w-2xl mx-auto">
              Real reviews from real clients. All 5-star ratings on Google.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-gold">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold" size={20} />
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
              <span className="text-gold font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Hours</span>
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
                    <span className={item.hours === 'Closed' ? 'text-grey-500' : 'text-gold'}>{item.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-gold font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Location</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">FIND US</h2>
              <div className="bg-white/5 p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="text-gold mt-1" size={24} />
                  <div>
                    <div className="font-display text-xl font-bold text-white mb-2">Twisted Scissors</div>
                    <div className="text-grey-300">53 S. Main Street</div>
                    <div className="text-grey-300">Hanover, NH 03755</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-gold" size={24} />
                  <a href="tel:6032779842" className="text-grey-300 hover:text-gold transition-colors text-lg">(603) 277-9842</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">READY FOR A FRESH CUT?</h2>
          <p className="text-xl text-black/80 mb-8">Book your appointment today and experience the Twisted Scissors difference.</p>
          <a href="https://bookoapp.com/book/twisted-scissors" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-gold font-display text-xl font-bold hover:bg-grey-900 transition-all">
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
              <a href="https://bookoapp.com/book/twisted-scissors" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-semibold hover:bg-gold-light transition-all">
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
