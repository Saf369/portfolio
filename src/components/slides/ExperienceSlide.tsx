import React from 'react';

interface ExperienceSlideProps {
  isActive: boolean;
  isAbove: boolean;
  isBelow: boolean;
}

export default function ExperienceSlide({ isActive, isAbove, isBelow }: ExperienceSlideProps) {
  const containerClass = `slide-panel flex flex-col justify-start overflow-y-auto no-scrollbar bg-[#222222] ${
    isActive ? 'active-slide' : isAbove ? 'slide-above' : 'slide-below'
  }`;

  return (
    <div
      className={containerClass}
      style={{ zIndex: isActive ? 20 : 10 }}
      id="slide-3"
    >
      {/* Flat Dark Card Content */}
      <div className="relative w-full min-h-full px-6 sm:px-12 lg:px-14 pt-12 pb-10 overflow-hidden text-white flex flex-col flex-1 z-10">
        
        {/* Background Display Typography Watermark */}
        <div className="absolute left-6 sm:left-10 top-6 select-none pointer-events-none z-0">
          <span className="text-5xl sm:text-7xl lg:text-[110px] font-black tracking-tight text-white/[0.03] uppercase leading-none font-display">
            EXPERIENCE
          </span>
        </div>

        {/* Header Row */}
        <div className="relative z-10 flex items-end justify-between mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white flex items-center">
            /EXPERIENCE
          </h2>
          <span className="text-sm sm:text-base font-light text-gray-300 pb-1">
            9+ years of experience
          </span>
        </div>

        {/* Experience Rows List */}
        <div className="relative z-10 flex flex-col space-y-0">
          {/* Row 1: Kumpin Studio + Floating Phone Mockup & Cursor */}
          <div className="group relative flex items-center justify-between py-6 sm:py-8 border-b border-gray-600/30 transition-colors duration-200 hover:bg-white/[0.02] -mx-4 px-4 rounded-sm cursor-pointer">
            <div className="flex flex-col z-10">
              <h3 className="text-lg sm:text-[22px] font-normal text-white group-hover:text-gray-200 transition-colors">
                Kumpin Studio
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light mt-1.5">
                UI/UX &amp; Product Designer
              </p>
            </div>

            {/* Floating Mockup Trio & Cursor */}
            <div className="absolute right-40 sm:right-64 -top-8 sm:-top-10 z-30 pointer-events-none hidden md:flex items-center gap-2 transition-transform duration-500 ease-out group-hover:scale-105 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
              {/* Mouse Cursor Icon */}
              <div className="mr-2 filter drop-shadow-md text-white select-none translate-y-4">
                <svg className="w-5 h-5 fill-white stroke-black stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M4 2l16 12-7 1.5 4.5 7.5-3 1.5-4.5-7.5-6 5.5z"></path>
                </svg>
              </div>
              
              {/* Tilted 3-phone app mockup card - Sourced from CSS mockup in service slide */}
              <div className="floating-mockup-animate transform rotate-[8deg] flex items-center justify-center gap-1 bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/20 shadow-2xl">
                 {/* Phone 1 */}
                 <div className="w-[50px] h-[100px] bg-white rounded-[6px] p-1 flex flex-col justify-start shadow-md border border-gray-100 transform -rotate-[4deg] translate-y-1">
                   <div className="w-full h-1 bg-gray-100 rounded-full mb-1"></div>
                   <div className="flex-1 w-full rounded-[2px] flex flex-col items-center justify-center gap-1 border border-gray-50 bg-gray-50">
                     <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                     <div className="h-1 w-8 bg-gray-200 rounded-full"></div>
                     <div className="h-1 w-full bg-white mt-auto"></div>
                   </div>
                 </div>
                 {/* Phone 2 (Center) */}
                 <div className="w-[54px] h-[106px] bg-white rounded-[6px] p-1 flex flex-col justify-start shadow-xl border border-gray-100 z-20">
                   <div className="w-full h-1 bg-gray-100 rounded-full mb-1 flex justify-center"><div className="w-2 h-1 bg-gray-300 rounded-full"></div></div>
                   <div className="flex-1 w-full rounded-[2px] flex flex-col items-center justify-center gap-1 border border-gray-50 bg-gray-900">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
                     <div className="h-1 w-8 bg-gray-700 rounded-full mt-1"></div>
                     <div className="h-3 w-full bg-gray-800 mt-auto rounded-[2px]"></div>
                   </div>
                 </div>
                 {/* Phone 3 */}
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
            </div>

            {/* Date Range */}
            <div className="text-sm sm:text-[15px] text-gray-400 font-light">Nov 2025 - Now</div>
          </div>

          {/* Row 2: Mikan Team */}
          <div className="group relative flex items-center justify-between py-6 sm:py-8 border-b border-gray-600/30 transition-colors duration-200 hover:bg-white/[0.02] -mx-4 px-4 rounded-sm cursor-pointer">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-[22px] font-normal text-white group-hover:text-gray-200 transition-colors">
                Mikan Team
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light mt-1.5">Creative Director</p>
            </div>
            <div className="text-sm sm:text-[15px] text-gray-400 font-light">Aug 2025 - Now</div>
          </div>

          {/* Row 3: Microsoft */}
          <div className="group relative flex items-center justify-between py-6 sm:py-8 border-b border-gray-600/30 transition-colors duration-200 hover:bg-white/[0.02] -mx-4 px-4 rounded-sm cursor-pointer">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-[22px] font-normal text-white group-hover:text-gray-200 transition-colors">
                Microsoft
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light mt-1.5">
                Interaction Designer
              </p>
            </div>
            <div className="text-sm sm:text-[15px] text-gray-400 font-light">Jan 2022 - Aug 2025</div>
          </div>

          {/* Row 4: Facebook */}
          <div className="group relative flex items-center justify-between py-6 sm:py-8 border-b border-gray-600/30 transition-colors duration-200 hover:bg-white/[0.02] -mx-4 px-4 rounded-sm cursor-pointer">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-[22px] font-normal text-white group-hover:text-gray-200 transition-colors">
                Facebook
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light mt-1.5">Visual Designer</p>
            </div>
            <div className="text-sm sm:text-[15px] text-gray-400 font-light">Mar 2019 - Dec 2021</div>
          </div>

          {/* Row 5: Apple */}
          <div className="group relative flex items-center justify-between py-6 sm:py-8 transition-colors duration-200 hover:bg-white/[0.02] -mx-4 px-4 rounded-sm cursor-pointer">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-[22px] font-normal text-white group-hover:text-gray-200 transition-colors">
                Apple
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light mt-1.5">
                Experience Designer
              </p>
            </div>
            <div className="text-sm sm:text-[15px] text-gray-400 font-light">Feb 2017 - Feb 2019</div>
          </div>
        </div>
      </div>
    </div>
  );
}
