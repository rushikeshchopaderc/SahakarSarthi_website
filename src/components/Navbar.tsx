import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    if (id === 'hero') {
      setIsOpen(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Feedbacks', href: 'feedbacks' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Attorneys', href: 'team' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 bg-brand-navy shadow-xl py-4`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center lg:grid lg:grid-cols-12 gap-4">
          <Link to="/" className="flex items-center gap-2 lg:col-span-3">
            <span className="text-base md:text-lg lg:text-xl font-serif font-bold text-white tracking-tight lg:tracking-wider uppercase whitespace-nowrap">Sahkar Sarathi</span>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-8 lg:col-span-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[11px] xl:text-sm font-bold text-white/70 hover:text-brand-gold transition-all tracking-tight xl:tracking-[0.2em] uppercase whitespace-nowrap px-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-end items-center gap-4 lg:col-span-3">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden lg:block bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-2 xl:px-6 py-2 rounded-none text-[10px] xl:text-[12px] font-bold uppercase transition-all tracking-tighter xl:tracking-[0.2em] shadow-lg hover:shadow-brand-gold/20 whitespace-nowrap"
            >
              Consult Now
            </button>
            
            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-serif italic text-white"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-brand-gold text-brand-navy w-full py-4 rounded-none text-sm font-bold uppercase tracking-widest"
            >
              Free Consultation
            </button>
          </motion.div>
        )}
      </nav>
    </>
  );
}
