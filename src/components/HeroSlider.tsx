'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroCard {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  buttonText: string;
  bgColor: string;
  textColor: string;
  image: string;
}

// Image codes from hobbyfactory.kr
const heroCards: HeroCard[] = [
  {
    id: 1,
    title: '신상품 입고',
    subtitle: 'MGSD 건담 발바토스',
    link: '/new',
    buttonText: '신상품 보기',
    bgColor: 'bg-gradient-to-r from-[#1a1a2e] to-[#16213e]',
    textColor: 'text-white',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000766.jpg',
  },
  {
    id: 2,
    title: '특가 할인',
    subtitle: 'RG 아스트레이 레드 프레임',
    link: '/sale',
    buttonText: '할인 상품 보기',
    bgColor: 'bg-gradient-to-r from-[#e94560] to-[#ff6b6b]',
    textColor: 'text-white',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000154.jpg',
  },
  {
    id: 3,
    title: '인기 피규어',
    subtitle: '넨도로이드 미사이드 미타',
    link: '/best',
    buttonText: '인기 상품 보기',
    bgColor: 'bg-gradient-to-r from-[#0f3460] to-[#16213e]',
    textColor: 'text-white',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005009000025.jpg',
  },
];

export default function HeroSlider() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
      {heroCards.map((card, index) => (
        <Link
          key={card.id}
          href={card.link}
          className={`group relative ${index === 0 ? 'sm:col-span-2 md:col-span-1' : ''}`}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            className={`relative overflow-hidden rounded-2xl h-[180px] sm:h-[220px] md:h-[300px] transition-all duration-300 ${
              hoveredCard === card.id ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'
            }`}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 ${card.bgColor}`} />

            {/* Product Image - Full bleed with proper sizing */}
            <div className="absolute inset-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                unoptimized
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className={`relative z-10 h-full flex flex-col p-4 sm:p-5 md:p-6 ${card.textColor}`}>
              {/* Subtitle */}
              <span className="text-[10px] sm:text-xs font-bold tracking-widest opacity-80 mb-1">
                {card.subtitle}
              </span>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                {card.title}
              </h2>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Button */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit group-hover:bg-white/30 transition-all duration-300">
                {card.buttonText}
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
