
"use client";
import React, { useEffect } from 'react';

const htmlContent = "<!-- Main Outer Static Window Container -->\n<div class=\"w-full max-w-[1240px] flex-1 flex flex-col justify-center my-auto relative z-10\">\n<!-- OUTER FROSTED GLASS BORDER WRAPPER -->\n<div class=\"p-3 sm:p-4 lg:p-5 rounded-[44px] bg-white/20 backdrop-blur-xl shadow-2xl border border-white/40 w-full flex flex-col transition-all duration-500\" id=\"main-window-wrapper\">\n<!-- THE STATIC WINDOW FRAME -->\n<div class=\"window-card-container relative overflow-hidden flex flex-col h-[780px] sm:h-[840px] lg:h-[860px] w-full transition-all duration-500 rounded-[32px] shadow-sm\" id=\"main-window-frame\" style=\"background-color: rgb(255, 255, 255);\">\n<!-- FIXED STATIC HEADER BAR (Anchor Nav inside window) -->\n<header class=\"relative z-40 w-full flex items-center justify-between px-6 sm:px-10 py-4 sm:py-5 border-b backdrop-blur-md transition-colors duration-500 rounded-t-[32px] bg-white/90 border-zinc-200/80\" id=\"static-header\">\n<!-- Left: Availability Status Pill -->\n<div class=\"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white/80 shadow-sm text-xs font-semibold text-gray-800\">\n<span class=\"relative flex h-2 w-2\">\n<span class=\"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75\"></span>\n<span class=\"relative inline-flex rounded-full h-2 w-2 bg-emerald-500\"></span>\n</span>\n<span class=\"\">Available for New Project</span>\n</div>\n<!-- Center: Main Navigation Tabs -->\n<nav class=\"hidden md:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium\">\n<button class=\"nav-tab-btn relative px-3 py-1 font-semibold transition-colors duration-300 text-black\" data-slide-index=\"0\" onclick=\"goToHomeState(0)\">\n<span class=\"\">Home</span>\n<span class=\"nav-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-300 bg-black\"></span>\n</button>\n<button class=\"nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black\" data-slide-index=\"1\" onclick=\"goToSlide(1)\">\n<span class=\"\">Work <sup class=\"text-[10px] text-gray-400 font-mono\">[40]</sup></span>\n<span class=\"nav-indicator absolute bottom-0 left-2 right-2 h-[2px] bg-transparent rounded-full transition-all duration-300\"></span>\n</button>\n<button class=\"nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black\" data-slide-index=\"2\" onclick=\"goToSlide(2)\">\n<span class=\"\">Service <sup class=\"text-[10px] text-gray-400 font-mono\">[4]</sup></span>\n<span class=\"nav-indicator absolute bottom-0 left-2 right-2 h-[2px] bg-transparent rounded-full transition-all duration-300\"></span>\n</button>\n<button class=\"nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black\" data-slide-index=\"3\" onclick=\"goToSlide(3)\">\n<span class=\"\">Experience <sup class=\"text-[10px] text-gray-400 font-mono\">[9y+]</sup></span>\n<span class=\"nav-indicator absolute bottom-0 left-2 right-2 h-[2px] bg-transparent rounded-full transition-all duration-300\"></span>\n</button>\n<button class=\"nav-tab-btn relative px-3 py-1 transition-colors duration-300 text-gray-500 hover:text-black\" data-slide-index=\"4\" onclick=\"goToSlide(4)\">\n<span class=\"\">Contact</span>\n<span class=\"nav-indicator absolute bottom-0 left-2 right-2 h-[2px] bg-transparent rounded-full transition-all duration-300\"></span>\n</button>\n</nav>\n<!-- Right: Let's Talk CTA Button -->\n<div class=\"flex items-center gap-3\">\n<button class=\"btn-shimmer flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm group\" onclick=\"goToSlide(4)\">\n<span class=\"\">Let's Talk</span>\n<span class=\"transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5\">\u2197</span>\n</button>\n</div>\n</header>\n<!-- SLIDING VIEWPORT (Inner Box Only slides vertically!) -->\n<main class=\"relative flex-1 w-full overflow-hidden select-text rounded-b-[32px]\" id=\"slider-viewport\">\n<div class=\"relative w-full h-full\" id=\"inner-slider-track\">\n<!-- ============================================== -->\n<!-- SLIDE 1: HOME / HERO                           -->\n<!-- ============================================== -->\n<div class=\"slide-panel flex flex-col justify-between px-6 sm:px-12 pt-4 sm:pt-6 pb-8 overflow-hidden active-slide\" id=\"slide-0\">\n<!-- Center Huge Display Typography -->\n<div class=\"w-full text-center mt-2 sm:mt-4 select-none pointer-events-none z-10 transition-transform duration-700 ease-out\" id=\"hero-typography-container\" style=\"opacity: 0.9; transform: scale(1);\">\n<h1 class=\"text-[12.5vw] sm:text-[10vw] lg:text-[145px] font-black tracking-tight leading-[0.85] uppercase flex flex-col items-center justify-center font-sans\">\n<span class=\"text-stroke-outline pointer-events-auto transition-transform hover:scale-[1.01] inline-block duration-300\">SAFWAN</span>\n<span class=\"text-[#111113] inline-block transition-transform hover:scale-[1.01] duration-300 pointer-events-auto\">MUHAMMED</span>\n</h1>\n</div>\n<!-- Hero Bottom Content Grid with Dynamic Cutout Portrait Center -->\n<div class=\"relative w-full flex flex-col md:flex-row items-center md:items-end justify-between mt-auto z-20 pt-2 pb-2\">\n<!-- Left: UI/UX Designer & Action -->\n<div class=\"w-full md:w-1/3 text-left mb-6 md:mb-10 z-20 transition-opacity duration-500\">\n<h2 class=\"text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111113]\">UI/UX Designer</h2>\n<p class=\"text-gray-500 text-sm sm:text-[15px] leading-relaxed mt-2 max-w-[280px]\">\n                Designing digital products that are clear, usable, and conversion focused.\n              </p>\n<button class=\"btn-shimmer mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl group\" onclick=\"goToSlide(4)\">\n<span class=\"\">Let's collaborate</span>\n<span class=\"transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1\">\u2197</span>\n</button>\n</div>\n<!-- Center Portrait with Hero Zoom / Minimizing Stage Interaction -->\n<div class=\"portrait-container relative w-full max-w-md flex justify-center -mb-2 mt-0 z-30 group cursor-pointer overflow-hidden portrait-stage-large\" id=\"hero-portrait-box\" onclick=\"toggleHeroState()\" title=\"Click to toggle hero showcase\" style=\"position: absolute; left: calc(65% - 90px); transform: translateX(-50%); bottom: 0px; height: 580px; overflow: visible; align-items: flex-end; justify-content: center; max-width: 620px; z-index: 30; pointer-events: auto;\">\n<div class=\"absolute inset-x-4 bottom-0 h-48 bg-gradient-to-t from-gray-200/70 to-transparent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none\"></div>\n<img alt=\"Safwan Muhammed Portrait\" class=\"portrait-floating relative w-auto max-w-full object-cover object-top h-[460px] sm:h-[510px] lg:h-[540px] contrast-125 brightness-95 filter grayscale transition-all duration-700 ease-out\" id=\"hero-portrait-img\" src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuB_RxsfmLsUMMwjD5Kpo6uWksM3f_J1R5hkqftkTdOE5pViRsHXLYBzg4o6UjxwE7pROR5JCfdDDPXdzaPhC_OVyYpetPBkQ0u2diTUgDNuZLbBlj0sypAj9hXKmtER_TQvziXOQuKLCGRZKq_87nfmMMXUxlSJUltGYRZ3VXK6tfqOLP_Evzky-kme-wiyQAHWxmfaPdHVtyEijU1zCDOfS_e_Z7FmxXPDEXCPgyugMNvcxb3mFO4EKuKFaNt405x4eQ\" style=\"object-position: center top; transform-origin: center bottom 0px; filter: grayscale(100%) contrast(1.1); mask-image: linear-gradient(black 0%, black 85%, transparent 100%); transform: scale(1.12); height: 560px;\">\n</div>\n<!-- Right: Social Links -->\n<div class=\"w-full md:w-1/3 flex flex-row md:flex-col items-center md:items-end justify-center md:justify-end gap-2.5 mb-6 md:mb-10 z-20 flex-wrap\">\n<a class=\"btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group\" href=\"https://dribbble.com\" rel=\"noopener noreferrer\" target=\"_blank\">\n<i class=\"fa-brands fa-dribbble text-pink-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12\"></i>\n<span class=\"\">Dribbble</span>\n</a>\n<a class=\"btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group\" href=\"https://instagram.com\" rel=\"noopener noreferrer\" target=\"_blank\">\n<i class=\"fa-brands fa-instagram text-pink-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12\"></i>\n<span class=\"\">Instagram</span>\n</a>\n<a class=\"btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group\" href=\"https://linkedin.com\" rel=\"noopener noreferrer\" target=\"_blank\">\n<i class=\"fa-brands fa-linkedin-in text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12\"></i>\n<span class=\"\">LinkedIn</span>\n</a>\n<a class=\"btn-shimmer-light flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white/95 hover:bg-gray-50 shadow-sm hover:shadow text-xs sm:text-sm font-medium text-gray-800 hover:border-black transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group\" href=\"https://behance.net\" rel=\"noopener noreferrer\" target=\"_blank\">\n<i class=\"fa-brands fa-behance text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12\"></i>\n<span class=\"\">Behance</span>\n</a>\n</div>\n</div>\n</div>\n<!-- ============================================== -->\n<!-- SLIDE 2: SELECTED WORK                         -->\n<!-- ============================================== -->\n<div class=\"slide-panel flex flex-col justify-start px-6 sm:px-12 lg:px-14 pt-8 pb-10 overflow-y-auto no-scrollbar slide-below\" id=\"slide-1\">\n<!-- Section Header with Watermark -->\n<div class=\"relative text-center mb-6 sm:mb-8 pt-2\">\n<span class=\"absolute left-1/2 -top-4 sm:-top-8 -translate-x-1/2 text-5xl sm:text-7xl lg:text-8xl font-black text-gray-100/90 tracking-widest select-none pointer-events-none uppercase\">\n              PORTFOLIO\n            </span>\n<h2 class=\"relative text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#111113]\">\n              /SELECTED WORK\n            </h2>\n</div>\n<!-- Filters & View All CTA -->\n<div class=\"flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 pb-3 border-b border-gray-200\">\n<div class=\"flex items-center gap-2 text-xs sm:text-sm font-semibold p-1 bg-gray-100 rounded-full border border-gray-200\" id=\"portfolio-filters\">\n<button class=\"filter-btn px-4 py-1 rounded-full bg-black text-white shadow-sm transition-all duration-300\">All</button>\n<button class=\"filter-btn px-4 py-1 rounded-full text-gray-500 hover:text-black transition-all duration-300\">Real Project</button>\n<button class=\"filter-btn px-4 py-1 rounded-full text-gray-500 hover:text-black transition-all duration-300\">Exploration</button>\n</div>\n<button class=\"btn-shimmer-light flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 hover:border-black text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 group\" onclick=\"goToSlide(2)\">\n<span class=\"\">Explore Services</span>\n<span class=\"transition-transform duration-300 group-hover:translate-x-1\">\u2192</span>\n</button>\n</div>\n<!-- Portfolio 2-Card Grid matching SCREEN_2 -->\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pb-4\">\n<!-- Project Card 1: BloomCare -->\n<article class=\"group cursor-pointer\">\n<div class=\"relative bg-zinc-950 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-all duration-500\">\n<div class=\"relative w-[86%] h-[84%] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-xl p-4 border border-zinc-800 flex flex-col items-center justify-between text-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105\">\n<div class=\"flex justify-between w-full text-[11px] text-zinc-400 items-center\">\n<span class=\"font-bold text-white flex items-center gap-1.5\"><span class=\"w-2 h-2 rounded-full bg-pink-500 animate-pulse\"></span>BloomCare</span>\n<span class=\"px-2.5 py-0.5 bg-pink-600/20 text-pink-400 rounded-full text-[10px] font-semibold border border-pink-500/30\">DOWNLOAD APP</span>\n</div>\n<div class=\"my-auto space-y-1 sm:space-y-2\">\n<span class=\"text-[9px] uppercase tracking-wider text-pink-400 font-semibold\">#1 Mental Health Companion</span>\n<h4 class=\"text-white text-sm sm:text-lg font-bold max-w-[240px] leading-tight\">Emotional Engine for <span class=\"text-pink-400 transition-colors group-hover:text-pink-300\">Your Personal Growth</span></h4>\n</div>\n<div class=\"w-32 sm:w-36 h-20 sm:h-24 bg-gradient-to-t from-pink-500/20 via-purple-600/30 to-transparent rounded-t-2xl border-t border-x border-pink-500/40 relative shadow-2xl flex items-center justify-center\">\n<div class=\"w-14 h-1 bg-white/40 rounded-full mb-auto mt-2\"></div>\n</div>\n</div>\n<div class=\"absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none\">\n<span class=\"w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300\">\u2197</span>\n</div>\n</div>\n<div class=\"mt-3\">\n<h3 class=\"text-base sm:text-lg font-bold text-gray-900 group-hover:text-black flex items-center justify-between transition-colors\">\n<span class=\"\">BloomCare - Mental Health App Landing</span>\n<span class=\"text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300\">\u2197</span>\n</h3>\n<div class=\"flex items-center gap-2 mt-2\">\n<span class=\"px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium\">Landing Page</span>\n<span class=\"px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium\">Kumpin Studio</span>\n</div>\n</div>\n</article>\n<!-- Project Card 2: FragWater -->\n<article class=\"group cursor-pointer\">\n<div class=\"relative bg-zinc-900 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center border border-zinc-800 shadow-md group-hover:shadow-2xl transition-all duration-500\">\n<div class=\"relative w-[88%] h-[84%] bg-neutral-900 rounded-lg p-4 border border-neutral-700 flex flex-col justify-between overflow-hidden shadow-inner transition-transform duration-500 ease-out group-hover:scale-105\">\n<div class=\"flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-800 pb-1.5\">\n<span class=\"font-serif tracking-widest text-white text-xs uppercase font-medium\">FragWater</span>\n<div class=\"flex gap-2 text-[10px]\"><span class=\"hover:text-white transition-colors\">Search</span><span class=\"hover:text-white transition-colors\">Bag (0)</span></div>\n</div>\n<div class=\"grid grid-cols-2 gap-3 items-center my-auto\">\n<div class=\"text-left space-y-1\">\n<span class=\"text-[9px] uppercase tracking-wider text-amber-300 font-semibold\">Velxir Parfums</span>\n<h5 class=\"text-white text-xs sm:text-sm font-light uppercase tracking-wider\">Premium Unisex Fragrance</h5>\n</div>\n<div class=\"flex justify-center\">\n<div class=\"w-16 sm:w-20 h-22 sm:h-26 bg-gradient-to-b from-amber-600/40 to-neutral-900 rounded-md border border-amber-500/30 flex items-center justify-center text-amber-200 text-[10px] font-serif shadow-lg\">VELXIR</div>\n</div>\n</div>\n<p class=\"text-[9px] text-neutral-500 italic text-center\">Where Scent Becomes Identity.</p>\n</div>\n<span class=\"absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider text-black uppercase shadow-sm flex items-center gap-1.5\">\n<span class=\"w-1.5 h-1.5 rounded-full bg-emerald-500\"></span>\n                  REAL PROJECT\n                </span>\n<div class=\"absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none\">\n<span class=\"w-11 h-11 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300\">\u2197</span>\n</div>\n</div>\n<div class=\"mt-3\">\n<h3 class=\"text-base sm:text-lg font-bold text-gray-900 group-hover:text-black flex items-center justify-between transition-colors\">\n<span class=\"\">FragWater - Luxury Fragrance Landing</span>\n<span class=\"text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300\">\u2197</span>\n</h3>\n<div class=\"flex items-center gap-2 mt-2\">\n<span class=\"px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium\">Landing Page</span>\n<span class=\"px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600 font-medium\">Kumpin Studio</span>\n</div>\n</div>\n</article>\n</div>\n</div>\n<!-- ============================================== -->\n<!-- SLIDE 3: SERVICE                               -->\n<!-- ============================================== -->\n<div class=\"slide-panel flex flex-col justify-start px-6 sm:px-12 lg:px-14 pt-8 pb-10 overflow-y-auto no-scrollbar slide-below\" id=\"slide-2\">\n<!-- Section Title -->\n<div class=\"flex items-center justify-between mb-8 pb-3 border-b border-gray-200\">\n<h2 class=\"text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111113]\">\n              /SERVICE\n            </h2>\n<span class=\"text-xs sm:text-sm font-medium text-gray-500\">4 Core Capabilities</span>\n</div>\n<!-- Services List -->\n<div class=\"space-y-4\">\n<!-- Service 1: UIUX DESIGN (Highlighted expanded view) -->\n<div class=\"service-card relative bg-[#1c1c1f] text-white rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden shadow-xl border border-zinc-800 transition-all duration-300 group\">\n<div class=\"max-w-md z-10\">\n<span class=\"text-[10px] font-mono tracking-widest text-emerald-400 uppercase\">Primary Specialization</span>\n<h3 class=\"text-2xl sm:text-3xl font-extrabold tracking-tight mt-1\">UIUX DESIGN</h3>\n<p class=\"text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed\">\n                  Designing clear, responsive and scalable interfaces for dashboards, mobile apps, and SaaS platforms.\n                </p>\n</div>\n<!-- Interactive Floating Mobile Mockups -->\n<div class=\"relative md:absolute md:right-20 md:-top-2 w-52 sm:w-56 h-28 sm:h-32 bg-white rounded-xl shadow-2xl p-2 rotate-6 border border-gray-200 hidden sm:flex items-center gap-2 overflow-hidden pointer-events-none transition-all duration-500 group-hover:rotate-2 group-hover:scale-105\">\n<div class=\"flex-1 h-full bg-neutral-50 rounded-lg p-1.5 flex flex-col justify-between border border-gray-100\">\n<span class=\"text-[8px] font-bold text-gray-800\">What to eat?</span>\n<div class=\"w-6 h-6 rounded-full bg-blue-100 mx-auto my-auto flex items-center justify-center text-blue-500 text-[10px]\">\ud83c\udf72</div>\n<div class=\"h-1.5 w-full bg-gray-200 rounded\"></div>\n</div>\n<div class=\"flex-1 h-full bg-blue-50 rounded-lg p-1.5 flex flex-col justify-between border border-blue-100\">\n<span class=\"text-[8px] font-bold text-blue-900\">AI Handle It</span>\n<div class=\"w-6 h-6 rounded-full bg-blue-500 mx-auto my-auto shadow-sm\"></div>\n<div class=\"h-1.5 w-full bg-blue-200 rounded\"></div>\n</div>\n</div>\n<div class=\"self-end md:self-center text-gray-400 p-2\">\n<span class=\"text-xl font-light\">\u2715</span>\n</div>\n</div>\n<!-- Service 2: WEB DESIGN & DEV -->\n<div class=\"group relative flex items-center justify-between py-5 px-4 border-b border-gray-200 cursor-pointer hover:px-6 hover:bg-[#111113] hover:text-white rounded-2xl transition-all duration-300\" onclick=\"goToSlide(4)\">\n<span class=\"text-xl sm:text-2xl font-extrabold text-[#111113] group-hover:text-white uppercase transition-transform duration-300 group-hover:translate-x-2\">\n                WEB DESIGN &amp; DEV\n              </span>\n<span class=\"text-2xl font-light text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300\">\u2197</span>\n</div>\n<!-- Service 3: BRANDING -->\n<div class=\"group relative flex items-center justify-between py-5 px-4 border-b border-gray-200 cursor-pointer hover:px-6 hover:bg-[#111113] hover:text-white rounded-2xl transition-all duration-300\" onclick=\"goToSlide(4)\">\n<span class=\"text-xl sm:text-2xl font-extrabold text-[#111113] group-hover:text-white uppercase transition-transform duration-300 group-hover:translate-x-2\">\n                BRANDING\n              </span>\n<span class=\"text-2xl font-light text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300\">\u2197</span>\n</div>\n<!-- Service 4: MOTIONS & ANIMATIONS -->\n<div class=\"group relative flex items-center justify-between py-5 px-4 cursor-pointer hover:px-6 hover:bg-[#111113] hover:text-white rounded-2xl transition-all duration-300\" onclick=\"goToSlide(4)\">\n<span class=\"text-xl sm:text-2xl font-extrabold text-[#111113] group-hover:text-white uppercase transition-transform duration-300 group-hover:translate-x-2\">\n                MOTIONS &amp; ANIMATIONS\n              </span>\n<span class=\"text-2xl font-light text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300\">\u2197</span>\n</div>\n</div>\n</div>\n<!-- ============================================== -->\n<!-- SLIDE 4: EXPERIENCE                            -->\n<!-- ============================================== -->\n<div class=\"slide-panel flex flex-col justify-start overflow-y-auto no-scrollbar slide-below bg-[#1a1a1a]\" style=\"background: rgba(22, 22, 25, 0.78); backdrop-filter: blur(20px);\" id=\"slide-3\">\n<!-- Obsidian Full Width Card -->\n<div class=\"relative w-full min-h-full px-6 sm:px-12 lg:px-14 pt-8 pb-10 overflow-hidden text-white flex flex-col flex-1\"><div class=\"absolute inset-0 pointer-events-none overflow-hidden z-0 select-none\"><div class=\"absolute inset-0 bg-gradient-to-b from-[#0e0f12]/95 via-[#141519]/90 to-[#0b0c0e]/98\"></div><div class=\"absolute -top-16 -left-12 w-[650px] h-[450px] rounded-full bg-white/[0.07] blur-3xl mix-blend-screen pointer-events-none\"></div><div class=\"absolute top-1/4 -right-16 w-[700px] h-[480px] rounded-full bg-slate-300/[0.06] blur-3xl mix-blend-screen pointer-events-none\"></div><div class=\"absolute -bottom-16 left-1/5 w-[750px] h-[450px] rounded-full bg-white/[0.05] blur-3xl mix-blend-screen pointer-events-none\"></div><svg class=\"absolute inset-0 w-full h-full mix-blend-screen pointer-events-none opacity-25\" preserveAspectRatio=\"none\" viewBox=\"0 0 1000 600\"><defs><filter id=\"cloud-turb-rich\" x=\"0%\" y=\"0%\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.007 0.005\" numOctaves=\"7\" result=\"clouds\"></feTurbulence><feDisplacementMap in=\"SourceGraphic\" in2=\"clouds\" scale=\"60\" xChannelSelector=\"R\" yChannelSelector=\"G\"></feDisplacementMap></filter><linearGradient id=\"rich-cloud-grad-1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#cbd5e1\" stop-opacity=\"0.35\"></stop><stop offset=\"30%\" stop-color=\"#94a3b8\" stop-opacity=\"0.22\"></stop><stop offset=\"65%\" stop-color=\"#64748b\" stop-opacity=\"0.12\"></stop><stop offset=\"100%\" stop-color=\"#1e293b\" stop-opacity=\"0.02\"></stop></linearGradient><linearGradient id=\"rich-cloud-grad-2\" x1=\"100%\" y1=\"10%\" x2=\"0%\" y2=\"90%\"><stop offset=\"0%\" stop-color=\"#cbd5e1\" stop-opacity=\"0.30\"></stop><stop offset=\"35%\" stop-color=\"#94a3b8\" stop-opacity=\"0.18\"></stop><stop offset=\"70%\" stop-color=\"#475569\" stop-opacity=\"0.08\"></stop><stop offset=\"100%\" stop-color=\"#0f172a\" stop-opacity=\"0\"></stop></linearGradient><radialGradient id=\"cloud-puff-1\" cx=\"35%\" cy=\"30%\" r=\"55%\"><stop offset=\"0%\" stop-color=\"#e2e8f0\" stop-opacity=\"0.35\"></stop><stop offset=\"45%\" stop-color=\"#94a3b8\" stop-opacity=\"0.15\"></stop><stop offset=\"100%\" stop-color=\"#000000\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"cloud-puff-2\" cx=\"70%\" cy=\"55%\" r=\"60%\"><stop offset=\"0%\" stop-color=\"#e2e8f0\" stop-opacity=\"0.30\"></stop><stop offset=\"50%\" stop-color=\"#64748b\" stop-opacity=\"0.12\"></stop><stop offset=\"100%\" stop-color=\"#000000\" stop-opacity=\"0\"></stop></radialGradient></defs><g filter=\"url(#cloud-turb-rich)\"><rect x=\"0\" y=\"0\" width=\"1000\" height=\"600\" fill=\"url(#rich-cloud-grad-1)\"></rect><circle cx=\"240\" cy=\"160\" r=\"320\" fill=\"url(#cloud-puff-1)\"></circle><circle cx=\"740\" cy=\"320\" r=\"360\" fill=\"url(#cloud-puff-2)\"></circle><path d=\"M -80,240 Q 240,90 600,270 T 1080,180 L 1080,600 L -80,600 Z\" fill=\"url(#rich-cloud-grad-2)\"></path></g></svg><div class=\"absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-[#0a0a0c]/50 pointer-events-none\"></div></div>\n<!-- Background Display Typography Watermark -->\n<div class=\"absolute left-6 sm:left-10 top-5 select-none pointer-events-none z-10\"><span class=\"text-5xl sm:text-7xl lg:text-[96px] font-black tracking-tight text-white/[0.08] uppercase leading-none font-display\">EXPERIENCE</span></div>\n<!-- Header Row -->\n<div class=\"relative z-10 flex items-baseline justify-between mb-8 sm:mb-12\">\n<h2 class=\"text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white flex items-center font-sans\">\n    /EXPERIENCE\n  </h2>\n<span class=\"text-xs sm:text-sm font-medium text-zinc-400 tracking-normal\">\n    9+ years of experience\n  </span>\n</div>\n<!-- Experience Rows List -->\n<div class=\"relative z-10 flex flex-col\">\n<!-- Row 1: Kumpin Studio + Floating Phone Mockup & Cursor -->\n<div class=\"group relative flex items-center justify-between py-4 sm:py-5 border-b border-zinc-800/90 transition-colors duration-200 hover:bg-white/[0.02] px-2 -mx-2 rounded-lg cursor-pointer\">\n<div class=\"flex flex-col z-10\">\n<h3 class=\"text-base sm:text-[17px] font-medium text-white group-hover:text-emerald-400 transition-colors\">Kumpin Studio</h3>\n<p class=\"text-xs sm:text-sm text-zinc-400 font-normal mt-0.5\">UI/UX &amp; Product Designer</p>\n</div>\n<!-- Floating Mockup Trio -->\n<div class=\"absolute left-[42%] sm:left-[48%] -top-10 sm:-top-14 z-30 pointer-events-none hidden md:flex items-center gap-1.5 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1\">\n<!-- Mouse Cursor Icon -->\n<div class=\"mr-1 filter drop-shadow-md text-white select-none\">\n<svg class=\"w-4 h-4 fill-white stroke-black stroke-[1.2]\" viewBox=\"0 0 24 24\">\n<path d=\"M4 2l16 12-7 1.5 4.5 7.5-3 1.5-4.5-7.5-6 5.5z\"></path>\n</svg>\n</div>\n<!-- Tilted 3-phone app mockup card -->\n<div class=\"floating-mockup-animate bg-zinc-900/95 border border-zinc-700/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-md flex items-center gap-2\">\n<!-- Phone Screen 1: Dashboard Analytics -->\n<div class=\"w-16 h-28 bg-[#121214] rounded-xl border border-zinc-700/60 p-1 flex flex-col justify-between overflow-hidden shadow-inner\">\n<div class=\"flex justify-between items-center px-0.5 pt-0.5\">\n<span class=\"w-2.5 h-1 bg-zinc-600 rounded-full\"></span>\n<span class=\"text-[6px] text-zinc-400\">9:41</span>\n</div>\n<div class=\"space-y-1 my-auto\">\n<div class=\"h-1.5 w-6 bg-pink-500/80 rounded\"></div>\n<div class=\"flex items-end justify-between h-9 gap-0.5 pt-2\">\n<div class=\"w-1.5 h-4 bg-zinc-700 rounded-sm\"></div>\n<div class=\"w-1.5 h-6 bg-zinc-600 rounded-sm\"></div>\n<div class=\"w-1.5 h-8 bg-pink-500 rounded-sm\"></div>\n<div class=\"w-1.5 h-5 bg-amber-400 rounded-sm\"></div>\n<div class=\"w-1.5 h-7 bg-emerald-400 rounded-sm\"></div>\n</div>\n</div>\n<div class=\"h-1.5 w-full bg-zinc-800 rounded\"></div>\n</div>\n<!-- Phone Screen 2: Central Dark UI card -->\n<div class=\"w-16 h-28 bg-black rounded-xl border border-zinc-600/80 p-1 flex flex-col justify-between overflow-hidden shadow-inner -translate-y-1\">\n<div class=\"flex justify-between items-center px-0.5 pt-0.5\">\n<span class=\"w-3 h-1 bg-zinc-500 rounded-full mx-auto\"></span>\n</div>\n<div class=\"space-y-1 my-auto text-center px-0.5\">\n<div class=\"w-5 h-5 mx-auto rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-[7px]\">\u26a1</div>\n<div class=\"h-1.5 w-8 bg-white/70 rounded mx-auto\"></div>\n<div class=\"h-1 w-10 bg-zinc-700 rounded mx-auto\"></div>\n</div>\n<div class=\"flex gap-1 justify-center pb-0.5\">\n<div class=\"w-3 h-3 bg-zinc-800 rounded\"></div>\n<div class=\"w-3 h-3 bg-zinc-800 rounded\"></div>\n<div class=\"w-3 h-3 bg-zinc-800 rounded\"></div>\n</div>\n</div>\n<!-- Phone Screen 3: Settings & Tasks -->\n<div class=\"w-16 h-28 bg-[#161618] rounded-xl border border-zinc-700/60 p-1 flex flex-col justify-between overflow-hidden shadow-inner\">\n<div class=\"flex justify-between items-center px-0.5 pt-0.5\">\n<div class=\"w-2 h-1 bg-zinc-600 rounded-full\"></div>\n<div class=\"w-1.5 h-1.5 bg-emerald-400 rounded-full\"></div>\n</div>\n<div class=\"space-y-1.5 my-auto px-0.5\">\n<div class=\"flex items-center justify-between\">\n<span class=\"h-1 w-5 bg-zinc-400 rounded\"></span>\n<span class=\"h-1 w-2 bg-pink-500 rounded\"></span>\n</div>\n<div class=\"h-2 w-full bg-zinc-800 rounded-sm\"></div>\n<div class=\"h-2 w-full bg-pink-500/20 rounded-sm border border-pink-500/30\"></div>\n<div class=\"h-2 w-full bg-zinc-800 rounded-sm\"></div>\n</div>\n<div class=\"h-1.5 w-6 bg-pink-500 rounded mx-auto\"></div>\n</div>\n</div>\n</div>\n<!-- Date Range -->\n<div class=\"text-xs sm:text-sm text-zinc-400 font-normal\">\n      Nov 2025 - Now\n    </div>\n</div>\n<!-- Row 2: Mikan Team -->\n<div class=\"group relative flex items-center justify-between py-4 sm:py-5 border-b border-zinc-800/90 transition-colors duration-200 hover:bg-white/[0.02] px-2 -mx-2 rounded-lg cursor-pointer\">\n<div class=\"flex flex-col\">\n<h3 class=\"text-base sm:text-[17px] font-medium text-white group-hover:text-emerald-400 transition-colors\">Mikan Team</h3>\n<p class=\"text-xs sm:text-sm text-zinc-400 font-normal mt-0.5\">Creative Director</p>\n</div>\n<div class=\"text-xs sm:text-sm text-zinc-400 font-normal\">\n      Aug 2025 - Now\n    </div>\n</div>\n<!-- Row 3: Microsoft -->\n<div class=\"group relative flex items-center justify-between py-4 sm:py-5 border-b border-zinc-800/90 transition-colors duration-200 hover:bg-white/[0.02] px-2 -mx-2 rounded-lg cursor-pointer\">\n<div class=\"flex flex-col\">\n<h3 class=\"text-base sm:text-[17px] font-medium text-white group-hover:text-emerald-400 transition-colors\">Microsoft</h3>\n<p class=\"text-xs sm:text-sm text-zinc-400 font-normal mt-0.5\">Interaction Designer</p>\n</div>\n<div class=\"text-xs sm:text-sm text-zinc-400 font-normal\">\n      Jan 2022 - Aug 2025\n    </div>\n</div>\n<!-- Row 4: Facebook -->\n<div class=\"group relative flex items-center justify-between py-4 sm:py-5 border-b border-zinc-800/90 transition-colors duration-200 hover:bg-white/[0.02] px-2 -mx-2 rounded-lg cursor-pointer\">\n<div class=\"flex flex-col\">\n<h3 class=\"text-base sm:text-[17px] font-medium text-white group-hover:text-emerald-400 transition-colors\">Facebook</h3>\n<p class=\"text-xs sm:text-sm text-zinc-400 font-normal mt-0.5\">Visual Designer</p>\n</div>\n<div class=\"text-xs sm:text-sm text-zinc-400 font-normal\">\n      Mar 2019 - Dec 2021\n    </div>\n</div>\n<!-- Row 5: Apple -->\n<div class=\"group relative flex items-center justify-between py-4 sm:py-5 transition-colors duration-200 hover:bg-white/[0.02] px-2 -mx-2 rounded-lg cursor-pointer\">\n<div class=\"flex flex-col\">\n<h3 class=\"text-base sm:text-[17px] font-medium text-white group-hover:text-emerald-400 transition-colors\">Apple</h3>\n<p class=\"text-xs sm:text-sm text-zinc-400 font-normal mt-0.5\">Experience Designer</p>\n</div>\n<div class=\"text-xs sm:text-sm text-zinc-400 font-normal\">\n      Feb 2017 - Feb 2019\n    </div>\n</div>\n</div>\n</div>\n</div>\n<!-- ============================================== -->\n<!-- SLIDE 5: CONTACT                               -->\n<!-- ============================================== -->\n<div class=\"slide-panel flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-16 py-10 overflow-y-auto no-scrollbar relative slide-below\" id=\"slide-4\">\n<!-- Glowing status badge -->\n<div class=\"relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gray-300 bg-white shadow-sm text-xs sm:text-sm font-medium text-gray-700 mb-6 transition-transform hover:scale-105 cursor-default hover:shadow-glow-green\">\n<span class=\"relative flex h-2.5 w-2.5\">\n<span class=\"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75\"></span>\n<span class=\"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]\"></span>\n</span>\n            Available for New Project\n          </div>\n<!-- Main Title -->\n<h2 class=\"relative z-10 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111113] uppercase max-w-2xl leading-tight\">\n            HAVE A PROJECT IN MIND?\n          </h2>\n<!-- Description -->\n<p class=\"relative z-10 text-gray-500 text-xs sm:text-base max-w-lg mt-3 sm:mt-4 leading-relaxed font-normal\">\n            Together, we can create something clear and impactful. Let's collaborate to bring our ideas to life in a way that resonates with everyone.\n          </p>\n<!-- Interactive Scope Chips -->\n<div class=\"flex flex-wrap items-center justify-center gap-2 mt-5 max-w-lg\">\n<span class=\"px-3 py-1 rounded-full text-xs font-semibold bg-black text-white cursor-pointer hover:opacity-90\">UI/UX Design</span>\n<span class=\"px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer\">Design Systems</span>\n<span class=\"px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer\">Brand Identity</span>\n<span class=\"px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 cursor-pointer\">Web Development</span>\n</div>\n<!-- Email Action CTA -->\n<div class=\"relative z-10 mt-6 sm:mt-8 flex items-center justify-center\">\n<a class=\"btn-shimmer inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#111113] hover:bg-black text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group\" href=\"mailto:safwan.muhammed@example.com\">\n<span class=\"\">Contact Me</span>\n<span class=\"transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1\">\u2197</span>\n</a>\n</div>\n<!-- Bottom Profile / Identity Row -->\n<div class=\"relative z-10 mt-10 pt-6 border-t border-gray-100 w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3\">\n<div class=\"flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111113] text-white text-xs sm:text-sm font-medium shadow-sm cursor-default\">\n<img alt=\"Safwan\" class=\"w-5 h-5 rounded-full object-cover grayscale ring-1 ring-white/30\" src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuCz9A13h3Snn17VTpJrWP4aTMkUjtf8MYkkb6mGVViEOsSgR3p7UY3R7pZqPaVZdcl6VgA2R5r5HGuQeQDemFaMkV45EcH8vjmoXodWcyLDU6xMUB3cGlknOlFU_Nu7xIgys29A8mgQ-Cu8nldImbKk5bszdDWSXfJZtv1Y5CJfsyD7qb8YejXTl3amHQfx_bPIMoZpgXjm9tiOgN__Wq1Y--VV59Bm2TOHAp_8z9qvyh1CYMS3DohVUfyhe5dE9PXjRA\">\n<span class=\"\">Safwan Muhammed</span>\n</div>\n<a class=\"btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300\" href=\"https://dribbble.com\" target=\"_blank\">\n<i class=\"fa-brands fa-dribbble text-pink-600\"></i>\n<span class=\"\">Dribbble</span>\n</a>\n<a class=\"btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300\" href=\"https://instagram.com\" target=\"_blank\">\n<i class=\"fa-brands fa-instagram text-pink-500\"></i>\n<span class=\"\">Instagram</span>\n</a>\n<a class=\"btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300\" href=\"https://linkedin.com\" target=\"_blank\">\n<i class=\"fa-brands fa-linkedin-in text-blue-600\"></i>\n<span class=\"\">LinkedIn</span>\n</a>\n<a class=\"btn-shimmer-light flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium text-gray-800 transition-all duration-300\" href=\"https://behance.net\" target=\"_blank\">\n<i class=\"fa-brands fa-behance text-blue-500\"></i>\n<span class=\"\">Behance</span>\n</a>\n</div>\n</div>\n</div>\n</main>\n</div>\n</div>\n<!-- Minimal Outer Copyright -->\n<div class=\"text-center py-3 text-xs text-neutral-600 font-medium\">\n<p class=\"\">\u00a9 2026 Safwan Muhammed. All rights reserved.</p>\n</div>\n</div>\n";

