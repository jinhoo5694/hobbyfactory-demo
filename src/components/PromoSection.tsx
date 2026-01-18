import Image from 'next/image';
import Link from 'next/link';

export default function PromoSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Promo 1 - Sale */}
          <Link
            href="/sale"
            className="relative aspect-[16/9] rounded-2xl overflow-hidden group"
          >
            <Image
              src="http://gundamfactory.godohosting.com/new/main_slide/section_1.jpg"
              alt="특가 상품"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e94560]/90 to-transparent flex items-center">
              <div className="p-6 text-white">
                <span className="badge badge-sale mb-2">SALE</span>
                <h3 className="text-2xl font-bold mb-2">특가 상품</h3>
                <p className="text-white/80 text-sm">최대 50% 할인</p>
              </div>
            </div>
          </Link>

          {/* Promo 2 - New Arrivals */}
          <Link
            href="/new"
            className="relative aspect-[16/9] rounded-2xl overflow-hidden group"
          >
            <Image
              src="http://gundamfactory.godohosting.com/new/main_slide/section_2.jpg"
              alt="신상품"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#16213e]/90 to-transparent flex items-center">
              <div className="p-6 text-white">
                <span className="badge badge-new mb-2">NEW</span>
                <h3 className="text-2xl font-bold mb-2">신상품 입고</h3>
                <p className="text-white/80 text-sm">매주 업데이트</p>
              </div>
            </div>
          </Link>

          {/* Promo 3 - Best Sellers */}
          <Link
            href="/best"
            className="relative aspect-[16/9] rounded-2xl overflow-hidden group md:col-span-2 lg:col-span-1"
          >
            <Image
              src="http://gundamfactory.godohosting.com/new/main_slide/section_4.jpg"
              alt="베스트셀러"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f3460]/90 to-transparent flex items-center">
              <div className="p-6 text-white">
                <span className="badge badge-hot mb-2">BEST</span>
                <h3 className="text-2xl font-bold mb-2">베스트셀러</h3>
                <p className="text-white/80 text-sm">인기 상품 모음</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
