import React, { useState } from 'react';
import { Landmark, ArrowRight, CheckCircle, Mail } from 'lucide-react';

interface FooterProps {
  onNav: (page: any) => void;
}

export default function Footer({ onNav }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-slate-800" id="marketplace-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-800 pb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNav('home')}>
              <div className="h-10 w-10 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center">
                <Landmark className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-white block">BeachWorx</span>
                <span className="text-[9px] font-mono tracking-wider text-brand-teal uppercase font-bold">Marketplace</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Giving Northwest Florida independent employers and contractors premium, enterprise-level benefits and collective buying power.
            </p>
            <div className="text-xs font-mono text-slate-400">
              <span className="block">Pilot HQ: Destin, Florida</span>
              <span className="block mt-0.5">Expansion: Panama City Beach</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => onNav('marketplace')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">Vault Health Solutions</button></li>
              <li><button onClick={() => onNav('marketplace')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">Guaranteed Issue Protection</button></li>
              <li><button onClick={() => onNav('marketplace')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">Section 125 FICA Programs</button></li>
              <li><button onClick={() => onNav('marketplace')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">Voluntary Health & Dental</button></li>
            </ul>
          </div>

          {/* Column 3: Association Info */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => onNav('how-it-works')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">How It Works</button></li>
              <li><button onClick={() => onNav('pricing')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">Dues Tiers Calculator</button></li>
              <li><button onClick={() => onNav('strategy')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">Strategy Hub (Boardroom)</button></li>
              <li><button onClick={() => onNav('about')} className="hover:text-brand-teal transition-colors text-left cursor-pointer">About Gallagher Affinity</button></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Sign up */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Buying Group Updates</h4>
            <p className="text-xs text-slate-400 leading-normal">
              Subscribe to stay updated on newly added insurance products, rate adjustments, and compliance guides.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>Subscription Confirmed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Business email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-teal flex-1"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-gradient-to-r from-brand-blue to-brand-teal text-white rounded-full hover:shadow-lg transition-all cursor-pointer shrink-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Legal Disclaimers & Regulatory Notices */}
        <div className="mt-12 pt-8 border-t border-slate-800 space-y-4">
          <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
            <strong>REGULATORY NOTICE & LEGISLATIVE STATUS:</strong> BeachWorx Marketplace is an association benefit platform operated in tandem with Gallagher Affinity Services, LLC (licensed agent #854092, Florida Department of Financial Services). This is NOT an insurance carrier website. Membership provides access to exclusive group buying rates, educational tools, and voluntary benefit contracts structured under the Gulf Coast Business Association guidelines, compliant with the National Association of Insurance Commissioners (NAIC) models. 
          </p>
          <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
            Guaranteed Issue programs are backed by primary A-rated underwriters (A.M. Best). Section 125 PCMP and Flex Shield are administered under strict ERISA guidelines. Health solutions in partnership with VAULT require underwriting approval or group pool cohort sizing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-4 border-t border-slate-800/50 gap-4">
            <span>© 2026 BeachWorx Marketplace. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); onNav('home'); }} className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); onNav('home'); }} className="hover:text-slate-400 transition-colors">Terms of Membership</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
