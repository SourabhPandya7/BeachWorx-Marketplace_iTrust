import React, { useState } from 'react';
import { NavPage } from '../types';
import { Briefcase, Menu, X, Landmark, Crown } from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: NavPage; highlight?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'The Marketplace', page: 'marketplace' },
    { label: 'Pricing Calculator', page: 'pricing' },
    { label: 'About', page: 'about' },
    { label: 'Member Dashboard', page: 'dashboard' },
  ];

  const handleNav = (page: NavPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all" id="marketplace-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('home')} id="logo-container">
            <div className="h-10 w-10 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center shadow-md shadow-brand-blue/10">
              <Landmark className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-brand-charcoal block leading-none">
                BeachWorx
              </span>
              <span className="text-[10px] font-mono tracking-wider text-brand-teal uppercase font-bold">
                Marketplace
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-blue/5 text-brand-blue font-semibold'
                      : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                  id={`nav-item-${item.page}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3" id="header-actions">
            <button
              onClick={() => handleNav('strategy')}
              className={`flex items-center space-x-2 px-4 py-2 border rounded-full text-xs font-mono font-medium transition-all ${
                currentPage === 'strategy'
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/20'
              }`}
              id="executive-hub-btn"
            >
              <Crown className="h-3.5 w-3.5" />
              <span>Strategy Room</span>
            </button>

            <button
              onClick={() => handleNav('enroll')}
              className="px-5 py-2.5 bg-gradient-to-r from-brand-blue to-[#08638c] text-white rounded-full text-sm font-medium shadow-md shadow-brand-blue/10 hover:shadow-lg hover:shadow-brand-blue/20 transform hover:-translate-y-0.5 transition-all cursor-pointer"
              id="cta-join-association-header"
            >
              Join Association
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => handleNav('strategy')}
              className={`p-2 border rounded-xl text-slate-500 hover:text-brand-blue hover:bg-slate-50 transition-all ${
                currentPage === 'strategy' ? 'border-emerald-500 text-emerald-700 bg-emerald-50' : 'border-slate-200'
              }`}
              title="Strategy Hub"
            >
              <Crown className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-all"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 animate-fadeIn" id="mobile-nav-panel">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all block ${
                  isActive
                    ? 'bg-brand-blue/10 text-brand-blue font-semibold'
                    : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                }`}
                id={`mobile-nav-item-${item.page}`}
              >
                {item.label}
              </button>
            );
          })}
          
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <button
              onClick={() => handleNav('strategy')}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-mono font-medium"
            >
              <Crown className="h-4 w-4" />
              <span>Strategy Room (14 Deliverables)</span>
            </button>
            <button
              onClick={() => handleNav('enroll')}
              className="w-full text-center px-4 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl text-base font-medium shadow-md"
              id="mobile-cta-join"
            >
              Join Association
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
