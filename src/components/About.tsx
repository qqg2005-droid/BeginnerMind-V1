import React from 'react';
import { aboutUs } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { l, lang } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Institutional Presentation */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Presentation */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#002D5B] font-light leading-tight mb-6">
              {lang === 'en' ? (
                <>
                  Premier <span className="font-bold">Asset Management</span> & <br className="hidden sm:inline" />
                  Institutional Stewardship.
                </>
              ) : lang === 'zh-TW' ? (
                <>
                  領先的<span className="font-bold">資產管理</span>與<br className="hidden sm:inline" />
                  跨代傳承受託機構。
                </>
              ) : (
                <>
                  领先的<span className="font-bold">资产管理</span>与<br className="hidden sm:inline" />
                  跨代传承受托机构。
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              {l(aboutUs, 'description')}
            </p>
          </div>

          {/* Right Column: Architectural Visual Card, Radiant & Sunny Editorial Style */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-gray-200 shadow-xl bg-white group">
              <img 
                src="/images/ifc_sunny.jpg" 
                alt="Two International Finance Centre, Hong Kong Central" 
                className="w-full h-[460px] object-cover object-top group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D5B]/70 via-transparent to-transparent"></div>

              {/* Bottom Quote - Clean Editorial Frame */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-sm border border-white/40 shadow-lg text-[#002D5B]">
                <p className="text-xs sm:text-sm text-gray-800 italic font-serif leading-relaxed">
                  {lang === 'en' 
                    ? '"Patient capital and industrial discipline: building an enduring system of multi-generational family governance."'
                    : lang === 'zh-TW'
                    ? '「長期資本與產業資本定力：搭建可跨代延續的家族財富治理與資產保值增值體系。」'
                    : '“长期资本与产业资本定力：搭建可跨代延续的家族财富治理与资产保值增值体系。”'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
