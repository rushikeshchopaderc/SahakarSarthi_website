import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Attorneys', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand-navy text-white text-xs py-2 px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 italic">
              <MapPin size={14} className="text-brand-gold" /> Samta Nagar, Nashik, India
            </span>
            <span className="flex items-center gap-2 italic">
              <Mail size={14} className="text-brand-gold" /> info@sahakarsarthi.in
            </span>
          </div>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-2 font-semibold">
              <Phone size={14} className="text-brand-gold" /> +(5) 765-850-975
            </span>
          </div>
        </div>
      </div>

      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 bg-brand-navy shadow-xl py-4`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-white tracking-widest uppercase">SahakarSarthi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-white/80 hover:text-brand-gold transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-6 py-2.5 rounded-none text-xs font-bold uppercase transition-all tracking-widest">
              Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 p-6 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif italic text-white"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-gold text-brand-navy w-full py-4 rounded-none text-sm font-bold uppercase tracking-widest">
              Free Consultation
            </button>
          </motion.div>
        )}
      </nav>
    </>
  );
}
