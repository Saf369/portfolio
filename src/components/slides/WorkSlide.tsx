import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WorkSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
  goToSlide: (index: number) => void;
}

export default function WorkSlide({ isActive, isAbove, isBelow, goToSlide }: WorkSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-between px-4 sm:px-12 lg:px-14 pt-4 sm:pt-6 pb-5 sm:pb-7 overflow-y-auto no-scrollbar ${isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
    }`;

  const gridContainer: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.45, ease: "linear" } }
  };

  return (
    <div className={containerClass} id="slide-1" style={{ zIndex: isActive ? 20 : 10 }}>
      {/* Top Header & More Bar */}
      <div>
        {/* Section Header with Watermark */}
        <div className="relative text-left pt-1">
          {/* Static Ghost Layer */}
          <span className="absolute left-0 -top-3 sm:-top-7 text-5xl sm:text-7xl lg:text-8xl font-black text-gray-100/90 tracking-widest select-none pointer-events-none uppercase font-display">
            PORTFOLIO
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={isActive ? { duration: 0.3, delay: 0, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
            className="relative text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#111113]"
          >
            /SELECTED WORK
          </motion.h2>
        </div>

        {/* More CTA Button matching Currently */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={isActive ? { duration: 0.28, delay: 0.02, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
          className="flex items-center justify-end pb-2 sm:pb-2.5 border-b border-gray-200 mb-3 sm:mb-5"
        >
          <Link
            href="/works"
            className="btn-shimmer-light flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 hover:border-black text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span>More</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Portfolio 2-Card Grid occupying desktop space fully */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-8 my-auto w-full pb-1"
      >
        {/* Project Card 1: Cognifyr AI Telegram Bot */}
        <Link href="/works" className="group cursor-pointer flex flex-col focus:outline-none">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={isActive ? { duration: 0.3, delay: 0.03, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
            className="flex flex-col h-full"
          >
            <div className="relative bg-[#0b101b] rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] lg:aspect-[1.28/1] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-[box-shadow,border-color] duration-300">
              <div className="relative w-[88%] h-[86%] bg-gradient-to-b from-[#0f172a] via-[#090d16] to-black rounded-xl p-4 sm:p-5 border border-sky-900/40 flex flex-col items-center justify-between text-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
                <div className="flex justify-between w-full text-[11px] text-zinc-400 items-center">
                  <span className="font-bold text-white flex items-center gap-1.5 font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#229ED9] animate-pulse"></span>AI TELEGRAM BOT
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#229ED9]/20 text-[#229ED9] rounded-full text-[10px] font-semibold border border-[#229ED9]/30">
                    TELEGRAM & WORKFLOW OPS
                  </span>
                </div>
                <div className="my-auto space-y-1.5 sm:space-y-2 w-full">
                  <span className="text-[9px] uppercase tracking-wider text-sky-400 font-semibold">
                    Autonomous Agent & Queue
                  </span>
                  <h4 className="text-white text-sm sm:text-lg font-bold max-w-[260px] mx-auto leading-tight">
                    AI Telegram Agent{' '}
                    <span className="text-[#229ED9] transition-colors group-hover:text-sky-300">
                      & Distributed Worker
                    </span>
                  </h4>
                  {/* Micro simulated telegram message */}
                  <div className="bg-slate-800/60 backdrop-blur-md rounded-lg py-1.5 px-3 border border-sky-500/20 max-w-[240px] mx-auto text-left flex items-center gap-2 shadow-sm">
                    <span className="text-xs">⚡</span>
                    <div className="text-[10px] text-slate-300 font-mono truncate">
                      /exec workflow: <span className="text-emerald-400">BullMQ + Redis</span>
                    </div>
                  </div>
                </div>
                <div className="w-32 sm:w-36 h-11 bg-gradient-to-t from-[#229ED9]/25 via-blue-600/20 to-transparent rounded-t-xl border-t border-x border-[#229ED9]/40 relative shadow-2xl flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/40 rounded-full mb-auto mt-2"></div>
                </div>
              </div>
              <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#229ED9]"></span>
                FULLSTACK AI
              </span>
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </div>
            <div className="mt-2.5 sm:mt-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black flex items-center justify-between transition-colors">
                <span>AI Telegram Bot & Workflow Ops</span>
                <span className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  ↗
                </span>
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-600 font-sans mt-1 line-clamp-2 leading-relaxed">
                Autonomous Telegram agent with BullMQ &amp; Redis distributed task queues and a Next.js ops dashboard.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                  Node.js & Next.js
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                  Redis, BullMQ & Prisma
                </span>
              </div>
            </div>
          </motion.article>
        </Link>
        {/* Project Card 2: Custom Syllabus / widget_app */}
        <Link href="/works" className="group cursor-pointer flex flex-col focus:outline-none">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={isActive ? { duration: 0.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
            className="flex flex-col h-full"
          >
            <div className="relative bg-[#0d0e15] rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] lg:aspect-[1.28/1] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-[box-shadow,border-color] duration-300">
              <div className="relative w-[90%] h-[86%] bg-gradient-to-br from-indigo-950/40 via-neutral-900 to-black rounded-xl p-4 sm:p-5 border border-indigo-900/40 flex items-center justify-between overflow-hidden shadow-inner transition-transform duration-500 ease-out group-hover:scale-105">
                <div className="flex flex-col justify-between h-full z-10 text-left max-w-[58%]">
                  <div className="flex items-center gap-1.5 text-[11px] text-indigo-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    CUSTOM SYLLABUS
                  </div>
                  <div className="my-auto space-y-1 sm:space-y-1.5">
                    <span className="text-[9px] uppercase tracking-wider text-indigo-300 font-semibold">
                      Gemini Pro AI
                    </span>
                    <h4 className="text-white text-xs sm:text-base lg:text-lg font-bold leading-tight">
                      Academic Planner & Timetable Analyzer
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium">
                    <span className="text-indigo-400">⚡</span> Flutter + FastAPI
                  </div>
                </div>
                {/* Mobile Screen Mockup */}
                <div className="relative w-[38%] h-[115%] -bottom-2 right-0 flex items-end justify-center transform rotate-[-4deg] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/widget_app_home.png"
                    alt="Custom Syllabus Mobile App"
                    className="w-full h-full object-contain rounded-xl shadow-2xl border border-indigo-500/30"
                  />
                </div>
              </div>
              <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                MOBILE & AI
              </span>
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  ↗
                </span>
              </div>
            </div>
            <div className="mt-2.5 sm:mt-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black flex items-center justify-between transition-colors">
                <span>Custom Syllabus - AI Timetable Analyzer</span>
                <span className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  ↗
                </span>
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-600 font-sans mt-1 line-clamp-2 leading-relaxed">
                AI academic planner that parses syllabus PDFs and organizes class timetables using Gemini Pro.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                  Flutter (Dart)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                  FastAPI & Gemini AI
                </span>
              </div>
            </div>
          </motion.article>
        </Link>
      </div>
    </div>
  );
}
