import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  Award, 
  UserCheck, 
  Sparkles,
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  HelpCircle,
  Menu,
  X,
  FileText,
  Star
} from 'lucide-react';

import LeadForm from './components/LeadForm';
import LocalMapSection from './components/LocalMapSection';
import TrustEngine from './components/TrustEngine';
// @ts-ignore
import fifeHeroImage from './assets/images/fife_property_hero_1782106139959.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<'landlord' | 'tenant' | 'investor'>('landlord');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a rental valuation cost in Kirkcaldy?",
      answer: "Absolutely nothing! Our valuations are 100% free of charge and carry zero future obligation. We provide a comprehensive desktop analysis comparing active Fife listings and historical district outcomes within 24 hours of enquiry."
    },
    {
      question: "What are your professional property management fees?",
      answer: "We offer completely transparent, competitive pricing structures. Our Finder-Only setups start at a competitive flat rate, while Full Management packages range from 8% to 12% + VAT depending on portfolio volume and property conditions. No hidden extras or surprise exit terms."
    },
    {
      question: "How do you screen and select premium tenants?",
      answer: "We enforce double-factor tenant vetting to protect your yield. This includes a complete credit report check, direct employment and income verification (ensuring a minimum 2.5x rent coverage threshold), and direct verification calls to past landlords and agents."
    },
    {
      question: "What happens if a tenant slips into rent arrears?",
      answer: "We offer premium Rent Protection structures that fully guarantee your monthly income. If an issue arises, the insurance coverage continues paying 100% of the rent due and pays all structural legal costs associated with dispute resolutions."
    },
    {
      question: "How are maintenance emergencies and repairs managed?",
      answer: "We supervise a 24/7 maintenance hotline for emergency repairs. We utilize a trusted local Kirkcaldy contractor network (gas engineers, plumbers, electricians). We pass trade-only discount rates straight to landlords with absolutely no markups."
    }
  ];

  const handleScrollToForm = (servicePlan?: string) => {
    const el = document.getElementById('lead-valuation-box');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-brand-accent selection:text-white">
      
      {/* 1. Global Alert Banner */}
      <div className="bg-brand-secondary text-slate-200 text-xs py-2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 font-medium px-4 border-b border-slate-800 text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 z-50">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-accent text-white font-bold text-[10px] uppercase tracking-wider animate-pulse">
          Fife Landlords
        </span>
        <span>Scottish letting compliance regulations are shifting. Appraise your property today to secure our Rent Protection Guarantee!</span>
        <button 
          onClick={() => handleScrollToForm('valuation')} 
          className="underline font-bold hover:text-white transition-colors cursor-pointer text-brand-primary decoration-brand-accent"
        >
          Check Compliance Here ➔
        </button>
      </div>

      {/* 2. Responsive Premium Header Navigation */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding block */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/10">
              <Building2 className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="block font-black text-slate-950 font-display text-lg tracking-tight leading-none">
                PREMIERE RENTALS
              </span>
              <span className="block text-[10px] text-slate-500 tracking-wider uppercase font-extrabold mt-1">
                Fife Ltd • Letting Specialist
              </span>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="#choose-pathWAY" className="text-slate-600 hover:text-brand-primary font-semibold text-sm transition-colors">
              Tailored Solutions
            </a>
            <a href="#core-services" className="text-slate-600 hover:text-brand-primary font-semibold text-sm transition-colors">
              Our Services
            </a>
            <a href="#area-coverage" className="text-slate-600 hover:text-brand-primary font-semibold text-sm transition-colors">
              Fife Covered Areas
            </a>
            <a href="#reviews-trust" className="text-slate-600 hover:text-brand-primary font-semibold text-sm transition-colors font-display flex items-center gap-1">
              Testimonials <span className="text-amber-500 font-bold">★ 4.6</span>
            </a>
            <a href="#faq-section" className="text-slate-600 hover:text-brand-primary font-semibold text-sm transition-colors">
              FAQ
            </a>
          </nav>

          {/* Call to Actions Desk */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+441592268400" 
              className="font-mono text-xs font-black text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl border border-slate-200 flex items-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary animate-bounce" />
              01592 268400
            </a>
            <button
              onClick={() => handleScrollToForm('valuation')}
              className="px-5 py-2.5 bg-brand-primary hover:bg-teal-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all hover:shadow-lg hover:shadow-brand-primary/15 cursor-pointer font-display"
            >
              Book Valuation
            </button>
          </div>

          {/* Mobile Hamburg Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <a 
              href="tel:+441592268400" 
              className="p-2.5 bg-slate-100 rounded-xl text-slate-700"
              title="Call Fife Agent"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-750"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Tray */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100"
            >
              <div className="px-5 py-6 space-y-4 flex flex-col">
                <a 
                  href="#choose-pathWAY" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-brand-primary"
                >
                  Tailored Solutions
                </a>
                <a 
                  href="#core-services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-brand-primary"
                >
                  Our Services
                </a>
                <a 
                  href="#area-coverage" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-brand-primary"
                >
                  Fife Covered Areas
                </a>
                <a 
                  href="#reviews-trust" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-brand-primary"
                >
                  Reviews (4.6 Star)
                </a>
                <a 
                  href="#faq-section" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-brand-primary"
                >
                  FAQ
                </a>
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a 
                    href="tel:+441592268400" 
                    className="py-3 bg-slate-100 rounded-xl text-slate-800 text-center font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-primary" />
                    Call Kirkcaldy: 01592 268400
                  </a>
                  <button
                    onClick={() => handleScrollToForm('valuation')}
                    className="py-3 bg-brand-primary text-white rounded-xl text-center font-bold text-sm tracking-wider uppercase font-display"
                  >
                    Free Rental Valuation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. Hero Section Block with One clear Local H1 */}
      <main className="flex-grow">
        <section className="relative py-16 lg:py-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50/40 via-white to-slate-50 overflow-hidden">
          
          {/* Accent decoration blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-orange-100/30 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left Content Column */}
              <div className="lg:col-span-7 space-y-6 text-left lg:pr-4">
                
                {/* High local authority badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-250 text-slate-600 text-xs font-semibold shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  No.1 Independent Agency in Kirkcaldy & Fife
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-secondary font-display tracking-tight leading-[1.1]">
                  Expert Letting Agent & Property Management in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Kirkcaldy & Fife</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                  Trusted by landlords, buy-to-let investors, and tenants alike. Premiere Rentals Fife Ltd delivers premium local expertise, 100% legal compliance safeguards, and high-converting rental appraisals.
                </p>

                {/* Bullets highlighting main guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-center gap-2.5 text-sm my-0.5 text-slate-700">
                    <div className="p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>Double-Factor Tenant Vetting Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm my-0.5 text-slate-700">
                    <div className="p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>No Rent Arrears: Rent Protection Available</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm my-0.5 text-slate-700">
                    <div className="p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>No Let, No Fee • Over 96% Fast Matched</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm my-0.5 text-slate-700">
                    <div className="p-1 rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>100% Secure SafeDeposits Scotland</span>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                  <button
                    onClick={() => handleScrollToForm('valuation')}
                    className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-xl font-bold font-display shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/30 text-center transition-all cursor-pointer flex items-center justify-center gap-2 group text-base uppercase tracking-wider"
                  >
                    Get a Free Rental Valuation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <a
                    href="#area-coverage"
                    className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-xl font-bold font-display border border-slate-300 hover:border-slate-400 text-center transition-all flex items-center justify-center gap-2 text-base uppercase tracking-wider"
                  >
                    View Available Properties
                  </a>
                </div>

                {/* Local rating snippet */}
                <div className="flex items-center gap-4.5 pt-6 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 tracking-wider uppercase font-bold">Local Authority</span>
                    <span className="text-slate-800 font-extrabold text-sm mt-0.5">Kingdom of Fife Experts</span>
                  </div>
                  <div className="h-6 w-px bg-slate-200" />
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="block text-xs font-bold text-slate-800 mt-0.5">
                      4.6/5 stars (86 Google Reviews)
                    </span>
                  </div>
                </div>

              </div>

              {/* Hero Right Column: Dynamic Real Estate Image Display */}
              <div className="lg:col-span-5 relative">
                
                {/* Double frame visual support container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-2.5">
                  <img 
                    src={fifeHeroImage} 
                    alt="Premiere Rentals Property in Fife, Scotland" 
                    className="w-full h-[320px] sm:h-[400px] object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating real-time trust widgets */}
                  <div className="absolute top-6 left-6 bg-brand-secondary/95 text-white py-2 px-4 rounded-xl backdrop-blur-sm shadow-xl flex items-center gap-2.5 text-xs font-semibold">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                    <span>Free valuations KY1-KY16</span>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-white/95 text-slate-900 border border-slate-200/50 p-4 rounded-2xl backdrop-blur-md shadow-2xl max-w-xs text-left">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Award className="w-4 h-4 text-brand-primary" />
                      <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider">Independent & Local</span>
                    </div>
                    <p className="text-xs font-semibold leading-relaxed text-slate-800">
                      "Premiere handled our rental setup in Cupar in 8 days flat. Clean check-in details and transparent management fees."
                    </p>
                    <span className="block text-[10px] text-slate-400 font-mono tracking-wide mt-1">- Landlord, Fife</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. Quick Trust Bar */}
        <div className="bg-gradient-to-r from-brand-secondary to-slate-900 text-slate-300 py-6 border-y border-slate-800 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6 md:gap-6 text-center">
            <div className="space-y-1">
              <span className="block text-xl md:text-2xl font-black text-white font-mono tracking-tight">★ 4.6</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">86 Google Reviews</span>
            </div>
            <div className="space-y-1 md:border-l border-slate-800 hidden md:block">
              <span className="block text-xl md:text-2xl font-black text-white font-mono tracking-tight">12+ Yrs</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">Serving Fife Locally</span>
            </div>
            <div className="space-y-1 md:border-l border-slate-800">
              <span className="block text-xl md:text-2xl font-black text-white font-mono tracking-tight">96%+</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">On-Time Rent Success</span>
            </div>
            <div className="space-y-1 md:border-l border-slate-800">
              <span className="block text-xl md:text-2xl font-black text-white font-mono tracking-tight">Under 14D</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">Average Void Window</span>
            </div>
            <div className="space-y-1 md:border-l border-slate-800 col-span-1">
              <span className="block text-xl md:text-2xl font-black text-white font-mono tracking-tight">100% Free</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">Valuation Commitment</span>
            </div>
          </div>
        </div>

        {/* 5. Pain Points & Solution - Split Pathway (Landlords, Tenants, Investors) */}
        <section id="choose-pathWAY" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="px-3 py-1 rounded-full bg-teal-50 text-brand-primary text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 mb-3.5">
                <Sparkles className="w-3.5 h-3.5" /> Tailored Fife Letting Paths
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-secondary font-display tracking-tight">
                Solutions Created Around Your Specific Goals
              </h2>
              <p className="mt-4 text-slate-600">
                Are you a landlord needing professional compliance support, a tenant looking for a friendly local renter arrangement, or a portfolio investor analyzing buy-to-let yields? Highlight your path below:
              </p>
            </div>

            {/* Split Nav Bar (Buttons) */}
            <div className="flex items-center justify-center p-1.5 bg-slate-100 rounded-2xl max-w-md mx-auto mb-12 border border-slate-205">
              {[
                { id: 'landlord', label: 'Landlords 🏡' },
                { id: 'tenant', label: 'Tenants 🔑' },
                { id: 'investor', label: 'Investors 📊' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 py-3 text-xs md:text-sm font-bold rounded-xl transition-all font-display cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-brand-secondary shadow-md font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Path Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                
                {/* Active Path Pain Points Grid Column */}
                <div className="lg:col-span-4 p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-200/50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent bg-orange-50 px-2.5 py-1 rounded-full">
                      The Real Challenges
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-brand-secondary font-display mt-4 mb-4">
                      {activeTab === 'landlord' && "Fife Landlord Hurdles"}
                      {activeTab === 'tenant' && "Renters Frustrations"}
                      {activeTab === 'investor' && "Inconveniences in Buy-to-Let"}
                    </h3>

                    {/* Hard Pain Points list */}
                    <ul className="space-y-4">
                      {activeTab === 'landlord' && (
                        <>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Erratic rental payments causing severe mortgage flow anxiety.</span>
                          </li>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Poorly screened renters causing severe damage & compliance voids.</span>
                          </li>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Complicated, shifting Scottish PRT legislation guidelines.</span>
                          </li>
                        </>
                      )}
                      {activeTab === 'tenant' && (
                        <>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Huge national agencies treating you like an automated number.</span>
                          </li>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Deferred repairs and non-responsive heating issues for days.</span>
                          </li>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Complex processes for deposit return at checkout.</span>
                          </li>
                        </>
                      )}
                      {activeTab === 'investor' && (
                        <>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Inaccurate rental valuations leading to lost capital returns.</span>
                          </li>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Distant agency managers ignoring local Fife-specific pricing trends.</span>
                          </li>
                          <li className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="text-brand-accent mt-0.5 text-base font-bold">✕</span>
                            <span>Unoptimized property maintenance eroding long-term asset yields.</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <span className="block text-slate-400 text-xs mt-6 border-t border-slate-200 pt-4">
                    Kirkcaldy & Fife Local Protection
                  </span>
                </div>

                {/* Active Path Solutions Grid Column */}
                <div className="lg:col-span-8 p-6 md:p-8 bg-gradient-to-br from-brand-secondary to-slate-900 text-white rounded-2xl flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Absolute visual highlights */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 rounded-full filter blur-xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-primary bg-sky-950 px-2.5 py-1 rounded-full border border-sky-900">
                      The Premiere Shield
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black font-display text-white mt-4 mb-3">
                      How Premiere Solves Your Problems
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl">
                      {activeTab === 'landlord' && "We take complete structural responsibility. From rigorous double-factor vetting processes to full rent guarantees, you collect your monthly profits securely while our Kirkcaldy letting experts coordinate safety logs, tradespeople, and tenant relations."}
                      {activeTab === 'tenant' && "Rent with real peace of mind. We protect all security deposits under verified SafeDeposits Scotland guidelines, assign real local property managers, log routine maintenance tasks quickly, and treat you with human respect."}
                      {activeTab === 'investor' && "Maximum yield. Minimal headache. We run comprehensive micro-market studies (Kirkcaldy, Dunfermline, Woodside) to evaluate legal HMO thresholds, provide full compliance safety audits, and negotiate premium lease values."}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeTab === 'landlord' && (
                        <>
                          <div className="flex items-start gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="block font-bold text-xs">Full Rent Guarantee</span>
                              <span className="block text-slate-300 text-xs mt-0.5">Protection against arrears and dispute charges.</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="block font-bold text-xs">24/7 Rapid Coordination</span>
                              <span className="block text-slate-300 text-xs mt-0.5">Emergency heating and repairs fully handled.</span>
                            </div>
                          </div>
                        </>
                      )}
                      {activeTab === 'tenant' && (
                        <>
                          <div className="flex items-start gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="block font-bold text-xs">Deposit Safe Custody</span>
                              <span className="block text-slate-300 text-xs mt-0.5">Protected within independent SafeDeposits framework.</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="block font-bold text-xs">Premium Digital Handover</span>
                              <span className="block text-slate-300 text-xs mt-0.5">Clean inventories and detailed compliance guidance.</span>
                            </div>
                          </div>
                        </>
                      )}
                      {activeTab === 'investor' && (
                        <>
                          <div className="flex items-start gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="block font-bold text-xs">Accurate Valuation Audits</span>
                              <span className="block text-slate-300 text-xs mt-0.5">Maximising monthly yield across the Kingdom of Fife.</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="block font-bold text-xs">Strategic HMO Advisory</span>
                              <span className="block text-slate-300 text-xs mt-0.5">Fife Council license applications managed in full.</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-slate-400 text-xs font-medium">
                      {activeTab === 'landlord' && "Over 450+ Private Landlords Satisfied Across Scotland."}
                      {activeTab === 'tenant' && "Renting simplified. Respect guaranteed."}
                      {activeTab === 'investor' && "Unlock your capital potential with real Fife specialists."}
                    </span>
                    <button
                      onClick={() => handleScrollToForm(activeTab === 'landlord' ? 'management' : 'valuation')}
                      className="w-full sm:w-auto px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
                    >
                      {activeTab === 'landlord' && "Book Let Valuations"}
                      {activeTab === 'tenant' && "Register Renter Profile"}
                      {activeTab === 'investor' && "Appraise Portfolio Yield"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* 6. Services Section (H2) */}
        <section id="core-services" className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-brand-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-secondary font-display tracking-tight">
                Award-Winning Lettings & Property Management
              </h2>
              <p className="mt-4 text-slate-600">
                Premiere Rentals Fife Ltd delivers structured options that suit hands-off passive landlords, buy-to-let developers, and quick-start property finders.
              </p>
            </div>

            {/* Three Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/50 hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 bg-sky-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-secondary font-display mb-3">
                    Premium Letting Services
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Our high-intensity finders program. Includes optimized photos, major platform listings (Zoopla, PrimeLocation), legal Private Residential Tenancy setups, and meticulous double-factor screening.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Double-factor credit & references
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Full Tenancy Agreement paperwork
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Deposit lodgement safety setup
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => handleScrollToForm('find_only')}
                  className="w-full py-3 border border-slate-200 hover:border-brand-primary hover:bg-sky-50 text-slate-700 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all"
                >
                  Request Tenant Find
                </button>
              </div>

              {/* Card 2  Recommended */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-brand-primary/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-primary text-white text-[9px] uppercase font-black tracking-widest px-4 py-1.5 rounded-bl-xl font-display">
                  Recommended
                </div>
                <div>
                  <div className="h-12 w-12 bg-sky-100 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-secondary font-display mb-3">
                    Full Property Management
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Complete 24/7 care, zero landlord stress. From deposit registration to regulatory safety checks, emergency maintenance, and annual rent index appraisals, we handle everything.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Includes Rent Protection Guarantee
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      24/7 Emergency Repairs coverage
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Regular inspection audits
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => handleScrollToForm('management')}
                  className="w-full py-3.5 bg-brand-primary hover:bg-sky-700 text-white font-black text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-sky-600/10 transition-all border border-transparent"
                >
                  Appoint Premiere team
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/50 hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 bg-sky-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-secondary font-display mb-3">
                    Free Rental Valuations
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    What is your property actually worth in today's Fife market? Standard micro-appraisals are 100% free. We compare structural layouts and legal safety trends to recommend optimization techniques.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Comprehensive desktop market report
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Yield optimization consultation
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Absolutely 100% free of charge
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => handleScrollToForm('valuation')}
                  className="w-full py-3 border border-slate-200 hover:border-brand-primary hover:bg-sky-50 text-slate-700 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all"
                >
                  Get Free Valuation Study
                </button>
              </div>

            </div>

            {/* In-between callout bar */}
            <div className="mt-16 bg-gradient-to-r from-brand-secondary to-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
              <div className="relative z-10 text-center md:text-left">
                <span className="text-[10px] bg-brand-primary px-3 py-1 rounded-full font-bold uppercase tracking-wider font-display">Special Offer</span>
                <h4 className="text-xl font-extrabold mt-3 font-display">
                  Transferring an Existing Fife Property Portfolio?
                </h4>
                <p className="text-slate-400 text-sm mt-1 max-w-xl">
                  We handle 100% of the tenant communications, deposit balance transfer, and compliance checks with absolutely zero disruption or setup fees.
                </p>
              </div>
              <button
                onClick={() => handleScrollToForm('management')}
                className="w-full md:w-auto px-7 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase transition-all shadow-lg shadow-brand-accent/20 cursor-pointer text-center"
              >
                Request Landlord Transfer Study
              </button>
            </div>

          </div>
        </section>

        {/* 7. Benefits Section (H2) */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text details */}
              <div className="lg:col-span-5 space-y-6">
                <span className="px-3 py-1 rounded-full bg-orange-50 text-brand-accent text-xs font-black uppercase tracking-wider inline-flex items-center gap-1">
                  ★ Maximum Returns
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-brand-secondary font-display tracking-tight leading-tight">
                  What Makes Premiere Rentals Different?
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  We are not another slow, passive letting office. Premiere Rentals Fife Ltd combines rapid digital optimization, targeted tenant list matching, and deep Kirkcaldy licensing experience to protect your hard-earned capital.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-slate-900">Rent Paid on Time Every Month</span>
                      <span className="block text-xs text-slate-500 mt-0.5">Protected arrears setup guarantees direct monthly payouts.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-slate-900">Full Compliance Supervision (Scottish Law)</span>
                      <span className="block text-xs text-slate-500 mt-0.5">We track active gas safeties, EICRs, and smoke detection logs meticulously.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleScrollToForm('valuation')}
                    className="px-6 py-3.5 bg-brand-primary hover:bg-sky-700 text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase transition-all shadow-lg shadow-sky-600/10 cursor-pointer"
                  >
                    Appraise Rental Worth
                  </button>
                </div>
              </div>

              {/* Right Column Grid Box of Benefits */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Benefit item 1 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                  <MapPin className="w-8 h-8 text-brand-primary mb-4" />
                  <span className="block font-bold text-base text-brand-secondary font-display mb-1.5">Local Fife Expertise</span>
                  <p className="text-xs text-slate-500 leading-normal">
                    We know Kirkcaldy, Glenrothes, Dunfermline, Woodside, and Cupar street-by-street. We evaluate optimal pricing correctly.
                  </p>
                </div>

                {/* Benefit item 2 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                  <Clock className="w-8 h-8 text-brand-primary mb-4 animate-pulse" />
                  <span className="block font-bold text-base text-brand-secondary font-display mb-1.5">Fast Communication Promise</span>
                  <p className="text-xs text-slate-500 leading-normal">
                    You get assigned a dedicated lettings manager's phone line directly. Absolutely no automated support loops or call queues.
                  </p>
                </div>

                {/* Benefit item 3 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                  <UserCheck className="w-8 h-8 text-brand-primary mb-4" />
                  <span className="block font-bold text-base text-brand-secondary font-display mb-1.5">Verified Tenant Selection</span>
                  <p className="text-xs text-slate-500 leading-normal">
                    We conduct verified credit, stable salary, employment, and previous landlord reference reviews on 100% of applicants.
                  </p>
                </div>

                {/* Benefit item 4 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                  <Award className="w-8 h-8 text-brand-primary mb-4" />
                  <span className="block font-bold text-base text-brand-secondary font-display mb-1.5">Maintenance Coordination</span>
                  <p className="text-xs text-slate-500 leading-normal">
                    Our pre-vetted local Fife builders, heating mechanics, and surveyors fix details quickly with no markup pricing.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 8. Process Section */}
        <section className="py-20 bg-brand-secondary text-white relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 to-slate-950">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-[10px] uppercase font-bold tracking-widest inline-block mb-3.5">
                Onboarding Step-by-Step
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-white">
                How Landlords Transition from Enquiry to Rent
              </h2>
              <p className="mt-4 text-slate-400 text-sm md:text-base">
                Discover our effortless management integration process designed to get your Kirkcaldy property tenanted in four simple steps:
              </p>
            </div>

            {/* Stepper Steps Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              
              {/* Connect line for desktops */}
              <div className="hidden md:block absolute top-1/4 left-1/8 right-1/8 h-0.5 bg-slate-800 z-0" />

              {/* Step 1 */}
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 bg-brand-primary font-bold text-lg font-mono rounded-full flex items-center justify-center shadow-lg">
                  01
                </div>
                <h3 className="font-bold text-lg font-display text-white">Free Letting Analysis</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Submit your postcode online. We execute an instant localized study comparing active lets in Fife to define realistic price tags.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 bg-slate-800 hover:bg-brand-primary transition-colors text-slate-200 hover:text-white font-bold text-lg font-mono rounded-full flex items-center justify-center border border-slate-700">
                  02
                </div>
                <h3 className="font-bold text-lg font-display text-white">In-Person Consultation</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We verify your property structures locally, check smoke detectors or boiler safeties, and propose yield raises.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 bg-slate-800 hover:bg-brand-primary transition-colors text-slate-200 hover:text-white font-bold text-lg font-mono rounded-full flex items-center justify-center border border-slate-700">
                  03
                </div>
                <h3 className="font-bold text-lg font-display text-white">HD Listing Setup</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We schedule professional photos, compile fully compliant HMO specifications, and publish instantly on Zoopla networks.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 space-y-4">
                <div className="h-12 w-12 bg-emerald-500 text-white font-bold text-lg font-mono rounded-full flex items-center justify-center shadow-lg">
                  04
                </div>
                <h3 className="font-bold text-lg font-display text-emerald-400">Secure Onboarding</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We filter applicants, coordinate key collections, register secure deposit safe deposits, and setup monthly rent payments.
                </p>
              </div>

            </div>

            {/* Stepper bottom callout */}
            <div className="mt-16 text-center">
              <button
                onClick={() => handleScrollToForm('valuation')}
                className="px-8 py-4 bg-gradient-to-r from-brand-accent to-amber-500 hover:from-brand-accent-hover hover:to-amber-600 text-white rounded-xl font-bold font-display shadow-lg shadow-brand-accent/20 cursor-pointer inline-flex items-center gap-2 tracking-wider text-sm uppercase"
              >
                Book Free Property Onboarding Call
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>
        </section>

        {/* 9. Area Coverage Map Section (H2) */}
        <LocalMapSection />

        {/* 10. Social Proof Testimonials */}
        <TrustEngine />

        {/* 11. FAQ Section (H2 Accordion) */}
        <section id="faq-section" className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-brand-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
                <HelpCircle className="w-3.5 h-3.5" /> Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-secondary font-display tracking-tight">
                Frequently Answered Questions
              </h2>
              <p className="mt-4 text-slate-600">
                Have questions about renting, Private Residential Tenancies (PRT), or property fees in Fife? Here are our local team responses:
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-brand-secondary hover:text-brand-primary transition-colors cursor-pointer"
                    >
                      <span className="text-sm md:text-base font-display">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-brand-primary' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-slate-100 bg-slate-50/50"
                        >
                          <p className="p-5 text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* FAQ reassurance notice */}
            <div className="mt-8 text-center text-xs text-slate-500">
              For any licensing question under Fife Council guidelines, phone our lettings manager on{' '}
              <a href="tel:+441592268400" className="text-brand-primary font-bold underline">
                01592 268400
              </a>{' '}
              or email{' '}
              <a href="mailto:info@premiererentalsfife.co.uk" className="text-brand-primary font-bold underline">
                listings@premiererentalsfife.co.uk
              </a>.
            </div>

          </div>
        </section>

        {/* 12. Optimised Lead Form Section */}
        <section id="onboarding-contact" className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Content */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="px-3 py-1.5 rounded-full bg-orange-50 text-brand-accent text-xs font-black uppercase tracking-wider inline-flex items-center gap-1">
                  ✎ Free Appraisal Request
                </span>
                
                <h2 className="text-3xl md:text-4xl font-black text-brand-secondary font-display tracking-tight leading-tight">
                  Book Your Professional Fife Rental Valuation Survey
                </h2>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Ready to see how your property positions itself against the Kirkcaldy rental benchmarks? Fill out the brief security-audited form. Our lead Fife surveyor generates a customized yield blueprint for your review.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-1 px-2 rounded-lg bg-sky-50 text-brand-primary text-xs font-bold">
                      ✔
                    </div>
                    <p className="text-xs text-slate-500">
                      <strong>100% Free Appraisal:</strong> Real localized data including average monthly leases on your exact street precinct.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 px-2 rounded-lg bg-sky-50 text-brand-primary text-xs font-bold">
                      ✔
                    </div>
                    <p className="text-xs text-slate-500">
                      <strong>GDPR Compliance Safeguard:</strong> All logs are private. We verify security options according to ICO standards.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 px-2 rounded-lg bg-sky-50 text-brand-primary text-xs font-bold">
                      ✔
                    </div>
                    <p className="text-xs text-slate-500">
                      <strong>Real Fife Specialists:</strong> Direct call within 2 business hours safely promised.
                    </p>
                  </div>
                </div>

                {/* Counter Stats representation internally */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/50 flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-2xl font-black text-brand-secondary font-mono">14 Days</span>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Average Tenant Placement</span>
                  </div>
                  <div className="h-8 w-px bg-slate-205" />
                  <div>
                    <span className="block text-2xl font-black text-emerald-600 font-mono">£0 Out-of-pocket</span>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Free appraisals always</span>
                  </div>
                </div>

              </div>

              {/* Right Column Lead Form */}
              <div className="lg:col-span-6">
                <LeadForm />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 13. Footer Block */}
      <footer className="bg-brand-secondary text-slate-400 pt-16 pb-24 border-t border-slate-900 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Footer Branding Box */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="h-10 w-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg font-display tracking-tight text-white leading-none">
                PREMIERE RENTALS
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premiere Rentals Fife Ltd is the leading independent Letting and Property Management partner covering Kirkcaldy, Dunfermline, Glenrothes, Cupar, and wider Fife.
            </p>
            <div className="pt-2">
              <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-black">Registered Scottish Agent ID</span>
              <span className="block text-xs text-slate-350 font-semibold font-mono mt-0.5">LARN2206019</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h4 className="font-extrabold font-display text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#choose-pathWAY" className="hover:text-white transition-colors">Tailored Client Paths</a>
              </li>
              <li>
                <a href="#core-services" className="hover:text-white transition-colors">Property Management Fees</a>
              </li>
              <li>
                <a href="#area-coverage" className="hover:text-white transition-colors font-display">Fife Covered postcodes</a>
              </li>
              <li>
                <a href="#reviews-trust" className="hover:text-white transition-colors">Trust Testimonials</a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white transition-colors">Common Enquiries FAQ</a>
              </li>
            </ul>
          </div>

          {/* Localized Contact Address & Phone details */}
          <div className="space-y-4">
            <h4 className="font-extrabold font-display text-white text-sm uppercase tracking-wider">
              Kirkcaldy Letting Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-350 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>
                  Premiere Rentals Fife Ltd<br />
                  120 High Street, Kirkcaldy<br />
                  Fife, KY1 1NQ, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                <a href="tel:+441592268400" className="hover:text-white transition-colors font-mono font-bold">
                  +44 (0) 1592 268400
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                <a href="mailto:info@premiererentalsfife.co.uk" className="hover:text-white transition-colors">
                  listings@premiererentalsfife.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Hours and safe registration badge */}
          <div className="space-y-4">
            <h4 className="font-extrabold font-display text-white text-sm uppercase tracking-wider">
              Working Hours
            </h4>
            <p className="text-xs text-slate-450 leading-relaxed">
              Monday to Friday: 9:00 AM – 5:30 PM<br />
              Saturday: 9:00 AM – 1:00 PM (Appraisals)<br />
              Sunday: Emergency Support Only
            </p>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-[10px] text-slate-400 font-semibold">
                Deposits protected with SafeDeposits Scotland. Regulated Agent LARN2206019.
              </span>
            </div>
          </div>

        </div>

        {/* Legal credentials bottom bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 space-y-2">
          <p>© {new Date().getFullYear()} Premiere Rentals Fife Ltd. All Rights Reserved. General Registered Office Kirkcaldy, Fife.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
            <a href="#onboarding-contact" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#onboarding-contact" className="hover:underline">Terms of Service</a>
            <span>•</span>
            <a href="#onboarding-contact" className="hover:underline">Fife Council Licensing Registration</a>
            <span>•</span>
            <a href="#onboarding-contact" className="hover:underline">LARN Certificate</a>
          </div>
        </div>
      </footer>

      {/* 14. Sticky Mobile CTA Footer Bar for Call Now and Free Valuation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-md shadow-[0_-8px_20px_rgba(15,23,42,0.12)] border-t border-slate-200 z-50 flex items-center justify-between p-3.5 gap-3">
        <a
          href="tel:+441592268400"
          className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold font-display text-xs text-center flex items-center justify-center gap-1.5 border border-slate-205"
        >
          <Phone className="w-4 h-4 text-brand-primary animate-bounce" />
          Call Now
        </a>
        <button
          onClick={() => handleScrollToForm('valuation')}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-brand-accent to-amber-500 text-white rounded-xl font-black font-display text-xs text-center uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-white" />
          Free Valuation
        </button>
      </div>

    </div>
  );
}

