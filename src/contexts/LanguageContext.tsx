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
    'nav.views': 'Our Views',
    'nav.strategies': 'Investment Strategies',
    'nav.expertise': 'Our Expertise',
    'nav.insights': 'Insights',
    'nav.portal': 'Professional Portal',
    'nav.contact': 'Contact Us',
    'hero.badge': 'SFC Licensed Corporation (Type 9)',
    'hero.title.1': 'Leading Multi-Strategy',
    'hero.title.2': 'Manager.',
    'hero.subtitle': '"Finding certainty in uncertainty."',
    'hero.explore': 'Explore Our Firm',
    'hero.strategies': 'Our Strategies',
    'disclaimer.title': 'Professional Investor Notice',
    'disclaimer.desc': 'Please confirm your eligibility to proceed.',
    'disclaimer.accept': 'Accept & Enter',
    'footer.regulated': 'Regulated Activities: Type 9 (Asset Management)',
    'footer.privacy': 'Privacy Policy',
    'footer.piOnly': 'For Professional Investors Only',
    'lang.en': 'EN',
    'lang.tw': '繁',
    'lang.cn': '简',
  },
  'zh-TW': {
    'nav.about': '關於我們',
    'nav.views': '我們的觀點',
    'nav.strategies': '投資策略',
    'nav.expertise': '我們的專長',
    'nav.insights': '市場觀點',
    'nav.portal': '專業投資者入口',
    'nav.contact': '聯絡我們',
    'hero.badge': '香港證監會9號牌照機構',
    'hero.title.1': '領先的多策略',
    'hero.title.2': '資產管理。',
    'hero.subtitle': '「在不確定中尋找確定性。」',
    'hero.explore': '了解我們',
    'hero.strategies': '我們的策略',
    'disclaimer.title': '專業投資者聲明',
    'disclaimer.desc': '請確認您的資格。',
    'disclaimer.accept': '我同意並進入',
    'footer.regulated': '受規管活動：第9類（提供資產管理）',
    'footer.privacy': '隱私政策',
    'footer.piOnly': '僅供專業投資者',
    'lang.en': 'EN',
    'lang.tw': '繁',
    'lang.cn': '简',
  },
  'zh-CN': {
    'nav.about': '关于我们',
    'nav.views': '我们的观点',
    'nav.strategies': '投资策略',
    'nav.expertise': '我们的专长',
    'nav.insights': '市场观点',
    'nav.portal': '专业投资者入口',
    'nav.contact': '联系我们',
    'hero.badge': '香港证监会9号牌照机构',
    'hero.title.1': '领先的多策略',
    'hero.title.2': '资产管理。',
    'hero.subtitle': '“在不确定中寻找确定性。”',
    'hero.explore': '了解我们',
    'hero.strategies': '我们的策略',
    'disclaimer.title': '专业投资者声明',
    'disclaimer.desc': '请确认您的资格。',
    'disclaimer.accept': '我同意并进入',
    'footer.regulated': '受规管活动：第9类（提供资产管理）',
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
    return translations[lang][key as keyof typeof translations['en']] || key;
  };

  const l = (obj: any, keyBase: string) => {
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
