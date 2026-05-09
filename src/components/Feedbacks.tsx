import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ad. Suryawanshi's deep understanding of cooperative law helped our society resolve complex partition and audit issues effectively.",
    author: "Vishwas Patil",
    role: "Chairman",
    company: "Nashik Housing Soc.",
    date: "January 2024"
  },
  {
    quote: "His strategic advice during the election period was unparalleled. A true expert in regional legal frameworks.",
    author: "Ganesh Deshmukh",
    role: "Representative",
    company: "Public Trust Representative",
    date: "February 2024"
  },
  {
    quote: "Professionalism and integrity at its best. Our trust registration was handled seamlessly without any administrative hurdles.",
    author: "Sanjay Kulkarni",
    role: "Secretary",
    company: "Education Trust Nashik",
    date: "March 2024"
  },
  {
    quote: "The team's dedication to revenue matters is commendable. They simplified complex land records for us and achieved a favorable outcome.",
    author: "Meera Bai",
    role: "Landowner",
    company: "Private Client",
    date: "April 2024"
  }
];

export default function Feedbacks() {
  return (
    <section id="feedbacks" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy">
            Success <span className="italic">Stories</span>
          </h2>
          <p className="mt-4 text-brand-navy/60 max-w-2xl mx-auto font-serif italic">
            "Your trust is our greatest achievement. Hear from the communities and individuals we've had the privilege to serve."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white shadow-xl hover:shadow-2xl transition-all border-l-4 border-brand-gold relative overflow-hidden"
            >
              <div className="text-brand-gold mb-6 relative">
                <Quote size={40} className="opacity-30 group-hover:opacity-60 transition-opacity" />
              </div>
              
              <p className="text-brand-navy/80 text-lg italic font-serif leading-relaxed mb-8 relative">
                "{item.quote}"
              </p>
              
              <div className="flex justify-between items-end relative">
                <div>
                  <h4 className="text-brand-navy font-bold text-sm uppercase tracking-widest leading-none mb-1">{item.author}</h4>
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">
                    {item.role}, {item.company}
                  </span>
                </div>
                <span className="text-brand-navy/30 text-[10px] font-bold uppercase tracking-widest">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
