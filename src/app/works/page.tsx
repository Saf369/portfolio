"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export interface WorkEntry {
  id: string;
  title: string;
  badge: string;
  type: 'experience' | 'project';
  category: 'Work Experience' | 'AI & Systems' | 'Mobile Apps' | 'Web & Fullstack' | 'Dev Tools';
  date: string;
  year: '2026' | '2025' | '2024';
  isCurrent?: boolean;
  org: string;
  summary: string;
  bullets: string[];
  tags: string[];
  github?: string;
  link?: {
    label: string;
    url: string;
  };
  accentColor?: string;
}

const PRIMARY_WORKS: WorkEntry[] = [
  // 1. AI Telegram Bot (Selected Work #1)
  {
    id: 'ai-telegram-bot',
    title: 'AI Telegram Bot & Workflow Ops',
    badge: 'FULLSTACK AI',
    type: 'project',
    category: 'AI & Systems',
    date: 'August 2026',
    year: '2026',
    org: 'Autonomous Telegram Agent & Distributed Task Pipeline',
    summary: 'Autonomous Telegram agent with BullMQ & Redis distributed task queues and a Next.js ops dashboard.',
    bullets: [
      'Engineered a distributed task queue pipeline using Redis and BullMQ for high-throughput asynchronous execution.',
      'Built real-time Next.js operations management console with Prisma ORM data modeling and Telegram Bot API.',
    ],
    tags: ['Node.js & Next.js', 'Redis, BullMQ & Prisma', 'Telegram API', 'Distributed Workers'],
    github: 'https://github.com/Saf369/ai_telegram_bot',
    link: {
      label: 'github.com/Saf369/ai_telegram_bot',
      url: 'https://github.com/Saf369/ai_telegram_bot',
    },
    accentColor: '#229ED9',
  },

  // 2. Custom Syllabus (Selected Work #2)
  {
    id: 'widget-app',
    title: 'Custom Syllabus - AI Timetable Analyzer',
    badge: 'MOBILE & AI',
    type: 'project',
    category: 'Mobile Apps',
    date: 'October 2026',
    year: '2026',
    org: 'widget_app (Flutter & FastAPI Backend)',
    summary: 'AI academic planner that parses syllabus PDFs and organizes class timetables using Gemini Pro.',
    bullets: [
      'Bridges intelligent timetable and syllabus PDF extraction using Google Gemini Pro AI with an ultra-premium Flutter interface.',
      'Implemented high-concurrency FastAPI microservice to parse academic curriculum structures in under 800ms.',
    ],
    tags: ['Flutter (Dart)', 'FastAPI & Gemini AI', 'Python', 'Material 3'],
    github: 'https://github.com/Saf369/widget_app',
    link: {
      label: 'github.com/Saf369/widget_app',
      url: 'https://github.com/Saf369/widget_app',
    },
    accentColor: '#6366f1',
  },

  // 3. GitHub Project: cognifyr_AI_TICKECT_SYSTEM
  {
    id: 'cognifyr-ai-ticket',
    title: 'AI Ticket Intelligence & Auto-Resolver',
    badge: 'AI & SYSTEMS',
    type: 'project',
    category: 'AI & Systems',
    date: 'August 2026',
    year: '2026',
    org: 'Enterprise Support Ticket Automation & Sentiment Analysis',
    summary: 'Autonomous ticket triage pipeline utilizing NLP sentiment classification and automated resolution.',
    bullets: [
      'Engineered automated customer support ticket triage pipeline with LLM sentiment categorization and resolution drafting.',
      'Constructed high-speed Next.js admin console with priority queues, real-time metrics, and automated escalation triggers.',
    ],
    tags: ['Next.js', 'TypeScript', 'NLP', 'LLM Agent', 'Tailwind CSS'],
    github: 'https://github.com/Saf369/cognifyr_AI_TICKECT_SYSTEM',
    link: {
      label: 'cognifyr-ai-tickect-system.vercel.app',
      url: 'https://cognifyr-ai-tickect-system.vercel.app',
    },
    accentColor: '#3b82f6',
  },

  // 4. GitHub Project: world_cup_2026 (XI)
  {
    id: 'xi-predictor',
    title: 'XI — AI Prediction Platform',
    badge: 'PROJECT DELIVERY',
    type: 'project',
    category: 'AI & Systems',
    date: 'June 2026',
    year: '2026',
    org: 'FIFA World Cup 2026 AI Engine',
    summary: 'Probabilistic tournament modeling with Claude 3.5 Sonnet, Supabase, and Redis caching.',
    bullets: [
      'Delivered probabilistic match modeling with Anthropic Claude 3.5 Sonnet, Supabase, and Redis caching.',
      'Engineered an ultra-fast Next.js 15 web client with real-time prediction leaderboards and statistical simulations.',
    ],
    tags: ['Next.js 15', 'Claude AI', 'TypeScript', 'Supabase', 'Redis', 'Tailwind'],
    github: 'https://github.com/Saf369/world_cup_2026',
    link: {
      label: 'saf.net.in',
      url: 'https://saf.net.in',
    },
    accentColor: '#10b981',
  },
  // 13. GitHub Project: RAG_VIDEO_ASSISTANT
  {
    id: 'rag-video-assistant',
    title: 'RAG Video Intelligence Assistant',
    badge: 'AI & SYSTEMS',
    type: 'project',
    category: 'AI & Systems',
    date: 'July 2026',
    year: '2026',
    org: 'Multimodal Video Comprehension & Timestamped QA',
    summary: 'Multimodal video engine linking Whisper audio transcription with ChromaDB embeddings.',
    bullets: [
      'Video intelligence engine that transcribes audio tracks, creates semantic chunks, and enables timestamped QA.',
      'Constructed vector index using Whisper speech models and ChromaDB embeddings for instant frame retrieval.',
    ],
    tags: ['Python', 'LangChain', 'Whisper', 'ChromaDB', 'Multimodal AI'],
    github: 'https://github.com/Saf369/RAG_VIDEO_ASSISTANT',
    link: {
      label: 'github.com/Saf369/RAG_VIDEO_ASSISTANT',
      url: 'https://github.com/Saf369/RAG_VIDEO_ASSISTANT',
    },
    accentColor: '#06b6d4',
  },
];