export default function Page() {
  useEffect(() => {
    let currentSlide = 0;
    const totalSlides = 5;
    let heroStage = 0;

    const slidePanels = document.querySelectorAll('.slide-panel');
    const navTabs = document.querySelectorAll('.nav-tab-btn');
    const mainWindowFrame = document.getElementById('main-window-frame');
    const staticHeader = document.getElementById('static-header');
    const heroPortraitBox = document.getElementById('hero-portrait-box');
    const heroTypographyContainer = document.getElementById('hero-typography-container');

    let isThrottled = false;
    const TRANSITION_DURATION = 450;

    function updateHeroAppearance() {
      if (!heroPortraitBox) return;
      if (heroStage === 0) {
        heroPortraitBox.classList.remove('portrait-stage-compact');
        heroPortraitBox.classList.add('portrait-stage-large');
        if (heroTypographyContainer) {
          heroTypographyContainer.style.opacity = '0.9';
          heroTypographyContainer.style.transform = 'scale(1)';
        }
      } else {
        heroPortraitBox.classList.remove('portrait-stage-large');
        heroPortraitBox.classList.add('portrait-stage-compact');
        if (heroTypographyContainer) {
          heroTypographyContainer.style.opacity = '1';
          heroTypographyContainer.style.transform = 'scale(1.02)';
        }
      }
    }

    function toggleHeroState() {
      if (currentSlide !== 0) return;
      heroStage = (heroStage === 0) ? 1 : 0;
      updateHeroAppearance();
    }

    function goToHomeState(targetHeroStage: number) {
      if (currentSlide !== 0) {
        heroStage = (targetHeroStage !== undefined) ? targetHeroStage : 0;
        goToSlide(0);
      } else if (targetHeroStage !== undefined && heroStage !== targetHeroStage) {
        heroStage = targetHeroStage;
        updateHeroAppearance();
      }
    }

    function updateThemeForSlide(index: number) {
      const isDark = (index === 3);
      if (isDark) {
        mainWindowFrame?.classList.add('dark-theme-active');
        if (mainWindowFrame) mainWindowFrame.style.backgroundColor = '#161619';
        staticHeader?.classList.remove('bg-white/90', 'border-zinc-200/80');
        staticHeader?.classList.add('bg-[#18181b]/95', 'border-neutral-800', 'text-white');
      } else {
        mainWindowFrame?.classList.remove('dark-theme-active');
        if (mainWindowFrame) mainWindowFrame.style.backgroundColor = '#ffffff';
        staticHeader?.classList.add('bg-white/90', 'border-zinc-200/80');
        staticHeader?.classList.remove('bg-[#18181b]/95', 'border-neutral-800', 'text-white');
      }

      // Hide navbar for screens other than home screen (index 0)
      if (staticHeader) {
        if (index === 0) {
          staticHeader.style.display = 'flex';
        } else {
          staticHeader.style.display = 'none';
        }
      }
    }

    function goToSlide(index: number) {
      if (index < 0) index = 0;
      if (index >= totalSlides) index = totalSlides - 1;
      currentSlide = index;

      slidePanels.forEach((panel, i) => {
        panel.classList.remove('active-slide', 'slide-above', 'slide-below');
        if (i === currentSlide) {
          panel.classList.add('active-slide');
        } else if (i < currentSlide) {
          panel.classList.add('slide-above');
        } else {
          panel.classList.add('slide-below');
        }
      });

      navTabs.forEach((tab) => {
        const idx = parseInt(tab.getAttribute('data-slide-index') || '0', 10);
        const indicator = tab.querySelector('.nav-indicator');
        const isDark = (currentSlide === 3);

        if (idx === currentSlide) {
          tab.className = `nav-tab-btn relative px-3 py-1 font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`;
          if (indicator) {
            indicator.className = `nav-indicator absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-300 ${isDark ? 'bg-emerald-400' : 'bg-black'}`;
          }
        } else {
          tab.className = `nav-tab-btn relative px-3 py-1 transition-colors duration-300 ${isDark ? 'text-neutral-400 hover:text-white' : 'text-gray-500 hover:text-black'}`;
          if (indicator) {
            indicator.className = 'nav-indicator absolute bottom-0 left-2 right-2 h-[2px] bg-transparent rounded-full transition-all duration-300';
          }
        }
      });

      updateThemeForSlide(currentSlide);
    }

    // Bind functions to window so inline onclicks work
    // @ts-expect-error - binding global functions for inline onclicks
    window.goToSlide = goToSlide;
    // @ts-expect-error - binding global functions for inline onclicks
    window.goToHomeState = goToHomeState;
    // @ts-expect-error - binding global functions for inline onclicks
    window.toggleHeroState = toggleHeroState;

    function handleWheelTransition(delta: number) {
      if (isThrottled) return;
      const threshold = 10;
      if (Math.abs(delta) < threshold) return;

      if (delta > 0) {
        if (currentSlide === 0 && heroStage === 0) {
          isThrottled = true;
          heroStage = 1;
          updateHeroAppearance();
          setTimeout(() => { isThrottled = false; }, 350);
        } else if (currentSlide < totalSlides - 1) {
          isThrottled = true;
          goToSlide(currentSlide + 1);
          setTimeout(() => { isThrottled = false; }, TRANSITION_DURATION);
        }
      } else {
        if (currentSlide === 0 && heroStage === 1) {
          isThrottled = true;
          heroStage = 0;
          updateHeroAppearance();
          setTimeout(() => { isThrottled = false; }, 350);
        } else if (currentSlide > 0) {
          isThrottled = true;
          goToSlide(currentSlide - 1);
          if (currentSlide === 0) {
            heroStage = 1;
            updateHeroAppearance();
          }
          setTimeout(() => { isThrottled = false; }, TRANSITION_DURATION);
        }
      }
    }

    const handleWheel = (e: WheelEvent) => {
      const scrollable = (e.target as HTMLElement).closest('.overflow-y-auto');
      if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 2;
        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }
      e.preventDefault();
      const dominantDelta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      handleWheelTransition(dominantDelta);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    const handleTouchEnd = (e: TouchEvent) => {
      if (isThrottled) return;
      const touchEndY = e.changedTouches[0].screenY;
      const diffY = touchStartY - touchEndY;
      if (Math.abs(diffY) > 35) {
        handleWheelTransition(diffY);
      }
    };
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key) && !e.shiftKey) {
        e.preventDefault();
        handleWheelTransition(50);
      } else if (['ArrowUp', 'PageUp'].includes(e.key) || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        handleWheelTransition(-50);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    heroStage = 0;
    updateHeroAppearance();
    goToSlide(0);

    const filterButtons = document.querySelectorAll('#portfolio-filters .filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterButtons.forEach(b => {
          b.className = 'filter-btn px-4 py-1 rounded-full text-gray-500 hover:text-black transition-all duration-300';
        });
        btn.className = 'filter-btn px-4 py-1 rounded-full bg-black text-white shadow-sm transition-all duration-300';
      });
    });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      // @ts-expect-error - cleaning up global functions
      delete window.goToSlide;
      // @ts-expect-error - cleaning up global functions
      delete window.goToHomeState;
      // @ts-expect-error - cleaning up global functions
      delete window.toggleHeroState;
    };
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cover bg-top"
        style={{ backgroundImage: "url('/cloud-bg.jpg')" }}
      ></div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="relative z-10 w-full flex justify-center items-center h-full" />
    </>
  );
}
