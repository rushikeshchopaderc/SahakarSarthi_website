import { motion } from 'framer-motion';
import { Gavel, Users, Shield, Briefcase, Landmark, Scaling } from 'lucide-react';

const services = [
  {
    icon: <Gavel size={32} />,
    title: 'Cooperative Law',
    description: 'Expert guidance on cooperative society registrations, audits, and legal compliance.'
  },
  {
    icon: <Users size={32} />,
    title: 'Election Matters',
    description: 'Strategic legal support for cooperative and regional election disputes.'
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Trust & NGO Law',
    description: 'Professional advice on public trust registration and management of non-profit entities.'
  },
  {
    icon: <Landmark size={32} />,
    title: 'Revenue & Land Matters',
    description: 'Full-service support for land titles, revenue appeals, and property documentation.'
  },
  {
    icon: <Scaling size={32} />,
    title: 'Civil Litigation',
    description: 'Strategic advocacy in complex civil disputes and mediation processes.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Constitutional Law',
    description: 'Expert legal counsel on constitutional rights and legal framework interpretations.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG Text */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20rem] font-serif font-bold leading-none -translate-y-1/4 translate-x-1/4 inline-block">JUSTICE</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block">
            Our Practice Areas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy">
            Expert Legal Solutions <span className="italic">For Everyone</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-brand-cream border border-brand-gold/10 hover:border-brand-gold group transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
              <p className="text-brand-navy/60 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors">
                Read More <div className="w-8 h-[1px] bg-brand-gold"></div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
