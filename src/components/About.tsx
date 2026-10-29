import React from 'react';
import { aboutUs } from '../data/content';
import { Building2, ShieldCheck, Briefcase, Landmark } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { l, lang } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-white border border-gray-200 text-[#002D5B] text-[11px] font-bold tracking-widest uppercase rounded-sm">
              {l(aboutUs, 'badge')}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#002D5B] font-light leading-tight">
              {lang === 'en' ? (
                <>
                  Premier <span className="font-bold">Asset Management</span> & <br className="hidden sm:inline" />
                  Institutional Solutions.
                </>
              ) : lang === 'zh-TW' ? (
                <>
                  領先的<span className="font-bold">資產管理</span>與<br className="hidden sm:inline" />
                  機構級專業服務。
                </>
              ) : (
                <>
                  领先的<span className="font-bold">资产管理</span>与<br className="hidden sm:inline" />
                  机构级专业服务。
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light">
              {l(aboutUs, 'description')}
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-gray-200 rounded-sm">
                <div className="flex items-center gap-2 mb-2 text-[#002D5B]">
                  <Landmark className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'SFC Regulated' : lang === 'zh-TW' ? '證監會核准' : '证监会核准'}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {lang === 'en' ? 'SFC Type 9 Asset Management License (CE No. BTB385)' : lang === 'zh-TW' ? '香港證監會第9類資產管理牌照（中央編號：BTB385）' : '香港证监会第9类资产管理牌照（中央编号：BTB385）'}
                </p>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-sm">
                <div className="flex items-center gap-2 mb-2 text-[#002D5B]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'Professional Tier' : lang === 'zh-TW' ? '專業投資者' : '专业投资者'}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {lang === 'en' ? 'Dedicated strictly to Qualified Professional Investors' : lang === 'zh-TW' ? '僅向合格機構及高淨值專業投資者提供服務' : '仅向合格机构及高净值专业投资者提供服务'}
                </p>
              </div>
            </div>
          </div>

          {/* Business Model Cards: EAM & Fund Management (HK OFC & Cayman Fund) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              {lang === 'en' ? 'Core Business Segments' : lang === 'zh-TW' ? '核心業務板塊' : '核心业务板块'}
            </h3>

            <div className="space-y-5">
              {aboutUs.services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white border-l-4 border-l-[#002D5B] border border-gray-200 p-6 sm:p-7 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#002D5B] rounded flex items-center justify-center flex-shrink-0 text-white">
                        {index === 0 ? <Briefcase className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#002D5B]">
                          {l(service, 'title')}
                        </h4>
                        <div className="inline-block mt-0.5 text-xs font-semibold text-[#C5A059] bg-[#FAF9F6] px-2 py-0.5 rounded border border-[#C5A059]/20">
                          {l(service, 'details')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                    {l(service, 'desc')}
                  </p>

                  {/* Highlights for Fund Management specifically highlighting HK OFC and Cayman Fund */}
                  {index === 1 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                      <span className="text-[11px] font-medium bg-blue-50 text-[#002D5B] px-2.5 py-1 rounded">
                        ✓ {lang === 'en' ? 'Hong Kong OFC Structure' : lang === 'zh-TW' ? '香港開放式基金 (OFC)' : '香港开放式基金 (OFC)'}
                      </span>
                      <span className="text-[11px] font-medium bg-amber-50 text-amber-900 px-2.5 py-1 rounded">
                        ✓ {lang === 'en' ? 'Cayman Islands SPC / LP' : lang === 'zh-TW' ? '開曼群島基金 (Cayman Fund)' : '开曼群岛基金 (Cayman Fund)'}
                      </span>
                    </div>
                  )}

                  {/* Highlights for EAM */}
                  {index === 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                      <span className="text-[11px] font-medium bg-blue-50 text-[#002D5B] px-2.5 py-1 rounded">
                        ✓ {lang === 'en' ? 'Global Tier-1 Private Banks' : lang === 'zh-TW' ? '全球一線頂級私人銀行獨立託管' : '全球一线顶级私人银行独立托管'}
                      </span>
                      <span className="text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
                        ✓ {lang === 'en' ? 'Discretionary Mandate (LPOA)' : lang === 'zh-TW' ? 'LPOA 全權委託敏捷調倉' : 'LPOA 全权委托敏捷调仓'}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
