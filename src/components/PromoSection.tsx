'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Quick access category buttons with product images from hobbyfactory.kr
const quickCategories = [
  {
    name: 'RG',
    count: 1250,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000154.jpg', // RG 아스트레이 레드 프레임
    href: '/category/gundam/rg'
  },
  {
    name: '넨도로이드',
    count: 890,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005009000025.jpg', // 넨도로이드 미사이드 미타
    href: '/category/figure'
  },
  {
    name: 'MGSD',
    count: 234,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000766.jpg', // MGSD 건담 발바토스
    href: '/category/gundam/mgsd'
  },
  {
    name: 'HG',
    count: 567,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009006001036.jpg', // HG GT 사이코 자쿠
    href: '/category/gundam/hg'
  },
];

// Calculate time remaining until midnight in Korea (KST, UTC+9)
function getTimeUntilMidnightKST() {
  const now = new Date();

  // Get current time in Korea
  const koreaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));

  // Calculate midnight tonight in Korea
  const midnightKorea = new Date(koreaTime);
  midnightKorea.setHours(24, 0, 0, 0);

  // Get the difference in milliseconds
  const diff = midnightKorea.getTime() - koreaTime.getTime();

  // Convert to hours, minutes, seconds
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

export default function PromoSection() {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  // Countdown timer effect - counts down to midnight Korean time
  useEffect(() => {
    // Update immediately (via interval with initial call)
    const updateTime = () => setTimeLeft(getTimeUntilMidnightKST());

    // Set initial time via timeout to satisfy lint rule
    const initialTimeout = setTimeout(updateTime, 0);

    // Then update every second
    const timer = setInterval(updateTime, 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="py-8">
      <div className="container">
        {/* Flash Sale Banner - Mobile Optimized */}
        <div className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] rounded-2xl p-5 md:p-8 mb-6 md:mb-8">
          <div className="flex flex-col items-center gap-5 md:gap-6">
            {/* Header with live indicator */}
            <div className="text-white text-center w-full">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-medium">LIVE</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold mb-1">
                오늘의 특가 타임세일
              </h2>
              <p className="text-white/80 text-sm md:text-base hidden sm:block">
                매일 자정에 새로운 할인 상품이 업데이트됩니다
              </p>
            </div>

            {/* Countdown - Compact on mobile */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-[#e94560]">
                    {timeLeft ? String(timeLeft.hours).padStart(2, '0') : '--'}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs text-white/80 mt-1 block">시간</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">:</span>
              <div className="text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-[#e94560]">
                    {timeLeft ? String(timeLeft.minutes).padStart(2, '0') : '--'}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs text-white/80 mt-1 block">분</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">:</span>
              <div className="text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-[#e94560]">
                    {timeLeft ? String(timeLeft.seconds).padStart(2, '0') : '--'}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs text-white/80 mt-1 block">초</span>
              </div>
            </div>

            {/* CTA Button - Full width on mobile */}
            <Link
              href="/sale"
              className="w-full sm:w-auto bg-white text-[#e94560] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl text-center transition-colors text-sm md:text-base"
            >
              할인 상품 보기
            </Link>
          </div>
        </div>

        {/* Quick Category Access with Images - Blur Effect Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {quickCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image - fills the entire card */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
                unoptimized
              />

              {/* Blur Overlay - blurred by default, clears on hover */}
              <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

              {/* Category Info - Overlay at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-xl md:text-2xl text-white mb-1 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {category.count.toLocaleString()}개 상품
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-[#e94560] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
