import React from 'react';
import { investmentStrategies, investmentProcess } from '../data/content';
import { AlertTriangle, TrendingUp, RefreshCw, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  AlertTriangle,
  TrendingUp,
  RefreshCw,
  Globe
};

export function Strategies() {
  const { l, lang } = useLanguage();

  return (
    <section id="strategies" className="py-24 bg-[#F8F9FA] text-[#1A1A1A] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              {lang === 'en' ? 'Investment Strategies' : lang === 'zh-TW' ? '投資策略' : '投资策略'}
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-light text-[#002D5B] leading-tight">
              Multi-Asset Class <br/>
              <span className="font-bold">Opportunity Set.</span>
            </h3>
          </div>
        </div>

        {/* Main asset classes */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {investmentStrategies.map((strategy) => {
            const Icon = iconMap[strategy.icon] || TrendingUp;
            return (
              <div key={strategy.id} className="group p-8 bg-white border border-gray-200 rounded-sm hover:border-[#002D5B] transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#F0F4F8] rounded-full flex items-center justify-center">
                    <Icon className="text-[#002D5B] w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#002D5B] mb-4">{l(strategy, 'title')}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {l(strategy, 'description')}
                </p>
              </div>
            );
          })}
        </div>

        {/* Investment Process */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif text-[#002D5B] font-bold">
              {lang === 'en' ? 'Investment Committee Process' : lang === 'zh-TW' ? '投資委員會流程' : '投资委员会流程'}
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentProcess.map((step, index) => (
              <div key={index} className="relative pl-6 border-l border-gray-200 hover:border-[#002D5B] transition-colors">
                <div className="absolute w-2 h-2 border-2 border-[#002D5B] bg-white rounded-full -left-[5px] top-1"></div>
                <div className="text-xs text-gray-400 font-bold mb-1 tracking-widest">{step.step}</div>
                <h4 className="text-sm font-bold text-[#002D5B] mb-2">{l(step, 'title')}</h4>
                <p className="text-xs text-gray-500 leading-relaxed italic">
                  {l(step, 'desc')}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
