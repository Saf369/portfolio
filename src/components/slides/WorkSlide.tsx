import React from 'react';
import { motion } from 'framer-motion';

interface WorkSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
  goToSlide: (index: number) => void;
}

export default function WorkSlide({ isActive, isAbove, isBelow, goToSlide }: WorkSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-start px-6 sm:px-12 lg:px-14 pt-8 pb-10 overflow-y-auto no-scrollbar ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
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
      {/* Section Header with Watermark */}
      <div className="relative text-left mb-6 sm:mb-8 pt-2">
        {/* Static Ghost Layer */}
        <span className="absolute left-0 -top-4 sm:-top-8 text-5xl sm:text-7xl lg:text-8xl font-black text-gray-100/90 tracking-widest select-none pointer-events-none uppercase">
          PORTFOLIO
        </span>
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "linear" }}
          className="relative text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#111113]"
        >
          /SELECTED WORK
        </motion.h2>
      </div>
      
      {/* Filters & View All CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "linear", delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 pb-3 border-b border-gray-200"
      >
        <div
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold p-1 bg-gray-100 rounded-full border border-gray-200"
          id="portfolio-filters"
        >
          <button className="filter-btn px-4 py-1 rounded-full bg-black text-white shadow-sm transition-all duration-300">
            All
          </button>
          <button className="filter-btn px-4 py-1 rounded-full text-gray-500 hover:text-black transition-all duration-300">
            Real Project
          </button>
          <button className="filter-btn px-4 py-1 rounded-full text-gray-500 hover:text-black transition-all duration-300">
            Exploration
          </button>
        </div>
        <button
          className="btn-shimmer-light flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 hover:border-black text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 group"
          onClick={() => goToSlide(2)}
        >
          <span className="">Explore Services</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </motion.div>
      
      {/* Portfolio 2-Card Grid matching SCREEN_2 */}
      <motion.div 
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pb-4"
      >
        {/* Project Card 1: XI Predictor */}
        <motion.article variants={cardVariants as any} className="group cursor-pointer">
          <div className="relative bg-zinc-950 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-all duration-500">
            <div className="relative w-[86%] h-[84%] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-xl p-4 border border-zinc-800 flex flex-col items-center justify-between text-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
              <div className="flex justify-between w-full text-[11px] text-zinc-400 items-center">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>XI PREDICTOR
                </span>
                <span className="px-2.5 py-0.5 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-semibold border border-blue-500/30">
                  LIVE AT SAF.NET.IN
                </span>
              </div>
              <div className="my-auto space-y-1 sm:space-y-2">
                <span className="text-[9px] uppercase tracking-wider text-blue-400 font-semibold">
                  FIFA World Cup 2026
                </span>
                <h4 className="text-white text-sm sm:text-lg font-bold max-w-[240px] leading-tight">
                  AI-Powered Predictions{' '}
                  <span className="text-blue-400 transition-colors group-hover:text-blue-300">
                    using Anthropic Claude
                  </span>
                </h4>
              </div>
              <div className="w-32 sm:w-36 h-20 sm:h-24 bg-gradient-to-t from-blue-500/20 via-indigo-600/30 to-transparent rounded-t-2xl border-t border-x border-blue-500/40 relative shadow-2xl flex items-center justify-center">
                <div className="w-14 h-1 bg-white/40 rounded-full mb-auto mt-2"></div>
              </div>
            </div>
            <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              PRODUCTION
            </span>
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                ↗
              </span>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black flex items-center justify-between transition-colors">
              <span className="">XI - AI Prediction Platform</span>
              <span className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                Next.js 15
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                Supabase & Redis
              </span>
            </div>
          </div>
        </motion.article>
        {/* Project Card 2: A2RL Drone */}
        <motion.article variants={cardVariants as any} className="group cursor-pointer">
          <div className="relative bg-zinc-900 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-all duration-500">
            <div className="relative w-[88%] h-[84%] bg-neutral-900 rounded-lg p-4 border border-neutral-700 flex flex-col justify-between overflow-hidden shadow-inner transition-transform duration-500 ease-out group-hover:scale-105">
              <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-800 pb-1.5">
                <span className="font-mono tracking-widest text-white text-xs uppercase font-medium">
                  A2RL / ROS2
                </span>
                <div className="flex gap-2 text-[10px]">
                  <span className="hover:text-white transition-colors">C++</span>
                  <span className="hover:text-white transition-colors">Gazebo</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 items-center my-auto">
                <div className="text-left space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-semibold">
                    Autonomous Drone Racing
                  </span>
                  <h5 className="text-white text-xs sm:text-sm font-light uppercase tracking-wider">
                    Planning Pipeline
                  </h5>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 sm:w-20 h-22 sm:h-26 bg-gradient-to-b from-emerald-600/40 to-neutral-900 rounded-md border border-emerald-500/30 flex items-center justify-center text-emerald-200 text-[10px] font-mono shadow-lg text-center p-2">
                    LINEAR MPC
                  </div>
                </div>
              </div>
              <p className="text-[9px] text-neutral-500 italic text-center">
                Uncertainty-aware Vision-only Planning.
              </p>
            </div>
            <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              ROBOTICS TEAM
            </span>
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                ↗
              </span>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black flex items-center justify-between transition-colors">
              <span className="">A2RL Autonomous Drone Racing</span>
              <span className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                ROS 2 & C++
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium">
                Motion Planning
              </span>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </div>
  );
}