// Dedicated "More Projects" Section requested by user
const MORE_WORKS: WorkEntry[] = [
  // 1. Student Academic Records System
  {
    id: 'student-data-app',
    title: 'Student Academic Records System',
    badge: 'FULLSTACK',
    type: 'project',
    category: 'Web & Fullstack',
    date: 'October 2025',
    year: '2025',
    org: 'Student-Data-App (PHP & MySQL CRUD Platform)',
    summary: 'Institutional student records management portal with role-based access control, grade tracking, and relational MySQL persistence.',
    bullets: [
      'Engineered institutional student records management portal with role-based access control and grade tracking.',
      'Optimized relational MySQL database schema and structured PHP backend endpoints for high operational reliability.',
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'CRUD', 'Relational DB'],
    github: 'https://github.com/Saf369/Student-Data-App',
    accentColor: '#4f46e5',
  },
  // 2. Feedback Collection & Analytics Portal
  {
    id: 'feedback-app',
    title: 'Feedback Collection & Analytics Portal',
    badge: 'FULLSTACK',
    type: 'project',
    category: 'Web & Fullstack',
    date: 'December 2025',
    year: '2025',
    org: 'User Sentiment & Real-Time Feedback Collection System',
    summary: 'Frictionless customer feedback widgets with rating analytics, admin dashboard, and automated email notification triggers.',
    bullets: [
      'Created frictionless feedback collection widgets with rating analytics and administrative dashboards.',
      'Built with Next.js, Prisma, and PostgreSQL with instant email notification triggers.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/Saf369/feedback_app',
    accentColor: '#06b6d4',
  },
  // 3. Biometric Face Recognition System
  {
    id: 'face-recog',
    title: 'Biometric Face Recognition System',
    badge: 'AI & SYSTEMS',
    type: 'project',
    category: 'AI & Systems',
    date: 'February 2026',
    year: '2026',
    org: 'Computer Vision Real-Time Attendance System',
    summary: 'Real-time facial feature extraction and face matching application utilizing OpenCV and deep metric embeddings.',
    bullets: [
      'Built real-time facial feature extraction and face matching application utilizing OpenCV and deep metric embeddings.',
      'Engineered automated attendance logging with live webcam feed processing and anti-spoofing verification.',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Haar Cascades', 'NumPy'],
    github: 'https://github.com/Saf369/facerecog',
    accentColor: '#0ea5e9',
  },
  // 4. Customer Segmentation ML Engine
  {
    id: 'customer-seg',
    title: 'Customer Segmentation ML Engine',
    badge: 'AI & SYSTEMS',
    type: 'project',
    category: 'AI & Systems',
    date: 'February 2026',
    year: '2026',
    org: 'Unsupervised Machine Learning & Behavioral Clustering',
    summary: 'Unsupervised consumer clustering using K-Means and PCA dimensionality reduction on consumer datasets.',
    bullets: [
      'Implemented unsupervised learning pipeline utilizing K-Means Clustering and PCA dimensionality reduction on consumer datasets.',
      'Generated visual silhouette analysis and actionable customer cohort personas for targeted marketing optimization.',
    ],
    tags: ['Python', 'scikit-learn', 'Pandas', 'K-Means', 'Matplotlib', 'PCA'],
    github: 'https://github.com/Saf369/customerSeg',
    accentColor: '#8b5cf6',
  },
  // 5. AI Resume Roast & Career Evaluator
  {
    id: 'ai-resume-roast',
    title: 'AI Resume Roast & Career Evaluator',
    badge: 'AI & SYSTEMS',
    type: 'project',
    category: 'AI & Systems',
    date: 'May 2026',
    year: '2026',
    org: 'Automated CV Diagnostic & ATS Feedback Engine',
    summary: 'Direct PDF resume parser extracting work experience, skills, and metrics to provide ATS scoring and brutal career advice.',
    bullets: [
      'Direct PDF resume parser extracting work experience, skills, and metrics to provide brutal honesty and ATS scoring.',
      'Delivers actionable formatting, phrasing, and keyword recommendations powered by Gemini Pro.',
    ],
    tags: ['Next.js', 'TypeScript', 'PDF Parsing', 'Gemini AI', 'Career Tech'],
    github: 'https://github.com/Saf369/AI_RESUME_ROAST',
    link: {
      label: 'ai-resume-roast-beryl.vercel.app',
      url: 'https://ai-resume-roast-beryl.vercel.app',
    },
    accentColor: '#a855f7',
  },
  // 6. AI GitHub Profile Roaster
  {
    id: 'ai-github-roast',
    title: 'AI GitHub Profile Roaster',
    badge: 'DEV TOOL',
    type: 'project',
    category: 'Dev Tools',
    date: 'May 2026',
    year: '2026',
    org: 'Developer Profile Roaster & Repository Intelligence',
    summary: 'Satirical code quality roaster analyzing public GitHub commit logs, repo stars, and developer habits via Octokit.',
    bullets: [
      'Satirical yet sharp code quality roaster analyzing public GitHub commit logs, repo stars, and code cadence via Octokit.',
      'Employs Google Gemini AI for contextual humor and generative evaluation with shareable social cards.',
    ],
    tags: ['Next.js', 'TypeScript', 'Octokit', 'Gemini AI', 'Tailwind CSS'],
    github: 'https://github.com/Saf369/AI_GITHUB_ROAST',
    link: {
      label: 'ai-github-roast.vercel.app',
      url: 'https://ai-github-roast.vercel.app',
    },
    accentColor: '#f97316',
  },
  // 7. Exptrack Finance Tracker
  {
    id: 'exptrack',
    title: 'Exptrack Finance Tracker',
    badge: 'MOBILE APP',
    type: 'project',
    category: 'Mobile Apps',
    date: 'December 2025',
    year: '2025',
    org: 'Cross-Platform Personal Finance Analytics App',
    summary: 'Cross-platform mobile expense manager with offline SQLite and interactive budget forecasts.',
    bullets: [
      'Clean cross-platform mobile expense tracker offering real-time budget forecasting and recurring billing tracking.',
      'Integrated interactive charts, monthly breakdown metrics, and encrypted offline SQLite persistence.',
    ],
    tags: ['TypeScript', 'React Native', 'Expo', 'Data Visuals', 'SQLite'],
    github: 'https://github.com/Saf369/Exptrack',
    accentColor: '#10b981',
  },
  // 8. Contextual NLP Chatbot Engine
  {
    id: 'ai-chatbot',
    title: 'Contextual NLP Chatbot Engine',
    badge: 'AI & SYSTEMS',
    type: 'project',
    category: 'AI & Systems',
    date: 'January 2026',
    year: '2026',
    org: 'PyTorch & NLTK Neural Intent Assistant',
    summary: 'Deep learning conversational assistant with WordNet lemmatization, PyTorch neural classification, and dynamic function execution.',
    bullets: [
      'Engineered multi-layer PyTorch neural network (Linear-ReLU-Dropout) trained on custom tokenized and lemmatized intent corpora.',
      'Built dynamic function-mapping pipeline enabling the chatbot to trigger real-time Python tool executions (e.g. stock lookups) on matched intents.',
    ],
    tags: ['Python', 'PyTorch', 'NLTK', 'NLP', 'Neural Network', 'Function Calling'],
    github: 'https://github.com/Saf369/AI_chatbot',
    accentColor: '#10b981',
  },
];

const ALL_WORKS = [...PRIMARY_WORKS, ...MORE_WORKS];

function WorkCard({ item, idx }: { item: WorkEntry; idx: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.2) }}
      className="group flex flex-col bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-300 p-4 sm:p-5 transition-all duration-300 hover:shadow-md"
    >
      {/* Dark Card Preview Container Matching WorkSlide */}
      {item.id === 'ai-telegram-bot' ? (
        <div className="relative bg-[#0b101b] rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-all duration-500">
          <div className="relative w-[88%] h-[86%] bg-gradient-to-b from-[#0f172a] via-[#090d16] to-black rounded-xl p-4 sm:p-5 border border-sky-900/40 flex flex-col items-center justify-between text-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="flex justify-between w-full text-[11px] text-zinc-400 items-center">
              <span className="font-bold text-white flex items-center gap-1.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#229ED9] animate-pulse"></span>AI TELEGRAM BOT
              </span>
              <span className="px-2.5 py-0.5 bg-[#229ED9]/20 text-[#229ED9] rounded-full text-[10px] font-semibold border border-[#229ED9]/30">
                TELEGRAM &amp; WORKFLOW OPS
              </span>
            </div>
            <div className="my-auto space-y-1.5 sm:space-y-2 w-full">
              <span className="text-[9px] uppercase tracking-wider text-sky-400 font-semibold">
                Autonomous Agent &amp; Queue
              </span>
              <h4 className="text-white text-sm sm:text-base font-bold max-w-[260px] mx-auto leading-tight">
                AI Telegram Agent{' '}
                <span className="text-[#229ED9] transition-colors group-hover:text-sky-300">
                  &amp; Distributed Worker
                </span>
              </h4>
              <div className="bg-slate-800/60 backdrop-blur-md rounded-lg py-1.5 px-3 border border-sky-500/20 max-w-[240px] mx-auto text-left flex items-center gap-2 shadow-sm">
                <span className="text-xs">⚡</span>
                <div className="text-[10px] text-slate-300 font-mono truncate">
                  /exec workflow: <span className="text-emerald-400">BullMQ + Redis</span>
                </div>
              </div>
            </div>
            <div className="w-32 sm:w-36 h-11 bg-gradient-to-t from-[#229ED9]/25 via-blue-600/20 to-transparent rounded-t-xl border-t border-x border-[#229ED9]/40 relative shadow-2xl flex items-center justify-center">
              <div className="w-12 h-1 bg-white/40 rounded-full mb-auto mt-2"></div>
            </div>
          </div>
          <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#229ED9]"></span>
            FULLSTACK AI
          </span>
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              ↗
            </span>
          </div>
        </div>
      ) : item.id === 'widget-app' ? (
        <div className="relative bg-[#0d0e15] rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-all duration-500">
          <div className="relative w-[90%] h-[86%] bg-gradient-to-br from-indigo-950/40 via-neutral-900 to-black rounded-xl p-4 sm:p-5 border border-indigo-900/40 flex items-center justify-between overflow-hidden shadow-inner transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="flex flex-col justify-between h-full z-10 text-left max-w-[58%]">
              <div className="flex items-center gap-1.5 text-[11px] text-indigo-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                CUSTOM SYLLABUS
              </div>
              <div className="my-auto space-y-1 sm:space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider text-indigo-300 font-semibold">
                  Gemini Pro AI
                </span>
                <h4 className="text-white text-xs sm:text-base font-bold leading-tight">
                  Academic Planner &amp; Timetable Analyzer
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium">
                <span className="text-indigo-400">⚡</span> Flutter + FastAPI
              </div>
            </div>
            <div className="relative w-[38%] h-[115%] -bottom-2 right-0 flex items-end justify-center transform rotate-[-4deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
              <img
                src="/widget_app_home.png"
                alt="Custom Syllabus Mobile App"
                className="w-full h-full object-contain rounded-xl shadow-2xl border border-indigo-500/30"
              />
            </div>
          </div>
          <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            MOBILE &amp; AI
          </span>
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              ↗
            </span>
          </div>
        </div>
      ) : (
        <div className="relative bg-[#0b101b] rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-zinc-800 shadow-md transition-all duration-500">
          {/* Inner Simulated Screen */}
          <div className="relative w-[88%] h-[84%] bg-gradient-to-b from-[#0f172a] via-[#090d16] to-black rounded-lg p-3 sm:p-4 border border-sky-900/40 flex flex-col items-center justify-between text-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
            {/* Top Bar inside mockup */}
            <div className="flex justify-between w-full text-[11px] text-zinc-400 items-center">
              <span className="font-bold text-white flex items-center gap-1.5 font-mono text-[10px] truncate max-w-[170px]">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: item.accentColor || '#38bdf8' }}
                ></span>
                {item.title}
              </span>
              <span className="px-2 py-0.5 bg-white/10 text-zinc-200 rounded-full text-[9px] font-mono font-semibold border border-white/10 uppercase">
                {item.year}
              </span>
            </div>

            {/* Center Content */}
            <div className="my-auto space-y-1 w-full">
              <span className="text-[9px] uppercase tracking-wider text-sky-400 font-semibold font-mono">
                {item.category}
              </span>
              <h4 className="text-white text-sm sm:text-base font-bold max-w-[280px] mx-auto leading-tight">
                {item.title}
              </h4>
              <p className="text-[11px] text-zinc-400 max-w-[260px] mx-auto line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
            </div>

            {/* Micro Simulated Pipeline / Terminal Box */}
            <div className="w-full bg-slate-900/80 backdrop-blur-md rounded-lg py-1.5 px-3 border border-white/10 text-left flex items-center gap-2 shadow-xs">
              <div className="text-[10px] text-zinc-300 font-mono truncate flex items-center gap-1.5">
                <span className="text-[10px]">⚡</span>
                <span>{item.tags.slice(0, 3).join(' • ')}</span>
              </div>
            </div>
          </div>

          {/* Floating Badge on Card Top-Left */}
          <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: item.accentColor || '#2563eb' }}
            ></span>
            {item.badge}
          </span>
        </div>
      )}

      {/* Card Text Information Below */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Org & Date Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-1.5">
            <span className="font-semibold text-gray-700 truncate max-w-[200px] sm:max-w-[260px]">
              {item.org}
            </span>
            <span className="shrink-0">{item.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
            <span>{item.title}</span>
          </h3>

          {/* Summary description (1-2 lines max) */}
          <p className="text-xs sm:text-[13px] text-gray-600 mt-1.5 line-clamp-2 leading-relaxed">
            {item.summary}
          </p>
        </div>

        {/* Tags and Action Links */}
        <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-600 bg-gray-100/90 border border-gray-200/80"
            >
              {tag}
            </span>
          ))}

          <div className="ml-auto flex items-center gap-2">
            {item.link?.url && !item.link.url.includes('github.com') && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 group/live"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                <span>Live Demo</span>
                <span className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5">↗</span>
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 hover:bg-zinc-900 text-zinc-800 hover:text-white text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 group/link"
              >
                <i className="fa-brands fa-github text-sm"></i>
                <span>GitHub</span>
                <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// Compact card for More Section without dark preview card — focused on tools used
function MoreWorkCard({ item, idx }: { item: WorkEntry; idx: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.2) }}
      className="group flex flex-col justify-between bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-300 p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
    >
      <div>
        {/* Top Meta: Badge and Year */}
        <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-2.5">
          <span className="px-2.5 py-0.5 bg-gray-100 rounded-full text-[10px] font-bold tracking-wider text-black uppercase flex items-center gap-1.5 border border-gray-200/60">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: item.accentColor || '#2563eb' }}
            ></span>
            {item.badge}
          </span>
          <span className="text-[11px] font-mono text-gray-400">{item.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight group-hover:text-black transition-colors">
          {item.title}
        </h3>

        {/* Tools Used Section */}
        <div className="mt-3.5">
          <div className="flex items-center gap-1.5 mb-2 text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
            <span>⚡</span>
            <span>Tools Used</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-700 bg-zinc-50 border border-zinc-200/80 group-hover:border-zinc-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer: Org & Links */}
      <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-2">
        <span className="text-[11px] font-mono text-gray-400 truncate max-w-[150px] sm:max-w-[180px]">
          {item.org}
        </span>

        <div className="flex items-center gap-2 shrink-0">
          {item.link?.url && !item.link.url.includes('github.com') && (
            <a
              href={item.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 group/live"
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
              <span>Live</span>
              <span className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5">↗</span>
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 hover:bg-zinc-900 text-zinc-800 hover:text-white text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 group/link"
            >
              <i className="fa-brands fa-github text-xs"></i>
              <span>GitHub</span>
              <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function WorksPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add('works-page-mode');
    document.body.classList.add('works-page-mode');
    window.scrollTo(0, 0);
    return () => {
      document.documentElement.classList.remove('works-page-mode');
      document.body.classList.remove('works-page-mode');
    };
  }, []);

  return (
    <>
      {/* Background Ambience Matching Home Page */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-top"
        style={{ backgroundImage: "url('/cloud-bg.jpg')" }}
      ></div>

      <div className="relative z-10 w-full min-h-dvh flex flex-col items-center justify-start py-0 sm:py-6 lg:py-8 px-0 sm:px-4">
        {/* Outer Frosted Glass Window Frame Matching Home Page */}
        <div className="w-full sm:max-w-[1240px] flex flex-col relative z-10">
          <div
            className="p-0 sm:p-4 lg:p-5 rounded-none sm:rounded-[44px] bg-transparent sm:bg-white/20 sm:backdrop-blur-xl sm:shadow-2xl border-0 sm:border sm:border-white/40 w-full flex flex-col transition-all duration-500"
            id="works-window-wrapper"
          >
            {/* The Static Window Frame Matching Home Page */}
            <div className="window-card-container relative flex flex-col w-full transition-all duration-500 rounded-none sm:rounded-[32px] border-0 sm:border shadow-none sm:shadow-sm bg-white overflow-hidden">
              
              {/* Header Bar Matching Header.tsx from Home Page */}
              <header
                className="sticky top-0 z-40 w-full flex items-center justify-between px-4 sm:px-10 py-3.5 sm:py-5 border-b backdrop-blur-md transition-colors duration-500 rounded-none sm:rounded-t-[32px] bg-white/95 border-zinc-200/80 shadow-xs"
                id="works-header"
              >
                {/* Back to Home Pill */}
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white/90 hover:bg-gray-50 shadow-sm text-xs sm:text-sm font-semibold text-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 group"
                >
                  <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                  <span>Back to Home</span>
                </Link>

                {/* Center Navigation Matching Header.tsx */}
                <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
                  <Link
                    href="/"
                    className="nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black"
                  >
                    <span>Home</span>
                  </Link>
                  <span className="nav-tab-btn relative px-3 py-1 font-semibold transition-colors duration-300 text-black">
                    <span>
                      Work <sup className="text-[10px] text-gray-400 font-mono">[{ALL_WORKS.length}]</sup>
                    </span>
                    <span className="nav-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-300 bg-black"></span>
                  </span>
                  <Link
                    href="/?slide=2"
                    className="nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black"
                  >
                    <span>
                      Experience <sup className="text-[10px] text-gray-400 font-mono">[9y+]</sup>
                    </span>
                  </Link>
                  <Link
                    href="/?slide=3"
                    className="nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black"
                  >
                    <span>
                      Currently <sup className="text-[10px] text-gray-400 font-mono">[Now]</sup>
                    </span>
                  </Link>
                  <Link
                    href="/?slide=4"
                    className="nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black"
                  >
                    <span>Contact</span>
                  </Link>
                </nav>

                {/* Right Action: GitHub Profile + Hamburger for Phone */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Saf369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm group"
                  >
                    <i className="fa-brands fa-github text-sm"></i>
                    <span className="hidden sm:inline">GitHub Profile</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>

                  {/* Hamburger Toggle Button for Phone */}
                  <button
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200/80 transition-all active:scale-90"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                  >
                    {isMobileMenuOpen ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Mobile Menu Dropdown with Backdrop Blur */}
                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="md:hidden absolute top-full left-3 right-3 mt-2 p-3 bg-white/98 backdrop-blur-2xl border border-zinc-200/90 rounded-2xl shadow-2xl z-50 flex flex-col gap-1"
                    >
                      <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        <span>Home</span>
                        <span className="text-[11px] font-mono text-zinc-400">01</span>
                      </Link>

                      <span
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-black text-white transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <span>Work</span>
                          <span className="text-[10px] font-mono opacity-70">[{ALL_WORKS.length}]</span>
                        </span>
                        <span className="text-[11px] font-mono text-zinc-300">02</span>
                      </span>

                      <Link
                        href="/?slide=2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <span>Experience</span>
                          <span className="text-[10px] font-mono opacity-70">[9y+]</span>
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">03</span>
                      </Link>

                      <Link
                        href="/?slide=3"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <span>Currently</span>
                          <span className="text-[10px] font-mono opacity-70">[Now]</span>
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">04</span>
                      </Link>

                      <Link
                        href="/?slide=4"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        <span>Contact</span>
                        <span className="text-[11px] font-mono text-zinc-400">05</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </header>

              {/* Main Content Area without background grids */}
              <main className="relative w-full px-4 sm:px-10 lg:px-14 py-6 sm:py-9 text-[#111113] bg-white">
                {/* Section Header with Ghost Watermark Matching WorkSlide.tsx */}
                <div className="relative text-left mb-6 sm:mb-8 pt-2">
                  <span className="absolute left-0 -top-4 sm:-top-8 text-5xl sm:text-7xl lg:text-8xl font-black text-gray-100/90 tracking-widest select-none pointer-events-none uppercase">
                    PORTFOLIO
                  </span>
                  <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <h1 className="relative text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#111113]">
                        /ALL WORKS &amp; ARCHIVE
                      </h1>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1 max-w-xl">
                        Comprehensive ledger of production deliveries, autonomous AI architectures, mobile applications, and open-source systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ======================================================== */}
                {/* 2-COLUMN PRIMARY CARDS GRID */}
                {/* ======================================================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pb-4">
                  <AnimatePresence mode="popLayout">
                    {PRIMARY_WORKS.map((item, idx) => (
                      <WorkCard key={item.id} item={item} idx={idx} />
                    ))}
                  </AnimatePresence>
                </div>

                {/* ======================================================== */}
                {/* MORE PROJECTS SECTION */}
                {/* ======================================================== */}
                <div className="mt-14 pt-8 border-t border-gray-200">
                  {/* Section Header with Ghost Watermark Matching Primary */}
                  <div className="relative text-left mb-6 sm:mb-8 pt-2">
                    <span className="absolute left-0 -top-4 sm:-top-7 text-4xl sm:text-6xl lg:text-7xl font-black text-gray-100/90 tracking-widest select-none pointer-events-none uppercase">
                      MORE
                    </span>
                    <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div>
                        <h2 className="relative text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-[#111113]">
                          /MORE PROJECTS
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1 max-w-xl">
                          Additional academic systems, feedback platforms, biometric vision tools, ML segmentation, and developer roasters.
                        </p>
                      </div>

                      {/* Count Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-mono font-semibold text-gray-700 self-start sm:self-auto shrink-0 shadow-2xs">
                        <span>{MORE_WORKS.length} More Projects</span>
                      </div>
                    </div>
                  </div>

                  {/* Grid for More Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pb-4">
                    <AnimatePresence mode="popLayout">
                      {MORE_WORKS.map((item, idx) => (
                        <MoreWorkCard key={item.id} item={item} idx={idx} />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Callout Banner Matching Home Page Dark Aesthetic */}
                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#161619] border border-zinc-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Available for Roles &amp; Projects
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-1.5">Have an ambitious system in mind?</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-lg">
                      Autonomous AI agents, high-concurrency backend services, and interactive web/mobile architectures.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href="/?slide=4"
                      className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center gap-1.5"
                    >
                      <span>Let's Talk</span>
                      <span>↗</span>
                    </Link>
                    <Link
                      href="/"
                      className="px-4 py-2.5 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                    >
                      Home
                    </Link>
                  </div>
                </div>
              </main>
            </div>

            {/* Outer Copyright Matching Home Page */}
            <div className="text-center py-4 text-xs text-neutral-600 font-medium">
              <p>© 2026 Safwan Muhammed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
