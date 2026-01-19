import Image from 'next/image';
import Link from 'next/link';

interface Brand {
  name: string;
  logo: string;
  href: string;
}

const brands: Brand[] = [
  {
    name: 'Hot Toys',
    logo: '/design/sunwootnd2/skin2/common/img_quickL_3.gif',
    href: '/brand/hottoys',
  },
  {
    name: 'Bandai',
    logo: '/design/sunwootnd2/skin2/common/bandai.jpg',
    href: '/brand/bandai',
  },
  {
    name: 'Good Smile',
    logo: '/design/sunwootnd2/skin2/common/goodsmile.jpg',
    href: '/brand/goodsmile',
  },
  {
    name: 'Kotobukiya',
    logo: '/design/sunwootnd2/skin2/common/img_quickL_6.gif',
    href: '/brand/kotobukiya',
  },
  {
    name: 'Banpresto',
    logo: '/design/sunwootnd2/skin2/common/img_quickL_8.gif',
    href: '/brand/banpresto',
  },
  {
    name: 'Megahouse',
    logo: '/design/sunwootnd2/skin2/common/img_quickL_12.gif',
    href: '/brand/megahouse',
  },
];

// Using product images from hobbyfactory.kr for franchises
const franchises = [
  {
    name: 'RG 시리즈',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009007000198.jpg', // RG 윙건담
    href: '/category/gundam/rg',
  },
  {
    name: 'MG 시리즈',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009001000499.jpg', // MG 헤비암즈
    href: '/category/gundam/mg',
  },
  {
    name: 'PG 시리즈',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/009015000044.jpg', // PG 더블오
    href: '/category/gundam/pg',
  },
  {
    name: '넨도로이드',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005009000024.jpg', // 넨도로이드
    href: '/category/figure/nendoroid',
  },
  {
    name: '스케일 피규어',
    image: 'http://www.hobbyfactory.kr/shopimages/sunwootnd2/005010000006.jpg', // 블루아카이브
    href: '/category/figure/scale',
  },
];

export default function BrandShowcase() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Popular Series Banners */}
        <div className="mb-12">
          <h2 className="section-title mb-8">인기 시리즈</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {franchises.map((franchise) => (
              <Link
                key={franchise.name}
                href={franchise.href}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <Image
                  src={franchise.image}
                  alt={franchise.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        <div>
          <h2 className="section-title mb-8">공식 브랜드</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="bg-white rounded-xl p-4 flex items-center justify-center aspect-[3/2] hover:shadow-lg transition-all group"
              >
                <Image
                  src={`http://www.hobbyfactory.kr${brand.logo}`}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain brand-logo group-hover:filter-none group-hover:opacity-100"
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
