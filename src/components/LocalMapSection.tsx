import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  TrendingUp, 
  Gauge, 
  Clock, 
  ChevronRight, 
  CheckCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

interface FifeLocation {
  name: string;
  postcode: string;
  averageRent: number;
  averageYield: string;
  demandScore: 'High' | 'Very High' | 'Moderate';
  description: string;
  hotspot: string;
}

export default function LocalMapSection() {
  const [selectedLoc, setSelectedLoc] = useState<number>(0);

  const locations: FifeLocation[] = [
    {
      name: 'Kirkcaldy Central & Links',
      postcode: 'KY1, KY2',
      averageRent: 760,
      averageYield: '6.8%',
      demandScore: 'Very High',
      description: 'Excellent coastal demand, especially close to the historical High Street, Ravenscraig Park, and the train station linking directly to Edinburgh.',
      hotspot: 'Dunnikier Estate & Esplanade'
    },
    {
      name: 'Dunfermline City',
      postcode: 'KY11, KY12',
      averageRent: 840,
      averageYield: '6.4%',
      demandScore: 'Very High',
      description: 'High professional renter traffic driven by commuter networks, park-and-rides, and local historical heritage sites.',
      hotspot: 'Duloch Park & Halbeath'
    },
    {
      name: 'Glenrothes',
      postcode: 'KY6, KY7',
      averageRent: 690,
      averageYield: '7.2%',
      demandScore: 'High',
      description: 'Superb cash-flow yields for buy-to-let investors. Extremely popular with young working families and industrial park workers.',
      hotspot: 'Cadham & Woodside'
    },
    {
      name: 'St Andrews',
      postcode: 'KY16',
      averageRent: 1350,
      averageYield: '5.2%',
      demandScore: 'Very High',
      description: 'Prestige coastal market with exceptional tenant flow from student groups and international university faculty.',
      hotspot: 'Old Course Margins & Town Centre'
    },
    {
      name: 'Leven & Methil',
      postcode: 'KY8',
      averageRent: 610,
      averageYield: '7.8%',
      demandScore: 'Moderate',
      description: 'Highly accessible rentals showing growing yields following the recent train line opening connecting Levenmouth with Edinburgh.',
      hotspot: 'High Street Corridors'
    },
    {
      name: 'Cupar & North Fife',
      postcode: 'KY14, KY15',
      averageRent: 790,
      averageYield: '5.9%',
      demandScore: 'High',
      description: 'Market town appeal with stable long-term tenancies, excellent local schooling options, and low vacancy ratios.',
      hotspot: 'Elmwood Co-spaces'
    }
  ];

  return (
    <section id="area-coverage" className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Structural visual accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-orange-100/30 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings aligned for local SEO in Kirkcaldy / Fife */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5" /> Kirkcaldy & Fife Local Coverage Area
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-secondary font-display tracking-tight">
            Comprehensive Fife Letting Agency Coverage
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            We operate right on the ground across Kirkcaldy and the wider Kingdom of Fife. Discover average rental prices, tenant interest scores, and average investor yields in your specific postcode.
          </p>
        </div>

        {/* Structural Interactive Layout: Sidebar Navigation + Detailed Yield Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Active List Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
              Select Your Fife Region
            </h3>
            <div className="space-y-2.5 flex-1">
              {locations.map((loc, idx) => {
                const isActive = selectedLoc === idx;
                return (
                  <button
                    key={loc.name}
                    type="button"
                    onClick={() => setSelectedLoc(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive 
                        ? 'bg-brand-secondary text-white border-brand-secondary shadow-lg shadow-slate-900/10' 
                        : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg transition-colors ${
                        isActive ? 'bg-brand-primary text-white font-semibold' : 'bg-teal-50 text-brand-primary'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm md:text-base font-display">
                          {loc.name}
                        </span>
                        <span className={`block text-xs uppercase tracking-wider ${
                          isActive ? 'text-teal-200' : 'text-slate-500 font-mono'
                        }`}>
                          Postcode Coverage: {loc.postcode}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'translate-x-1 text-slate-200' : 'text-slate-400 group-hover:translate-x-1'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Response Promise Sticker */}
            <div className="bg-teal-50 border border-teal-100/50 p-4 rounded-xl flex items-start gap-3 mt-4">
              <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-brand-secondary">
                  Local Kirkcaldy Team Response Promise
                </span>
                <span className="block text-xs text-slate-600 mt-0.5">
                  Our surveyors live and work locally in Fife. We guarantee any valuation request is processed within 2 hours.
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Yield Index Details Box */}
          <div className="lg:col-span-7 flex">
            <motion.div
              layout
              key={selectedLoc}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-lg flex-1 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-brand-primary">
                      Fife Sub-Market Analysis
                    </span>
                    <h3 className="text-2xl font-black text-brand-secondary font-display mt-0.5">
                      {locations[selectedLoc].name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-orange-50 text-brand-accent px-3 py-1 rounded-full text-xs font-black">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Demand: {locations[selectedLoc].demandScore}</span>
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
                  <div className="p-3.5 bg-slate-50 rounded-xl">
                    <span className="block text-xs text-slate-500 font-medium">Average Monthly Rent</span>
                    <span className="text-2xl font-black text-brand-secondary mt-1 block font-mono">
                      £{locations[selectedLoc].averageRent}
                      <span className="text-xs text-slate-400 font-sans font-normal ml-0.5">/mo</span>
                    </span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl">
                    <span className="block text-xs text-slate-500 font-medium">Average BTL Yield</span>
                    <span className="text-2xl font-black text-emerald-600 mt-1 block font-mono flex items-center gap-1">
                      {locations[selectedLoc].averageYield}
                      <TrendingUp className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl col-span-2 md:col-span-1">
                    <span className="block text-xs text-slate-500 font-medium">Postcode Precinct</span>
                    <span className="text-base font-bold text-slate-700 mt-1.5 block font-mono uppercase">
                      {locations[selectedLoc].postcode}
                    </span>
                  </div>
                </div>

                {/* Narrative localized SEO block */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Market Context & Local Demographics
                    </h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {locations[selectedLoc].description}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                      Top Investment Hotspots
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-brand-accent hover:bg-orange-100 transition-colors text-xs font-bold font-display mt-1.5">
                      ★ {locations[selectedLoc].hotspot}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Valuation Accelerator */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs text-slate-500 font-semibold">
                    Rent protection + full legal tenant screening included
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('lead-valuation-box');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-brand-primary hover:bg-teal-700 text-white font-bold rounded-lg text-xs tracking-wider uppercase flex items-center justify-center gap-1 transition-all"
                >
                  Appraise in {locations[selectedLoc].name.split(' ')[0]}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Local authority summary copy for SEO crawlers */}
        <div id="local-services-reassurance" className="mt-12 bg-white rounded-xl p-5 border border-slate-200/60 text-xs text-slate-500 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <span className="font-bold text-slate-700 block mb-1">Expert Fife Lettings Team</span>
            As independent letting agents based directly in Fife, we keep ourselves fully appraised of Scottish PRT (Private Residential Tenancy) regulations and local Rent Pressure Zone modifications.
          </div>
          <div>
            <span className="font-bold text-slate-700 block mb-1">Local Real Estate Network</span>
            We list your property on PrimeLocation, Zoopla, and leading social channels to draw high-intent tenants who commute daily between Kirkcaldy, Glenrothes, Dunfermline, and Edinburgh.
          </div>
          <div>
            <span className="font-bold text-slate-700 block mb-1">Free Landlord Valuations</span>
            Need assistance determining your optimum monthly rent in Fife? Book our free valuation study. We compare local structural listings to recommend the sweet spot for maximizing yields.
          </div>
        </div>

      </div>
    </section>
  );
}
