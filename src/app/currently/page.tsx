"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CurrentlyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('works-page-mode');
    document.body.classList.add('works-page-mode');

    return () => {
      document.documentElement.classList.remove('works-page-mode');
      document.body.classList.remove('works-page-mode');
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-zinc-100 text-zinc-900 font-sans selection:bg-black selection:text-white">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-top opacity-50"
        style={{ backgroundImage: "url('/cloud-bg.jpg')" }}
      ></div>

      {/* Main Outer Container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-start items-center py-0 sm:py-6 lg:py-8 px-0 sm:px-6 lg:px-8">
        <div className="w-full sm:max-w-[1080px] flex-1 flex flex-col">
          {/* Frosted Container Card */}
          <div className="p-0 sm:p-3 lg:p-4 rounded-none sm:rounded-[36px] bg-transparent sm:bg-white/30 sm:backdrop-blur-xl sm:shadow-2xl border-0 sm:border sm:border-white/50 w-full flex-1 flex flex-col transition-all duration-300">
            {/* Inner Window Frame */}
            <div className="relative overflow-hidden flex flex-col w-full min-h-screen sm:min-h-[85vh] rounded-none sm:rounded-[28px] border-0 sm:border border-zinc-200/90 bg-white shadow-none sm:shadow-sm">
              {/* Sticky Top Header */}
              <header
                className="sticky top-0 z-40 w-full flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 border-b backdrop-blur-md bg-white/95 border-zinc-200/80 shadow-xs"
                id="currently-header"
              >
                {/* Back to Home Pill */}
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white/90 hover:bg-gray-50 shadow-sm text-xs sm:text-sm font-semibold text-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 group"
                >
                  <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                  <span>Back to Home</span>
                </Link>

                {/* Center Navigation */}
                <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
                  <Link
                    href="/"
                    className="nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black"
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/works"
                    className="nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black"
                  >
                    <span>Work</span>
                  </Link>
                  <Link
                    href="/?slide=2"
                    className="nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black"
                  >
                    <span>Experience</span>
                  </Link>
                  <span className="nav-tab-btn relative px-3 py-1 font-semibold transition-colors duration-300 text-black">
                    <span>Currently</span>
                    <span className="nav-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-300 bg-black"></span>
                  </span>
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
                    <span className="hidden sm:inline">GitHub</span>
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

                {/* Mobile Menu Dropdown */}
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

                      <Link
                        href="/works"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        <span>Work</span>
                        <span className="text-[11px] font-mono text-zinc-400">02</span>
                      </Link>

                      <Link
                        href="/?slide=2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                      >
                        <span>Experience</span>
                        <span className="text-[11px] font-mono text-zinc-400">03</span>
                      </Link>

                      <span className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-black text-white transition-colors">
                        <span>Currently</span>
                        <span className="text-[11px] font-mono text-zinc-300">04</span>
                      </span>

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

              {/* Main Page Content */}
              <main className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 flex-1 flex flex-col space-y-10 sm:space-y-12">
                {/* Header Banner */}
                <div className="space-y-3">
                  <div className="font-mono text-[11px] text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>04. Active Log</span>
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-200/80 pb-3">
                    <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-950 uppercase">
                      /CURRENTLY
                    </h1>
                    <span className="font-mono text-xs text-zinc-500 font-medium">
                      Last updated: October 2026
                    </span>
                  </div>

                  <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
                    A real-time snapshot of my active engineering roles, university studies, build sprint list, and technical focus areas.
                  </p>
                </div>

                {/* Section 1: Active Roles & Engineering (Timeline view) */}
                <div className="space-y-6">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200/80 pb-2">
                    Active Roles &amp; Community
                  </h2>

                  <div className="relative border-l border-zinc-200 pl-6 ml-2 space-y-8 py-1">
                    {/* Item 1: Cognifyr */}
                    <div className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border border-zinc-900 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-black transition-colors">
                              Full Stack Engineer Intern
                            </h3>
                            <span className="font-mono text-[9px] uppercase border border-zinc-200 px-1.5 py-0.5 rounded text-zinc-600 bg-zinc-50">
                              Internship · Hybrid
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-zinc-500">
                            Oct 2026 — Present
                          </span>
                        </div>

                        <div className="text-xs text-zinc-500 font-medium">
                          COGNIFYR · Kochi, Kerala
                        </div>

                        <ul className="space-y-1 pl-4 list-disc text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                          <li className="marker:text-zinc-900">
                            Engineering distributed task queues (BullMQ, Redis) for high-reliability job executions.
                          </li>
                          <li className="marker:text-zinc-900">
                            Building autonomous Telegram operations and production-level microservices.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Item 2: IEEE CUSAT SB */}
                    <div className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border border-zinc-900 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-black transition-colors">
                              Web Associate
                            </h3>
                            <span className="font-mono text-[9px] uppercase border border-zinc-200 px-1.5 py-0.5 rounded text-zinc-600 bg-zinc-50">
                              Leadership · Hybrid
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-zinc-500">
                            Mar 2026 — Present
                          </span>
                        </div>

                        <div className="text-xs text-zinc-500 font-medium">
                          IEEE CUSAT SB · CUSAT
                        </div>

                        <ul className="space-y-1 pl-4 list-disc text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                          <li className="marker:text-zinc-900">
                            Leading official branch web portals, registration systems, and student developer tech initiatives.
                          </li>
                          <li className="marker:text-zinc-900">
                            Managing cross-functional developer teams for high-traffic technical symposiums.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Item 3: Academics at CUSAT */}
                    <div className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border border-zinc-900 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-black transition-colors">
                              B.Tech in Information Technology
                            </h3>
                            <span className="font-mono text-[9px] uppercase border border-zinc-200 px-1.5 py-0.5 rounded text-zinc-600 bg-zinc-50">
                              Class of 2028
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-zinc-500">
                            2024 — 2028
                          </span>
                        </div>

                        <div className="text-xs text-zinc-500 font-medium">
                          Cochin University of Science and Technology (CUSAT)
                        </div>

                        <ul className="space-y-1 pl-4 list-disc text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                          <li className="marker:text-zinc-900">
                            Specializing in distributed systems, operating systems, algorithm design, and database architecture.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Cards Grid (Acquiring Knowledge & Sprint Checklist) */}
                <div className="pt-4 border-t border-zinc-200/80">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* Card A: Acquiring Knowledge */}
                    <section className="p-5 rounded-2xl border border-zinc-200/90 bg-zinc-50/60 hover:bg-zinc-50 transition-all space-y-3">
                      <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                        <svg className="w-4 h-4 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="16.24 7.76 14.44 13.17 9.03 14.97 10.83 9.56 16.24 7.76" />
                        </svg>
                        <span>Acquiring Knowledge</span>
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Deepening understanding of scalable backend architectures, high-performance engines, and agentic systems.
                      </p>
                      <ul className="font-mono text-xs text-zinc-600 space-y-2 list-none pl-1">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-900 font-bold">»</span>
                          <span><strong>Distributed Systems</strong> — BullMQ job queues, Redis pub/sub, worker threads.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-900 font-bold">»</span>
                          <span><strong>FastAPI &amp; Concurrency</strong> — Async event loops, low-latency microservices.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-900 font-bold">»</span>
                          <span><strong>System Design</strong> — Database indexing, query caching, sharding, and resilience.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-900 font-bold">»</span>
                          <span><strong>Agentic AI</strong> — Tool calling, autonomous reasoning loops, and contextual RAG.</span>
                        </li>
                      </ul>
                    </section>

                    {/* Card B: Sprint Checklist */}
                    <section className="p-5 rounded-2xl border border-zinc-200/90 bg-zinc-50/60 hover:bg-zinc-50 transition-all space-y-3">
                      <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                        <svg className="w-4 h-4 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                        <span>Sprint Checklist</span>
                      </h3>
                      <div className="font-mono text-xs space-y-2.5 text-zinc-600">
                        <div className="flex items-start gap-2.5">
                          <span className="text-emerald-700 font-bold shrink-0 border border-emerald-500/30 px-1.5 py-0.5 rounded bg-emerald-50 text-[9px]">
                            DONE
                          </span>
                          <span>Interactive timeline &amp; slide deck architecture for portfolio</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="text-emerald-700 font-bold shrink-0 border border-emerald-500/30 px-1.5 py-0.5 rounded bg-emerald-50 text-[9px]">
                            DONE
                          </span>
                          <span>BullMQ background task processor &amp; Telegram bot for Cognifyr</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="text-amber-700 font-bold shrink-0 border border-amber-500/30 px-1.5 py-0.5 rounded bg-amber-50 text-[9px]">
                            WIP
                          </span>
                          <span>AI-assisted timetable organizer &amp; syllabus PDF parser (widget_app)</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <span className="text-zinc-500 font-bold shrink-0 border border-zinc-300 px-1.5 py-0.5 rounded bg-zinc-100 text-[9px]">
                            TODO
                          </span>
                          <span>High-concurrency WebSocket stream hub for real-time telemetry</span>
                        </div>
                      </div>
                    </section>

                    {/* Card C: Current Target (Full width) */}
                    <section className="p-5 rounded-2xl border border-gray-200/90 bg-white shadow-sm space-y-2.5 md:col-span-2">
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
                    </section>
                  </div>
                </div>
              </main>

              {/* Footer */}
              <footer className="border-t border-zinc-200/80 py-5 px-4 sm:px-8 bg-zinc-50/50 text-zinc-500">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-2 sm:gap-0">
                  <div>
                    <span>© 2026 Safwan Muhammed</span>
                    <span className="mx-2 text-zinc-300">|</span>
                    <span>B.Tech IT '28 · CUSAT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/Saf369"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors hover:underline"
                    >
                      GitHub
                    </a>
                    <span>•</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors hover:underline"
                    >
                      LinkedIn
                    </a>
                    <span>•</span>
                    <Link
                      href="/?slide=4"
                      className="hover:text-black transition-colors hover:underline"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
