import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ad. Suryawanshi's deep understanding of cooperative law helped our society resolve complex partition and audit issues effectively.",
    author: "Vishwas Patil",
    company: "Chairman, Nashik Housing Soc."
  },
  {
    quote: "His strategic advice during the election period was unparalleled. A true expert in regional legal frameworks.",
    author: "Ganesh Deshmukh",
    company: "Public Trust Representative"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
       {/* Decorative Lines */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block">
              Client Feedbacks
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              What Our <span className="italic text-brand-gold">Clients Say</span> About Our Firm
            </h2>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-10 bg-white/5 border border-white/10 relative"
              >
                <div className="text-brand-gold mb-8">
                  <Quote size={40} className="opacity-40" />
                </div>
                <p className="text-white/80 text-lg italic font-serif leading-relaxed mb-8">
                  "{item.quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{item.author}</h4>
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">{item.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
