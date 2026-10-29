import React, { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { fullDisclaimer, companyInfo } from '../data/content';
import { ShieldCheck, Globe } from 'lucide-react';

interface DisclaimerModalProps {
  onAccept: () => void;
}

export function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const { t, lang, setLang, l } = useLanguage();
  const [modalLang, setModalLang] = useState<Language>(lang || 'en');

  const handleLangChange = (newLang: Language) => {
    setModalLang(newLang);
    setLang(newLang);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002D5B]/85 backdrop-blur-md">
      <div className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#FAF9F6] border-l-4 border-[#C5A059] border-b border-gray-200 flex-shrink-0 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-[#002D5B]" />
              <h3 className="text-sm font-bold text-[#002D5B] uppercase tracking-wider">
                {t('disclaimer.title')}
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-normal">
              {t('disclaimer.desc')}
            </p>
            <p className="text-[11px] font-semibold text-[#C5A059] mt-1 tracking-wider uppercase">
              {l(companyInfo, 'name')} · {l(companyInfo, 'license')}
            </p>
          </div>

          {/* Modal Language Selector */}
          <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded px-2 py-1 flex-shrink-0 text-xs">
            <Globe className="w-3.5 h-3.5 text-gray-400" />
            <button
              onClick={() => handleLangChange('en')}
              className={`font-semibold px-1 py-0.5 rounded ${modalLang === 'en' ? 'text-[#002D5B] bg-blue-50 font-bold' : 'text-gray-400 hover:text-gray-600'}`}
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => handleLangChange('zh-TW')}
              className={`font-semibold px-1 py-0.5 rounded ${modalLang === 'zh-TW' ? 'text-[#002D5B] bg-blue-50 font-bold' : 'text-gray-400 hover:text-gray-600'}`}
            >
              繁
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => handleLangChange('zh-CN')}
              className={`font-semibold px-1 py-0.5 rounded ${modalLang === 'zh-CN' ? 'text-[#002D5B] bg-blue-50 font-bold' : 'text-gray-400 hover:text-gray-600'}`}
            >
              简
            </button>
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs text-gray-700 space-y-4 flex-grow leading-relaxed whitespace-pre-line border-b border-gray-100">
          <div className="text-gray-800">
            {fullDisclaimer[modalLang] || fullDisclaimer.en}
          </div>

          {/* Bilingual reassurance if English is selected */}
          {modalLang === 'en' && (
            <div className="pt-4 border-t border-gray-200 text-gray-500 font-normal">
              <div className="font-semibold text-gray-700 mb-1">【重要聲明】</div>
              {fullDisclaimer['zh-TW']}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-5 sm:p-6 bg-[#F8F9FA] flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <p className="text-[11px] text-gray-500 text-center sm:text-left">
            By clicking accept, you acknowledge that you are a Professional Investor under SFC guidelines.
          </p>
          <button
            onClick={onAccept}
            className="px-8 py-3 bg-[#002D5B] hover:bg-[#003d7a] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-all hover:shadow-md w-full sm:w-auto text-center"
          >
            {t('disclaimer.accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
