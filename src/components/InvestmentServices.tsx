import React from 'react';
import { investmentServices } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';
import { PieChart, Network, LineChart, Globe, ShieldAlert, Check } from 'lucide-react';

export function InvestmentServices() {
  const { l, lang } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'multi-asset':
        return <PieChart className="w-5 h-5 text-white" />;
      case 'top-funds':
        return <Network className="w-5 h-5 text-white" />;
      case 'macro-cycle':
        return <LineChart className="w-5 h-5 text-white" />;
      case 'global-access':
        return <Globe className="w-5 h-5 text-white" />;
      case 'risk-control':
        return <ShieldAlert className="w-5 h-5 text-white" />;
      default:
        return <PieChart className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="investments" className="py-24 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-[#C5A059] tracking-widest uppercase bg-[#FAF9F6] border border-[#C5A059]/30 px-2.5 py-1 rounded-sm">
              {l(investmentServices, 'sectionTitle')}
            </span>
          </div>
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#002D5B] font-light leading-tight">
                {l(investmentServices, 'mainTitle')}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-gray-600 font-light">
                {l(investmentServices, 'subtitle')}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest bg-white border border-gray-200 px-3 py-1.5 rounded-sm">
                {lang === 'en' ? 'Institutional Framework' : lang === 'zh-TW' ? '機構級投資體系' : '机构级投资体系'}
              </span>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentServices.pillars.map((pillar, idx) => {
            const isLarge = idx === 0 || idx === 1;
            return (
              <div
                key={pillar.id}
                className={`bg-white border border-gray-200 rounded-sm p-7 flex flex-col justify-between hover:border-[#002D5B] transition-all hover:shadow-md ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-[#002D5B] rounded flex items-center justify-center">
                      {getIcon(pillar.id)}
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#002D5B] mb-4">
                    {l(pillar, 'title')}
                  </h3>

                  <ul className="space-y-3">
                    {pillar[`points${lang === 'zh-TW' ? 'ZhTW' : lang === 'zh-CN' ? 'ZhCN' : 'En'}`].map((pt: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                        <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                  <span>{lang === 'en' ? 'Disciplined Execution' : lang === 'zh-TW' ? '嚴格紀律執行' : '严格纪律执行'}</span>
                  <span className="text-[#002D5B] font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Four-City Synergy Highlight Bar */}
        <div className="mt-8 bg-white border border-gray-200 p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-bold text-[#002D5B] uppercase tracking-wider">
              {lang === 'en' ? 'Global Syndicate Network:' : lang === 'zh-TW' ? '四地一二級聯動網絡：' : '四地一二级联动网络：'}
            </span>
            <span className="text-xs text-gray-600 font-medium">
              Shenzhen · Hong Kong · Silicon Valley · Wall Street
            </span>
          </div>
          <div className="text-[11px] font-semibold text-[#C5A059] tracking-wider uppercase">
            {lang === 'en' ? 'All-Weather Hedging · Capital Preservation' : lang === 'zh-TW' ? '全天候對沖 · 守衛資本底線' : '全天候对冲 · 守卫资本底线'}
          </div>
        </div>

      </div>
    </section>
  );
}
