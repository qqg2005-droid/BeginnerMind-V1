import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white border-b border-gray-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[#F0F4F8] text-[#002D5B] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#002D5B] font-light tracking-tight leading-[1.1] mb-6">
            {t('hero.title.1')} <br />
            <span className="font-bold">{t('hero.title.2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mb-10 leading-relaxed italic">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 bg-[#002D5B] text-white rounded font-bold uppercase text-[11px] hover:bg-[#003d7a] transition-colors tracking-wide">
              {t('hero.explore')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#strategies" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-300 text-gray-600 rounded font-bold uppercase text-[11px] hover:bg-gray-50 transition-colors tracking-wide">
              {t('hero.strategies')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
