import React from 'react';
import { ourViews } from '../data/content';
import { Target, Search, Clock, Activity, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Target, Search, Clock, Activity, Briefcase];

export function Views() {
  const { l } = useLanguage();

  return (
    <section id="views" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            {l(ourViews, 'title')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-[#002D5B] font-light mb-4">
            {l(ourViews, 'subtitle')}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourViews.views.map((view, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-[#F8F9FA] p-8 border border-gray-200 rounded-sm hover:border-[#002D5B] transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#002D5B] flex items-center justify-center mb-6 rounded-sm">
                    <Icon className="text-white w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#002D5B] mb-3">
                    {l(view, 'title')}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {l(view, 'desc')}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>DISCIPLINE</span>
                  <span>0{index + 1}</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Philosophy Visual Accent */}
          <div className="relative rounded-sm overflow-hidden border border-gray-200 bg-[#FAF9F6] p-8 flex flex-col justify-between shadow-xs group">
            <img 
              src="/images/ifc_sunny.jpg" 
              alt="Institutional Private Wealth Architecture" 
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-3">
                PHILOSOPHY · 守正出奇
              </span>
              <h4 className="text-xl font-serif text-[#002D5B] font-light leading-snug mb-3">
                {l(ourViews, 'title')}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed italic font-serif">
                "Capital preservation is not passive defense, but the prerequisite for compounding over generations."
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] font-bold text-[#002D5B] uppercase tracking-wider">
              <span>BEGINNER MIND</span>
              <span className="text-[#002D5B]">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
