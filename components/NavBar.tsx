'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Investment Plans', href: '/investment-plans' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Security', href: '/security' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/50">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <div className="leading-none">
              <span className="text-white font-bold text-base sm:text-lg block">Smartvest</span>
              <span className="text-sky-400 text-[10px] sm:text-xs font-medium tracking-wide">InvestAI</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              
             <a 
               key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-sky-400 text-sm font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link href="/sign-in">
              <button className="text-white border border-sky-500/30 hover:bg-sky-500/10 font-semibold px-5 py-2 rounded-lg transition-colors text-sm">
                Login
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-black font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/40 text-sm">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-sky-500/20 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            
             <a key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-sky-400 hover:bg-sky-500/5 text-sm font-medium py-3 px-3 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-sky-500/10">
            <Link href="/sign-in" onClick={() => setIsOpen(false)}>
              <button className="w-full text-white border border-sky-500/30 hover:bg-sky-500/10 font-semibold px-5 py-3 rounded-lg transition-colors text-sm">
                Login
              </button>
            </Link>
            <Link href="/sign-up" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-black font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/40 text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}