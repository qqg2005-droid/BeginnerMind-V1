import React from 'react';
import { coreBusiness } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

export function CoreBusiness() {
  const { l } = useLanguage();

  return (
    <section id="business" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#002D5B] font-light tracking-tight mb-4">
            {l(coreBusiness, 'title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            {l(coreBusiness, 'subtitle')}
          </p>
        </div>

        {/* 2 Flagship Business Segments - Clean High-End Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {coreBusiness.services.map((service, sIdx) => {
            return (
              <div 
                key={service.id}
                className="bg-[#002D5B] border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:border-gray-400 transition-all hover:shadow-xl group"
              >
                {/* Card Visual Header with Image */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={l(service, 'title')} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002D5B]/85 via-[#002D5B]/20 to-transparent"></div>
                  
                  {/* Understated Top Category Number */}
                  <div className="absolute top-6 left-6 text-xs font-mono font-medium tracking-widest text-white/80">
                    0{sIdx + 1}
                  </div>

                  {/* Headline overlaid at bottom of image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-tight mb-2">
                      {l(service, 'title')}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                      {l(service, 'headline')}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
