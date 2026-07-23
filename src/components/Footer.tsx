import React from 'react';
import { companyInfo, fullDisclaimer } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { lang, l, t } = useLanguage();
  
  // Use a fallback to access disclaimer securely
  const disclaimerText = (fullDisclaimer as any)[lang] || (fullDisclaimer as any)['en'];

  return (
    <footer className="bg-[#002D5B] text-white py-12 border-t border-[#001f3f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="-5 0 110 100" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50 90 L 14 54 A 25.45 25.45 0 0 1 50 18 A 25.45 25.45 0 0 1 86 54 Z" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 50 18 L 86 54" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="32" cy="36" r="10" fill="currentColor"/>
              </svg>
              <div className="font-sans text-xl font-medium tracking-tight text-white leading-tight">
                Beginner Mind<br />
                <span className="text-sm font-normal block opacity-80">
                  {l(companyInfo, 'name')}
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed opacity-80 uppercase tracking-widest font-medium">
              SFC CE No. BTB385 <br/>
              {t('footer.regulated')}
            </p>
            <p className="mt-4 text-xs leading-relaxed opacity-80">
              {l(companyInfo, 'address')}
            </p>
            <p className="mt-2 text-xs opacity-80">
              <a href={`mailto:${companyInfo.email}`} className="hover:opacity-100 transition-opacity">
                {companyInfo.email}
              </a>
            </p>
          </div>

          <div className="lg:col-span-8">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs opacity-80">Regulatory Disclaimer</h4>
            <div className="text-[10px] leading-relaxed space-y-4 max-h-48 overflow-y-auto pr-4 opacity-70 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent font-medium whitespace-pre-line">
              {disclaimerText}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium uppercase tracking-wider opacity-70">
          <p>
            &copy; {new Date().getFullYear()} Beginner Mind Asset Management (HK) Ltd.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</a>
            <a href="#" className="hover:opacity-100 transition-opacity">{t('footer.piOnly')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
