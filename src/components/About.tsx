import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Main Image */}
            <div className="relative z-10 p-4 bg-white shadow-2xl">
              <img 
                src="/img/img13.jpeg" 
                alt="Law Library" 
                className="w-full transition-all duration-700 hover:scale-105"
              />
            </div>
            
            {/* Experience Box */}
            <div className="absolute -bottom-10 -right-10 bg-brand-navy text-white p-10 z-20 hidden md:block">
              <span className="block text-5xl font-serif text-brand-gold mb-2">25+</span>
              <span className="block text-xs uppercase tracking-widest font-bold">Years of Expert<br/>Legal Experience</span>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 border-t-8 border-l-8 border-brand-gold/20 -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4">
              About Sahkar Sarathi
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-8 leading-snug">
              Why Trust Our Firm For <br />
              <span className="italic">Your Legal Matters</span>
            </h2>
            <p className="text-brand-navy/70 text-lg mb-8 leading-relaxed">
              Led by Ad. Mahendra Suryawanshi, we are committed to providing the highest quality legal services. Our firm has been built on a foundation of trust, integrity, and exceptional results in cooperative and revenue law.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <span className="font-serif font-bold text-xl">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-navy mb-1">Passionate About Justice</h3>
                  <p className="text-brand-navy/60 text-sm">Every client deserves a champion who will fight for their rights tirelessly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <span className="font-serif font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-navy mb-1">Local & Expert Knowledge</h3>
                  <p className="text-brand-navy/60 text-sm">Deep understanding of regional laws and established relationships in court.</p>
                </div>
              </div>
            </div>

            <button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest-plus transition-all">
              Discover More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
