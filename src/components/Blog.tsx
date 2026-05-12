import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 'importance-of-legal-representation',
    title: 'The Importance of Legal Representation',
    excerpt: 'Understanding why having a specialized legal advisor is crucial for cooperative societies and individual rights.',
    date: 'March 30, 2024',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'revenue-court-expectations',
    title: 'What to Expect in Revenue Court',
    excerpt: 'A comprehensive guide on the procedures and documentation required for revenue and land matter appeals.',
    date: 'April 12, 2024',
    author: 'Ad. Mahendra',
    image: '/img/img18.jpeg'
  },
  {
    id: 'choosing-legal-advisor',
    title: 'How to Choose the Right Legal Advisor',
    excerpt: 'Key factors to consider when selecting a legal partner for your trust or cooperative organization.',
    date: 'April 25, 2024',
    author: 'Ad. Mahendra',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4 inline-block">
            Legal Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy">
            Everything You <span className="italic">Need To Know</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Legal Advice
                </div>
              </div>
              
              <div className="flex gap-6 mb-4 text-brand-navy/40 text-[10px] uppercase font-bold tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={12} className="text-brand-gold" /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={12} className="text-brand-gold" /> {post.author}</span>
              </div>
              
              <h3 className="text-2xl font-serif text-brand-navy mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-brand-navy/60 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy group-hover:text-brand-gold transition-colors">
                Read More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
