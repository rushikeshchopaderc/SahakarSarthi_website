import { motion } from 'framer-motion';

const images = [
  '/images/img1.jpeg',
  '/images/img2.jpeg',
  '/images/img3.jpeg',
  '/images/img4.jpeg',
  '/images/img5.jpeg',
  '/images/img6.jpeg',
  '/images/img7.jpeg',
  '/images/img8.jpeg',
  '/images/img9.jpeg',
  '/images/img10.jpeg',
  '/images/img11.jpeg',
  '/images/img12.jpeg',
  '/images/img15.jpeg',
  '/images/img16.jpeg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy">
            Moments & <span className="italic">Excellence</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-12 h-0.5 bg-brand-gold"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
