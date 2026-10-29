import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh-TW' | 'zh-CN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  l: (obj: any, keyBase: string) => string;
}

const translations = {
  'en': {
    'nav.about': 'About Us',
    'nav.business': 'Core Business',
    'nav.investments': 'Investment Services',
    'nav.contact': 'Contact Us',
    'hero.badge': 'SFC Licensed Corporation · CE No. BTB385',
    'hero.title.1': 'Your Haven for',
    'hero.title.2': 'Wealth Succession.',
    'hero.subtitle': 'Patient Capital, Industrial Capital, and Guarding Century-Long Foundations.',
    'hero.explore': 'Core Business',
    'hero.business': 'Core Business',
    'hero.investments': 'Investment Services',
    'disclaimer.title': 'Professional Investor Notice',
    'disclaimer.desc': 'Please confirm your status as a Professional Investor to access this website.',
    'disclaimer.accept': 'Accept & Enter',
    'footer.regulated': 'Regulated Activities: Type 9 (Asset Management)',
    'footer.disclaimerTitle': 'Disclaimers',
    'footer.copyright': 'Copy © 2026 Beginner Mind Asset Management Limited. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.piOnly': 'For Professional Investors Only',
    'lang.en': 'EN',
    'lang.tw': '繁',
    'lang.cn': '简',
  },
  'zh-TW': {
    'nav.about': '關於我們',
    'nav.business': '核心業務',
    'nav.investments': '投資體系',
    'nav.contact': '聯絡我們',
    'hero.badge': '香港證監會持牌機構 · 中央編號 BTB385',
    'hero.title.1': '您的財富傳承港灣',
    'hero.title.2': '',
    'hero.subtitle': '長期資本 · 產業資本 · 守衛百年基業。',
    'hero.explore': '核心業務',
    'hero.business': '核心業務',
    'hero.investments': '投資體系',
    'disclaimer.title': '專業投資者聲明',
    'disclaimer.desc': '請確認您的專業投資者資格以繼續訪問。',
    'disclaimer.accept': '我同意並進入',
    'footer.regulated': '受規管活動：第9類（提供資產管理）',
    'footer.disclaimerTitle': '免責聲明',
    'footer.copyright': '版權所有 © 2026 初星資產管理有限公司。保留所有權利。',
    'footer.privacy': '隱私政策',
    'footer.piOnly': '僅供專業投資者',
    'lang.en': 'EN',
    'lang.tw': '繁',
    'lang.cn': '简',
  },
  'zh-CN': {
    'nav.about': '关于我们',
    'nav.business': '核心业务',
    'nav.investments': '投资体系',
    'nav.contact': '联系我们',
    'hero.badge': '香港证监会持牌机构 · 中央编号 BTB385',
    'hero.title.1': '您的财富传承港湾',
    'hero.title.2': '',
    'hero.subtitle': '长期资本 · 产业资本 · 守卫百年基业。',
    'hero.explore': '核心业务',
    'hero.business': '核心业务',
    'hero.investments': '投资体系',
    'disclaimer.title': '专业投资者声明',
    'disclaimer.desc': '请确认您的专业投资者资格以继续访问。',
    'disclaimer.accept': '我同意并进入',
    'footer.regulated': '受规管活动：第9类（提供资产管理）',
    'footer.disclaimerTitle': '免责声明',
    'footer.copyright': '版权所有 © 2026 初星资产管理有限公司。保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.piOnly': '仅供专业投资者',
    'lang.en': 'EN',
    'lang.tw': '繁',
    'lang.cn': '简',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    const val = translations[lang]?.[key as keyof typeof translations['en']];
    return val !== undefined ? val : key;
  };

  const l = (obj: any, keyBase: string) => {
    if (!obj) return '';
    if (lang === 'en') return obj[`${keyBase}En`] || '';
    if (lang === 'zh-TW') return obj[`${keyBase}ZhTW`] || '';
    if (lang === 'zh-CN') return obj[`${keyBase}ZhCN`] || '';
    return '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, l }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
