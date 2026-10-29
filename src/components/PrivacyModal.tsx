import React, { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { privacyPolicyContent } from '../data/privacyContent';
import { Shield, X, Globe, Lock } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { lang, setLang } = useLanguage();
  const [modalLang, setModalLang] = useState<Language>(lang || 'en');

  if (!isOpen) return null;

  const currentPolicy = privacyPolicyContent[modalLang] || privacyPolicyContent.en;

  const handleLangChange = (newLang: Language) => {
    setModalLang(newLang);
    setLang(newLang);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001f3f]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white max-w-3xl w-full rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[88vh] border border-gray-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-[#F8F9FA] border-b border-gray-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#002D5B] text-white flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 id="privacy-modal-title" className="text-lg font-serif font-medium text-[#002D5B]">
                {currentPolicy.title}
              </h2>
              <p className="text-xs text-gray-500 font-light">
                {currentPolicy.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded px-2 py-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <button
                type="button"
                onClick={() => handleLangChange('en')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${modalLang === 'en' ? 'text-[#002D5B] bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                type="button"
                onClick={() => handleLangChange('zh-TW')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${modalLang === 'zh-TW' ? 'text-[#002D5B] bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
              >
                繁
              </button>
              <span className="text-gray-300">|</span>
              <button
                type="button"
                onClick={() => handleLangChange('zh-CN')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${modalLang === 'zh-CN' ? 'text-[#002D5B] bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
              >
                简
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed font-light divide-y divide-gray-100">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest pb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>{currentPolicy.lastUpdated}</span>
          </div>

          {currentPolicy.sections.map((section, idx) => (
            <div key={idx} className="pt-5 first:pt-0">
              <h3 className="text-base font-serif font-medium text-[#002D5B] mb-2.5">
                {section.title}
              </h3>
              <div className="space-y-2 text-gray-600 text-xs sm:text-sm">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#F8F9FA] border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Beginner Mind Asset Management Limited · SFC CE NO. BTB385
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-[#002D5B] hover:bg-[#001f3f] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            {modalLang === 'en' ? 'Close' : modalLang === 'zh-TW' ? '關閉' : '关闭'}
          </button>
        </div>
      </div>
    </div>
  );
}
