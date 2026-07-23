import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fullDisclaimer } from '../data/content';

interface DisclaimerModalProps {
  onAccept: () => void;
}

export function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const { t, lang } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002D5B]/80 backdrop-blur-sm">
      <div className="bg-white max-w-2xl w-full rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-8 bg-[#FAF9F6] border-l-4 border-[#C5A059] flex-shrink-0">
          <h3 className="text-sm font-bold text-[#002D5B] mb-2 uppercase tracking-wide">
            {t('disclaimer.title')}
          </h3>
          <p className="text-xs text-gray-600 leading-tight">
            {t('disclaimer.desc')}
          </p>
        </div>
        
        <div className="p-8 overflow-y-auto text-xs text-gray-600 space-y-4 flex-grow leading-relaxed whitespace-pre-line">
          {fullDisclaimer.en}
          <hr className="my-6 border-gray-200" />
          <div className="font-bold text-[#002D5B]">
            {fullDisclaimer['zh-TW']}
          </div>
        </div>

        <div className="p-6 bg-[#F8F9FA] border-t border-gray-200 flex justify-end flex-shrink-0 gap-4">
          <button
            onClick={onAccept}
            className="px-6 py-3 bg-[#002D5B] text-white text-[11px] font-bold uppercase rounded hover:bg-[#003d7a] transition-colors w-full sm:w-auto text-center"
          >
            {t('disclaimer.accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
