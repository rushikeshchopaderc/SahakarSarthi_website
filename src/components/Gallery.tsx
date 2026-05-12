import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = import.meta.glob('../assets/img/img*.jpeg', { eager: true, as: 'url' });
const galleryImages = [
  'img1', 'img2', 'img3', 'img4', 
  'img5', 'img6', 'img7', 'img8', 
  'img9', 'img10', 'img11', 'img12', 
  'img15', 'img16'
].map(key => images[`../assets/img/${key}.jpeg`]);

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section id="gallery" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block"
          >
            Our Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-navy"
          >
            Moments & <span className="italic">Excellence</span>
          </motion.h2>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full px-4 md:px-0">
                <img
                  src={galleryImages[currentIndex] as string}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-brand-navy/10 rounded-2xl"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 z-10 w-12 h-12 bg-white/90 hover:bg-white text-brand-navy rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 z-10 w-12 h-12 bg-white/90 hover:bg-white text-brand-navy rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-1.5 transition-all rounded-full ${
                  i === currentIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-navy/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
