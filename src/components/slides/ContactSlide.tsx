import React from 'react';

interface ContactSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
}

export default function ContactSlide({ isActive, isAbove, isBelow }: ContactSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 py-10 overflow-y-auto no-scrollbar relative ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  return (
    <div className={containerClass} id="slide-4" style={{ zIndex: isActive ? 20 : 10 }}>
      {/* Glowing status badge */}
      <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gray-300 bg-white shadow-sm text-xs sm:text-sm font-medium text-gray-700 mb-6 transition-transform hover:scale-105 cursor-default hover:shadow-glow-green">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
        </span>
        Available for New Project
      </div>
      {/* Main Title */}
      <h2 className="relative z-10 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111113] uppercase max-w-2xl leading-tight">
        HAVE A PROJECT IN MIND?
      </h2>
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
      {/* Email Action CTA */}
      <div className="relative z-10 mt-6 sm:mt-8 flex items-center justify-center">
        <a
          className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#111113] hover:bg-black text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
          href="mailto:safwan.muhammed@example.com"
        >
          <span className="">Contact Me</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </div>
      {/* Bottom Profile / Identity Row */}
      <div className="relative z-10 mt-10 pt-6 border-t border-gray-100 w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111113] text-white text-xs sm:text-sm font-medium shadow-sm cursor-default">
          <img
            alt="Safwan"
            className="w-5 h-5 rounded-full object-cover grayscale ring-1 ring-white/30"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz9A13h3Snn17VTpJrWP4aTMkUjtf8MYkkb6mGVViEOsSgR3p7UY3R7pZqPaVZdcl6VgA2R5r5HGuQeQDemFaMkV45EcH8vjmoXodWcyLDU6xMUB3cGlknOlFU_Nu7xIgys29A8mgQ-Cu8nldImbKk5bszdDWSXfJZtv1Y5CJfsyD7qb8YejXTl3amHQfx_bPIMoZpgXjm9tiOgN__Wq1Y--VV59Bm2TOHAp_8z9qvyh1CYMS3DohVUfyhe5dE9PXjRA"
          />
          <span className="">Safwan Muhammed</span>
        </div>
        <a
          className="btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300"
          href="https://dribbble.com"
          target="_blank"
        >
          <i className="fa-brands fa-dribbble text-pink-600"></i>
          <span className="">Dribbble</span>
        </a>
        <a
          className="btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300"
          href="https://instagram.com"
          target="_blank"
        >
          <i className="fa-brands fa-instagram text-pink-500"></i>
          <span className="">Instagram</span>
        </a>
        <a
          className="btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300"
          href="https://linkedin.com"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in text-blue-600"></i>
          <span className="">LinkedIn</span>
        </a>
        <a
          className="btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300"
          href="https://behance.net"
          target="_blank"
        >
          <i className="fa-brands fa-behance text-blue-500"></i>
          <span className="">Behance</span>
        </a>
      </div>
    </div>
  );
}
