import React from 'react';
import { motion } from 'framer-motion';

interface HomeSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
  heroStage: number;
  toggleHeroState: () => void;
  goToSlide: (index: number) => void;
}

export default function HomeSlide({
  isActive,
  isAbove,
  isBelow,
  heroStage,
  toggleHeroState,
  goToSlide,
}: HomeSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-between px-4 sm:px-10 lg:px-12 pt-2 sm:pt-4 lg:pt-6 pb-3 sm:pb-6 lg:pb-8 overflow-y-auto no-scrollbar ${isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
    }`;

  const socialContainer = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.22,
        staggerChildren: 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const socialItem = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className={containerClass} id="slide-0" style={{ zIndex: isActive ? 20 : 10 }}>
      {/* Center Huge Display Typography - smoothly scales with viewport width & height */}
      <div
        className="w-full text-center mt-1 sm:mt-2 select-none pointer-events-none z-10 shrink-0"
        id="hero-typography-container"
      >
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={isActive ? { duration: 0.3, delay: 0, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
          className="text-[clamp(2.2rem,min(11vw,9vh),3.6rem)] sm:text-[clamp(3.6rem,min(9.5vw,11.5vh),5.5rem)] lg:text-[clamp(5.5rem,min(10vw,14vh),145px)] font-extrabold tracking-tight leading-[0.86] uppercase flex flex-col items-center justify-center font-sans"
        >
          <span className="text-stroke-outline pointer-events-auto inline-block">
            SAFWAN
          </span>
          <span className="text-[#111113] inline-block pointer-events-auto">
            MUHAMMED
          </span>
        </motion.h1>
      </div>

      {/* Hero Content Area - flex-1 dynamically fills middle area on all aspect ratios */}
      <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-between z-20 pt-1 pb-1 flex-1 min-h-0">
        {/* Center Portrait - on mobile flex-1 items-end, on desktop absolute bottom-0 */}
        <div
          className="portrait-container portrait-stage-large relative flex items-end justify-center z-20 overflow-hidden md:overflow-visible order-1 md:order-2 mx-auto md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 lg:left-[58%] xl:left-[calc(65%-90px)] md:h-[clamp(340px,min(48vh,46vw),480px)] md:max-w-[clamp(320px,36vw,500px)] flex-1 md:flex-initial w-full md:w-auto my-auto md:my-0"
          id="hero-portrait-box"
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            zIndex: 30,
            pointerEvents: 'auto',
          }}
        >
          <div className="absolute inset-x-2 bottom-0 h-28 sm:h-40 bg-gradient-to-t from-gray-200/60 to-transparent rounded-full blur-xl opacity-70 pointer-events-none"></div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={isActive ? { duration: 0.32, delay: 0.02, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
            alt="Safwan Muhammed Portrait"
            className="portrait-floating relative w-auto max-w-full h-full object-contain object-bottom"
            id="hero-portrait-img"
            src="/portrait.png?v=4"
            style={{
              objectPosition: 'center bottom',
              transformOrigin: 'center bottom 0px',
              filter: 'grayscale(100%) contrast(1.05) drop-shadow(0 0 8px rgba(255, 255, 255, 0.85))',
              maskImage: 'linear-gradient(black 0%, black 92%, transparent 100%)',
            }}
          />
        </div>

        {/* Left: Software Engineer */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={isActive ? { duration: 0.3, delay: 0.03, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
          className="w-full md:w-1/3 text-center md:text-left z-20 order-2 md:order-1 mt-1 sm:mt-2 md:mt-0 mb-1.5 sm:mb-2 md:mb-8 shrink-0"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#111113]">
            Software Engineer
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-[15px] leading-relaxed mt-1 sm:mt-1.5 max-w-[280px] sm:max-w-[320px] mx-auto md:mx-0">
            Building production-ready full-stack, AI, and autonomous systems.
          </p>
        </motion.div>

        {/* Right: Actions Block with Let's collaborate directly ABOVE LinkedIn and GitHub */}
        <div
          className="w-full md:w-1/3 flex flex-col items-center md:items-end justify-center md:justify-end gap-2.5 mb-1.5 sm:mb-2 md:mb-8 z-20 order-3 shrink-0"
        >
          {/* Let's collaborate - positioned directly ABOVE LinkedIn and GitHub */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={isActive ? { duration: 0.3, delay: 0.04, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
            className="btn-shimmer inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-[transform,background-color,box-shadow] duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl group"
            onClick={() => goToSlide(4)}
          >
            <span>Let&apos;s collaborate</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </motion.button>

          {/* Social Links (LinkedIn & GitHub) - directly BELOW Let's collaborate */}
          <div className="flex items-center gap-2">
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={isActive ? { duration: 0.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
              className="btn-shimmer-light flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95 group"
              href="https://www.linkedin.com/in/safmu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in text-blue-600 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-12"></i>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={isActive ? { duration: 0.4, delay: 0.21, ease: [0.16, 1, 0.3, 1] } : { duration: 0.15 }}
              className="btn-shimmer-light flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95 group"
              href="https://github.com/Saf369"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github text-gray-800 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12"></i>
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
