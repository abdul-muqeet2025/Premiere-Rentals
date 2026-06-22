import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  CheckCircle, 
  Users, 
  Award, 
  ThumbsUp, 
  ShieldCheck, 
  MessageSquare,
  Building
} from 'lucide-react';

interface Testimonial {
  name: string;
  role: 'landlord' | 'tenant' | 'investor';
  roleLabel: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export default function TrustEngine() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'landlord' | 'tenant' | 'investor'>('all');

  const testimonials: Testimonial[] = [
    {
      name: "Alastair Graham",
      role: "landlord",
      roleLabel: "Landlord (2 Townhouses)",
      location: "Kirkcaldy Links",
      rating: 5,
      date: "3 weeks ago",
      comment: "Premiere has managed my two buy-to-let townhouses for 4 years. Not a single day of void periods and rents are always on time. They handled a boiler substitution in December within 4 hours. Absolute five-star standard.",
      verified: true
    },
    {
      name: "Sarah Jenkins",
      role: "tenant",
      roleLabel: "Tenant",
      location: "Dunfermline City",
      rating: 5,
      date: "1 month ago",
      comment: "Applying for the flat was so transparent compared to other huge national agencies. No hidden reservation fees, and their repair coordinators are wonderfully fast to reply. Highly recommend Premiere to anyone looking to rent.",
      verified: true
    },
    {
      name: "Marcus Roy-Vance",
      role: "investor",
      roleLabel: "Portfolio Investor (11 Units)",
      location: "Glenrothes & Kirkcaldy",
      rating: 5,
      date: "2 months ago",
      comment: "I transferred my portfolio of 11 units from an Edinburgh agency. Premiere instantly revised our tenant rental valuations, spotted two critical landlord safety gaps, and boosted my annual yield by 1.9%. Phenomenal service.",
      verified: true
    },
    {
      name: "Fiona McNeill",
      role: "landlord",
      roleLabel: "Landlord",
      location: "St Andrews",
      rating: 5,
      date: "3 months ago",
      comment: "Premiere found premium professional tenants in precisely 9 days of listing. Their tenant selection criteria is outstanding. Communication is instantaneous—no automated chat loops, you speak to genuine local experts.",
      verified: true
    },
    {
      name: "Neil & Jane Wood",
      role: "landlord",
      roleLabel: "HMO Landlord",
      location: "Kirkcaldy Central",
      rating: 4,
      date: "4 months ago",
      comment: "Their free rental valuation was remarkably thorough and realistic compared to over-inflated quotes elsewhere. They gave invaluable advice on Scottish PRT guidelines. Extremely helpful team.",
      verified: true
    },
    {
      name: "Jamie Patterson",
      role: "tenant",
      roleLabel: "Tenant",
      location: "Kirkcaldy Esplanade",
      rating: 5,
      date: "6 months ago",
      comment: "Very respectful team. Whenever we have a routine check, they give us plenty of notice. Any maintenance is resolved quickly, and they made the moving-out checkout process friendly and clear.",
      verified: true
    }
  ];

  const filtered = testimonials.filter(
    (t) => activeFilter === 'all' || t.role === activeFilter
  );

  return (
    <section id="reviews-trust" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Trust Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-orange-150 text-brand-accent text-xs font-black uppercase tracking-wider inline-flex items-center gap-1 mb-4 bg-orange-55">
              <Star className="w-3.5 h-3.5 fill-current" /> Verified Local Reputation
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-secondary font-display tracking-tight">
              Why Fife Landlords Trust Premiere Rentals
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base">
              Explore authentic feedback from active renters, landlords, and investment stakeholders across Kirkcaldy and surrounding territories. Our 4.6-star rating is built on transparency, fast action, and premium service.
            </p>
          </div>

          {/* Google aggregate trust box - highly prominent trust anchor */}
          <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4 shrink-0 shadow-sm">
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col items-center justify-center font-display">
              <span className="text-3xl font-black text-slate-950 font-mono tracking-tight">4.6</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Out of 5</span>
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[1, 2, 3, 4].map((n) => (
                  <Star key={n} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 fill-current text-amber-500 opacity-60" />
              </div>
              <span className="block text-sm font-bold text-slate-900 mt-1">
                86+ Google Reviews
              </span>
              <span className="block text-xs text-slate-500">
                Independent & Family-Run
              </span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-rose-50/10">
          {[
            { id: 'all', label: 'All Reviews 🌟' },
            { id: 'landlord', label: 'Landlord Stories 🏡' },
            { id: 'tenant', label: 'Tenant Feedback 🔑' },
            { id: 'investor', label: 'Investor Success 📈' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4.5 py-2 rounded-full text-xs font-bold font-display transition-all ${
                activeFilter === tab.id
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/10'
                  : 'bg-slate-100/80 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((t, idx) => (
              <motion.div
                layout
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="bg-slate-50 hover:bg-slate-100/90 rounded-2xl p-6 border border-slate-200/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono font-bold tracking-wider uppercase">
                      {t.date}
                    </span>
                  </div>

                  {/* Body Text */}
                  <blockquote className="mt-4 text-[13px] md:text-sm text-slate-600 leading-relaxed italic">
                    "{t.comment}"
                  </blockquote>
                </div>

                {/* Sender Details */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-teal-100 text-brand-primary text-xs font-bold rounded-full flex items-center justify-center uppercase font-mono">
                      {t.name[0]}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900 leading-tight">
                        {t.name}
                      </span>
                      <span className="block text-[10px] text-brand-primary font-semibold leading-tight mt-0.5">
                        {t.roleLabel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white border border-slate-200 px-2 py-0.5 rounded">
                      📌 {t.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Highlight Trust Badging Grid */}
        <div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2 flex flex-col items-center">
            <div className="p-3 bg-indigo-50 text-indigo-700 rounded-full">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-black text-brand-secondary text-base block font-display">Deposit Safe Managed</span>
            <p className="text-slate-500 text-xs px-2">Fully regulated under SafeDeposits Scotland guidelines.</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-full">
              <CheckCircle className="w-6 h-6" />
            </div>
            <span className="font-black text-brand-secondary text-base block font-display">Zero Void Promise</span>
            <p className="text-slate-500 text-xs px-2">Over 96% properties tenanted within 14 calendar days.</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="p-3 bg-amber-50 text-amber-700 rounded-full">
              <Award className="w-6 h-6" />
            </div>
            <span className="font-black text-brand-secondary text-base block font-display">100% Fife Family Run</span>
            <p className="text-slate-500 text-xs px-2">Personal accountability on call without remote call-centres.</p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="p-3 bg-teal-50 text-teal-700 rounded-full">
              <Users className="w-6 h-6" />
            </div>
            <span className="font-black text-brand-secondary text-base block font-display">Strict Tenant Vetting</span>
            <p className="text-slate-500 text-xs px-2">Double-factor screening (References & Credit History logs).</p>
          </div>
        </div>

      </div>
    </section>
  );
}
