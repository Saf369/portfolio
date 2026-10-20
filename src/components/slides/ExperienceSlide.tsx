import React, { useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ExperienceSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
}

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  duration?: string;
  location?: string;
  active: boolean;
  description: string;
  tags: string[];
  hasMockup?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "COGNIFYR",
    role: "Full Stack Engineer Intern",
    date: "Oct 2026 — Present",
    duration: "1 mo",
    location: "Kochi, Kerala · Hybrid",
    active: true,
    description: "Distributed task queues (BullMQ, Redis) & autonomous Telegram ops.",
    tags: ["Full-Stack", "BullMQ", "Redis", "Hybrid"],
    hasMockup: true,
  },
  {
    company: "IEEE CUSAT SB",
    role: "Web Associate",
    date: "Mar 2026 — Present",
    duration: "8 mos",
    location: "Hybrid",
    active: true,
    description: "Official branch web portals, registration systems, & cross-functional leadership.",
    tags: ["Web Dev", "React", "Team Leadership", "Event Ops"],
    hasMockup: false,
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    date: "2025 — 2026",
    duration: "Ended",
    location: "Remote / Client Ops",
    active: false,
    description: "Production Next.js web applications, API services, & client solutions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    hasMockup: false,
  },
  {
    company: "JYESTA CORPORATE ENTITY",
    role: "Project Intern",
    date: "Feb 2026 — Mar 2026",
    duration: "2 mos",
    location: "Remote",
    active: false,
    description: "Machine learning training & unsupervised customer segmentation (K-Means, PCA).",
    tags: ["Machine Learning", "Python", "scikit-learn", "Remote"],
    hasMockup: true,
  },
];

const TimelineRow = ({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const stableRotations = [-1.5, 2, -0.5, 1.2];
  const randomRot = stableRotations[index % stableRotations.length];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!item.hasMockup) return;
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY - 20);
  };

  return (
    <div
      className="relative group py-2 sm:py-2.5 lg:py-3.5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Node on the vertical timeline spine */}
      <div className="absolute -left-[27px] sm:-left-[35px] lg:-left-[43px] top-1/2 -translate-y-1/2 flex items-center justify-center">
        {item.active ? (
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 rounded-full bg-white ring-4 ring-white/20"></span>
          </div>
        ) : (
          <div className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 rounded-full bg-zinc-800 border-2 border-zinc-500 group-hover:border-zinc-300 group-hover:bg-zinc-600 transition-colors"></div>
        )}
      </div>

      {/* Compact Timeline Row Card */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -10 },
          show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
        }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all duration-200"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 min-w-0">
          <div className="min-w-[140px] sm:min-w-[210px] lg:min-w-[250px] shrink-0">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-zinc-200 transition-colors truncate">
              {item.role}
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs lg:text-sm text-zinc-400 font-medium mt-0.5 lg:mt-1">
              <span className="text-zinc-300 font-semibold">{item.company}</span>
              {item.location && (
                <>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-500">{item.location}</span>
                </>
              )}
            </div>
            {/* Mobile-only date */}
            <p className="text-[10px] font-mono text-zinc-500 mt-0.5 sm:hidden">
              {item.date} {item.duration && item.duration !== "Ended" ? `· ${item.duration}` : ""}
            </p>
          </div>

          <p className="text-xs lg:text-[13px] text-zinc-300 font-normal truncate max-w-sm lg:max-w-md xl:max-w-lg hidden md:block leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2.5 lg:gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 lg:px-3.5 py-1 lg:py-1.5 rounded-full bg-white/10 text-[11px] lg:text-xs font-mono text-zinc-200 whitespace-nowrap">
              {item.date}
            </span>
            {!item.active && (
              <span className="inline-flex items-center px-2.5 lg:px-3 py-0.5 lg:py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-[10px] sm:text-[11px] lg:text-xs font-mono text-zinc-400 font-medium whitespace-nowrap">
                Ended
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Cursor Follow Mockup for Interactive Polish */}
      {item.hasMockup && (
        <motion.div
          style={{ x: cursorX, y: cursorY, rotate: randomRot }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: isHovered ? 0.15 : 0.25 }}
          className="fixed top-0 left-0 z-50 pointer-events-none hidden md:flex items-center gap-2"
        >
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
    </div>
  );
};

export default function ExperienceSlide({ isActive, isAbove, isBelow }: ExperienceSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-between overflow-hidden bg-[#222222] ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <div
      className={containerClass}
      style={{ zIndex: isActive ? 20 : 10 }}
      id="slide-2"
    >
      <div className="relative w-full h-full px-4 sm:px-12 lg:px-14 py-6 sm:py-8 overflow-hidden text-white flex flex-col justify-between z-10">

        {/* Background Display Typography Watermark */}
        <div className="absolute left-6 sm:left-10 top-4 select-none pointer-events-none z-0">
          <span className="text-5xl sm:text-7xl lg:text-[100px] font-black tracking-tight text-white/[0.03] uppercase leading-none font-display">
            EXPERIENCE
          </span>
        </div>

        {/* Header Row */}
        <div className="relative z-10 flex items-end justify-between mb-2 sm:mb-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "linear" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white flex items-center"
          >
            /EXPERIENCE
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "linear", delay: 0.1 }}
            className="text-xs sm:text-sm font-light text-gray-300 pb-1"
          >
            B.Tech IT '28
          </motion.span>
        </div>

        {/* Single-Page Timeline Spine and Rows Container */}
        <div className="relative z-10 pl-5 sm:pl-7 lg:pl-9 ml-2 sm:ml-4 border-l border-zinc-700/60 my-auto flex flex-col justify-center">
          <motion.div
            variants={listContainer as any}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {EXPERIENCES.map((item, idx) => (
              <TimelineRow key={item.company} item={item} index={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
