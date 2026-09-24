import React from 'react';

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
  const containerClass = `slide-panel flex flex-col justify-between px-6 sm:px-12 pt-4 sm:pt-6 pb-8 overflow-hidden ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  const heroStyle = {
    opacity: heroStage === 0 ? '0.9' : '1',
    transform: heroStage === 0 ? 'scale(1)' : 'scale(1.02)',
  };

  const portraitClass = `portrait-container relative w-full max-w-md flex justify-center -mb-2 mt-0 z-30 group cursor-pointer overflow-hidden ${
    heroStage === 0 ? 'portrait-stage-large' : 'portrait-stage-compact'
  }`;

  return (
    <div className={containerClass} id="slide-0" style={{ zIndex: isActive ? 20 : 10 }}>
      {/* Center Huge Display Typography */}
      <div
        className="w-full text-center mt-2 sm:mt-4 select-none pointer-events-none z-10 transition-transform duration-700 ease-out"
        id="hero-typography-container"
        style={heroStyle}
      >
        <h1 className="text-[12.5vw] sm:text-[10vw] lg:text-[145px] font-black tracking-tight leading-[0.85] uppercase flex flex-col items-center justify-center font-sans">
          <span className="text-stroke-outline pointer-events-auto transition-transform hover:scale-[1.01] inline-block duration-300">
            SAFWAN
          </span>
          <span className="text-[#111113] inline-block transition-transform hover:scale-[1.01] duration-300 pointer-events-auto">
            MUHAMMED
          </span>
        </h1>
      </div>
      {/* Hero Bottom Content Grid with Dynamic Cutout Portrait Center */}
      <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-between mt-auto z-20 pt-2 pb-2">
        {/* Left: UI/UX Designer & Action */}
        <div className="w-full md:w-1/3 text-left mb-6 md:mb-10 z-20 transition-opacity duration-500">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111113]">
            UI/UX Designer
          </h2>
          <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mt-2 max-w-[280px]">
            Designing digital products that are clear, usable, and conversion focused.
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
        </div>
        {/* Center Portrait with Hero Zoom / Minimizing Stage Interaction */}
        <div
          className={portraitClass}
          id="hero-portrait-box"
          onClick={toggleHeroState}
          title="Click to toggle hero showcase"
          style={{
            position: 'absolute',
            left: 'calc(65% - 90px)',
            transform: 'translateX(-50%)',
            bottom: '0px',
            height: '580px',
            overflow: 'visible',
            alignItems: 'flex-end',
            justifyContent: 'center',
            maxWidth: '620px',
            zIndex: 30,
            pointerEvents: 'auto',
          }}
        >
          <div className="absolute inset-x-4 bottom-0 h-48 bg-gradient-to-t from-gray-200/70 to-transparent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <img
            alt="Safwan Muhammed Portrait"
            className="portrait-floating relative w-auto max-w-full object-cover object-top h-[460px] sm:h-[510px] lg:h-[540px] contrast-125 brightness-95 filter grayscale transition-all duration-700 ease-out"
            id="hero-portrait-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RxsfmLsUMMwjD5Kpo6uWksM3f_J1R5hkqftkTdOE5pViRsHXLYBzg4o6UjxwE7pROR5JCfdDDPXdzaPhC_OVyYpetPBkQ0u2diTUgDNuZLbBlj0sypAj9hXKmtER_TQvziXOQuKLCGRZKq_87nfmMMXUxlSJUltGYRZ3VXK6tfqOLP_Evzky-kme-wiyQAHWxmfaPdHVtyEijU1zCDOfS_e_Z7FmxXPDEXCPgyugMNvcxb3mFO4EKuKFaNt405x4eQ"
            style={{
              objectPosition: 'center top',
              transformOrigin: 'center bottom 0px',
              filter: 'grayscale(100%) contrast(1.1)',
              maskImage: 'linear-gradient(black 0%, black 85%, transparent 100%)',
              transform: 'scale(1.12)',
              height: '560px',
            }}
          />
        </div>
        {/* Right: Social Links */}
        <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center md:items-end justify-center md:justify-end gap-2.5 mb-6 md:mb-10 z-20 flex-wrap">
          <a
            className="btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            href="https://dribbble.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-dribbble text-pink-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"></i>
            <span className="">Dribbble</span>
          </a>
          <a
            className="btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-instagram text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"></i>
            <span className="">Instagram</span>
          </a>
          <a
            className="btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"></i>
            <span className="">LinkedIn</span>
          </a>
          <a
            className="btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            href="https://behance.net"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-behance text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"></i>
            <span className="">Behance</span>
          </a>
        </div>
      </div>
    </div>
  );
}
