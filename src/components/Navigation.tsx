import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.views'), href: "#views" },
    { label: t('nav.strategies'), href: "#strategies" },
    { label: t('nav.expertise'), href: "#team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-white border-b border-gray-200 shadow-sm h-16 sm:h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <svg viewBox="-5 0 110 100" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 text-[#0e63ad]" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 90 L 14 54 A 25.45 25.45 0 0 1 50 18 A 25.45 25.45 0 0 1 86 54 Z" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 50 18 L 86 54" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="32" cy="36" r="10" fill="currentColor"/>
            </svg>
            <div className="font-sans text-xl font-medium tracking-tight text-[#1A1A1A] leading-tight">
              Beginner Mind<br />
              <span className="text-sm font-normal block text-gray-700">
                Asset Management (HK) Ltd
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#002D5B] transition-colors py-2 uppercase tracking-widest border-b-2 border-transparent hover:border-[#002D5B]"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
              <Globe className="w-4 h-4 text-gray-400" />
              <button onClick={() => setLang('en')} className={`text-xs font-bold transition-colors ${lang === 'en' ? 'text-[#002D5B]' : 'text-gray-400 hover:text-gray-600'}`}>EN</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang('zh-TW')} className={`text-xs font-bold transition-colors ${lang === 'zh-TW' ? 'text-[#002D5B]' : 'text-gray-400 hover:text-gray-600'}`}>繁</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang('zh-CN')} className={`text-xs font-bold transition-colors ${lang === 'zh-CN' ? 'text-[#002D5B]' : 'text-gray-400 hover:text-gray-600'}`}>简</button>
            </div>
          </div>

          {/* Mobile Menu Button & Lang Switcher */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <button onClick={() => setLang('en')} className={`text-xs font-bold ${lang === 'en' ? 'text-[#002D5B]' : 'text-gray-400'}`}>EN</button>
              <button onClick={() => setLang('zh-TW')} className={`text-xs font-bold ${lang === 'zh-TW' ? 'text-[#002D5B]' : 'text-gray-400'}`}>繁</button>
              <button onClick={() => setLang('zh-CN')} className={`text-xs font-bold ${lang === 'zh-CN' ? 'text-[#002D5B]' : 'text-gray-400'}`}>简</button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#002D5B]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 border-t border-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#002D5B] font-medium text-sm tracking-widest uppercase border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
