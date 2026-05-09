import { motion } from 'framer-motion';

// Use eager glob to get all images as URLs
const imageModules = import.meta.glob('../assets/images/*.{jpeg,jpg,png}', { eager: true, as: 'url' });
// filter out specific images used elsewhere if needed, but here we just take the ones from the previous list
const galleryImages = [
  'img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 
  'img7.jpeg', 'img8.jpeg', 'img9.jpeg', 'img10.jpeg', 'img11.jpeg', 'img12.jpeg', 
  'img15.jpeg', 'img16.jpeg'
].map(name => {
  const key = Object.keys(imageModules).find(k => k.endsWith(name));
  return key ? imageModules[key] : null;
}).filter(Boolean) as string[];

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
          {galleryImages.map((src, index) => (
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
