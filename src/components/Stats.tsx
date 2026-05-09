import { motion } from 'framer-motion';

const stats = [
  { label: 'Cases Resolved', value: '1.5k+' },
  { label: 'Trusted Clients', value: '250+' },
  { label: 'Expert Lawyers', value: '45+' },
  { label: 'Years of Exp', value: '25+' }
];

export default function Stats() {
  return (
    <section className="bg-brand-navy py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <span className="block text-4xl md:text-5xl font-serif text-brand-gold mb-2">{stat.value}</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
