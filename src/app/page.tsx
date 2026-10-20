"use client";
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HomeSlide from '@/components/slides/HomeSlide';
import WorkSlide from '@/components/slides/WorkSlide';
import ServiceSlide from '@/components/slides/ServiceSlide';
import ExperienceSlide from '@/components/slides/ExperienceSlide';
import ContactSlide from '@/components/slides/ContactSlide';

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroStage, setHeroStage] = useState(0);

  const isThrottledRef = useRef(false);
  const currentSlideRef = useRef(0);
  const heroStageRef = useRef(0);

  const TRANSITION_DURATION = 450;
  const totalSlides = 5;

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    heroStageRef.current = heroStage;
  }, [heroStage]);

  useEffect(() => {
    document.documentElement.classList.add('home-slider-mode');
    document.body.classList.add('home-slider-mode');

    // Support deep-linking to slides via ?slide=1, ?slide=2, etc.
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const slideParam = params.get('slide');
      if (slideParam !== null) {
        const idx = parseInt(slideParam, 10);
        if (!isNaN(idx) && idx >= 0 && idx < totalSlides) {
          setCurrentSlide(idx);
        }
      }
    }

    return () => {
      document.documentElement.classList.remove('home-slider-mode');
      document.body.classList.remove('home-slider-mode');
    };
  }, []);

  const toggleHeroState = () => {
    setHeroStage((prev) => (prev === 0 ? 1 : 0));
  };

  const goToSlide = (index: number) => {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    setCurrentSlide(index);
  };

  const goToHomeState = (stage: number) => {
    goToSlide(0);
    setHeroStage(stage);
  };

  useEffect(() => {
    function handleWheelTransition(delta: number) {
      if (isThrottledRef.current) return;
      const threshold = 10;
      if (Math.abs(delta) < threshold) return;

      const slide = currentSlideRef.current;

      if (delta > 0) {
        if (slide < totalSlides - 1) {
          isThrottledRef.current = true;
          goToSlide(slide + 1);
          setTimeout(() => {
            isThrottledRef.current = false;
          }, TRANSITION_DURATION);
        }
      } else {
        if (slide > 0) {
          isThrottledRef.current = true;
          goToSlide(slide - 1);
          setTimeout(() => {
            isThrottledRef.current = false;
          }, TRANSITION_DURATION);
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

    const handleTouchMove = (e: TouchEvent) => {
      const scrollable = (e.target as HTMLElement).closest('.overflow-y-auto');
      const touchEndY = e.changedTouches[0].screenY;
      const deltaY = touchStartY - touchEndY;

      if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 2;
        if (deltaY > 0 && !atBottom) return;
        if (deltaY < 0 && !atTop) return;
      }
      
      // Avoid preventing default for small taps to allow click events
      if (Math.abs(deltaY) > 5 && e.cancelable) {
        e.preventDefault();
      }
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    const handleTouchEnd = (e: TouchEvent) => {
      const scrollable = (e.target as HTMLElement).closest('.overflow-y-auto');
      const touchEndY = e.changedTouches[0].screenY;
      const deltaY = touchStartY - touchEndY;

      // If releasing touch inside a scrollable area, verify we are actually at the boundary
      if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 2;
        if (deltaY > 0 && !atBottom) return;
        if (deltaY < 0 && !atTop) return;
      }

      // Require a minimum swipe distance of 40px on mobile to trigger a slide transition
      if (Math.abs(deltaY) > 40) {
        handleWheelTransition(deltaY);
      }
    };
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const isDark = currentSlide === 2;
  
  // On mobile: h-dvh, rounded-none, border-0, shadow-none, max-h-none. Expands to all sides.
  // On desktop: contained rounded card with frosted glass border wrapper.
  const mainWindowClass = `window-card-container relative overflow-hidden flex flex-col h-dvh sm:h-[calc(100dvh-3rem)] lg:h-[calc(100dvh-4rem)] max-h-none sm:max-h-[860px] w-full transition-all duration-500 rounded-none sm:rounded-[32px] border-0 sm:border shadow-none sm:shadow-sm ${
    isDark ? 'dark-theme-active' : ''
  }`;
  const mainWindowStyle = { backgroundColor: isDark ? '#161619' : '#ffffff' };

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-cover bg-top" style={{ backgroundImage: "url('/cloud-bg.jpg')" }}></div>
      <div className="relative z-10 w-full min-h-dvh flex justify-center items-center h-full">
        {/* Main Outer Static Window Container */}
        <div className="w-full sm:max-w-[1240px] flex-1 flex flex-col justify-center my-auto relative z-10 h-dvh sm:h-auto">
          {/* OUTER FROSTED GLASS BORDER WRAPPER */}
          <div
            className="p-0 sm:p-4 lg:p-5 rounded-none sm:rounded-[44px] bg-transparent sm:bg-white/20 sm:backdrop-blur-xl sm:shadow-2xl border-0 sm:border sm:border-white/40 w-full h-full sm:h-auto flex flex-col transition-all duration-500"
            id="main-window-wrapper"
          >
            {/* THE STATIC WINDOW FRAME */}
            <div className={mainWindowClass} id="main-window-frame" style={mainWindowStyle}>
              {/* FIXED STATIC HEADER BAR */}
              <div style={{ display: currentSlide === 0 ? 'block' : 'none' }}>
                <Header currentSlide={currentSlide} goToSlide={goToSlide} goToHomeState={goToHomeState} />
              </div>

              {/* SLIDING VIEWPORT */}
              <main className="relative flex-1 w-full overflow-hidden select-text rounded-none sm:rounded-b-[32px]" id="slider-viewport">
                <div className="relative w-full h-full" id="inner-slider-track">
                  <HomeSlide
                    isActive={currentSlide === 0}
                    isAbove={currentSlide > 0}
                    isBelow={currentSlide < 0}
                    heroStage={heroStage}
                    toggleHeroState={toggleHeroState}
                    goToSlide={goToSlide}
                  />
                  <WorkSlide
                    isActive={currentSlide === 1}
                    isAbove={currentSlide > 1}
                    isBelow={currentSlide < 1}
                    goToSlide={goToSlide}
                  />
                  <ExperienceSlide
                    isActive={currentSlide === 2}
                    isAbove={currentSlide > 2}
                    isBelow={currentSlide < 2}
                  />
                  <ServiceSlide
                    isActive={currentSlide === 3}
                    isAbove={currentSlide > 3}
                    isBelow={currentSlide < 3}
                    goToSlide={goToSlide}
                  />
                  <ContactSlide
                    isActive={currentSlide === 4}
                    isAbove={currentSlide > 4}
                    isBelow={currentSlide < 4}
                  />
                </div>
              </main>
            </div>
            {/* Minimal Outer Copyright - hidden on mobile to give full screen to content */}
            <div className="hidden sm:block text-center py-3 text-xs text-neutral-600 font-medium">
              <p className="">© 2026 Safwan Muhammed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
