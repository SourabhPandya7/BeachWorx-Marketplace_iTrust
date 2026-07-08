import React, { useState } from 'react';
import { Shield, Sparkles, Building2, User, Landmark, Layers, Lock, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface EnrollmentFlowProps {
  onSuccess: (details: {
    businessName: string;
    headcount: number;
    payrollProvider: string;
    dues: number;
  }) => void;
  onCancel: () => void;
  initialHeadcount?: number;
}

export default function EnrollmentFlow({ onSuccess, onCancel, initialHeadcount = 1 }: EnrollmentFlowProps) {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [headcount, setHeadcount] = useState(initialHeadcount);
  const [payrollProvider, setPayrollProvider] = useState('Gusto');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSyncComplete, setIsSyncComplete] = useState(false);

  // Dynamic Dues calculator
  const calculateDues = (hc: number) => {
    if (hc <= 1) return 29; // Sole Prop / Contractor
    if (hc <= 10) return 99; // Micro-Business
    if (hc <= 50) return 199; // Small Business
    return 349; // Enterprise Tier
  };

  const dues = calculateDues(headcount);

  const handleNextStep = () => {
    if (step === 3) {
      // Simulate payroll sync animation
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        setIsSyncComplete(true);
        setStep(4);
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({
      businessName: businessName || 'My Beach Business',
      headcount,
      payrollProvider,
      dues
    });
  };

  const payrolls = ['Gusto', 'ADP', 'QuickBooks Payroll', 'Paychex', 'Rippling', 'Manual Upload'];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 sm:p-10" id="enrollment-flow-card">
      
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/5 py-1 px-3 rounded-full">
          Association Onboarding
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal mt-3">
          Join the BeachWorx Buying Group
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Set up your enterprise-level purchasing power in just four simple steps.
        </p>
      </div>

      {/* Progress Tracker */}
      <div className="flex items-center justify-between max-w-lg mx-auto mb-10" id="progress-tracker">
        {[1, 2, 3, 4].map((num) => (
          <React.Fragment key={num}>
            <div className="flex flex-col items-center">
              <div 
                className={`h-9 w-9 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all ${
                  step === num 
                    ? 'bg-brand-blue text-white ring-4 ring-brand-blue/10'
                    : step > num
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {step > num ? <CheckCircle className="h-5 w-5 text-white" /> : num}
              </div>
              <span className="text-[10px] font-mono mt-1 text-slate-500">
                {num === 1 ? 'Profile' : num === 2 ? 'Headcount' : num === 3 ? 'Payroll' : 'Billing'}
              </span>
            </div>
            {num < 4 && (
              <div className={`flex-1 h-0.5 mx-2 -mt-4 transition-all ${step > num ? 'bg-emerald-500' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Form Area */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Step 1: Corporate Profile */}
        {step === 1 && (
          <div className="space-y-5 animate-fadeIn" id="step-1-container">
            <h3 className="font-display text-lg font-bold text-brand-charcoal border-b pb-2 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-brand-teal" />
              Corporate Profile & Licensing Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-1.5">Business / Trading Name *</label>
                <input 
                  type="text" 
                  required 
                  value={businessName} 
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Destin Marine Charters" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none text-sm font-sans text-brand-charcoal"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-1.5">Principal Contact Name *</label>
                <input 
                  type="text" 
                  required 
                  value={contactName} 
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Sarah Jennings" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none text-sm font-sans text-brand-charcoal"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-1.5">Corporate Email *</label>
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sarah@destincharters.com" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none text-sm font-sans text-brand-charcoal"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-1.5">Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. (850) 555-0199" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none text-sm font-sans text-brand-charcoal"
                />
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-3 mt-4">
              <Shield className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                <strong>NAIC & Regulatory Compliance:</strong> By providing these details, you authorize BeachWorx Marketplace and Gallagher Affinity to establish eligibility for the Gulf Coast Business Association purchasing group. All data remains encrypted.
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Buying Power & Employee Headcount */}
        {step === 2 && (
          <div className="space-y-5 animate-fadeIn" id="step-2-container">
            <h3 className="font-display text-lg font-bold text-brand-charcoal border-b pb-2 flex items-center gap-2">
              <User className="h-5 w-5 text-brand-teal" />
              Dues Structure & Headcount Settings
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Association dues are designed to scale reasonably based on your headcount. Higher volumes secure greater underwriting discounts.
            </p>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl mt-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold">Adjust Employee Headcount</span>
                <div className="flex items-center space-x-6">
                  <button 
                    type="button" 
                    onClick={() => setHeadcount(Math.max(1, headcount - 1))}
                    className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 text-brand-charcoal font-bold text-lg select-none"
                  >
                    -
                  </button>
                  <span className="font-display text-4xl font-extrabold text-brand-blue">{headcount}</span>
                  <button 
                    type="button" 
                    onClick={() => setHeadcount(headcount + 1)}
                    className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 text-brand-charcoal font-bold text-lg select-none"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-500">
                  Includes yourself, 1099 contractors, and full-time personnel.
                </p>
              </div>

              {/* Dynamic Fee Box */}
              <div className="mt-6 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold block">Calculated Membership Tier</span>
                  <span className="font-display text-lg font-bold text-brand-charcoal mt-1 block">
                    {headcount <= 1 ? 'Solo Builder (Contractor)' : headcount <= 10 ? 'Micro Buying Circle' : headcount <= 50 ? 'Collective Growth Pool' : 'Enterprise Scale'}
                  </span>
                </div>
                <div className="bg-brand-blue text-white px-6 py-3.5 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-brand-blue/10 min-w-[150px]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-teal font-bold">Monthly Dues</span>
                  <span className="text-2xl font-display font-black mt-0.5">${dues}/mo</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col items-center text-center">
                <Sparkles className="h-5 w-5 text-brand-teal mb-2" />
                <span className="font-display text-xs font-bold text-brand-charcoal">Deductible Match</span>
                <p className="text-[10px] text-slate-500 mt-1">Carry over existing health insurance credits automatically.</p>
              </div>
              <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col items-center text-center">
                <Shield className="h-5 w-5 text-brand-blue mb-2" />
                <span className="font-display text-xs font-bold text-brand-charcoal">Guaranteed Issue</span>
                <p className="text-[10px] text-slate-500 mt-1">Unlock zero-health-check disability & permanent life suites.</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payroll System Sync Integration */}
        {step === 3 && (
          <div className="space-y-5 animate-fadeIn" id="step-3-container">
            <h3 className="font-display text-lg font-bold text-brand-charcoal border-b pb-2 flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand-teal" />
              Automated Payroll Integration Sync
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              BeachWorx Marketplace integrates directly with your existing payroll processor to handle automatic pre-tax Section 125 FICA deductions and seamless dues processing.
            </p>

            <div className="space-y-3">
              <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-1">Select Your Payroll Platform</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {payrolls.map((pr) => (
                  <button
                    key={pr}
                    type="button"
                    onClick={() => setPayrollProvider(pr)}
                    className={`py-3 px-4 border text-xs font-medium rounded-xl transition-all ${
                      payrollProvider === pr
                        ? 'border-brand-teal bg-brand-teal/5 text-brand-teal font-bold shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {pr}
                  </button>
                ))}
              </div>
            </div>

            {/* FICA Highlight */}
            <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-2xl mt-4">
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-xs font-bold text-emerald-900">Estimated FICA Tax Mitigation:</h4>
                  <p className="text-xs text-emerald-700 mt-1 leading-normal">
                    By syncing your {payrollProvider} setup with our **Section 125 PCMP (Pre-tax Premium Payment Plan)**, your business will save approximately <strong>${(headcount * 573).toLocaleString()} per year</strong> in employer FICA payroll taxes. This easily neutralizes your association dues!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Billing Setup & Agreement */}
        {step === 4 && (
          <div className="space-y-5 animate-fadeIn" id="step-4-container">
            <h3 className="font-display text-lg font-bold text-brand-charcoal border-b pb-2 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-brand-teal" />
              Secure Billing & Gallagher Accord
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Review your checkout summary. Association dues are billed securely monthly on the 1st.
            </p>

            <div className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-slate-50 p-4 sm:p-6 space-y-3">
                <div className="flex justify-between items-center text-sm border-b pb-3">
                  <span className="text-slate-600 font-medium">Business:</span>
                  <span className="text-brand-charcoal font-bold">{businessName || 'BeachWorx Pilot Co.'}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b pb-3">
                  <span className="text-slate-600 font-medium">Employees Protected:</span>
                  <span className="text-brand-charcoal font-bold">{headcount} Personnel</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b pb-3">
                  <span className="text-slate-600 font-medium">Integrated Processor:</span>
                  <span className="text-brand-teal font-mono font-bold text-xs">{payrollProvider} Sync Enabled</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <span className="text-brand-charcoal font-bold text-base block">Monthly Association Dues</span>
                    <span className="text-[10px] text-slate-400 font-mono">Billed monthly via secure ACH link</span>
                  </div>
                  <span className="text-2xl font-display font-black text-brand-blue">${dues}/mo</span>
                </div>
              </div>
            </div>

            {/* Checkbox Disclaimers */}
            <div className="space-y-3 mt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  required 
                  checked={agreedToTerms} 
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 h-4.5 w-4.5 text-brand-blue rounded border-slate-300 focus:ring-brand-blue/30"
                />
                <span className="text-xs text-slate-500 leading-normal">
                  I authorize Gallagher Affinity and BeachWorx Marketplace to process our monthly association dues on our configured payroll deduction ledger. We confirm compliance with Florida regulatory statutes governing purchasing groups.
                </span>
              </label>
            </div>

            {/* Trust Footer */}
            <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-400 mt-2">
              <Lock className="h-3.5 w-3.5" />
              <span>AES-256 PCI-DSS Compliant Secure Connection</span>
            </div>
          </div>
        )}

        {/* Loading overlay for step transitions */}
        {isSyncing && (
          <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center space-y-4 rounded-3xl">
            <div className="relative h-12 w-12 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-teal"></div>
              <Landmark className="absolute h-5 w-5 text-brand-blue" />
            </div>
            <p className="text-sm font-mono text-brand-charcoal font-bold">Securely Syncing with {payrollProvider}...</p>
            <p className="text-xs text-slate-500">Mapping pre-tax deduction slots and importing employee rosters...</p>
          </div>
        )}

        {/* Button Row */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100" id="button-row">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2.5 border border-slate-200 text-slate-500 hover:text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Cancel
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              disabled={step === 1 && (!businessName || !contactName || !email || !phone)}
              className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/95 text-white disabled:opacity-50 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!agreedToTerms}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-teal text-white disabled:opacity-50 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              id="submit-association-enrollment"
            >
              <span>Activate Association Power</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

      </form>
    </div>
  );
}
