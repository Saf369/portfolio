import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentSlide: number;
  goToSlide: (index: number) => void;
  goToHomeState: (stage: number) => void;
}

export default function Header({ currentSlide, goToSlide, goToHomeState }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getTabClass = (index: number) => {
    return currentSlide === index
      ? "nav-tab-btn relative px-3 py-1 font-semibold transition-colors duration-300 text-black"
      : "nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black";
  };

  const getIndicatorClass = (index: number) => {
    return currentSlide === index
      ? "nav-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-[background-color,opacity] duration-200 bg-black"
      : "nav-indicator absolute bottom-0 left-2 right-2 h-[2px] bg-transparent rounded-full transition-[background-color,opacity] duration-200";
  };

  const staggerBase = 0.05;
  const staggerStep = 0.04;

  return (
    <header className="relative z-40 w-full flex items-center justify-between px-4 sm:px-10 py-3.5 sm:py-5 border-b backdrop-blur-md transition-colors duration-500 rounded-none sm:rounded-t-[32px] bg-white/90 border-zinc-200/80" id="static-header">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: staggerBase, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white/80 shadow-sm text-xs font-semibold text-gray-800"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="hidden xs:inline sm:inline">Available for New Project</span>
        <span className="xs:hidden sm:hidden">Available</span>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
        <motion.button
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: staggerBase + staggerStep * 1, ease: [0.16, 1, 0.3, 1] }}
          className={getTabClass(0)} onClick={() => goToHomeState(0)}>
          <span className="">Home</span>
          <span className={getIndicatorClass(0)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: staggerBase + staggerStep * 2, ease: [0.16, 1, 0.3, 1] }}
          className={getTabClass(1)} onClick={() => goToSlide(1)}>
          <span className="">Work <sup className="text-[10px] text-gray-400 font-mono"></sup></span>
          <span className={getIndicatorClass(1)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: staggerBase + staggerStep * 3, ease: [0.16, 1, 0.3, 1] }}
          className={getTabClass(2)} onClick={() => goToSlide(2)}>
          <span className="">Experience <sup className="text-[10px] text-gray-400 font-mono"></sup></span>
          <span className={getIndicatorClass(2)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: staggerBase + staggerStep * 4, ease: [0.16, 1, 0.3, 1] }}
          className={getTabClass(3)} onClick={() => goToSlide(3)}>
          <span className="">Currently <sup className="text-[10px] text-gray-400 font-mono"></sup></span>
          <span className={getIndicatorClass(3)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: staggerBase + staggerStep * 5, ease: [0.16, 1, 0.3, 1] }}
          className={getTabClass(4)} onClick={() => goToSlide(4)}>
          <span className="">Contact</span>
          <span className={getIndicatorClass(4)}></span>
        </motion.button>
      </nav>

      {/* Right Actions: Let's Talk + Hamburger on Phone */}
      <motion.div
        initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: staggerBase + staggerStep * 6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 sm:gap-3">
        <button className="btn-shimmer flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm group" onClick={() => goToSlide(4)}>
          <span className="">Let's Talk</span>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </button>

        {/* Hamburger Toggle Button for Phone */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200/80 transition-all active:scale-90"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown with Backdrop Blur */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-3 right-3 mt-2 p-3 bg-white/98 backdrop-blur-2xl border border-zinc-200/90 rounded-2xl shadow-2xl z-50 flex flex-col gap-1"
          >
            <button
              onClick={() => {
                goToHomeState(0);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${currentSlide === 0 ? 'bg-black text-white' : 'text-zinc-700 hover:bg-zinc-100'
                }`}
            >
              <span>Home</span>
              <span className={`text-[11px] font-mono ${currentSlide === 0 ? 'text-zinc-300' : 'text-zinc-400'}`}>01</span>
            </button>

            <button
              onClick={() => {
                goToSlide(1);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${currentSlide === 1 ? 'bg-black text-white' : 'text-zinc-700 hover:bg-zinc-100'
                }`}
            >
              <span>Work</span>
              <span className={`text-[11px] font-mono ${currentSlide === 1 ? 'text-zinc-300' : 'text-zinc-400'}`}>02</span>
            </button>

            <button
              onClick={() => {
                goToSlide(2);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${currentSlide === 2 ? 'bg-black text-white' : 'text-zinc-700 hover:bg-zinc-100'
                }`}
            >
              <span>Experience</span>
              <span className={`text-[11px] font-mono ${currentSlide === 2 ? 'text-zinc-300' : 'text-zinc-400'}`}>03</span>
            </button>

            <button
              onClick={() => {
                goToSlide(3);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${currentSlide === 3 ? 'bg-black text-white' : 'text-zinc-700 hover:bg-zinc-100'
                }`}
            >
              <span>Currently</span>
              <span className={`text-[11px] font-mono ${currentSlide === 3 ? 'text-zinc-300' : 'text-zinc-400'}`}>04</span>
            </button>

            <button
              onClick={() => {
                goToSlide(4);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${currentSlide === 4 ? 'bg-black text-white' : 'text-zinc-700 hover:bg-zinc-100'
                }`}
            >
              <span>Contact</span>
              <span className={`text-[11px] font-mono ${currentSlide === 4 ? 'text-zinc-300' : 'text-zinc-400'}`}>05</span>
            </button>

            <div className="pt-2 mt-1 border-t border-zinc-100 flex items-center gap-2">
              <Link
                href="/works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center py-2 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold text-zinc-900 transition-colors"
              >
                All Works &amp; Archive ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
