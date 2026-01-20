import HeroSlider from '@/components/HeroSlider';
import CategorySection from '@/components/CategorySection';
import ProductCard from '@/components/ProductCard';
import PromoSection from '@/components/PromoSection';
import BrandShowcase from '@/components/BrandShowcase';
import NoticeSection from '@/components/NoticeSection';
import Link from 'next/link';

// Sample product data using actual images and names from hobbyfactory.kr
const newProducts = [
  {
    id: '1',
    name: '[반다이][MGSD] 002 건담 발바토스',
    price: 58500,
    originalPrice: 65000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000766.jpg',
    badge: 'new' as const,
    category: '건담 > MGSD',
  },
  {
    id: '2',
    name: '[반다이][RG] 017 윙 건담 제로 커스텀',
    price: 33600,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000198.jpg',
    badge: 'new' as const,
    category: '건담 > RG',
  },
  {
    id: '3',
    name: '[반다이][PG] 012 건담 더블오 라이저',
    price: 275000,
    originalPrice: 320000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009015000044.jpg',
    badge: 'sale' as const,
    category: '건담 > PG',
  },
  {
    id: '4',
    name: '[반다이][HG UC] 217 시난주 스타인 (네러티브 Ver.)',
    price: 33600,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009003000651.jpg',
    category: '건담 > HGUC',
  },
  {
    id: '5',
    name: '[반다이][MG] 162 뉴 건담 Ver.Ka',
    price: 88800,
    originalPrice: 99000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000702.jpg',
    badge: 'sale' as const,
    category: '건담 > MG',
  },
];

const figureProducts = [
  {
    id: '6',
    name: '[GOOD SMILE][넨도로이드] 미사이드 미타',
    price: 65000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005009000025.jpg',
    badge: 'hot' as const,
    category: '피규어 > 넨도로이드',
  },
  {
    id: '7',
    name: '[GOOD SMILE][넨도로이드] 세계지외 이우',
    price: 71000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005009000024.jpg',
    category: '피규어 > 넨도로이드',
  },
  {
    id: '8',
    name: '[GOOD SMILE] 블루 아카이브 타카나시 호시노 1/7',
    price: 215000,
    originalPrice: 250000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005010000006.jpg',
    badge: 'sale' as const,
    category: '피규어 > 스케일',
  },
  {
    id: '9',
    name: '[GOOD SMILE] 블루 아카이브 히요리 (수영복) 1/7',
    price: 253000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005020000004.jpg',
    badge: 'new' as const,
    category: '피규어 > 스케일',
  },
  {
    id: '10',
    name: '[성환중공][에반게리온] YAGR-3B 공격기',
    price: 198000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005020000003.jpg',
    badge: 'hot' as const,
    category: '피규어 > 완성품',
  },
];

const bestProducts = [
  {
    id: '11',
    name: '[반다이][RG] 019 건담 아스트레이 레드 프레임',
    price: 33600,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000154.jpg',
    badge: 'hot' as const,
    category: '건담 > RG',
  },
  {
    id: '12',
    name: '[반다이][HG GT] 010 사이코 자쿠',
    price: 37700,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009006001036.jpg',
    badge: 'hot' as const,
    category: '건담 > HG',
  },
  {
    id: '13',
    name: '[반다이][RG] 018 건담 더블오 라이저',
    price: 36300,
    originalPrice: 42000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000207.jpg',
    badge: 'sale' as const,
    category: '건담 > RG',
  },
  {
    id: '14',
    name: '[반다이][MG] 150 건담 헤비암즈 EW',
    price: 50400,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000499.jpg',
    category: '건담 > MG',
  },
  {
    id: '15',
    name: '[반다이][MG] 159 버스터 건담',
    price: 48000,
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000749.jpg',
    category: '건담 > MG',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-4 md:py-6">
        <HeroSlider />
      </section>

      {/* Promo & Quick Access */}
      <PromoSection />

      {/* Category Section */}
      <CategorySection />

      {/* New Products */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-5 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold">신상품</h2>
            <Link href="/new" className="text-xs md:text-sm text-[#e94560] hover:underline flex items-center gap-1">
              전체보기
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Notice Section */}
      <NoticeSection />

      {/* Figure Products */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-5 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold">인기 피규어</h2>
            <Link href="/category/figure" className="text-xs md:text-sm text-[#e94560] hover:underline flex items-center gap-1">
              전체보기
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-5 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold">베스트셀러</h2>
            <Link href="/best" className="text-xs md:text-sm text-[#e94560] hover:underline flex items-center gap-1">
              전체보기
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Features Bar - Mobile Optimized Grid */}
      <section className="py-6 md:py-8 border-y border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#e94560] font-bold text-base md:text-lg">무료배송</p>
              <p className="text-gray-500 text-xs md:text-sm">5만원 이상 구매시</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[#e94560] font-bold text-base md:text-lg">100% 정품</p>
              <p className="text-gray-500 text-xs md:text-sm">공식 수입 제품</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[#e94560] font-bold text-base md:text-lg">교환/환불</p>
              <p className="text-gray-500 text-xs md:text-sm">7일 이내 가능</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[#e94560] font-bold text-base md:text-lg">고객센터</p>
              <p className="text-gray-500 text-xs md:text-sm">1588-0000</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Banner - Mobile Optimized */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                하비팩토리 앱으로<br />
                더 편하게 쇼핑하세요
              </h2>
              <p className="text-gray-300 text-sm md:text-base mb-5 md:mb-6">
                앱 전용 할인 쿠폰과 실시간 알림을 받아보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.makeshop.powerapp.sunwootnd2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1a1a2e] hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
                >
                  Google Play
                </a>
                <a
                  href="#"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e] font-bold px-6 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
                >
                  App Store
                </a>
              </div>
            </div>
            {/* Stats - Visible on mobile too */}
            <div className="flex items-center gap-6 md:gap-8 mt-4 md:mt-0">
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-[#e94560]">10%</p>
                <p className="text-xs md:text-sm text-gray-300">앱 첫 구매 할인</p>
              </div>
              <div className="w-px h-12 md:h-16 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-[#e94560]">5,000+</p>
                <p className="text-xs md:text-sm text-gray-300">앱 다운로드</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
