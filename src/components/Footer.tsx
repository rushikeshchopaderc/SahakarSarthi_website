import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-serif font-bold tracking-widest uppercase mb-8">SahakarSarthi</h3>
            <p className="text-white/50 leading-relaxed mb-8">
              Providing expert legal solutions for cooperative societies, public trusts, and land revenue matters since 1998. Committed to justice and specialized advocacy.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors"><Facebook size={18} /></a>
               <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors"><Twitter size={18} /></a>
               <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-gold">Practice Areas</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Cooperative Law</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Election Matters</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Revenue & Land</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Public Trusts</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Civil Appeals</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-gold">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Subscribe to our newsletter to receive the latest legal news and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border-none px-6 py-4 text-xs w-full focus:ring-1 focus:ring-brand-gold outline-none"
              />
              <button className="bg-brand-gold text-brand-navy px-6 py-4 uppercase font-bold text-xs tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs text-white/30 tracking-widest uppercase">
            © 2024 SahakarSarthi Legal Services. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-brand-gold flex items-center justify-center text-brand-navy hover:scale-110 transition-transform"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
