import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';
const member = {
  name: 'Ad. Mahendra Suryawanshi',
  role: 'Regional Legal Advisor, BJP, Nashik',
  address: 'DREAMCITI CHS, Samta Nagar, Nashik, Maharashtra 422006',
  image: '/images/img17.jpeg'
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block">
            Our Expert Attorney
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy">
            Meet Our <span className="italic">Principal Advisor</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden group"
          >
            <div className="md:w-1/2 relative aspect-[3/4]">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
              <div className="mb-8">
                <span className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-2 block tracking-widest-plus">Free Consultation</span>
                <h3 className="text-3xl md:text-5xl font-serif text-brand-navy leading-tight">
                  Expert Guidance by <br/>
                  <span className="italic">{member.name.split(' ').slice(1).join(' ')}</span>
                </h3>
              </div>
              
              <div className="flex gap-3 text-brand-navy/60 mb-8 items-start">
                <MapPin size={20} className="text-brand-gold shrink-0 mt-1" />
                <p className="text-sm italic font-serif leading-relaxed">
                  {member.address}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-brand-navy/70 text-sm leading-relaxed">
                  Specializing in Cooperative and Revenue Law with over 25 years of experience in facilitating justice through dedicated legal advisory.
                </p>
              </div>

              <div className="flex gap-4 mb-10">
                <a href="#" className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-white transition-all"><Linkedin size={18} /></a>
              </div>

              <a href="#contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors">
                Book a Consultation <div className="w-12 h-[1px] bg-brand-gold"></div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
