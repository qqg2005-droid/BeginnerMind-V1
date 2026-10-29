import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { companyInfo } from '../data/content';
import { MapPin, Mail, Phone } from 'lucide-react';

export function ContactUs() {
  const { lang, l } = useLanguage();

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#002D5B] font-light tracking-tight mb-3">
            {lang === 'en' ? (
              <>Contact <span className="font-bold">Us</span></>
            ) : lang === 'zh-TW' ? (
              <>聯絡<span className="font-bold">我們</span></>
            ) : (
              <>联系<span className="font-bold">我们</span></>
            )}
          </h2>
          <div className="w-12 h-0.5 bg-[#002D5B] mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            {lang === 'en'
              ? 'Beginner Mind Asset Management (HK) Ltd · Hong Kong SFC Licensed Corporation'
              : lang === 'zh-TW'
              ? '初星資產管理（香港）有限公司 · 香港證監會持牌法團'
              : '初星资产管理（香港）有限公司 · 香港证监会持牌法团'}
          </p>
        </div>

        {/* 3-Column Minimalist Contact Cards (Address, Phone, Email) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Address */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm hover:border-[#002D5B]/40 transition-colors shadow-xs">
            <div className="w-10 h-10 rounded bg-[#F8F9FA] border border-gray-200 flex items-center justify-center text-[#002D5B] mb-5">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              {lang === 'en' ? 'Address' : lang === 'zh-TW' ? '辦公地址' : '办公地址'}
            </h3>
            <p className="text-sm text-gray-800 font-medium leading-relaxed">
              {l(companyInfo, 'address')}
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm hover:border-[#002D5B]/40 transition-colors shadow-xs">
            <div className="w-10 h-10 rounded bg-[#F8F9FA] border border-gray-200 flex items-center justify-center text-[#002D5B] mb-5">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              {lang === 'en' ? 'Telephone' : lang === 'zh-TW' ? '聯絡電話' : '联系电话'}
            </h3>
            <p className="text-sm font-medium text-gray-800">
              <a 
                href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                className="text-[#002D5B] hover:underline font-semibold text-base tracking-wide"
              >
                {companyInfo.phone}
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm hover:border-[#002D5B]/40 transition-colors shadow-xs">
            <div className="w-10 h-10 rounded bg-[#F8F9FA] border border-gray-200 flex items-center justify-center text-[#002D5B] mb-5">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              {lang === 'en' ? 'Email' : lang === 'zh-TW' ? '電子郵箱' : '电子邮箱'}
            </h3>
            <p className="text-sm font-medium text-gray-800">
              <a 
                href={`mailto:${companyInfo.email}`}
                className="text-[#002D5B] hover:underline font-semibold text-base"
              >
                {companyInfo.email}
              </a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
