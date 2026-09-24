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
  const containerClass = `slide-panel flex flex-col justify-between px-6 sm:px-12 pt-4 sm:pt-6 pb-8 overflow-hidden ${isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
    }`;

  const heroStyle = {
    opacity: heroStage === 0 ? '0.9' : '1',
    transform: heroStage === 0 ? 'scale(1)' : 'scale(1.02)',
  };

  const portraitClass = `portrait-container relative w-full max-w-md flex justify-center -mb-2 z-30 group cursor-pointer overflow-hidden transition-all duration-700 ${heroStage === 0 ? 'portrait-stage-large mt-0' : 'portrait-stage-compact mt-4 sm:mt-6 md:mt-0'
    }`;

  const socialContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.95 }
    }
  };

  const socialItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.45, ease: "linear" } }
  };

  return (
    <div className={containerClass} id="slide-0" style={{ zIndex: isActive ? 20 : 10 }}>
      {/* Center Huge Display Typography */}
      <div
        className="w-full text-center mt-2 sm:mt-4 select-none pointer-events-none z-10 transition-transform duration-700 ease-out"
        id="hero-typography-container"
        style={heroStyle}
      >
        <motion.h1
          initial={{ opacity: 0, fontWeight: 200 }}
          animate={{ opacity: [0, 0.08, 0.08, 1], fontWeight: [200, 200, 200, 800] }}
          transition={{ duration: 0.7, times: [0, 0.1, 0.42, 1], ease: [0.16, 1, 0.3, 1] }}
          className="text-[12.5vw] sm:text-[10vw] lg:text-[145px] tracking-tight leading-[0.85] uppercase flex flex-col items-center justify-center font-sans">
          <span className="text-stroke-outline pointer-events-auto transition-transform hover:scale-[1.01] inline-block duration-300">
            SAFWAN
          </span>
          <span className="text-[#111113] inline-block transition-transform hover:scale-[1.01] duration-300 pointer-events-auto">
            MUHAMMED
          </span>
        </motion.h1>
      </div>

      {/* Hero Bottom Content Grid with Dynamic Cutout Portrait Center */}
      <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-between mt-auto z-20 pt-2 pb-2">
        {/* Left: UI/UX Designer & Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.8, ease: "linear" }}
          className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-10 z-20 transition-opacity duration-500 order-2 md:order-1 mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111113]">
            Software Engineer
          </h2>
          <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mt-2 max-w-[280px] mx-auto md:mx-0">
            Building production-ready full-stack, AI, and autonomous systems.
          </p>
          <button
            className="btn-shimmer mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl group"
            onClick={() => goToSlide(4)}
          >
            <span className="">Let's collaborate</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </button>
        </motion.div>

        {/* Center Portrait with Hero Zoom / Minimizing Stage Interaction */}
        <div
          className={`${portraitClass} order-1 md:order-2 mx-auto md:absolute md:bottom-0 md:left-[calc(65%-90px)] md:-translate-x-1/2 md:h-[580px] md:max-w-[620px]`}
          id="hero-portrait-box"
          onClick={toggleHeroState}
          title="Click to toggle hero showcase"
          style={{
            overflow: 'visible',
            alignItems: 'flex-end',
            justifyContent: 'center',
            zIndex: 30,
            pointerEvents: 'auto',
          }}
        >
          <div className="absolute inset-x-4 bottom-0 h-48 bg-gradient-to-t from-gray-200/70 to-transparent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 1.1, ease: "linear" }}
            alt="Safwan Muhammed Portrait"
            className="portrait-floating relative w-auto max-w-full object-cover object-top h-full md:h-[510px] lg:h-[540px] contrast-125 brightness-95 filter grayscale transition-all duration-700 ease-out"
            id="hero-portrait-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RxsfmLsUMMwjD5Kpo6uWksM3f_J1R5hkqftkTdOE5pViRsHXLYBzg4o6UjxwE7pROR5JCfdDDPXdzaPhC_OVyYpetPBkQ0u2diTUgDNuZLbBlj0sypAj9hXKmtER_TQvziXOQuKLCGRZKq_87nfmMMXUxlSJUltGYRZ3VXK6tfqOLP_Evzky-kme-wiyQAHWxmfaPdHVtyEijU1zCDOfS_e_Z7FmxXPDEXCPgyugMNvcxb3mFO4EKuKFaNt405x4eQ"
            style={{
              objectPosition: 'center top',
              transformOrigin: 'center bottom 0px',
              filter: 'grayscale(100%) contrast(1.1)',
              maskImage: 'linear-gradient(black 0%, black 85%, transparent 100%)',
            }}
          />
        </div>

        {/* Right: Social Links */}
        <motion.div
          variants={socialContainer as any}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/3 flex flex-row md:flex-col items-center md:items-end justify-center md:justify-end gap-2.5 mb-6 md:mb-10 z-20 flex-wrap order-3">
          <motion.a
            variants={socialItem as any}
            className="btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            href="https://www.linkedin.com/in/safmu"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"></i>
            <span className="">LinkedIn</span>
          </motion.a>
          <motion.a
            variants={socialItem as any}
            className="btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            href="https://github.com/Saf369"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github text-gray-800 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"></i>
            <span className="">GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
