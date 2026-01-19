'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: '건담', href: '/category/gundam', subcategories: ['PG', 'MG', 'RG', 'HGUC', 'SD/BB', 'HG', '완성품'] },
  { name: '캐릭터 프라모델', href: '/category/character', subcategories: ['반다이', '굿스마일', '고토부키야', '하세가와'] },
  { name: '스케일 프라모델', href: '/category/scale', subcategories: ['AERO', 'SHIP', 'AUTO', 'A.F.V', '미니카'] },
  { name: '피규어', href: '/category/figure', subcategories: ['반프레스토', '반다이', '메가하우스', '굿스마일'] },
  { name: '초합금', href: '/category/chogokin', subcategories: ['SR초합금', '초합금혼', 'DX초합금'] },
  { name: '도색용품', href: '/category/painting', subcategories: ['도료', '마감재', '에어브러쉬'] },
  { name: '조립용품', href: '/category/tools', subcategories: ['니퍼', '접착제', '사포'] },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Top bar */}
        <div className="bg-[#1a1a2e] text-white text-sm py-2 hidden md:block">
          <div className="container flex justify-between items-center">
            <p>건담, 프라모델, 피규어 전문 쇼핑몰 - 하비팩토리</p>
            <div className="flex gap-4">
              <Link href="/login" className="hover:text-[#e94560] transition-colors">로그인</Link>
              <Link href="/register" className="hover:text-[#e94560] transition-colors">회원가입</Link>
              <Link href="/mypage" className="hover:text-[#e94560] transition-colors">마이페이지</Link>
              <Link href="/orders" className="hover:text-[#e94560] transition-colors">주문조회</Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="http://gundamfactory.godohosting.com/new/main_slide/logo.jpg"
                alt="하비팩토리"
                width={180}
                height={50}
                className="h-10 md:h-12 w-auto"
                unoptimized
              />
            </Link>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full px-4 py-3 pl-12 bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-[#e94560] focus:outline-none transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Mobile search toggle */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="검색"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="hidden sm:flex p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                aria-label="위시리스트"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#e94560] text-white text-xs rounded-full flex items-center justify-center">3</span>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                aria-label="장바구니"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#e94560] text-white text-xs rounded-full flex items-center justify-center">5</span>
              </Link>

              {/* User - Desktop only */}
              <Link
                href="/mypage"
                className="hidden lg:flex p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="마이페이지"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile search bar */}
          {searchOpen && (
            <div className="md:hidden mt-4 animate-fade-in">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full px-4 py-3 bg-gray-100 rounded-full border-none focus:ring-2 focus:ring-[#e94560] focus:outline-none"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Category navigation - Desktop */}
        <nav className="hidden lg:block border-t border-gray-200">
          <div className="container">
            <ul className="flex items-center justify-center gap-1">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    href={category.href}
                    className="block px-5 py-4 font-medium hover:text-[#e94560] transition-colors"
                  >
                    {category.name}
                  </Link>
                  {activeCategory === category.name && category.subcategories && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg py-2 min-w-[160px] animate-fade-in z-50">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`${category.href}/${sub.toLowerCase()}`}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#e94560] transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/sale"
                  className="block px-5 py-4 font-medium text-[#e94560] hover:text-[#c73e54] transition-colors"
                >
                  SALE
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay lg:hidden ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-white z-50 transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <Image
            src="http://gundamfactory.godohosting.com/new/main_slide/logo.jpg"
            alt="하비팩토리"
            width={140}
            height={40}
            className="h-8 w-auto"
            unoptimized
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="메뉴 닫기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-2">
            <Link href="/login" className="flex-1 btn btn-primary text-sm">로그인</Link>
            <Link href="/register" className="flex-1 btn btn-outline text-sm">회원가입</Link>
          </div>
        </div>

        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-160px)]">
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="block px-4 py-3 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/sale"
                className="block px-4 py-3 font-medium text-[#e94560] hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SALE
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
