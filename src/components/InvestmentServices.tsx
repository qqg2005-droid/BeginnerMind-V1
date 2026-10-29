import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  PieChart, 
  Network, 
  Globe 
} from 'lucide-react';

export function InvestmentServices() {
  const { l, lang } = useLanguage();

  const systemItems = [
    {
      id: 'multi-asset',
      num: '01',
      icon: <PieChart className="w-5 h-5 text-white" />,
      tagEn: 'PORTFOLIO DIVERSIFICATION',
      tagZhTW: '資產多維配置',
      tagZhCN: '资产多维配置',
      titleEn: 'Multi-Asset Class Allocation',
      titleZhTW: '多資產類別配置',
      titleZhCN: '多资产类别配置',
      descEn: 'Fixed income defense (IG & HY bonds), high-dividend secondary equities across global time zones, and strategic primary co-investments.',
      descZhTW: '以固定收益（投資級與高收益債券）壓艙防守，跨時區配置優質藍籌與高股息核心資產，搭配一級市場戰略直投。',
      descZhCN: '以固定收益（投资级与高收益债券）压舱防守，跨时区配置优质蓝筹与高股息核心资产，搭配一级市场战略直投。'
    },
    {
      id: 'top-funds',
      num: '02',
      icon: <Network className="w-5 h-5 text-white" />,
      tagEn: 'GLOBAL SYNDICATE',
      tagZhTW: '四地聯動網絡',
      tagZhCN: '四地联动网络',
      titleEn: 'Top Hedge Funds & Regional Linkage',
      titleZhTW: '頂級基金直連與四地聯動',
      titleZhCN: '顶级基金直连与四地联动',
      descEn: 'Bypassing intermediaries to secure rare allocations from premier hedge fund managers, linking Shenzhen, Hong Kong, Silicon Valley, and Wall Street.',
      descZhTW: '穿透中介，直接獲取全球頂尖對沖基金稀缺策略額度，依託深港矽紐一二級聯動智庫，打造全天候資訊雷達。',
      descZhCN: '穿透中介，直接获取全球顶尖对冲基金稀缺策略额度，依托深港硅纽一二级联动智库，打造全天候资讯雷达。'
    },
    {
      id: 'global-access',
      num: '03',
      icon: <Globe className="w-5 h-5 text-white" />,
      tagEn: 'INTERNATIONAL CLEARING',
      tagZhTW: '香港離岸樞紐',
      tagZhCN: '香港离岸枢纽',
      titleEn: 'Global Direct Access & Multi-Currency',
      titleZhTW: '全球市場直達與多幣種清算',
      titleZhCN: '全球市场直达与多币种清算',
      descEn: 'Grounded in Hong Kong, providing frictionless multi-currency settlement, cross-border custody routing, and centralized liquidity management.',
      descZhTW: '立足香港國際金融中心，無縫覆蓋全球核心離岸市場，實現多幣種無障礙清算與跨司法管轄區高效流動性集中調配。',
      descZhCN: '立足香港国际金融中心，无缝覆盖全球核心离岸市场，实现多币种无障碍清算与跨司法管辖区高效流动性集中调配。'
    }
  ];

  return (
    <section id="investments" className="py-24 bg-[#F8F9FA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#002D5B] font-light tracking-tight mb-4">
            {lang === 'en' ? (
              <>
                Investment <span className="font-bold">Architecture</span>
              </>
            ) : lang === 'zh-TW' ? (
              <>
                投資管理體系與<span className="font-bold">核心支柱</span>
              </>
            ) : (
              <>
                投资管理体系与<span className="font-bold">核心支柱</span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            {lang === 'en'
              ? 'Synthesizing disciplined multi-asset execution with premier hedge fund access and global multi-currency clearing.'
              : lang === 'zh-TW'
              ? '將嚴謹的多資產配置執行體系與全球頂級對沖基金網絡深度融匯，立足香港離岸樞紐，守衛家族資產真實複利。'
              : '将严谨的多资产配置执行体系与全球顶级对冲基金网络深度融汇，立足香港离岸枢纽，守卫家族资产真实复利。'}
          </p>
        </div>

        {/* 3 Pillars Clean Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {systemItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col justify-between hover:border-[#002D5B] transition-all hover:shadow-md group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[#002D5B] rounded flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-300">
                    {item.num}
                  </span>
                </div>

                <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
                  {l(item, 'tag')}
                </div>

                <h3 className="text-lg font-bold text-[#002D5B] mb-3">
                  {l(item, 'title')}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {l(item, 'desc')}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
