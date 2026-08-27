'use client';

import React from 'react';
import Navbar from '@/components/NavBar';
import {
  Brain,
  Infinity as InfinityIcon,
  TrendingUp,
  Gem,
  CheckCircle,
  ArrowRight,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';

const PLANS = [
  {
    icon: Brain,
    name: 'Sprout Bot',
    tier: 'Starter Portfolio',
    range: '$100 — $999',
    desc: 'A demo-tier entry plan for exploring the SmartVest interface and simulated portfolio tools.',
    benefits: [
      'Simulated AI Portfolio Dashboard',
      'Demo SmartVest Card Preview',
      'Sample Portfolio Monitoring',
      'Practice Client Dashboard',
      'Mock Performance Insights',
      'Community Support Forum',
    ],
    recommended: 'Anyone exploring the demo — students, designers, recruiters, or the curious.',
    cta: 'Try the Demo',
    style: {
      iconBg: 'from-gray-300 to-gray-500',
      ring: 'ring-gray-400/30',
      border: 'border-gray-700 hover:border-gray-500',
      label: 'text-gray-300',
      button: 'bg-gray-700 hover:bg-gray-600 text-white',
      cardBg: 'bg-gray-900/60',
    },
  },
  {
    icon: InfinityIcon,
    name: 'Orbit Bot',
    tier: 'Growth Portfolio (Sim)',
    range: '$1,000 — $4,999',
    desc: 'Illustrates a mid-tier "growth" experience with fictional analytics and mock automation.',
    benefits: [
      'Fictional Portfolio Intelligence',
      'Demo SmartVest Card Preview',
      'Simulated Market Analysis',
      'Mock Portfolio Monitoring',
      'Sample Reporting Widgets',
      'Priority Demo Support Queue',
    ],
    recommended: 'Design/dev walkthroughs of a "growth tier" UX pattern.',
    cta: 'Preview Tier',
    style: {
      iconBg: 'from-blue-400 to-blue-600',
      ring: 'ring-blue-400/30',
      border: 'border-blue-900/60 hover:border-blue-500',
      label: 'text-blue-300',
      button: 'bg-blue-700 hover:bg-blue-600 text-white',
      cardBg: 'bg-blue-950/40',
    },
  },
  {
    icon: TrendingUp,
    name: 'Zenith Bot',
    tier: 'Premier Portfolio (Sim)',
    range: '$5,000 — $9,999',
    desc: 'A fictional "premium" tier used to demonstrate upsell UI patterns and layout only — not a real offering.',
    benefits: [
      'Fictional Wealth Management Tools',
      'Demo SmartVest Card Preview',
      'Simulated AI Analytics Panel',
      'Sample Investment Reporting',
      'Mock Account Services',
      'Demo Concierge Placeholder',
    ],
    recommended: 'Demonstrating a "high tier" card layout for a portfolio piece.',
    cta: 'Preview Tier',
    style: {
      iconBg: 'from-amber-400 to-yellow-600',
      ring: 'ring-amber-400/30',
      border: 'border-amber-700/40 hover:border-amber-400',
      label: 'text-amber-300',
      button: 'bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 text-black',
      cardBg: 'bg-gray-900/60',
    },
  },
  {
    icon: Gem,
    name: 'Nova Bot',
    tier: 'Flagship Portfolio (Sim)',
    range: '$10,000 (fictional cap)',
    desc: 'The flagship demo tier — entirely fictional, included to show a "top of funnel" card design pattern.',
    benefits: [
      'Fictional Institutional-Grade UI',
      'Demo SmartVest Card Preview',
      'Simulated Executive Dashboard',
      'Sample Portfolio Intelligence',
      'Mock Reporting Suite',
      'Placeholder Premium Badge',
      'Demo-Only Support Line',
    ],
    recommended: 'Portfolio/case-study viewers evaluating the top-tier design.',
    cta: 'View Case Study',
    premium: true,
    style: {
      iconBg: 'from-amber-300 to-yellow-500',
      ring: 'ring-amber-300/40',
      border: 'border-amber-400/60 hover:border-amber-300',
      label: 'text-amber-200',
      button: 'bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 text-black',
      cardBg: 'bg-gradient-to-b from-amber-950/40 to-gray-900/60',
    },
  },
];

const WHY_ITEMS = [
  'Fictional AI Concepts (Demo Only)',
  'Sample Digital Infrastructure UI',
  'Simulated Portfolio Management',
  'Mock Market Analytics',
  'Transparent Demo Labeling',
  'Placeholder Account Services',
  'UI/UX Design Showcase',
  'Portfolio Project by [Your Name/Team]',
  'Reusable Component Patterns',
  'Responsive Layout Demonstration',
];

export default function InvestmentPlansPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />

      {/* Persistent demo disclosure banner */}
      <div className="relative z-20 bg-red-600/90 border-b border-red-400/50">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-center">
          <AlertTriangle className="w-4 h-4 text-white flex-shrink-0" />
          <p className="text-white text-xs sm:text-sm font-semibold">
            DEMO PROJECT — Not a real investment platform. No real money, accounts, or bots. For portfolio/learning purposes only.
          </p>
        </div>
      </div>

      {/* Diagonal watermark */}
      <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center overflow-hidden">
        <span className="text-white/5 text-[10vw] font-black rotate-[-30deg] whitespace-nowrap select-none">
          DEMO — NOT REAL
        </span>
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-8 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/50">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Exclusive Investment
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent block">
              Solutions
            </span>
          </h1>
          <p className="text-amber-300 font-medium text-sm sm:text-base mb-4">
            Sophisticated Investment Strategies. Intelligent Technology. Exceptional Client Experience.
          </p>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            SmartVest InvestAI is a fictional demo platform showcasing a carefully structured range of illustrative investment solutions. Every bot, tier, and price on this page is fictional and built for design/development demonstration only.
          </p>
        </div>

        {/* Plans grid */}
        <div className="max-w-7xl mx-auto mb-16 sm:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {PLANS.map((plan, idx) => {
              const Icon = plan.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl border-2 p-5 sm:p-6 flex flex-col ${plan.style.cardBg} ${plan.style.border}`}
                >
                  {plan.premium && (
                    <span className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-yellow-600 text-black text-[10px] sm:text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl tracking-wide">
                      DEMO TIER
                    </span>
                  )}

                  <div className="flex flex-col items-center text-center mb-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${plan.style.iconBg} ring-4 ${plan.style.ring} flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                    </div>
                    <h4 className="text-white font-bold text-sm sm:text-base tracking-wide uppercase">{plan.name}</h4>
                    <p className={`${plan.style.label} text-xs sm:text-sm mt-1`}>{plan.tier}</p>
                  </div>

                  <div className="text-center mb-4 pb-4 border-b border-gray-700/60">
                    <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wide mb-1">Fictional Range</p>
                    <p className="text-white font-bold text-base sm:text-lg">{plan.range}</p>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 text-center">{plan.desc}</p>

                  <div className="mb-2">
                    <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wide font-semibold mb-2">Key Benefits (Simulated)</p>
                    <div className="space-y-2">
                      {plan.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.style.label}`} />
                          <span className="text-gray-300 text-xs sm:text-sm leading-snug">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 mb-5 bg-black/30 rounded-lg p-3 border border-gray-700/40">
                    <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wide font-semibold mb-1">Recommended For</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-snug">{plan.recommended}</p>
                  </div>

                  <div
                    onClick={() => {
                      window.location.href = '/sign-up';
                    }}
                    className={`mt-auto w-full text-center font-semibold text-sm py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${plan.style.button}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Investors Choose Us */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Why This Demo Uses SmartVest InvestAI</h3>
            <p className="text-amber-300 text-sm sm:text-base font-medium">A Fictional Brand Built to Showcase UI/UX Patterns</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {WHY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-amber-500/20 px-4 sm:px-5 py-3 sm:py-4">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                <span className="text-gray-200 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* A Higher Standard of Investing */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">A Note on This Project</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            SmartVest InvestAI is a fictional brand created to demonstrate front-end design and UX patterns common to fintech products. No real bots, funds, accounts, or cards exist. This page does not accept real payments or investments.
          </p>
        </div>
      </div>
    </div>
  );
}