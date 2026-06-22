import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Settings, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Lock
} from 'lucide-react';

interface LeadFormProps {
  initialService?: string;
}

export default function LeadForm({ initialService }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    postcode: '',
    propertyType: 'flat',
    units: '1_unit',
    serviceNeeded: initialService || 'valuation',
    fullName: '',
    email: '',
    phone: '',
    consent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.postcode.trim()) {
        newErrors.postcode = 'Postcode is required';
      } else {
        const cleanPostcode = formData.postcode.trim().toUpperCase().replace(/\s+/g, '');
        // UK Postcode validation pattern helper
        const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
        // Basic match or Fife coverage KY/EH prefix test
        const isFife = cleanPostcode.startsWith('KY') || cleanPostcode.startsWith('EH');
        if (!isFife && cleanPostcode.length > 2) {
          newErrors.postcode = 'Warning: We primarily cover Fife & surrounding areas (KY postcodes)';
        }
      }
    } else if (currentStep === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please provide a valid email';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^(?:(?:\+44\s?|0)7[0-9]\s?[0-9]{3}\s?[0-9]{3,4})$|^(?:(?:\+44\s?|0)[12][0-9]\s?[0-9]{3}\s?[0-9]{3,4})$/.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = 'Please provide a valid UK telephone number';
      }
      if (!formData.consent) {
        newErrors.consent = 'You must agree to our privacy policy to proceed';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitting(true);
      // Simulate highly responsive form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1200);
    }
  };

  const propertyTypes = [
    { id: 'flat', label: 'Flat / Apartment', icon: Building2 },
    { id: 'terraced', label: 'Terraced House', icon: Building2 },
    { id: 'semi_detached', label: 'Semi-Detached', icon: Building2 },
    { id: 'detached', label: 'Detached Residence', icon: Building2 },
    { id: 'hmo', label: 'HMO / Guest House', icon: Layers },
  ];

  const services = [
    { id: 'valuation', label: 'Free Valuation', desc: 'Detailed local market analysis in Fife', tag: 'Populer' },
    { id: 'management', label: 'Full Management', desc: 'Complete 24/7 care, zero landlord stress', tag: 'Recommended' },
    { id: 'find_only', label: 'Tenant Finding', desc: 'Secure screened renters with fast transition', tag: 'Essential' },
  ];

  return (
    <div id="lead-valuation-box" className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 max-w-xl mx-auto overflow-hidden relative">
      {/* Absolute top glow marker */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-amber-500" />
      
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header Progress Counter */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Step {step} of 3
              </span>
              <h3 className="text-lg font-bold text-brand-secondary font-display">
                {step === 1 && "Your Property Details"}
                {step === 2 && "Choose Your Service Team"}
                {step === 3 && "Where Shall We Send Your Report?"}
              </h3>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-brand-accent' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Postcode Field */}
                <div>
                  <label htmlFor="postcode" className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    Property Postcode <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    placeholder="e.g. KY1 1NQ"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-xl shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brand-primary/50 uppercase transition-all ${
                      errors.postcode ? 'border-amber-500 bg-amber-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.postcode && (
                    <p className="mt-1.5 text-xs font-medium text-brand-accent flex items-center gap-1">
                      ⚠️ {errors.postcode}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs text-slate-500">
                    We cover Kirkcaldy, Dunfermline, Glenrothes, and all of Fife.
                  </p>
                </div>

                {/* Property Type selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-brand-primary" />
                    Property Structure
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {propertyTypes.map((type) => {
                      const IconComponent = type.icon;
                      const isSelected = formData.propertyType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type.id })}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-sm font-medium transition-all ${
                            isSelected 
                              ? 'border-brand-primary bg-teal-50/40 text-brand-secondary ring-2 ring-brand-primary/20' 
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <IconComponent className={`w-4 h-4 ${isSelected ? 'text-brand-primary' : 'text-slate-400'}`} />
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Number of Units Selection */}
                <div>
                  <label htmlFor="units" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    How many units in your portfolio?
                  </label>
                  <select
                    id="units"
                    value={formData.units}
                    onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 bg-white"
                  >
                    <option value="1_unit">1 Property (Single Let)</option>
                    <option value="2_5_units">2 to 5 Properties</option>
                    <option value="6_10_units">6 to 10 Properties</option>
                    <option value="10plus_units">More than 10 (Portfolio Investor)</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <p className="text-sm text-slate-600 mb-2">
                  Please choose the service plan corresponding to your letting requirements inside Fife:
                </p>
                <div className="space-y-3">
                  {services.map((srv) => {
                    const isSelected = formData.serviceNeeded === srv.id;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceNeeded: srv.id })}
                        className={`w-full p-4 rounded-xl border text-left flex items-start justify-between transition-all ${
                          isSelected
                            ? 'border-brand-primary bg-teal-50/40 text-brand-secondary ring-2 ring-brand-primary/20'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="pr-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-base text-brand-secondary">
                              {srv.label}
                            </span>
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${
                              isSelected ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {srv.tag}
                            </span>
                          </div>
                          <p className="text-slate-500 text-xs mt-1">
                            {srv.desc}
                          </p>
                        </div>
                        <div className={`mt-1 h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? 'border-brand-primary bg-brand-primary text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Contact Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-primary" />
                    Full Representative Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="e.g. David Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 ${
                      errors.fullName ? 'border-brand-accent bg-orange-50/10' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-brand-accent">⚠️ {errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-brand-primary" />
                    Best Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. dsmith@fifeinvest.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 ${
                      errors.email ? 'border-brand-accent bg-orange-50/10' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-brand-accent">⚠️ {errors.email}</p>}
                </div>

                {/* Direct Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-brand-primary" />
                    Mobile Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. 07700 900077"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 ${
                      errors.phone ? 'border-brand-accent bg-orange-50/10' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-brand-accent">⚠️ {errors.phone}</p>}
                  <p className="mt-1 text-[11px] text-slate-500">
                    Required for coordination call from our Kirkcaldy surveyor.
                  </p>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-brand-accent focus:ring-brand-accent"
                    />
                    <span>
                      I agree to receive local Fife market updates and rental appraisals. Premiere Rentals Fife strictly protects your data.
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-brand-accent">⚠️ {errors.consent}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons Navigation */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-3 border border-slate-300 hover:border-slate-400 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-1.5 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 py-3 px-5 bg-brand-primary hover:bg-teal-700 text-white rounded-xl font-bold transition-all shadow-md shadow-brand-primary/10 hover:shadow-brand-primary/20 flex items-center justify-center gap-1 text-sm uppercase tracking-wider"
              >
                Continue Applet
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3.5 px-5 bg-gradient-to-r from-brand-accent to-amber-500 hover:from-brand-accent-hover hover:to-amber-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-brand-accent/30 hover:shadow-brand-accent/40 flex items-center justify-center gap-2 text-base uppercase tracking-wider cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <>
                    Request Valuation Now
                    <CheckCircle2 className="w-5 h-5 ml-1" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Secure lock footer note */}
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs pt-1.5">
            <Lock className="w-3 h-3" />
            <span>GDPR Secure. No obligation, 100% free appraisal.</span>
          </div>
        </form>
      ) : (
        /* SUCCESS APPLET CONTAINER */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 space-y-5"
        >
          <div className="mx-auto h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-secondary font-display">
              Appraisal Booked successfully!
            </h3>
            <p className="text-slate-600 mt-2 text-sm max-w-sm mx-auto">
              Thank you, <strong className="text-brand-primary">{formData.fullName}</strong>. Your letting appraisal has been logged for property postcode <strong className="text-slate-900">{formData.postcode.toUpperCase()}</strong>.
            </p>
          </div>

          {/* Success Reassurance Boxes Grid */}
          <div className="p-4 bg-slate-50 rounded-xl space-y-3 max-w-md mx-auto text-left text-xs border border-slate-100">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-1">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>What happens next?</span>
            </div>
            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">1. Instant Analyst Review:</span> We search the local database for historical rental listings near <strong>{formData.postcode.toUpperCase()}</strong>.
            </p>
            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">2. Consultation Call:</span> Our Kirkcaldy-based letting manager will phone you at <strong>{formData.phone}</strong> inside 2 business hours.
            </p>
            <p className="text-slate-600">
              <span className="font-semibold text-slate-800">3. Physical Walkthrough:</span> We can arrange a local visit to evaluate upgrades that raise your yield.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData({
                postcode: '',
                propertyType: 'flat',
                units: '1_unit',
                serviceNeeded: initialService || 'valuation',
                fullName: '',
                email: '',
                phone: '',
                consent: true,
              });
            }}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs transition-all tracking-wider uppercase border border-slate-200"
          >
            Submit Another Property
          </button>
        </motion.div>
      )}
    </div>
  );
}
