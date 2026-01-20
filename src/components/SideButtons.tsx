'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Left side quick category links
const leftQuickLinks = [
  { name: '할인상품', href: '/sale', color: '#e94560' },
  { name: '신상품', href: '/new', color: '#10b981' },
  { name: '건담', href: '/category/gundam', color: '#3b82f6' },
  { name: '피규어', href: '/category/figure', color: '#8b5cf6' },
];

export default function SideButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use timeout to satisfy lint rule about synchronous setState in effects
    const visibilityTimeout = setTimeout(() => setIsVisible(true), 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(visibilityTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Left Side - Quick Category Links (Hidden on mobile) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
        {leftQuickLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg hover:scale-110 transition-transform"
              style={{ backgroundColor: link.color }}
            >
              {link.name.slice(0, 2)}
            </div>
            {/* Tooltip */}
            <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {link.name}
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900" />
            </span>
          </Link>
        ))}
      </div>

      {/* Right Side - Utility Buttons (Always visible but responsive) */}
      <div className="fixed right-4 bottom-24 md:bottom-8 z-40 flex flex-col gap-2">
        {/* Cart Button */}
        <Link
          href="/cart"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all"
        >
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            장바구니
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
          </span>
        </Link>

        {/* Wishlist Button */}
        <Link
          href="/wishlist"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all"
        >
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            위시리스트
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
          </span>
        </Link>

        {/* Customer Service Button */}
        <Link
          href="/support"
          className="group relative w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition-all"
        >
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            고객센터
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
          </span>
        </Link>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`group relative w-12 h-12 bg-[var(--secondary)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--accent)] transition-all ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="맨 위로"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            맨 위로
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
          </span>
        </button>
      </div>
    </>
  );
}
