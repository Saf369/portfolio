import React from 'react';
import { motion } from 'framer-motion';

interface ServiceSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
  goToSlide: (index: number) => void;
}

export default function ServiceSlide({ isActive, isAbove, isBelow, goToSlide }: ServiceSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-start px-6 sm:px-12 lg:px-14 pt-12 pb-10 overflow-y-auto no-scrollbar ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  const listContainer: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.20, delayChildren: 0.2 } // 200ms stagger between rows
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.45, ease: "linear" } }
  };

  const lineVariants: any = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.3, delay: 0.2 } }
  };

  return (
    <div className={containerClass} id="slide-2" style={{ zIndex: isActive ? 20 : 10 }}>
      {/* Section Title */}
      <div className="mb-10 relative">
        {/* Oversized Ghost Heading (Static Layer) */}
        <div className="absolute -left-4 -top-8 select-none pointer-events-none z-0">
          <span className="text-6xl sm:text-7xl lg:text-[110px] font-black tracking-tight text-black/[0.04] uppercase leading-none font-display">
            SERVICE
          </span>
        </div>

        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "linear" }}
          className="text-4xl lg:text-[42px] font-medium tracking-tight text-[#111113] relative z-10"
        >
          /SERVICE
        </motion.h2>
      </div>

      {/* Services List */}
      <motion.div 
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-0 relative"
      >
        {/* Service 1: UIUX DESIGN (Highlighted expanded view) */}
        <motion.div variants={itemVariants} className="service-card relative bg-[#222222] text-white rounded-[6px] p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6 overflow-visible shadow-2xl transition-all duration-300 group z-20 mb-2">
          <div className="max-w-sm z-10 w-full md:w-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-wide mt-1">UIUX DESIGN</h3>
            <p className="text-gray-400 text-[15px] mt-4 leading-relaxed font-light">
              Designing clear and scalable interfaces for dashboards, mobile apps, and websites.
            </p>
          </div>
          {/* Interactive Floating Mobile Mockups */}
          <div className="absolute right-32 -top-12 md:right-28 md:-top-16 lg:right-40 transform rotate-[10deg] w-72 h-44 hidden md:flex items-center justify-center gap-1.5 pointer-events-none transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-105 z-30">
            {/* Phone 1 */}
            <div className="w-[84px] h-[170px] bg-white rounded-[12px] p-1.5 flex flex-col justify-start shadow-xl border border-gray-100 transform -rotate-[8deg] translate-y-3 z-10">
              <div className="w-full h-2.5 bg-gray-50 rounded-full mb-1 flex justify-center items-center">
                 <div className="w-4 h-[3px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex-1 w-full rounded-sm flex flex-col items-center justify-center gap-1.5 border border-gray-50 pt-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-400 shadow-sm flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white opacity-80"></div>
                </div>
                <div className="h-[3px] w-12 bg-gray-200 rounded-full"></div>
                <div className="h-[3px] w-16 bg-gray-200 rounded-full"></div>
                <div className="mt-auto w-full grid grid-cols-4 gap-1 p-1">
                   <div className="w-full h-3 bg-gray-100 rounded-sm"></div>
                   <div className="w-full h-3 bg-gray-100 rounded-sm"></div>
                   <div className="w-full h-3 bg-gray-100 rounded-sm"></div>
                   <div className="w-full h-3 bg-gray-100 rounded-sm"></div>
                </div>
              </div>
            </div>
            {/* Phone 2 (Center) */}
            <div className="w-[88px] h-[178px] bg-white rounded-[12px] p-1.5 flex flex-col justify-start shadow-2xl border border-gray-100 transform -translate-y-1 z-20">
              <div className="w-full h-2.5 bg-gray-50 rounded-full mb-1 flex justify-center items-center">
                 <div className="w-4 h-[3px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex-1 w-full bg-gradient-to-b from-blue-50/50 to-white rounded-sm flex flex-col items-center justify-center gap-2 border border-blue-50/50">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-purple-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white opacity-40"></div>
                 </div>
                 <div className="h-[3px] w-14 bg-gray-200 rounded-full mt-2"></div>
                 <div className="w-full mt-auto h-6 bg-gray-50 flex items-center justify-center rounded-sm"><div className="w-4 h-4 rounded-full bg-blue-500"></div></div>
              </div>
            </div>
            {/* Phone 3 */}
            <div className="w-[84px] h-[170px] bg-white rounded-[12px] p-1.5 flex flex-col justify-start shadow-xl border border-gray-100 transform rotate-[6deg] translate-y-3 z-10">
              <div className="w-full h-2.5 bg-gray-50 rounded-full mb-1 flex justify-center items-center">
                 <div className="w-4 h-[3px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex-1 w-full rounded-sm flex flex-col gap-1 border border-gray-50 p-1">
                 <div className="w-full h-[60px] rounded-[4px] bg-gradient-to-tr from-orange-400 to-yellow-300 flex items-end p-1.5 overflow-hidden relative">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white/30"></div>
                    <div className="w-full h-2 bg-white/40 rounded-sm"></div>
                 </div>
                 <div className="flex gap-1 mt-1">
                    <div className="w-1/2 h-10 rounded-[4px] bg-orange-100/50"></div>
                    <div className="w-1/2 h-10 rounded-[4px] bg-yellow-100/50 flex flex-col gap-1 p-1">
                       <div className="w-full h-2 bg-yellow-200 rounded-sm"></div>
                       <div className="w-2/3 h-2 bg-yellow-200 rounded-sm"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          {/* Close button X */}
          <div className="self-center text-gray-300 p-2 cursor-pointer hover:text-white transition-colors duration-200 hidden md:block">
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </motion.div>
        
        {/* Service 2: WEB DESIGN & DEV */}
        <motion.div variants={itemVariants} className="relative z-10">
          <div
            className="group relative flex items-center justify-between py-6 px-1 cursor-pointer hover:px-6 hover:bg-[#111113] hover:text-white transition-all duration-300 rounded-sm"
            onClick={() => goToSlide(4)}
          >
            <span className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-wide text-[#111113] group-hover:text-white transition-colors duration-300">
              WEB DESIGN &amp; DEV
            </span>
            <span className="text-3xl font-light text-[#111113] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </div>
          {/* Animated Divider */}
          <motion.div variants={lineVariants} style={{ originX: 0 }} className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300/60 pointer-events-none" />
        </motion.div>
        
        {/* Service 3: BRANDING */}
        <motion.div variants={itemVariants} className="relative z-10">
          <div
            className="group relative flex items-center justify-between py-6 px-1 cursor-pointer hover:px-6 hover:bg-[#111113] hover:text-white transition-all duration-300 rounded-sm"
            onClick={() => goToSlide(4)}
          >
            <span className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-wide text-[#111113] group-hover:text-white transition-colors duration-300">
              BRANDING
            </span>
            <span className="text-3xl font-light text-[#111113] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </div>
          {/* Animated Divider */}
          <motion.div variants={lineVariants} style={{ originX: 0 }} className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300/60 pointer-events-none" />
        </motion.div>
        
        {/* Service 4: MOTIONS & ANIMATIONS */}
        <motion.div variants={itemVariants} className="relative z-10">
          <div
            className="group relative flex items-center justify-between py-6 px-1 cursor-pointer hover:px-6 hover:bg-[#111113] hover:text-white transition-all duration-300 rounded-sm"
            onClick={() => goToSlide(4)}
          >
            <span className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-wide text-[#111113] group-hover:text-white transition-colors duration-300">
              MOTIONS &amp; ANIMATIONS
            </span>
            <span className="text-3xl font-light text-[#111113] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </div>
          {/* Animated Divider */}
          <motion.div variants={lineVariants} style={{ originX: 0 }} className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300/60 pointer-events-none" />
        </motion.div>
      </motion.div>
    </div>
  );
}
