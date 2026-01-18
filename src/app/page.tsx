import HeroSlider from '@/components/HeroSlider';
import CategorySection from '@/components/CategorySection';
import ProductCard from '@/components/ProductCard';
import PromoSection from '@/components/PromoSection';
import BrandShowcase from '@/components/BrandShowcase';
import Link from 'next/link';

// Sample product data using actual images from hobbyfactory.kr
const newProducts = [
  {
    id: '1',
    name: 'MG 1/100 프리덤 건담 Ver.2.0',
    price: 52000,
    originalPrice: 65000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000766.jpg',
    badge: 'new' as const,
    category: '건담 > MG',
  },
  {
    id: '2',
    name: 'RG 1/144 윙 건담 제로 EW',
    price: 38000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000198.jpg',
    badge: 'new' as const,
    category: '건담 > RG',
  },
  {
    id: '3',
    name: 'PG 1/60 유니콘 건담 LED 유닛',
    price: 185000,
    originalPrice: 220000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009015000044.jpg',
    badge: 'sale' as const,
    category: '건담 > PG',
  },
  {
    id: '4',
    name: 'HGUC 1/144 뉴 건담',
    price: 28000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009003000651.jpg',
    category: '건담 > HGUC',
  },
  {
    id: '5',
    name: 'MG 1/100 더블오 라이저',
    price: 68000,
    originalPrice: 85000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000702.jpg',
    badge: 'sale' as const,
    category: '건담 > MG',
  },
];

const figureProducts = [
  {
    id: '6',
    name: 'S.H.Figuarts 스파이더맨 노 웨이 홈',
    price: 89000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005009000025.jpg',
    badge: 'hot' as const,
    category: '피규어 > 반다이',
  },
  {
    id: '7',
    name: 'POP UP PARADE 귀멸의 칼날 탄지로',
    price: 45000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005009000024.jpg',
    category: '피규어 > 굿스마일',
  },
  {
    id: '8',
    name: 'Figuarts ZERO 원피스 루피 기어5',
    price: 78000,
    originalPrice: 95000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005010000006.jpg',
    badge: 'sale' as const,
    category: '피규어 > 반다이',
  },
  {
    id: '9',
    name: '넨도로이드 주술회전 고죠 사토루',
    price: 62000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005020000004.jpg',
    badge: 'new' as const,
    category: '피규어 > 굿스마일',
  },
  {
    id: '10',
    name: 'METAL BUILD 프리덤 건담 컨셉 2',
    price: 285000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005020000003.jpg',
    badge: 'hot' as const,
    category: '피규어 > 반다이',
  },
];

const bestProducts = [
  {
    id: '11',
    name: 'RG 1/144 사자비',
    price: 48000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000154.jpg',
    badge: 'hot' as const,
    category: '건담 > RG',
  },
  {
    id: '12',
    name: 'HG 1/144 에어리얼',
    price: 22000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009006001036.jpg',
    badge: 'hot' as const,
    category: '건담 > HG',
  },
  {
    id: '13',
    name: 'RG 1/144 하이뉴 건담',
    price: 52000,
    originalPrice: 60000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000207.jpg',
    badge: 'sale' as const,
    category: '건담 > RG',
  },
  {
    id: '14',
    name: 'MG 1/100 바르바토스',
    price: 58000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000499.jpg',
    category: '건담 > MG',
  },
  {
    id: '15',
    name: 'MG 1/100 데스티니 건담',
    price: 62000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000749.jpg',
    category: '건담 > MG',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-6">
        <HeroSlider />
      </section>

      {/* Quick Category Links */}
      <section className="container py-4">
        <div className="flex flex-wrap justify-center gap-3">
          {['신상품', '베스트', '특가', '건담', '피규어', '초합금', '도색용품'].map((item) => (
            <Link
              key={item}
              href={`/category/${item}`}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-[#e94560] hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* Promo Banners */}
      <PromoSection />

      {/* Category Section */}
      <CategorySection />

      {/* New Products */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">신상품</h2>
            <Link href="/new" className="text-sm text-[#e94560] hover:underline flex items-center gap-1">
              전체보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="product-grid">
            {newProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Figure Products */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">인기 피규어</h2>
            <Link href="/category/figure" className="text-sm text-[#e94560] hover:underline flex items-center gap-1">
              전체보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="product-grid">
            {figureProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">베스트셀러</h2>
            <Link href="/best" className="text-sm text-[#e94560] hover:underline flex items-center gap-1">
              전체보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="product-grid">
            {bestProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#e94560]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e94560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">무료배송</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">5만원 이상 무료배송</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#e94560]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e94560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">정품 보장</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">100% 정품만 취급</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#e94560]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e94560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">교환/환불</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">7일 이내 교환/환불</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#e94560]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e94560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">고객지원</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">친절한 상담 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <section className="section bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                하비팩토리 앱으로<br />
                더 편하게 쇼핑하세요
              </h2>
              <p className="text-gray-300 mb-6">
                앱 전용 할인 쿠폰과 실시간 알림을 받아보세요
              </p>
              <div className="flex gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.makeshop.powerapp.sunwootnd2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </a>
                <a href="#" className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1a1a2e]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  App Store
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-48 h-48 bg-white/10 rounded-3xl flex items-center justify-center">
                <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
