import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-brand-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/img/img14.jpeg" 
          alt="Law Firm" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-gold font-semibold uppercase tracking-widest-plus text-xs mb-6">
              Welcome to Sahkar Sarathi
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-8">
              Empowering Your <br />
              <span className="italic text-brand-gold text-5xl md:text-7xl">Cooperative Future</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
              Providing expert legal solutions for cooperative societies, election matters, and revenue disputes with a legacy of 25+ years of integrity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-10 py-5 text-sm font-bold uppercase tracking-widest-plus transition-all flex items-center justify-center gap-3"
              >
                Practice Areas <ArrowRight size={18} />
              </a>
              <a 
                href="#about"
                className="border border-white/30 hover:bg-white/10 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest-plus transition-all flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 border-l border-white/10"></div>
      <div className="hidden lg:block absolute right-32 top-0 bottom-0 w-32 border-l border-white/10"></div>
    </section>
  );
}
