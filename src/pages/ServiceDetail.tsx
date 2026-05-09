import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Gavel, Users, Briefcase, Landmark, Scaling, Shield } from 'lucide-react';
import { useEffect } from 'react';

const services = [
  {
    id: 'cooperative-law',
    icon: <Gavel size={48} />,
    title: 'Cooperative Law',
    description: 'Expert guidance on cooperative society registrations, audits, and legal compliance.',
    content: 'Cooperative societies are the backbone of community-based economic development. Our firm specializes in the legal intricacies of the Maharashtra Co-operative Societies Act, providing end-to-end solutions for registration, management, and dispute resolution. We assist in election procedures, drafting of bylaws, and handling appeals before the Co-operative Court and the Registrar.'
  },
  {
    id: 'election-matters',
    icon: <Users size={48} />,
    title: 'Election Matters',
    description: 'Strategic legal support for cooperative and regional election disputes.',
    content: 'Election disputes require swift and decisive legal action. Whether it is challenging a candidate eligibility, addressing voting irregularities, or representing clients in election petitions, we bring years of expertise to the table. Our track record includes successful representation in high-stakes cooperative election matters across Maharashtra.'
  },
  {
    id: 'trust-ngo-law',
    icon: <Briefcase size={48} />,
    title: 'Trust & NGO Law',
    description: 'Professional advice on public trust registration and management of non-profit entities.',
    content: 'Registration and compliance for Public Trusts and NGOs are essential for smooth operations. We provide comprehensive legal services including trust deed drafting, registration with the Charity Commissioner, obtaining 12A/80G certificates under Income Tax, and managing ongoing compliance requirements.'
  },
  {
    id: 'revenue-land-matters',
    icon: <Landmark size={48} />,
    title: 'Revenue & Land Matters',
    description: 'Full-service support for land titles, revenue appeals, and property documentation.',
    content: 'Land revenue matters involve navigating through complex historical records and changing regulations. We specialize in appeals before the Tehsildar, Sub-Divisional Officer, and the Collector. Our services cover Mutation entries, 7/12 extracts, Non-Agricultural (NA) permissions, and title verification.'
  },
  {
    id: 'civil-litigation',
    icon: <Scaling size={48} />,
    title: 'Civil Litigation',
    description: 'Strategic advocacy in complex civil disputes and mediation processes.',
    content: 'Our civil litigation practice covers a wide array of disputes, from contractual disagreements to inheritance and property partitions. We emphasize a result-oriented approach, utilizing both court representation and Alternative Dispute Resolution (ADR) techniques like mediation and arbitration to achieve the best outcome for our clients.'
  },
  {
    id: 'constitutional-law',
    icon: <Shield size={48} />,
    title: 'Constitutional Law',
    description: 'Expert legal counsel on constitutional rights and legal framework interpretations.',
    content: 'Constitutional law often involves challenging administrative overreach or protecting fundamental rights. We represent clients in writ petitions before the High Court, focusing on matters of administrative law, public interest litigation, and the enforcement of constitutional guarantees.'
  }
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-12 hover:text-brand-navy transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 md:p-20 shadow-2xl"
        >
          <div className="w-20 h-20 bg-brand-navy text-brand-gold flex items-center justify-center mb-10">
            {service.icon}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif text-brand-navy mb-8">
            {service.title}
          </h1>
          
          <div className="prose prose-lg text-brand-navy/70 max-w-none">
            <p className="text-xl font-serif italic mb-8 border-l-4 border-brand-gold pl-6 py-2">
              {service.description}
            </p>
            <div className="space-y-6 leading-relaxed">
              {service.content.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-brand-gold/10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <h3 className="text-brand-navy font-serif text-2xl mb-2">Need detailed advice?</h3>
              <p className="text-brand-navy/60 text-sm">Schedule a one-on-one session with our experts.</p>
            </div>
            <Link to="/#contact" className="bg-brand-gold text-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all">
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
