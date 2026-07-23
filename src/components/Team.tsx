import React from 'react';
import { teamMembers } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export function Team() {
  const { l, lang } = useLanguage();

  return (
    <section id="team" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            {lang === 'en' ? 'Organization Structure' : lang === 'zh-TW' ? '核心人員背景' : '核心人员背景'}
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-[#002D5B] font-light mb-4">
            Investment <span className="font-bold">Management Team</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => {
            const bgKey = lang === 'en' ? 'backgroundEn' : lang === 'zh-TW' ? 'backgroundZhTW' : 'backgroundZhCN';
            const backgrounds = member[bgKey] as string[];
            
            return (
              <div key={index} className="bg-[#F8F9FA] p-8 border border-gray-200 rounded-sm">
                <div className="relative z-10">
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h4 className="text-xl font-bold text-[#002D5B] mb-2">
                      {l(member, 'name')}
                    </h4>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-2 py-1 bg-[#002D5B] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        {l(member, 'role')}
                      </span>
                    </div>
                    <p className="text-gray-500 font-medium text-sm flex items-center italic">
                      <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mr-2"></span>
                      {l(member, 'experience')}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {backgrounds.map((line, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#C5A059] mr-2 mt-1 text-sm">•</span>
                        <span className="text-gray-600 text-sm leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
