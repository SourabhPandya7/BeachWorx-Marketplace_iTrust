import React, { useState } from 'react';
import { Product } from '../types';
import * as Icons from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isEnrolled?: boolean;
  key?: string;
}

export default function ProductCard({ product, onSelect, isEnrolled = false }: ProductCardProps) {
  const [showExpansion, setShowExpansion] = useState(false);

  // Safely map string icon to Lucide icon component, default to Shield
  const IconComponent = (Icons as any)[product.iconName] || Icons.Shield;

  // Visual styling depending on category
  const categoryStyles = {
    insurance: {
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-100',
      tag: 'Insurance Solution',
    },
    health: {
      bg: 'bg-teal-50 text-teal-800 border-teal-100',
      tag: 'Health & Wellness',
    },
    finance: {
      bg: 'bg-indigo-50 text-indigo-800 border-indigo-100',
      tag: 'Financial Power',
    },
    business: {
      bg: 'bg-slate-50 text-slate-800 border-slate-100',
      tag: 'Business Suite',
    }
  }[product.category];

  // Priority color
  const priorityStyles = {
    High: 'bg-red-50 text-red-700 border-red-100',
    Medium: 'bg-amber-50 text-amber-700 border-amber-100',
    Low: 'bg-slate-100 text-slate-600 border-slate-200'
  }[product.priority];

  return (
    <div 
      className={`relative flex flex-col justify-between bg-white rounded-3xl border ${
        product.vaultSpecific 
          ? 'border-brand-teal ring-2 ring-brand-teal/20 shadow-xl' 
          : 'border-slate-100 shadow-sm hover:shadow-md'
      } p-6 sm:p-8 smooth-transition group hover:-translate-y-1`}
      id={`product-card-${product.id}`}
    >
      {/* Vault Premium Banner Accent */}
      {product.vaultSpecific && (
        <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-brand-blue to-brand-teal text-white text-[10px] font-mono tracking-widest uppercase font-bold py-1 px-3.5 rounded-full shadow-sm">
          Featured Product Partnership
        </div>
      )}

      {/* Card Content Upper */}
      <div>
        {/* Badges / Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <span className={`text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${categoryStyles.bg}`}>
            {categoryStyles.tag}
          </span>
          <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${priorityStyles}`}>
            Priority: {product.priority}
          </span>
        </div>

        {/* Headline & Icon */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="space-y-1">
            <h3 className="font-display text-lg font-bold text-brand-charcoal leading-snug group-hover:text-brand-blue transition-colors">
              {product.name}
            </h3>
            <p className="text-xs font-mono text-brand-teal font-semibold">
              {product.headline}
            </p>
          </div>
          <div className={`p-3 rounded-xl ${product.vaultSpecific ? 'bg-brand-teal/10 text-brand-teal' : 'bg-slate-50 text-slate-600'} group-hover:scale-110 smooth-transition shrink-0`}>
            <IconComponent className="h-6 w-6" />
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {product.shortDescription}
        </p>

        {/* Bullet Benefits */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
            Exclusive Benefits
          </h4>
          <ul className="space-y-2.5">
            {product.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start text-xs text-slate-600 leading-normal">
                <Icons.CheckCircle className="h-4 w-4 text-brand-teal shrink-0 mr-2 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action / Lower */}
      <div className="space-y-4 pt-4 border-t border-slate-50">
        
        {/* Expansion Idea Toggler */}
        <div>
          <button 
            onClick={() => setShowExpansion(!showExpansion)}
            className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-400 hover:text-brand-blue transition-colors uppercase font-bold tracking-wider"
          >
            {showExpansion ? 'Hide' : 'View'} Expansion Concept
          </button>
          {showExpansion && (
            <div className="mt-2 p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-500 leading-relaxed font-mono">
              <span className="text-slate-700 font-bold block mb-1">Future Road:</span>
              {product.expansionIdeas}
            </div>
          )}
        </div>

        {/* Main CTA */}
        <button
          onClick={() => onSelect(product)}
          disabled={isEnrolled}
          className={`w-full py-3 px-4 rounded-full text-xs font-bold tracking-wide uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer ${
            isEnrolled
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : product.vaultSpecific
              ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md shadow-brand-blue/10'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
          id={`cta-product-${product.id}`}
        >
          {isEnrolled ? (
            <>
              <Icons.Check className="h-4 w-4" />
              <span>Enrolled & Setup</span>
            </>
          ) : (
            <>
              <span>{product.ctaText}</span>
              <Icons.ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
