import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#002D5B] font-light tracking-tight leading-[1.16] mb-6">
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
                href="#business" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#002D5B] text-white rounded font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#001f3f] transition-colors shadow-xs"
              >
                {t('hero.business')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#investments" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#002D5B]/30 text-[#002D5B] rounded font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#FAF9F6] transition-colors"
              >
                {t('hero.investments')}
              </a>
            </div>
          </div>

          {/* Right Column: Pure Hong Kong Central Visual, Clean Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-xl border border-gray-200 bg-white group">
              <img 
                src="/images/hong-kong-skyline.jpg" 
                alt="Hong Kong Central Financial District & Victoria Harbour" 
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
