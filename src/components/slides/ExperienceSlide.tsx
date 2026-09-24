import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ExperienceSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
}

const Row = ({ company, role, date, delayIndex, hasMockup = false }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Use a stable rotation based on delayIndex instead of Math.random() to prevent SSR hydration mismatches
  const stableRotations = [-1.5, 2, -0.5, 1.2, -1.8, 0.5, -2, 1.5];
  const randomRot = stableRotations[delayIndex % stableRotations.length];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hasMockup) return;
    mouseX.set(e.clientX + 20); // Offset slightly so it's not directly under the cursor
    mouseY.set(e.clientY - 20);
  };

  // Empty variants are needed on the root so Framer Motion targets the row for staggering
  const rowVariants = {
    hidden: {},
    show: {}
  };

  return (
    <motion.div 
      variants={rowVariants}
      className="group relative flex items-center justify-between py-6 sm:py-8 -mx-4 px-4 rounded-sm cursor-pointer hover:bg-white/[0.02] transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col z-10">
        {/* Title line fades in first */}
        <motion.h3 
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45, ease: "linear" } } }}
          className="text-lg sm:text-[22px] font-normal text-white group-hover:text-gray-200 transition-colors"
        >
          {company}
        </motion.h3>
        {/* Subtitle/Date fades in 130ms later */}
        <motion.p 
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45, ease: "linear", delay: 0.13 } } }}
          className="text-sm sm:text-base text-gray-400 font-light mt-1.5"
        >
          {role}
        </motion.p>
      </div>
      <motion.div 
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.45, ease: "linear", delay: 0.13 } } }}
        className="text-sm sm:text-[15px] text-gray-400 font-light z-10"
      >
        {date}
      </motion.div>

      {/* Divider line using framer-motion */}
      <motion.div 
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.3, delay: 0.15 } } }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-600/30"
      />

      {/* Cursor Follow Mockup */}
      {hasMockup && (
        <motion.div 
          style={{ x: cursorX, y: cursorY, rotate: randomRot }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: isHovered ? 0.15 : 0.25 }}
          className="fixed top-0 left-0 z-50 pointer-events-none hidden md:flex items-center gap-2"
        >
          {/* Mouse Cursor Icon */}
          <div className="mr-2 filter drop-shadow-md text-white select-none">
            <svg className="w-5 h-5 fill-white stroke-black stroke-[1.5]" viewBox="0 0 24 24">
              <path d="M4 2l16 12-7 1.5 4.5 7.5-3 1.5-4.5-7.5-6 5.5z"></path>
            </svg>
          </div>
          
          <div className="flex items-center justify-center gap-1 bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/20 shadow-2xl">
             <div className="w-[50px] h-[100px] bg-white rounded-[6px] p-1 flex flex-col justify-start shadow-md border border-gray-100 transform -rotate-[4deg] translate-y-1">
               <div className="w-full h-1 bg-gray-100 rounded-full mb-1"></div>
               <div className="flex-1 w-full rounded-[2px] flex flex-col items-center justify-center gap-1 border border-gray-50 bg-gray-50">
                 <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                 <div className="h-1 w-8 bg-gray-200 rounded-full"></div>
                 <div className="h-1 w-full bg-white mt-auto"></div>
               </div>
             </div>
             <div className="w-[54px] h-[106px] bg-white rounded-[6px] p-1 flex flex-col justify-start shadow-xl border border-gray-100 z-20">
               <div className="w-full h-1 bg-gray-100 rounded-full mb-1 flex justify-center"><div className="w-2 h-1 bg-gray-300 rounded-full"></div></div>
               <div className="flex-1 w-full rounded-[2px] flex flex-col items-center justify-center gap-1 border border-gray-50 bg-gray-900">
                 <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
                 <div className="h-1 w-8 bg-gray-700 rounded-full mt-1"></div>
                 <div className="h-3 w-full bg-gray-800 mt-auto rounded-[2px]"></div>
               </div>
             </div>
             <div className="w-[50px] h-[100px] bg-white rounded-[6px] p-1 flex flex-col justify-start shadow-md border border-gray-100 transform rotate-[4deg] translate-y-1">
               <div className="w-full h-1 bg-gray-100 rounded-full mb-1"></div>
               <div className="flex-1 w-full rounded-[2px] flex flex-col gap-0.5 border border-gray-50 bg-white">
                 <div className="w-full h-8 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-[2px]"></div>
                 <div className="flex gap-0.5 mt-0.5 h-full">
                   <div className="w-1/2 bg-gray-100 rounded-[2px]"></div>
                   <div className="w-1/2 bg-gray-100 rounded-[2px]"></div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function ExperienceSlide({ isActive, isAbove, isBelow }: ExperienceSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-start overflow-y-auto no-scrollbar bg-[#222222] ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.20, delayChildren: 0.2 } // 200ms stagger between rows
    }
  };

  return (
    <div
      className={containerClass}
      style={{ zIndex: isActive ? 20 : 10 }}
      id="slide-3"
    >
      <div className="relative w-full min-h-full px-6 sm:px-12 lg:px-14 pt-12 pb-10 overflow-hidden text-white flex flex-col flex-1 z-10">
        
        {/* Background Display Typography Watermark (Static Ghost Layer) */}
        <div className="absolute left-6 sm:left-10 top-6 select-none pointer-events-none z-0">
          <span className="text-5xl sm:text-7xl lg:text-[110px] font-black tracking-tight text-white/[0.03] uppercase leading-none font-display">
            EXPERIENCE
          </span>
        </div>

        {/* Header Row */}
        <div className="relative z-10 flex items-end justify-between mb-10 sm:mb-14">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "linear" }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white flex items-center"
          >
            /EXPERIENCE
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "linear", delay: 0.1 }}
            className="text-sm sm:text-base font-light text-gray-300 pb-1"
          >
            9+ years of experience
          </motion.span>
        </div>

        {/* Experience Rows List */}
        <motion.div 
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col space-y-0"
        >
          <Row company="Kumpin Studio" role="UI/UX & Product Designer" date="Nov 2025 - Now" delayIndex={0} hasMockup={true} />
          <Row company="Mikan Team" role="Creative Director" date="Aug 2025 - Now" delayIndex={1} hasMockup={true} />
          <Row company="Microsoft" role="Interaction Designer" date="Jan 2022 - Aug 2025" delayIndex={2} />
          <Row company="Facebook" role="Visual Designer" date="Mar 2019 - Dec 2021" delayIndex={3} />
          <Row company="Apple" role="Experience Designer" date="Feb 2017 - Feb 2019" delayIndex={4} />
        </motion.div>
      </div>
    </div>
  );
}
