import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-16">
      {/* Newsletter section */}
      <div className="border-b border-gray-700 bg-gradient-to-r from-[#1a1a2e] to-[#252545]">
        <div className="container pt-16 pb-12 md:pt-20 md:pb-16">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">뉴스레터 구독</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-md">
                신상품 소식과 특별 할인 정보를 이메일로 받아보세요
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full max-w-lg gap-3">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-5 py-4 bg-gray-800/50 rounded-xl border border-gray-600 focus:ring-2 focus:ring-[#e94560] focus:border-transparent focus:outline-none text-white placeholder-gray-400 text-sm md:text-base"
              />
              <button className="px-8 py-4 bg-[#e94560] hover:bg-[#c73e54] text-white font-bold rounded-xl transition-colors whitespace-nowrap text-sm md:text-base">
                구독하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company info - spans 2 cols on mobile */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="http://gundamfactory.godohosting.com/new/main_slide/logo.jpg"
              alt="하비팩토리"
              width={150}
              height={40}
              className="h-8 md:h-10 w-auto mb-3 md:mb-4 brightness-0 invert"
              unoptimized
            />
            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
              건담, 프라모델, 피규어의 강자<br />
              당신의 취미생활을 위한 모든 것
            </p>
            <div className="flex gap-2 md:gap-3">
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e94560] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e94560] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e94560] transition-colors"
                aria-label="Naver Blog"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="hidden md:block">
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">쇼핑안내</h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">
              <li><Link href="/guide/order" className="hover:text-white transition-colors">주문/결제 안내</Link></li>
              <li><Link href="/guide/shipping" className="hover:text-white transition-colors">배송 안내</Link></li>
              <li><Link href="/guide/return" className="hover:text-white transition-colors">교환/반품 안내</Link></li>
              <li><Link href="/guide/points" className="hover:text-white transition-colors">적립금 안내</Link></li>
              <li><Link href="/guide/coupon" className="hover:text-white transition-colors">쿠폰 안내</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="hidden md:block">
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">카테고리</h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-400 text-xs md:text-sm">
              <li><Link href="/category/gundam" className="hover:text-white transition-colors">건담</Link></li>
              <li><Link href="/category/figure" className="hover:text-white transition-colors">피규어</Link></li>
              <li><Link href="/category/character" className="hover:text-white transition-colors">캐릭터 프라모델</Link></li>
              <li><Link href="/category/chogokin" className="hover:text-white transition-colors">초합금</Link></li>
              <li><Link href="/category/tools" className="hover:text-white transition-colors">조립/도색 용품</Link></li>
            </ul>
          </div>

          {/* Customer service - spans 2 cols on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">고객센터</h4>
            <div className="text-2xl md:text-3xl font-bold text-[#e94560] mb-1 md:mb-2">1588-0000</div>
            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
              평일 10:00 - 18:00 | 토/일/공휴일 휴무
            </p>
            <div className="flex sm:flex-col gap-2">
              <Link href="/board/qna" className="flex-1 sm:flex-none text-center px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg text-xs md:text-sm transition-colors">1:1 문의</Link>
              <Link href="/board/faq" className="flex-1 sm:flex-none text-center px-4 py-2 bg-gray-700 text-white hover:bg-gray-600 rounded-lg text-xs md:text-sm transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
              <Link href="/privacy" className="hover:text-white transition-colors font-bold">개인정보처리방침</Link>
              <Link href="/about" className="hover:text-white transition-colors">회사소개</Link>
            </div>
            <p className="text-center md:text-right text-[10px] md:text-sm">
              © 2024 하비팩토리. All rights reserved.
            </p>
          </div>
          <div className="mt-3 md:mt-4 text-[10px] md:text-xs text-gray-500 text-center md:text-left">
            <p>상호명: (주)하비팩토리 | 대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p className="hidden md:block">주소: 서울특별시 마포구 홍대입구역 1번 출구</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
