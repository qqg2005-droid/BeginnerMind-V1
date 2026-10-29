import React from 'react';
import { corePositioning } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Sparkles, CheckCircle2, Globe2, Compass, Layers, Quote } from 'lucide-react';

export function CorePositioning() {
  const { l, lang } = useLanguage();

  const getPillarIcon = (index: number) => {
    if (index === 0) return <Compass className="w-5 h-5 text-[#002D5B]" />;
    if (index === 1) return <Shield className="w-5 h-5 text-[#002D5B]" />;
    return <Layers className="w-5 h-5 text-[#002D5B]" />;
  };

  return (
    <section id="positioning" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-[#FAF9F6] border border-[#C5A059]/30 text-[#C5A059] text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm mb-4">
            {l(corePositioning, 'badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#002D5B] font-light tracking-tight mb-4">
            {l(corePositioning, 'title')}
          </h2>
          <div className="h-0.5 w-16 bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg font-medium text-gray-700 tracking-wide uppercase">
            {l(corePositioning, 'slogan')}
          </p>
        </div>

        {/* Industry Insight Banner */}
        <div className="mb-16 bg-[#FAF9F6] border-l-4 border-[#C5A059] p-6 sm:p-8 rounded-r-sm shadow-sm relative overflow-hidden">
          <Quote className="absolute right-6 top-6 w-16 h-16 text-[#C5A059]/15 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#002D5B] text-white flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#002D5B] block mb-1">
                {lang === 'en' ? 'Core Strategic Insight' : lang === 'zh-TW' ? '行業深刻洞察' : '行业深刻洞察'}
              </span>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-serif italic">
                "{l(corePositioning, 'insight')}"
              </p>
            </div>
          </div>
        </div>

        {/* 3 Main Pillars: WHO WE ARE | PROBLEMS WE SOLVE | WHAT WE PROVIDE */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {corePositioning.pillars.map((pillar, pIdx) => (
            <div 
              key={pillar.id}
              className="bg-[#F8F9FA] border border-gray-200 rounded-sm p-7 flex flex-col justify-between hover:border-[#002D5B] transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center shadow-xs">
                    {getPillarIcon(pIdx)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block">
                      {pillar.subtitleEn}
                    </span>
                    <h3 className="text-lg font-bold text-[#002D5B]">
                      {l(pillar, 'title')}
                    </h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {pillar.items.map((item, iIdx) => (
                    <div key={iIdx} className="space-y-1.5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <h4 className="text-sm font-bold text-[#1A1A1A]">
                          {l(item, 'title')}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pl-6">
                        {l(item, 'desc')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Core Value Commitment Bar */}
        <div className="bg-[#002D5B] text-white p-6 sm:p-8 rounded-sm shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#C5A059]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Globe2 className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-1.5">
                {lang === 'en' ? 'Core Value Commitment' : lang === 'zh-TW' ? '核心價值承諾' : '核心价值承诺'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-4xl">
                {l(corePositioning, 'commitment')}
              </p>
            </div>
          </div>
          <div className="text-[11px] font-mono tracking-widest uppercase text-white/60 whitespace-nowrap border-t md:border-t-0 md:border-l border-white/20 pt-2 md:pt-0 md:pl-6">
            PATIENT CAPITAL · VALUE CREATION
          </div>
        </div>

      </div>
    </section>
  );
}
