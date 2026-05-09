import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useEffect } from 'react';

const posts = [
  {
    id: 'importance-of-legal-representation',
    title: 'The Importance of Legal Representation',
    excerpt: 'Understanding why having a specialized legal advisor is crucial for cooperative societies and individual rights.',
    date: 'March 30, 2024',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200&h=600',
    content: 'Navigating the legal landscape of cooperative societies requires more than just general legal knowledge. It demands an understanding of specific statutes and the procedural nuances of cooperative courts. A specialized legal advisor ensures that your society remains compliant with audit requirements, handles member disputes fairly, and executes redevelopment or land purchase agreements with full legal protection. In today\'s regulatory environment, professional legal guidance isn\'t just an option—it\'s a necessity for safeguarding the interests of all members.'
  },
  {
    id: 'revenue-court-expectations',
    title: 'What to Expect in Revenue Court',
    excerpt: 'A comprehensive guide on the procedures and documentation required for revenue and land matter appeals.',
    date: 'April 12, 2024',
    author: 'Ad. Mahendra',
    image: '/images/img18.jpeg',
    content: 'Revenue courts handle matters related to land records, mutation entries, and agrarian disputes. When approaching a Revenue Court, whether it is the Tehsildar or the Sub-Divisional Officer, documentation is key. You should be prepared with historical 7/12 extracts, mutation records (Ferfar), and relevant sale deeds or inheritance certificates. The process typically involves a local inquiry and a formal hearing. Understanding the hierarchy of these courts—from the Tehsildar up to the Divisional Commissioner—is vital for a successful appeal strategy.'
  },
  {
    id: 'choosing-legal-advisor',
    title: 'How to Choose the Right Legal Advisor',
    excerpt: 'Key factors to consider when selecting a legal partner for your trust or cooperative organization.',
    date: 'April 25, 2024',
    author: 'Ad. Mahendra',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200&h=600',
    content: 'Selecting the right legal partner is one of the most critical decisions for any organization. Look for expertise in your specific domain—general practice is rarely enough for complex cooperative or trust matters. Consider their track record in local courts and their familiarity with regional administrative bodies. Beyond technical skill, choose someone who prioritizes transparent communication and demonstrates a genuine commitment to justice. At SahakarSarthi, we pride ourselves on building long-term relationships based on shared values and exceptional results.'
  }
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-12 hover:text-brand-navy transition-colors">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl overflow-hidden"
        >
          <div className="relative aspect-[21/9]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="p-12 md:p-20">
            <div className="flex flex-wrap gap-6 mb-8 text-brand-navy/60 text-xs uppercase font-bold tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-gold" /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={14} className="text-brand-gold" /> {post.author}</span>
              <span className="flex items-center gap-2"><Clock size={14} className="text-brand-gold" /> 5 Min Read</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif text-brand-navy mb-10 leading-tight">
              {post.title}
            </h1>
            
            <div className="prose prose-lg text-brand-navy/70 max-w-none space-y-8 leading-relaxed">
              <p className="text-2xl font-serif italic text-brand-navy/80">
                {post.excerpt}
              </p>
              <div className="text-lg">
                {post.content.split('\n').map((para, i) => (
                  <p key={i} className="mb-6">{para}</p>
                ))}
              </div>
            </div>
            
            <div className="mt-16 pt-12 border-t border-brand-gold/20">
               <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Tags</h4>
               <div className="flex gap-4">
                 <span className="bg-brand-cream px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brand-navy">Legal Advice</span>
                 <span className="bg-brand-cream px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brand-navy">Law Firm</span>
                 <span className="bg-brand-cream px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brand-navy">Expert Insights</span>
               </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
