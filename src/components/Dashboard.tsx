import React, { useState } from 'react';
import { Shield, Sparkles, Building2, User, Landmark, Layers, Lock, CheckCircle, Mail, MessageSquare, Download, Users, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { productsData } from '../data/products';

interface DashboardProps {
  memberDetails: {
    businessName: string;
    headcount: number;
    payrollProvider: string;
    dues: number;
  };
  onAddBenefit: (product: Product) => void;
  enrolledBenefitIds: string[];
}

export default function Dashboard({ memberDetails, onAddBenefit, enrolledBenefitIds }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'benefits' | 'payroll' | 'roster' | 'concierge'>('benefits');
  const [roster, setRoster] = useState<string[]>([
    'Sarah Jennings (Admin)',
    'Robert Carter (Full Time)',
    'David Miller (1099 Contractor)'
  ]);
  const [newMemberName, setNewMemberName] = useState('');
  const [conciergeSubject, setConciergeSubject] = useState('');
  const [conciergeMessage, setConciergeMessage] = useState('');
  const [conciergeSubmitted, setConciergeSubmitted] = useState(false);

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMemberName.trim()) {
      setRoster([...roster, newMemberName.trim()]);
      setNewMemberName('');
    }
  };

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (conciergeSubject.trim() && conciergeMessage.trim()) {
      setConciergeSubmitted(true);
      setTimeout(() => {
        setConciergeSubmitted(false);
        setConciergeSubject('');
        setConciergeMessage('');
      }, 3000);
    }
  };

  // Pre-loaded high priority products
  const availableVoluntaryBenefits = productsData.filter(
    p => p.id !== 'vault-health' && !enrolledBenefitIds.includes(p.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="dashboard-portal">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-charcoal to-[#111827] rounded-3xl p-6 sm:p-10 text-white mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-[100px] select-none font-bold leading-none">BW</div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/15 py-1 px-3 rounded-full">
                Active Buying Group Member
              </span>
              <span className="text-[10px] font-mono text-slate-400">ID: BWX-FL-32541</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
              {memberDetails.businessName}
            </h1>
            <p className="text-sm text-slate-400">
              Cooperative benefits pool structured via <strong className="text-brand-teal">Gallagher Affinity</strong>. Destin Pilot.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl min-w-[120px]">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Active Seats</span>
              <span className="text-xl font-display font-bold text-white block mt-0.5">{roster.length} Seats</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl min-w-[120px]">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Monthly Dues</span>
              <span className="text-xl font-display font-bold text-brand-teal block mt-0.5">${memberDetails.dues}/mo</span>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl min-w-[120px]">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Estimated Tax Savings</span>
              <span className="text-xl font-display font-bold text-emerald-400 block mt-0.5">
                ${(roster.length * 573).toLocaleString()}/yr
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-100 mb-8 overflow-x-auto gap-2 scrollbar-none" id="dashboard-tabs">
        {[
          { id: 'benefits', label: 'My Enrolled Benefits', count: enrolledBenefitIds.length },
          { id: 'payroll', label: 'Payroll & Compliance Sync' },
          { id: 'roster', label: 'Team Roster (' + roster.length + ')' },
          { id: 'concierge', label: 'Gallagher Concierge Desk' }
        ].map((t) => {
          const isSelected = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`py-3.5 px-4 font-display text-sm font-semibold border-b-2 transition-all shrink-0 cursor-pointer ${
                isSelected
                  ? 'border-brand-teal text-brand-blue font-bold'
                  : 'border-transparent text-slate-500 hover:text-brand-blue'
              }`}
            >
              {t.label}
              {t.count !== undefined && (
                <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-600 font-bold font-mono">
                  {t.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Enrolled Benefits */}
      {activeTab === 'benefits' && (
        <div className="space-y-8 animate-fadeIn" id="dashboard-benefits-tab">
          
          {/* Active Cards */}
          <div>
            <h3 className="font-display text-lg font-bold text-brand-charcoal mb-4">Current Active Solutions</h3>
            {enrolledBenefitIds.length === 0 ? (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-500">
                <Shield className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-medium">You do not have any voluntary benefits activated yet.</p>
                <p className="text-xs text-slate-400 mt-1">Browse and claim your exclusive buying pool options below.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsData
                  .filter(p => enrolledBenefitIds.includes(p.id))
                  .map(p => (
                    <div key={p.id} className="bg-emerald-50/25 border border-emerald-100 rounded-3xl p-6 relative overflow-hidden">
                      <div className="absolute top-4 right-4 h-6 w-6 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-[9px] font-mono uppercase bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Active</span>
                      <h4 className="font-display font-bold text-brand-charcoal text-base mt-3">{p.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{p.headline}</p>
                      
                      <div className="mt-5 flex gap-2">
                        <button className="flex-1 py-2 px-3 border border-slate-200 bg-white rounded-xl text-xs font-mono font-bold text-slate-600 flex items-center justify-center gap-1.5 hover:bg-slate-50">
                          <Download className="h-3.5 w-3.5 text-slate-400" />
                          <span>Download Policy</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Add-ons List */}
          <div>
            <div className="border-t border-slate-100 pt-8 mb-6">
              <h3 className="font-display text-lg font-bold text-brand-charcoal">Voluntary Benefits and Discount Services Available</h3>
              <p className="text-xs text-slate-500 mt-1">Activate high-priority products instantly on your existing payroll ledger.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableVoluntaryBenefits.slice(0, 6).map((p) => (
                <div key={p.id} className="bg-white border border-slate-100 hover:border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md smooth-transition flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-brand-blue/5 text-brand-blue font-bold px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    <h4 className="font-display font-bold text-brand-charcoal text-base mt-2.5">{p.name}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">{p.shortDescription}</p>
                    
                    <ul className="mt-4 space-y-1.5">
                      {p.benefits.slice(0, 2).map((b, idx) => (
                        <li key={idx} className="text-[11px] text-slate-600 flex items-start gap-1">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-slate-400">Prio: {p.priority}</span>
                    <button
                      onClick={() => onAddBenefit(p)}
                      className="py-2 px-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full text-xs font-bold tracking-wide uppercase flex items-center gap-1 shadow-sm transition-all cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Activate</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: PayrollSync */}
      {activeTab === 'payroll' && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 animate-fadeIn" id="dashboard-payroll-tab">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-6 gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase text-brand-teal bg-brand-teal/5 py-0.5 px-2 rounded">
                Live Integration
              </span>
              <h3 className="font-display text-xl font-bold text-brand-charcoal mt-1">
                {memberDetails.payrollProvider} Synchronization Ledger
              </h3>
              <p className="text-xs text-slate-500">
                Active connection established via Secure Plaid payroll link.
              </p>
            </div>
            
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 font-mono text-xs font-bold px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>CONNECTED & SECURED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
            <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Payroll Deduct Method</span>
              <span className="font-display font-bold text-slate-800 mt-1 block text-sm">FICA Pre-Tax Deduction</span>
              <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">Configured through automated IRS Section 125 rules.</p>
            </div>
            <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Billing Reconciliation</span>
              <span className="font-display font-bold text-slate-800 mt-1 block text-sm">Monthly Autopay ACH</span>
              <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">Processed automatically on the first business day of the month.</p>
            </div>
            <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50 col-span-1 sm:col-span-2 md:col-span-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Underwriting Cohort</span>
              <span className="font-display font-bold text-slate-800 mt-1 block text-sm">Destin Cohort 01</span>
              <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">Backed by the Gallagher Affinity Business Buying pool.</p>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-emerald-900 font-display">Active Pre-tax Benefits Ledger Status:</h4>
              <p className="text-[11px] text-emerald-700 mt-1 leading-normal">
                Your current payroll setup successfully maps employee health and wellness deductibles pre-tax. This decreases your annual net corporate FICA tax matching overhead. Ensure any newly hired contractor is registered via the 'Team Roster' tab to maintain group compliance.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Team Roster */}
      {activeTab === 'roster' && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 animate-fadeIn" id="dashboard-roster-tab">
          <div className="border-b pb-6 mb-6">
            <h3 className="font-display text-lg font-bold text-brand-charcoal">Employee & 1099 Contractor Seat Registry</h3>
            <p className="text-xs text-slate-500 mt-1">
              Add your independent workers, business partners, or employees. Each seat registered unlocks full association-level underwriting perks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-slate-400">Registered Seats ({roster.length})</span>
              <div className="border border-slate-100 rounded-2xl overflow-hidden divide-y divide-slate-100 shadow-sm bg-slate-50/20">
                {roster.map((name, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between bg-white">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-brand-blue/10 text-brand-blue font-bold rounded-lg flex items-center justify-center text-xs">
                        {name.charAt(0)}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-brand-charcoal block">{name}</span>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">● Active Association Seat</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">Pre-tax Verified</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50">
              <h4 className="font-display text-sm font-bold text-brand-charcoal flex items-center gap-1.5 mb-3">
                <Users className="h-4.5 w-4.5 text-brand-teal" />
                Register New Seat
              </h4>
              <form onSubmit={handleAddMember} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase text-slate-500 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-charcoal bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-blue hover:bg-brand-blue/95 text-white rounded-xl text-xs font-bold tracking-wide uppercase flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
                >
                  <Plus className="h-4 w-4" />
                  <span>Invite & Setup Sync</span>
                </button>
              </form>
              <p className="text-[10px] text-slate-400 leading-normal mt-4">
                Note: Inviting members automatically adjusts your calculated FICA tax savings ledger in HubSpot. No duplicate sign-up required.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Concierge Desk */}
      {activeTab === 'concierge' && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 animate-fadeIn" id="dashboard-concierge-tab">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-5">
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase text-brand-teal bg-brand-teal/5 py-0.5 px-2 rounded">
                  Gallagher Partner Network
                </span>
                <h3 className="font-display text-xl font-bold text-brand-charcoal">
                  Dedicated Concierge Desk
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  As a BeachWorx Association member, you have direct, prioritized routing to licensed health planners, ERISA consultants, and benefits administrators.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center">
                    <Mail className="h-4 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Specialized Line</span>
                    <span className="text-xs font-bold text-brand-charcoal">beachworx-support@ajg.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 bg-indigo-50 text-indigo-700 rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-4 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Phone Line</span>
                    <span className="text-xs font-bold text-brand-charcoal">(880) 555-0155 (Toll Free)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 border border-slate-100 p-6 rounded-3xl bg-slate-50/30">
              <h4 className="font-display text-base font-bold text-brand-charcoal mb-4">
                Submit Consultation Request or Claim Question
              </h4>
              
              {conciergeSubmitted ? (
                <div className="p-8 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-2xl text-center space-y-2">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto" />
                  <h5 className="font-display font-bold text-sm">Consultation Request Dispatched!</h5>
                  <p className="text-xs text-emerald-600">A dedicated Gallagher licensed representative will call you in 1-2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleConciergeSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-slate-500 mb-1">Subject / Question Type *</label>
                    <input
                      type="text"
                      required
                      value={conciergeSubject}
                      onChange={(e) => setConciergeSubject(e.target.value)}
                      placeholder="e.g. Schedule VAULT Health Plan consultation"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-charcoal bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-slate-500 mb-1">Describe Your Business Request *</label>
                    <textarea
                      required
                      rows={4}
                      value={conciergeMessage}
                      onChange={(e) => setConciergeMessage(e.target.value)}
                      placeholder="Describe your current healthcare coverage status and headcount goals..."
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-charcoal bg-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-blue hover:bg-brand-blue/95 text-white rounded-xl text-xs font-bold tracking-wide uppercase transition-all shadow-sm cursor-pointer"
                  >
                    Submit to Gallagher Team
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
