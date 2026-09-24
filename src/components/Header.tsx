import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentSlide: number;
  goToSlide: (index: number) => void;
  goToHomeState: (stage: number) => void;
}

export default function Header({ currentSlide, goToSlide, goToHomeState }: HeaderProps) {
  const getTabClass = (index: number) => {
    return currentSlide === index
      ? "nav-tab-btn relative px-3 py-1 font-semibold transition-colors duration-300 text-black"
      : "nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black";
  };

  const getIndicatorClass = (index: number) => {
    return currentSlide === index
      ? "nav-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-300 bg-black"
      : "nav-indicator absolute bottom-0 left-2 right-2 h-[2px] bg-transparent rounded-full transition-all duration-300";
  };

  const staggerBase = 0.65;
  const staggerStep = 0.06;

  return (
    <header className="relative z-40 w-full flex items-center justify-between px-6 sm:px-10 py-4 sm:py-5 border-b backdrop-blur-md transition-colors duration-500 rounded-t-[32px] bg-white/90 border-zinc-200/80" id="static-header">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: staggerBase, ease: "linear" }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white/80 shadow-sm text-xs font-semibold text-gray-800"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="">Available for New Project</span>
      </motion.div>
      <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: staggerBase + staggerStep * 1, ease: "linear" }}
          className={getTabClass(0)} onClick={() => goToHomeState(0)}>
          <span className="">Home</span>
          <span className={getIndicatorClass(0)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: staggerBase + staggerStep * 2, ease: "linear" }}
          className={getTabClass(1)} onClick={() => goToSlide(1)}>
          <span className="">Work <sup className="text-[10px] text-gray-400 font-mono">[40]</sup></span>
          <span className={getIndicatorClass(1)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: staggerBase + staggerStep * 3, ease: "linear" }}
          className={getTabClass(2)} onClick={() => goToSlide(2)}>
          <span className="">Service <sup className="text-[10px] text-gray-400 font-mono">[4]</sup></span>
          <span className={getIndicatorClass(2)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: staggerBase + staggerStep * 4, ease: "linear" }}
          className={getTabClass(3)} onClick={() => goToSlide(3)}>
          <span className="">Experience <sup className="text-[10px] text-gray-400 font-mono">[9y+]</sup></span>
          <span className={getIndicatorClass(3)}></span>
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: staggerBase + staggerStep * 5, ease: "linear" }}
          className={getTabClass(4)} onClick={() => goToSlide(4)}>
          <span className="">Contact</span>
          <span className={getIndicatorClass(4)}></span>
        </motion.button>
      </nav>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: staggerBase + staggerStep * 6, ease: "linear" }}
        className="flex items-center gap-3">
        <button className="btn-shimmer flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm group" onClick={() => goToSlide(4)}>
          <span className="">Let's Talk</span>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </button>
      </motion.div>
    </header>
  );
}
