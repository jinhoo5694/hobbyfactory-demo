'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/main_rolling2_191.jpg',
    title: '신상품 입고',
    subtitle: '최신 건담 프라모델을 만나보세요',
    link: '/category/gundam',
    buttonText: '바로가기',
  },
  {
    id: 2,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/main_rolling2_186.jpg',
    title: '인기 피규어',
    subtitle: '다양한 캐릭터 피규어 특가 판매',
    link: '/category/figure',
    buttonText: '쇼핑하기',
  },
  {
    id: 3,
    image: 'http://gundamfactory.godohosting.com/new/main_slide/section_1.jpg',
    title: '프리미엄 컬렉션',
    subtitle: '한정판 아이템을 놓치지 마세요',
    link: '/sale',
    buttonText: '지금 보기',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="hero-slider relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full absolute inset-0'
                : 'opacity-0 translate-x-full absolute inset-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={1400}
              height={600}
              className="w-full h-full object-cover"
              priority={index === 0}
              unoptimized
            />
            <div className="hero-content">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 text-gray-200 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="btn btn-primary animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  {slide.buttonText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all text-white"
        aria-label="이전 슬라이드"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all text-white"
        aria-label="다음 슬라이드"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
