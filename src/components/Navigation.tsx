import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.business'), href: "#business" },
    { label: t('nav.investments'), href: "#investments" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm h-16 sm:h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          
          <a href="#" className="flex items-center gap-3 group">
            <svg viewBox="-5 0 110 100" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 text-[#002D5B] transition-transform group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 90 L 14 54 A 25.45 25.45 0 0 1 50 18 A 25.45 25.45 0 0 1 86 54 Z" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 50 18 L 86 54" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="32" cy="36" r="10" fill="currentColor"/>
            </svg>
            <div className="font-sans text-lg sm:text-xl font-medium tracking-tight text-[#1A1A1A] leading-tight">
              Beginner Mind<br />
              <span className="text-xs sm:text-sm font-normal block text-gray-500">
                Asset Management (HK) Ltd
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-gray-600 hover:text-[#002D5B] transition-colors py-2 uppercase tracking-widest border-b-2 border-transparent hover:border-[#002D5B]"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-gray-200">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <button 
                onClick={() => setLang('en')} 
                className={`text-xs font-bold transition-colors px-1 py-0.5 rounded ${lang === 'en' ? 'text-[#002D5B] bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => setLang('zh-TW')} 
                className={`text-xs font-bold transition-colors px-1 py-0.5 rounded ${lang === 'zh-TW' ? 'text-[#002D5B] bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
              >
                繁
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => setLang('zh-CN')} 
                className={`text-xs font-bold transition-colors px-1 py-0.5 rounded ${lang === 'zh-CN' ? 'text-[#002D5B] bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
              >
                简
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Lang Switcher */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-1 bg-gray-50 px-2 py-1 rounded border border-gray-200">
              <button onClick={() => setLang('en')} className={`text-xs font-bold ${lang === 'en' ? 'text-[#002D5B]' : 'text-gray-400'}`}>EN</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang('zh-TW')} className={`text-xs font-bold ${lang === 'zh-TW' ? 'text-[#002D5B]' : 'text-gray-400'}`}>繁</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang('zh-CN')} className={`text-xs font-bold ${lang === 'zh-CN' ? 'text-[#002D5B]' : 'text-gray-400'}`}>简</button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#002D5B] rounded hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-6 flex flex-col space-y-3 border-t border-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#002D5B] font-semibold text-sm tracking-wider uppercase border-b border-gray-100 pb-2.5 hover:text-blue-700"
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
