import React from 'react';
import { aboutUs } from '../data/content';
import { Building2, ShieldCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { l } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
              {l(aboutUs, 'title')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#002D5B] font-light leading-tight mb-6">
              A <span className="font-bold">Multi-Strategy</span> Fund Manager <br />in Hong Kong.
            </h3>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed italic">
              {l(aboutUs, 'description')}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {aboutUs.services.map((service, index) => (
                <div key={index} className="border-l border-gray-200 pl-5">
                  <h4 className="text-sm font-bold text-[#002D5B] mb-1 uppercase tracking-tight">
                    {l(service, 'title')}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium mb-1">{l(service, 'details')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual Composition */}
            <div className="bg-white border border-gray-200 rounded-sm p-10 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 space-y-6">
                <div className="border-b border-gray-200 pb-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#002D5B] flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#002D5B] text-sm uppercase tracking-wide">Institutional Foundation</h5>
                    <p className="text-xs text-gray-500 mt-1 italic tracking-wide">Regulated framework & rigorous compliance.</p>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#002D5B] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#002D5B] text-sm uppercase tracking-wide">Risk Management</h5>
                    <p className="text-xs text-gray-500 mt-1 italic tracking-wide">Portfolio analysis and real-time limits.</p>
                  </div>
                </div>

                <div className="pb-2 flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#002D5B] flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#002D5B] text-sm uppercase tracking-wide">Alpha Generation</h5>
                    <p className="text-xs text-gray-500 mt-1 italic tracking-wide">Targeting asymmetric risk-reward profiles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
