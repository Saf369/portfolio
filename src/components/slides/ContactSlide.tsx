import React from 'react';
import { motion } from 'framer-motion';

interface ContactSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
}

export default function ContactSlide({ isActive, isAbove, isBelow }: ContactSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 py-10 overflow-y-auto no-scrollbar relative ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  const footerContainer: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };

  const footerItem: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.45, ease: "linear" } }
  };

  return (
    <div className={containerClass} id="slide-4" style={{ zIndex: isActive ? 20 : 10 }}>
      {/* Glowing status badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "linear" }}
        className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gray-300 bg-white shadow-sm text-xs sm:text-sm font-medium text-gray-700 mb-6 transition-transform hover:scale-105 cursor-default hover:shadow-glow-green"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
        </span>
        Available for New Project
      </motion.div>
      
      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "linear", delay: 0.1 }}
        className="relative z-10 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111113] uppercase max-w-2xl leading-tight"
      >
        HAVE A PROJECT IN MIND?
      </motion.h2>
      
      {/* Subtext and Interactive Scope Chips */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "linear", delay: 0.2 }} // 100ms later
        className="flex flex-col items-center"
      >
        {/* Description */}
        <p className="relative z-10 text-gray-500 text-xs sm:text-base max-w-lg mt-3 sm:mt-4 leading-relaxed font-normal">
          Together, we can create something clear and impactful. Let's collaborate to bring our ideas to
          life in a way that resonates with everyone.
        </p>
        {/* Interactive Scope Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5 max-w-lg">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black text-white cursor-pointer hover:opacity-90">
            UI/UX Design
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer">
            Design Systems
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer">
            Brand Identity
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer">
            Web Development
          </span>
        </div>
      </motion.div>

      {/* Email Action CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "linear", delay: 0.3 }}
        className="relative z-10 mt-6 sm:mt-8 flex items-center justify-center"
      >
        <a
          className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#111113] hover:bg-black text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
          href="mailto:safmu2090@gmail.com"
        >
          <span className="">Contact Me</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </motion.div>

      {/* Bottom Profile / Identity Row */}
      <motion.div 
        variants={footerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 mt-10 pt-6 border-t border-gray-100 w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
      >
        <motion.div variants={footerItem as any} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111113] text-white text-xs sm:text-sm font-medium shadow-sm cursor-default">
          <img
            alt="Safwan"
            className="w-5 h-5 rounded-full object-cover grayscale ring-1 ring-white/30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz9A13h3Snn17VTpJrWP4aTMkUjtf8MYkkb6mGVViEOsSgR3p7UY3R7pZqPaVZdcl6VgA2R5r5HGuQeQDemFaMkV45EcH8vjmoXodWcyLDU6xMUB3cGlknOlFU_Nu7xIgys29A8mgQ-Cu8nldImbKk5bszdDWSXfJZtv1Y5CJfsyD7qb8YejXTl3amHQfx_bPIMoZpgXjm9tiOgN__Wq1Y--VV59Bm2TOHAp_8z9qvyh1CYMS3DohVUfyhe5dE9PXjRA"
          />
          <span className="">Safwan Muhammed</span>
        </motion.div>
        <motion.a
          variants={footerItem as any}
          className="btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300"
          href="https://www.linkedin.com/in/safmu"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in text-blue-600"></i>
          <span className="">LinkedIn</span>
        </motion.a>
        <motion.a
          variants={footerItem as any}
          className="btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300"
          href="https://github.com/Saf369"
          target="_blank"
        >
          <i className="fa-brands fa-github text-gray-800"></i>
          <span className="">GitHub</span>
        </motion.a>
      </motion.div>
    </div>
  );
}
