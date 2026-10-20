import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
  goToSlide: (index: number) => void;
}

export default function ServiceSlide({
  isActive,
  isAbove,
  isBelow,
  goToSlide,
}: ServiceSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-between overflow-hidden bg-white px-4 sm:px-12 lg:px-14 pt-5 sm:pt-7 pb-5 sm:pb-7 ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  };

  return (
    <div
      className={containerClass}
      id="slide-3"
      style={{ zIndex: isActive ? 20 : 10 }}
    >
      {/* Section Header with Watermark matching WorkSlide */}
      <div className="relative text-left pt-1">
        {/* Static Ghost Layer */}
        <span className="absolute left-0 -top-3 sm:-top-7 text-5xl sm:text-7xl lg:text-8xl font-black text-gray-100/90 tracking-widest select-none pointer-events-none uppercase font-display">
          CURRENTLY
        </span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'linear' }}
          className="relative text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#111113]"
        >
          /CURRENTLY
        </motion.h2>
      </div>

      {/* Status Bar & More CTA Button matching WorkSlide */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: 'linear', delay: 0.1 }}
        className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-gray-200"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Live Focus</span>
          <span className="text-gray-300">·</span>
          <span className="text-gray-500 font-mono text-[11px]">October 2026</span>
        </div>

        <Link
          href="/currently"
          className="btn-shimmer-light flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 hover:border-black text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          <span>More</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>

      {/* Main Content Area: 2-Column Grid + Full Width Current Target Box Below */}
      <motion.div
        variants={listContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col justify-between my-auto py-0.5"
      >
        {/* 2-Column Fields Grid: Cognifyr & IEEE CUSAT SB (Pushed a bit above) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 mb-5 sm:mb-7">
          {/* Card 1: Cognifyr */}
          <motion.div
            variants={itemVariants as any}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-sm hover:border-gray-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-gray-400">
                  01 / Engineering Internship
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[10px] font-semibold text-gray-700">
                  PRESENT
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                    Full Stack Engineer Intern
                  </h3>
                  <span className="text-[11px] font-mono text-gray-400 shrink-0">
                    Oct 2026 — Present
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  COGNIFYR · Kochi, Kerala · Hybrid
                </p>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Distributed BullMQ task queues, Redis workers, &amp; autonomous Telegram agent ops.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 mt-2">
              {['BullMQ', 'Redis', 'Next.js', 'Node.js', 'Hybrid'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[10px] sm:text-xs text-gray-600 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: IEEE CUSAT SB */}
          <motion.div
            variants={itemVariants as any}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-sm hover:border-gray-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-gray-400">
                  02 / Student Leadership
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[10px] font-semibold text-gray-700">
                  PRESENT
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                    Web Associate
                  </h3>
                  <span className="text-[11px] font-mono text-gray-400 shrink-0">
                    Mar 2026 — Present
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  IEEE CUSAT SB · CUSAT · Hybrid
                </p>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Managing branch web portals, registration systems, &amp; technical developer operations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 mt-2">
              {['React', 'Web Systems', 'Team Leadership', 'Event Ops'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[10px] sm:text-xs text-gray-600 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dedicated Current Target Box Below matching screenshot */}
        <motion.section
          variants={itemVariants as any}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-sm space-y-2"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-4.5 h-4.5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            <h3 className="font-sans text-sm sm:text-base font-bold text-gray-900">
              Current Target
            </h3>
          </div>

          <p className="font-sans text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-3xl">
            Seeking a <strong className="text-gray-900 font-bold">Summer 2027 AI Engineer Internship</strong>. Eager to work on autonomous agents, LLM orchestration, model integrations, or AI developer platforms.
          </p>

          <div className="font-mono text-xs sm:text-[13px] text-red-600 font-medium pt-0.5">
            * Open to remote work or relocating to Bangalore/Kochi.
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
