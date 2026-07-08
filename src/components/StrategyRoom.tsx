import React, { useState } from 'react';
import { strategicTopics } from '../data/strategy';
import { StrategicTopic } from '../types';
import { Crown, BookOpen, Layers, Target, Compass, FileText, PhoneCall, Copy, Check } from 'lucide-react';

export default function StrategyRoom() {
  const [selectedTopicId, setSelectedTopicId] = useState('executive-summary');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeTopic = strategicTopics.find(t => t.id === selectedTopicId) || strategicTopics[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'marketing':
        return <Target className="h-4.5 w-4.5 text-brand-teal" />;
      case 'operations':
        return <PhoneCall className="h-4.5 w-4.5 text-amber-500" />;
      case 'architecture':
        return <Layers className="h-4.5 w-4.5 text-indigo-500" />;
      case 'corporate':
      default:
        return <Crown className="h-4.5 w-4.5 text-emerald-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="strategy-room">
      
      {/* Page Title */}
      <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 py-1 px-3 rounded-full flex items-center w-fit gap-1.5">
            <Crown className="h-3.5 w-3.5" />
            Executive Strategy Suite
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-charcoal mt-3">
            BeachWorx Marketplace Strategy Room
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Complete business-ready pilot deliverables drafted for presentation to senior leadership.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono font-bold">Status:</span>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 py-1 px-3 rounded-full uppercase">
            Boardroom Approved (v1.0)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="strategy-room-grid">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
            Select Executive Deliverable
          </span>
          <div className="bg-white border border-slate-100 rounded-3xl p-3 shadow-sm space-y-1" id="deliverables-sidemenu">
            {strategicTopics.map((topic) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-3.5 rounded-2xl text-xs font-semibold tracking-wide uppercase transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                  id={`btn-strategy-topic-${topic.id}`}
                >
                  <div className="flex items-center space-x-2.5">
                    {getCategoryIcon(topic.category)}
                    <span>{topic.title}</span>
                  </div>
                  <span className={`text-[9px] font-mono font-bold uppercase rounded px-1.5 py-0.5 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {topic.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deliverable Reader */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-md min-h-[550px] flex flex-col justify-between" id="strategy-display">
            <div>
              {/* Badge Row */}
              <div className="flex items-center justify-between border-b pb-5 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-brand-teal uppercase font-extrabold tracking-wider">
                    Pilot Deliverable Spec
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-black text-brand-charcoal mt-1">
                    {activeTopic.title}
                  </h2>
                </div>
                <button
                  onClick={() => handleCopy(activeTopic.content + '\n' + (activeTopic.bullets?.join('\n') || ''), activeTopic.id)}
                  className="p-2 text-slate-400 hover:text-brand-blue hover:bg-slate-50 rounded-xl transition-all"
                  title="Copy deliverable copy"
                  id="copy-strategic-data"
                >
                  {copiedId === activeTopic.id ? (
                    <Check className="h-4.5 w-4.5 text-emerald-600" />
                  ) : (
                    <Copy className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>

              {/* Main Content paragraph */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans mb-8">
                {activeTopic.content}
              </p>

              {/* Bullet List Details */}
              {activeTopic.bullets && activeTopic.bullets.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                    Key Specifications & Outline Details
                  </h4>
                  <ul className="space-y-3.5">
                    {activeTopic.bullets.map((bullet, idx) => {
                      const [boldText, normalText] = bullet.split(':');
                      return (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-slate-50/50 p-3 rounded-2xl border border-slate-100/50">
                          <div className="h-5 w-5 rounded-full bg-slate-200/50 text-slate-500 flex items-center justify-center font-mono text-[10px] shrink-0 mr-3 mt-0.5">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            {normalText ? (
                              <>
                                <strong className="text-brand-charcoal font-bold">{boldText}:</strong>
                                <span>{normalText}</span>
                              </>
                            ) : (
                              <span>{bullet}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            {/* Strategy footer */}
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center space-x-1">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Reference Guide. Non-disclosure active.</span>
              </div>
              <span>Page 1 of 1</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
