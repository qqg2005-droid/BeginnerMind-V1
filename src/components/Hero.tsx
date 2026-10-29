import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white border-b border-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(#002D5B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F6] border border-[#C5A059]/30 text-[#002D5B] text-[11px] font-bold tracking-widest uppercase mb-8 rounded-sm">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#002D5B] font-light tracking-tight leading-[1.15] mb-6">
            {t('hero.title.1')}
            {t('hero.title.2') && t('hero.title.2').trim().length > 0 && (
              <>
                <br />
                <span className="font-bold text-[#002D5B]">{t('hero.title.2')}</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-2xl mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#positioning" 
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#002D5B] text-white rounded font-bold uppercase text-xs hover:bg-[#003d7a] transition-all tracking-wider shadow hover:shadow-md"
            >
              {t('hero.explore')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="#investments" 
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-gray-300 text-gray-700 rounded font-bold uppercase text-xs hover:bg-gray-50 transition-colors tracking-wider"
            >
              {t('hero.investments')}
            </a>
          </div>

          {/* Key tags */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
            <div>
              <span className="font-bold text-[#002D5B]">
                {lang === 'en' ? 'PATIENT CAPITAL' : lang === 'zh-TW' ? '長期資本' : '长期资本'}
              </span>
              <span className="mx-2 text-gray-300">·</span>
              <span>{lang === 'en' ? 'Multi-cycle discipline' : lang === 'zh-TW' ? '跨週期戰略定力' : '跨周期战略定力'}</span>
            </div>
            <div>
              <span className="font-bold text-[#002D5B]">
                {lang === 'en' ? 'INDUSTRIAL CAPITAL' : lang === 'zh-TW' ? '產業資本' : '产业资本'}
              </span>
              <span className="mx-2 text-gray-300">·</span>
              <span>{lang === 'en' ? 'Real value empowerment' : lang === 'zh-TW' ? '實業底層賦能' : '实业底层赋能'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
