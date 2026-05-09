import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block">
              Free Consultation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8">
              Expert Guidance by <br />
              <span className="italic text-brand-gold">Mahendra Suryawanshi</span>
            </h2>
            <p className="text-brand-navy/60 mb-12 text-lg">
              We offer a free initial consultation to evaluate your case and discuss your legal options. Contact us today to schedule your appointment.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                   <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-navy/40 mb-1">Call Us Anywhere</span>
                   <span className="text-xl font-serif text-brand-navy">+(5) 765-850-975</span>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                   <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-navy/40 mb-1">Visit our Location</span>
                   <span className="text-lg font-serif text-brand-navy leading-snug">DREAMCITI CHS, Samta Nagar, Nashik, Maharashtra 422006</span>
                </div>
              </div>
               <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                   <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-navy/40 mb-1">Working Hours</span>
                   <span className="text-xl font-serif text-brand-navy">Mon - Fri: 09AM - 06PM</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-cream border border-brand-gold/10 min-h-[600px] overflow-hidden"
          >
            {/* Tally Form Embed */}
            <iframe 
              src="https://tally.so/embed/VLokBN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="700" 
              style={{ border: 'none' }}
              title="SahakarSarthi Contact Form"
            ></iframe>
            
            <script async src="https://tally.so/widgets/embed.js"></script>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
