import React, { useState } from 'react';
import { NavPage, Product } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import EnrollmentFlow from './components/EnrollmentFlow';
import Dashboard from './components/Dashboard';
import StrategyRoom from './components/StrategyRoom';
import { productsData } from './data/products';
import { 
  Shield, 
  Sparkles, 
  Building2, 
  User, 
  Landmark, 
  Layers, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  HelpCircle, 
  Search, 
  Check,
  Award,
  BadgeDollarSign,
  TrendingUp,
  Scale,
  Users
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [enrolledBenefitIds, setEnrolledBenefitIds] = useState<string[]>(['vault-health']); // Pre-enroll Vault as a teaser
  const [memberDetails, setMemberDetails] = useState<{
    businessName: string;
    headcount: number;
    payrollProvider: string;
    dues: number;
  } | null>(null);

  // States for search and filter on the marketplace
  const [marketCategory, setMarketCategory] = useState<'all' | 'health' | 'insurance' | 'finance' | 'business'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Local state for the home page interactive quick-lead estimator
  const [estHeadcount, setEstHeadcount] = useState(5);
  const [calcPayroll, setCalcPayroll] = useState('Gusto');

  // FAQ open/close states
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(null);

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleEnrollSuccess = (details: {
    businessName: string;
    headcount: number;
    payrollProvider: string;
    dues: number;
  }) => {
    setMemberDetails(details);
    triggerToast(`Congratulations! ${details.businessName} is now registered in the Gulf Coast Buying Pool!`);
    setCurrentPage('dashboard');
  };

  const handleAddBenefit = (product: Product) => {
    if (!enrolledBenefitIds.includes(product.id)) {
      setEnrolledBenefitIds([...enrolledBenefitIds, product.id]);
      triggerToast(`Successfully activated ${product.name}! Syncing with benefits ledger.`);
    } else {
      triggerToast(`${product.name} is already active on your dashboard.`);
    }
  };

  // Filter products
  const filteredProducts = productsData.filter((p) => {
    const matchesCategory = marketCategory === 'all' || p.category === marketCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const faqs = [
    {
      q: "Is BeachWorx Marketplace an insurance company?",
      a: "No, we are not an insurance carrier. We are an Association Membership Platform. Members join our cooperative purchasing association (Gulf Coast Business Association) to leverage collective scale. The structural backing, compliance, and licensed brokerage are operated by Gallagher Affinity."
    },
    {
      q: "How does the Vault Health partnership benefit my business?",
      a: "Vault Health specializes in providing customized, institutional-grade health benefits to companies that normally cannot access them due to small headcount. By grouping BeachWorx members together, VAULT can bypass retail insurance premiums and offer up to 22% lower premium rates with tier-1 nationwide network overlays."
    },
    {
      q: "What is Section 125 PCMP and how does it lower our FICA taxes?",
      a: "Section 125 is an IRS-approved pre-tax Premium Compensation Plan. By structuring standard benefits and wellness voluntary programs pre-tax, employee taxable wages decrease slightly, saving them money, while simultaneously reducing your employer FICA matching tax burden by an average of $573 per employee, per year."
    },
    {
      q: "Do I have to be a physical member of the BeachWorx co-working space in Destin?",
      a: "The pilot launch begins with existing BeachWorx co-working members (approx. 1,200–1,500 local businesses in Destin, Florida). However, any business operating in Northwest Florida (including Panama City Beach, Miramar Beach, and Pensacola) is eligible to join the regional chapter and access the buying marketplace."
    },
    {
      q: "Are voluntary benefits like disability and life really 'Guaranteed Issue'?",
      a: "Yes. Because our membership pool is structured through Gallagher Affinity, our group policies include 'Guaranteed Issue' clauses. This means you, your partners, and your employees are accepted regardless of prior illnesses, cancers, or other pre-existing medical conditions. No physical needles or medical check-ups are required."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-sand text-slate-800 font-sans flex flex-col justify-between" id="app-root-container">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-brand-charcoal text-white px-5 py-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-slideIn" id="global-toast">
          <Sparkles className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-teal">System Update</p>
            <p className="text-xs text-slate-200 mt-1 leading-normal">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Primary Canvas */}
      <main className="flex-1 bg-gradient-to-b from-white to-brand-sand">

        {/* 1. HOME VIEW (HIGH-CONVERTING LANDING PAGE) */}
        {currentPage === 'home' && (
          <div className="space-y-24 pb-20" id="home-view">
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-12 pb-20 sm:pb-28" id="hero-block">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Hero Copy */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="inline-flex items-center space-x-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full px-3.5 py-1.5 text-brand-blue">
                      <Award className="h-4 w-4 text-brand-teal" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wide">
                        Now Live: Destin Florida Business Pilot
                      </span>
                    </div>
                    
                    <h1 className="font-display text-4xl sm:text-6xl font-black text-brand-charcoal leading-none tracking-tight">
                      Stop paying <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">retail prices</span> for business benefits.
                    </h1>
                    
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                      You now have access to enterprise-level benefits and buying power. Join the BeachWorx Association and unlock elite health, voluntary insurance, and financial tools normally reserved for corporate giants.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <button 
                        onClick={() => setCurrentPage('enroll')}
                        className="px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-brand-blue/15 hover:shadow-xl transition-all cursor-pointer"
                      >
                        Become a Member
                      </button>
                      <button 
                        onClick={() => setCurrentPage('marketplace')}
                        className="px-7 py-4 border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        View Marketplace
                      </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 border-t border-slate-100 flex items-center space-x-6">
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-400 block uppercase">Broker Partner</span>
                        <span className="text-xs font-bold text-brand-charcoal mt-1 block">Gallagher Affinity Backbone</span>
                      </div>
                      <div className="h-8 w-px bg-slate-200" />
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-400 block uppercase">Pilot Network</span>
                        <span className="text-xs font-bold text-brand-charcoal mt-1 block">1,200+ Destin Florida Employers</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Hero Interactive Card / Teaser */}
                  <div className="lg:col-span-5">
                    <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-2xl relative">
                      <div className="absolute -top-3 -right-3 h-10 w-10 bg-brand-teal rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce">
                        <Sparkles className="h-5 w-5" />
                      </div>

                      <h3 className="font-display text-lg font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                        <BadgeDollarSign className="h-5 w-5 text-brand-teal" />
                        Section 125 FICA Estimator
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        See how much your Northwest Florida business can save in payroll taxes by setting up pre-tax wellness allocations.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs font-mono font-bold uppercase text-slate-400 mb-1">
                            <span>Number of Employees / 1099s:</span>
                            <span className="text-brand-blue font-bold">{estHeadcount} seats</span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="100" 
                            value={estHeadcount} 
                            onChange={(e) => setEstHeadcount(parseInt(e.target.value))}
                            className="w-full accent-brand-blue h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono font-bold uppercase text-slate-400 mb-1.5">Payroll Platform:</label>
                          <select 
                            value={calcPayroll} 
                            onChange={(e) => setCalcPayroll(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 outline-none text-brand-charcoal bg-white"
                          >
                            <option>Gusto</option>
                            <option>ADP</option>
                            <option>QuickBooks Payroll</option>
                            <option>Paychex</option>
                            <option>Manual / Direct Ledger</option>
                          </select>
                        </div>

                        {/* Calculated output */}
                        <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between mt-6">
                          <div>
                            <span className="text-[10px] font-mono text-slate-400 block uppercase">Est. Annual Tax Savings</span>
                            <span className="text-2xl font-display font-black text-emerald-600 block mt-0.5">
                              ${(estHeadcount * 573).toLocaleString()}
                            </span>
                          </div>
                          <button 
                            onClick={() => setCurrentPage('pricing')}
                            className="p-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full flex items-center justify-center shadow-md cursor-pointer"
                            title="Detailed Calculation"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>

                        <p className="text-[9px] font-mono text-slate-400 text-center mt-2 leading-relaxed">
                          *Based on national Section 125 average employer savings of $573/participating seat per year.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* THE PROBLEM: "The Main Street Penalty" */}
            <section className="py-12 bg-slate-50 border-y border-slate-100" id="problem-block">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                  <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">The Small Business Penalty</span>
                  <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-brand-charcoal">
                    Why do independent businesses pay up to 40% more for benefit suites?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Corporate conglomerates leverage tens of thousands of employees to negotiate direct underwriting concessions, low administrative fees, and guaranteed-issue contracts. Independent operators, freelancers, and small medical or marine practices are forced to pay retail prices—or go completely unprotected.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-sm">
                    <div className="h-10 w-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                      <Scale className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-charcoal">Rigid Underwriting</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Standard corporate disability or life benefits require extensive medical questionnaires, health check-ups, and needle draws. One pre-existing condition disqualifies you entirely.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-sm">
                    <div className="h-10 w-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-charcoal">No Negotiating Power</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      If you employ 5 people, primary healthcare underwriters offer standard, high-deductible retail plans with zero customization. You are lumped into high-risk local pools.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-100 p-8 rounded-3xl space-y-4 shadow-sm">
                    <div className="h-10 w-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                      <BadgeDollarSign className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-charcoal">Administrative Taxes</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Managing multiple health, voluntary life, dental, vision, and legal platforms takes hours of manual payroll entry, causing severe administrative fatigue.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* THE SOLUTION: "The Buying Cooperative" */}
            <section className="py-12" id="solution-block">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Explanation Graphic (CSS Bento Layout) */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <div className="border border-slate-100 rounded-3xl p-6 bg-white shadow-sm flex flex-col justify-between min-h-[160px]">
                      <span className="text-xs font-mono font-extrabold text-brand-teal uppercase">NAIC Compliant</span>
                      <div>
                        <span className="text-2xl font-display font-black text-brand-blue block">100%</span>
                        <span className="text-[10px] text-slate-500 font-sans leading-normal">Regulatory compliant risk purchasing structure.</span>
                      </div>
                    </div>
                    <div className="border border-slate-100 rounded-3xl p-6 bg-brand-blue text-white shadow-sm flex flex-col justify-between min-h-[160px]">
                      <span className="text-xs font-mono font-extrabold text-brand-teal uppercase">Gallagher Backbone</span>
                      <div>
                        <span className="text-2xl font-display font-black text-white block">Top 3</span>
                        <span className="text-[10px] text-slate-300 font-sans leading-normal">Global brokerage risk-management support.</span>
                      </div>
                    </div>
                    <div className="border border-slate-100 rounded-3xl p-6 bg-slate-950 text-white shadow-sm col-span-2 flex flex-col justify-between min-h-[180px]">
                      <span className="text-xs font-mono font-extrabold text-brand-teal uppercase">Destin Launchpad</span>
                      <div>
                        <span className="text-3xl font-display font-black text-brand-teal block">1,500+</span>
                        <span className="text-[10px] text-slate-400 font-sans leading-normal">Captured co-working business roster during Northwest Florida pilot phase.</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Solution Narrative */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase">The Association Blueprint</span>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-charcoal">
                      The BeachWorx Cooperative Power Formula
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      By establishing the Gulf Coast Business Association, we bypass standard single-employer restrictions. We pool our membership roster into a single massive underwriting block. Gallagher Affinity provides the institutional backing, while VAULT Health delivers elite customized group coverage.
                    </p>

                    <ul className="space-y-3.5">
                      <li className="flex items-start text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="h-5 w-5 text-brand-teal mr-2.5 shrink-0 mt-0.5" />
                        <span><strong>One Membership, Dozens of Solutions:</strong> Access health, permanent life, dental, vision, cyber protection, and business succession planning through one flat membership dues rate.</span>
                      </li>
                      <li className="flex items-start text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="h-5 w-5 text-brand-teal mr-2.5 shrink-0 mt-0.5" />
                        <span><strong>Guaranteed Acceptance:</strong> Bypass standard medical checks. Our voluntary suites cover partners and key personnel regardless of age or pre-existing situations.</span>
                      </li>
                      <li className="flex items-start text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="h-5 w-5 text-brand-teal mr-2.5 shrink-0 mt-0.5" />
                        <span><strong>Payroll-Integrated Billing:</strong> Complete automated integration with platforms like Gusto or ADP ensures painless ACH dues sweeps and pre-tax Section 125 FICA deductions.</span>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <button 
                        onClick={() => setCurrentPage('how-it-works')}
                        className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer inline-flex items-center space-x-1.5"
                      >
                        <span>See How It Works</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* PREMIER HEALTH SHOWCASE: VAULT HEALTH PARTNERSHIP */}
            <section className="py-16 bg-brand-blue text-white rounded-[40px] max-w-7xl mx-auto px-6 sm:px-12 relative overflow-hidden" id="vault-showcase-block">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-[150px] font-mono select-none font-bold">VAULT</div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/15 py-1 px-3.5 rounded-full border border-brand-teal/20">
                    Product Spotlight: Health Insurance Partnership
                  </span>
                  <h2 className="font-display text-3xl sm:text-5xl font-black leading-none text-white">
                    Premium Group Health Solutions by VAULT
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    Our cooperative has joined forces with **VAULT** to deliver comprehensive, high-performance employer health benefits. VAULT structures medical protection for employers ranging from a single sole proprietor/1099 contractor up to 1,000+ employees.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <span className="font-display text-sm font-bold text-brand-teal">Ideal Customer Profile</span>
                      <p className="text-xs text-slate-300 mt-1 leading-normal">
                        Northwest Florida employers looking to cut benefit costs while retaining top-tier talent with robust PPO coverage.
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <span className="font-display text-sm font-bold text-brand-teal">Deductible Match Credits</span>
                      <p className="text-xs text-slate-300 mt-1 leading-normal">
                        Sync your team's historical deductible accumulations. Never lose credit when transitioning from retail providers.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => {
                        setMarketCategory('health');
                        setCurrentPage('marketplace');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-teal/10 transition-all cursor-pointer inline-flex items-center space-x-1.5"
                    >
                      <span>Explore VAULT Plans</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
                    <h3 className="font-display text-lg font-bold text-white border-b border-white/10 pb-3">The VAULT Advantage</h3>
                    
                    <ul className="space-y-4 text-xs text-slate-300">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-brand-teal mr-2 shrink-0 mt-0.5 font-bold" />
                        <div>
                          <strong className="text-white block">Custom Group Pools:</strong>
                          By pooling members, premium savings average 15-22% annually.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-brand-teal mr-2 shrink-0 mt-0.5 font-bold" />
                        <div>
                          <strong className="text-white block">A-Rated Carrier Access:</strong>
                          Includes tier-1 national medical networks with rich specialist overlays.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-brand-teal mr-2 shrink-0 mt-0.5 font-bold" />
                        <div>
                          <strong className="text-white block">Integrated Virtual Primary Care:</strong>
                          Provides immediate $0 virtual diagnostics and prescription refills.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* PRODUCT TEASERS / CAROUSEL PREVIEW */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="home-featured-products">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
                <div className="space-y-2 text-left">
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase">Marketplace Directory</span>
                  <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-brand-charcoal">
                    High-Priority Buying Pool Solutions
                  </h2>
                  <p className="text-sm text-slate-500 max-w-xl">
                    All products are backed by certified underwriters under Gallagher Affinity brokerage models. Billed cleanly via ACH or payroll deduction.
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setMarketCategory('all');
                    setCurrentPage('marketplace');
                  }}
                  className="text-xs font-mono font-bold text-brand-teal hover:text-brand-blue uppercase tracking-wider flex items-center space-x-1"
                >
                  <span>Browse All 28 Offerings</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Show top 3 products on landing page */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.slice(0, 3).map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onSelect={() => {
                      setCurrentPage('enroll');
                      window.scrollTo({ top: 0 });
                    }} 
                  />
                ))}
              </div>
            </section>

            {/* HIGH-CONVERTING CALL TO ACTION & TESTIMONIAL GRID */}
            <section className="py-16 bg-slate-900 text-white rounded-[40px] max-w-7xl mx-auto px-6 sm:px-12 relative overflow-hidden" id="testimonials-cta-block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Testimonial Panel */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider block">Pilot Member Stories</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold">What local Destin business owners are saying:</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-brand-teal pl-4 py-1">
                      <p className="text-xs text-slate-300 italic">
                        "As a sole proprietor offering boat charter services, health insurance was an absolute nightmare. Joining the BeachWorx Association Marketplace gave me direct access to VAULT health plans at group rates. It completely changed the game for my family."
                      </p>
                      <span className="text-[10px] font-mono text-brand-teal font-bold block mt-2">
                        - Captain Marcus Vance, Destin Charters (1099 Contractor)
                      </span>
                    </div>
                    <div className="border-l-2 border-brand-teal pl-4 py-1">
                      <p className="text-xs text-slate-300 italic">
                        "Setting up Section 125 FICA deductions saved us over $11,000 in payroll taxes last year. Our employees received supplemental disability coverages with zero out-of-pocket costs, and the entire setup syncs flawlessly with our Gusto payroll."
                      </p>
                      <span className="text-[10px] font-mono text-brand-teal font-bold block mt-2">
                        - Sarah Jennings, Floridian Coastal Design (14 Employees)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Action Box */}
                <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6 text-center lg:text-left">
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                    Unlock Enterprise Benefits Today
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Setting up your business account is completely free. We collect your basic profiling information and headcount to calculate your eligible Gallagher Affinity buying cohort rates.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button 
                      onClick={() => {
                        setCurrentPage('enroll');
                        window.scrollTo({ top: 0 });
                      }}
                      className="w-full sm:w-auto px-8 py-3.5 bg-brand-teal hover:bg-brand-teal/90 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                    >
                      Start Free Registration
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentPage('pricing');
                        window.scrollTo({ top: 0 });
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 border border-white/20 hover:border-white/40 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Compare Dues Tiers
                    </button>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-4 text-[10px] font-mono text-slate-400 border-t border-white/10 pt-6">
                    <span>● Verified NAIC Compliant</span>
                    <span>● Secured via Plaid API</span>
                    <span>● Gallagher Licensed Support</span>
                  </div>
                </div>

              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="home-faqs">
              <div className="text-center space-y-3 mb-12">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase">Help & Guidance</span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-500">
                  Everything you need to know about Association membership, NAIC laws, and Gallagher Affinity.
                </p>
              </div>

              <div className="space-y-4" id="faq-accordions">
                {faqs.map((faq, idx) => {
                  const isOpen = faqOpenIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      className="border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all"
                      id={`faq-block-${idx}`}
                    >
                      <button
                        onClick={() => setFaqOpenIdx(isOpen ? null : idx)}
                        className="w-full p-5 text-left font-display font-bold text-sm sm:text-base text-brand-charcoal flex justify-between items-center hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <HelpCircle className={`h-5 w-5 text-brand-teal transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 border-t border-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </div>
        )}

        {/* 2. ABOUT VIEW */}
        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left animate-fadeIn" id="about-view">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-brand-teal uppercase bg-brand-teal/5 py-1 px-3 rounded-full">
                The Collaborative Behind the Power
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-charcoal">
                About BeachWorx Marketplace
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                BeachWorx Marketplace represents a visionary collaboration designed to eliminate the 'Small Business Penalty'. Founded in Destin, Florida, our mission is to leverage decentralized buying groups so that independent contractors, freelancers, and small businesses have direct access to the exact same premium voluntary and major benefits typically monopolized by multi-billion dollar firms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border border-slate-100 p-6 sm:p-8 rounded-3xl bg-white shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-brand-teal uppercase">The Pilot Hub</span>
                <h3 className="font-display text-lg font-bold text-brand-charcoal">BeachWorx Ecosystem</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Headquartered in beautiful Destin, Florida, BeachWorx is the premier professional co-working workspace and regional business incubator. Managing a high-density membership roster of over 1,200 active freelancers, practitioners, and small employers, BeachWorx serves as the perfect launchpad for our association buying models.
                </p>
              </div>
              <div className="border border-slate-100 p-6 sm:p-8 rounded-3xl bg-white shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-brand-teal uppercase">Risk Management Backbone</span>
                <h3 className="font-display text-lg font-bold text-brand-charcoal">Gallagher Affinity Services</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  As the structural backbone and licensed broker of record, Gallagher Affinity (Arthur J. Gallagher & Co.) wields global scaling and compliance mechanisms. They manage our group policy negotiations, ensure complete NAIC statutory compliance, and route certified customer support across Northwest Florida.
                </p>
              </div>
            </div>

            <div className="p-8 bg-slate-900 text-white rounded-[32px] space-y-4 mt-8">
              <h3 className="font-display text-xl font-bold text-brand-teal">Our Expansion Blueprint</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The BeachWorx Marketplace pilot launched in Destin, Florida in Q3 2026. Leveraging immediate regional success, our expansion framework routes support to Panama City Beach, Miramar Beach, and across Northwest Florida by early 2027. Our ultimate goal is national scaling, white-labeling the association software and Gallagher underwriting bridges to co-working networks and local business chapters across the United States.
              </p>
            </div>
          </div>
        )}

        {/* 3. HOW IT WORKS VIEW */}
        {currentPage === 'how-it-works' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 text-left animate-fadeIn" id="how-it-works-view">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-brand-teal uppercase bg-brand-teal/5 py-1 px-3 rounded-full">
                Step-by-Step Cooperative Onboarding
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-charcoal">
                How Association Membership Works
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Joining a business buying cooperative is simpler than you think. Our platform is integrated directly into top-tier national payroll networks to automate tax savings and premium administration. Here is your complete Member Flow:
              </p>
            </div>

            {/* Visual Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="how-it-works-steps">
              <div className="space-y-4 border-l-2 border-brand-teal pl-6 relative">
                <div className="absolute -left-3 top-0 h-6 w-6 bg-brand-teal text-brand-blue rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-md shadow-brand-teal/20">1</div>
                <h3 className="font-display text-base font-bold text-brand-charcoal">Establish Free Profile</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Provide your business name, corporate contact info, and current headcount. This registers you as an active applicant in the Northwest Florida buying pool.
                </p>
              </div>
              <div className="space-y-4 border-l-2 border-brand-teal pl-6 relative">
                <div className="absolute -left-3 top-0 h-6 w-6 bg-brand-teal text-brand-blue rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-md shadow-brand-teal/20">2</div>
                <h3 className="font-display text-base font-bold text-brand-charcoal">Connect Your Payroll</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sync your existing payroll platform (Gusto, ADP, etc.) via secure Plaid link. This sets up automated pre-tax Section 125 FICA premium deduction mapping.
                </p>
              </div>
              <div className="space-y-4 border-l-2 border-brand-teal pl-6 relative">
                <div className="absolute -left-3 top-0 h-6 w-6 bg-brand-teal text-brand-blue rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-md shadow-brand-teal/20">3</div>
                <h3 className="font-display text-base font-bold text-brand-charcoal">Gain Buying Group Power</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pay your monthly association dues cleanly via ACH. Instantly access the full marketplace directory to claim voluntary life, disability, dental, and medical packages.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-4">
              <h3 className="font-display text-lg font-bold text-brand-charcoal flex items-center gap-2">
                <Lock className="h-5 w-5 text-brand-teal" />
                The Structural Compliance Shield
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                To guarantee maximum legal compliance with both national Employee Retirement Income Security Act (ERISA) and local state insurance commissioner statutes, our association utilizes Arthur J. Gallagher & Co. as our structural backend broker. This ensures that any group policy is fully regulated, tax-advantaged, and backed by A-rated national underwriting houses.
              </p>
            </div>
          </div>
        )}

        {/* 4. MARKETPLACE VIEW (COMPLETE PRODUCT DIRECTORY) */}
        {currentPage === 'marketplace' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-left animate-fadeIn" id="marketplace-view">
            
            {/* Page Header */}
            <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/5 py-1 px-3 rounded-full">
                  Association Buying Group
                </span>
                <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-charcoal mt-3">
                  The Member Marketplace
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                  Access 28 exclusive enterprise-level business, wellness, and voluntary protection products.
                </p>
              </div>

              {/* Live Search Bar */}
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-full text-xs font-sans text-brand-charcoal focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex border-b border-slate-100 overflow-x-auto gap-2 scrollbar-none" id="marketplace-categories">
              {[
                { id: 'all', label: 'All Products' },
                { id: 'health', label: 'Health & Wellness' },
                { id: 'insurance', label: 'Insurance Solutions' },
                { id: 'finance', label: 'Financial Power' },
                { id: 'business', label: 'Business Suite' }
              ].map((cat) => {
                const isActive = marketCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setMarketCategory(cat.id as any)}
                    className={`py-3.5 px-4 font-display text-xs font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'border-brand-teal text-brand-blue font-black'
                        : 'border-transparent text-slate-500 hover:text-brand-blue'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center text-slate-500 border border-dashed rounded-3xl bg-slate-50">
                <p className="text-sm font-bold">No products match your search or filter requirements.</p>
                <p className="text-xs text-slate-400 mt-1">Try adjusting your filters or typing another keyword.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="marketplace-product-grid">
                {filteredProducts.map((product) => {
                  const isEnrolled = enrolledBenefitIds.includes(product.id);
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isEnrolled={isEnrolled}
                      onSelect={(p) => {
                        if (memberDetails) {
                          handleAddBenefit(p);
                        } else {
                          triggerToast("Please complete your free association profile first to claim benefits.");
                          setCurrentPage('enroll');
                        }
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 5. PRICING CALCULATOR VIEW */}
        {currentPage === 'pricing' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left animate-fadeIn" id="pricing-view">
            
            <div className="space-y-4 mb-10 text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-brand-teal uppercase bg-brand-teal/5 py-1 px-3 rounded-full">
                Transparency & Financial Integrity
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-brand-charcoal">
                Interactive Dues & FICA Calculator
              </h1>
              <p className="text-sm text-slate-500 max-w-2xl leading-normal">
                Association dues are designed to scale reasonably based on headcount. By setting up Section 125, payroll pre-tax FICA savings offset your dues investment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Interactive Silder Box */}
              <div className="lg:col-span-7 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-md space-y-6">
                <h3 className="font-display text-lg font-bold text-brand-charcoal flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand-teal" />
                  Headcount Adjuster
                </h3>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                    <span>Select Employee Headcount (including partners):</span>
                    <span className="text-brand-blue text-base font-extrabold">{estHeadcount} personnel</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={estHeadcount} 
                    onChange={(e) => setEstHeadcount(parseInt(e.target.value))}
                    className="w-full accent-brand-blue h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-3.5 border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Calculation Specifications
                  </h4>
                  <div className="flex justify-between text-xs sm:text-sm text-slate-600">
                    <span>Monthly Association Dues:</span>
                    <strong className="text-brand-charcoal font-bold">
                      ${estHeadcount <= 1 ? 29 : estHeadcount <= 10 ? 99 : estHeadcount <= 50 ? 199 : 349}/mo
                    </strong>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-slate-600">
                    <span>Average Section 125 FICA Tax Mitigation:</span>
                    <strong className="text-emerald-600 font-bold">
                      -${Math.round((estHeadcount * 573) / 12)}/mo
                    </strong>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm border-t border-dashed pt-3 font-semibold">
                    <span className="text-brand-charcoal">Net Monthly Benefit Impact:</span>
                    <strong className={`font-bold ${
                      (estHeadcount <= 1 ? 29 : estHeadcount <= 10 ? 99 : estHeadcount <= 50 ? 199 : 349) - Math.round((estHeadcount * 573) / 12) < 0
                        ? 'text-emerald-600'
                        : 'text-brand-blue'
                    }`}>
                      ${((estHeadcount <= 1 ? 29 : estHeadcount <= 10 ? 99 : estHeadcount <= 50 ? 199 : 349) - Math.round((estHeadcount * 573) / 12)).toLocaleString()}/mo
                    </strong>
                  </div>
                </div>
              </div>

              {/* Calculated Premium Output Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-brand-charcoal to-[#111827] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/15 py-1 px-3 rounded-full border border-brand-teal/20">
                  Estimated Corporate Impact
                </span>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Annual Payroll Tax Mitigation</span>
                    <span className="text-3xl sm:text-4xl font-display font-black text-emerald-400 block mt-1">
                      ${(estHeadcount * 573).toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Calculated Buying Chapter</span>
                    <span className="text-sm font-semibold text-slate-200 mt-1 block">
                      {estHeadcount <= 1 ? 'Solo Builder (Contractor)' : estHeadcount <= 10 ? 'Micro Buying Circle' : estHeadcount <= 50 ? 'Collective Growth Pool' : 'Enterprise Scale'}
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 text-xs text-slate-400 leading-relaxed font-sans">
                  By joining the buying group, your FICA pre-tax adjustments easily neutralize your membership dues, leaving your business with structured buying power at virtually no net cost.
                </div>

                <button
                  onClick={() => {
                    setCurrentPage('enroll');
                    window.scrollTo({ top: 0 });
                  }}
                  className="w-full py-3 bg-brand-teal hover:bg-brand-teal/90 text-brand-blue text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer text-center block"
                >
                  Activate My Chapter Power
                </button>
              </div>

            </div>
          </div>
        )}

        {/* 6. ENROLL VIEW (COOPERATIVE CHECKOUT WIZARD) */}
        {currentPage === 'enroll' && (
          <div className="py-12" id="enrollment-wizard-canvas">
            <EnrollmentFlow
              onSuccess={handleEnrollSuccess}
              onCancel={() => setCurrentPage('home')}
              initialHeadcount={estHeadcount}
            />
          </div>
        )}

        {/* 7. DASHBOARD VIEW (INTERACTIVE MEMBER PORTAL) */}
        {currentPage === 'dashboard' && (
          <div id="active-dashboard-canvas">
            {memberDetails ? (
              <Dashboard
                memberDetails={memberDetails}
                onAddBenefit={handleAddBenefit}
                enrolledBenefitIds={enrolledBenefitIds}
              />
            ) : (
              // RESTRICTED ACCESS SCREEN
              <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6 animate-fadeIn" id="dashboard-restricted">
                <div className="h-14 w-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                  <Lock className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
                  Membership Directory Access Restricted
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto font-sans">
                  You must complete your business profile registration and calculate your eligible dues tier before accessing the active member dashboard, employee seat roster, and payroll deduction portal.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setCurrentPage('enroll')}
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Start Free Setup
                  </button>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="w-full sm:w-auto px-6 py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 8. STRATEGY HUB VIEW */}
        {currentPage === 'strategy' && (
          <StrategyRoom />
        )}

      </main>

      {/* Footer component */}
      <Footer onNav={(page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

    </div>
  );
}
