import Image from 'next/image';
import Link from 'next/link';

interface Category {
  name: string;
  image: string;
  href: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    name: '건담',
    image: 'http://gundamfactory.godohosting.com/new/main_slide/circle_1.jpg',
    href: '/category/gundam',
    itemCount: 1250,
  },
  {
    name: '피규어',
    image: 'http://gundamfactory.godohosting.com/new/main_slide/circle_2.jpg',
    href: '/category/figure',
    itemCount: 890,
  },
  {
    name: '캐릭터 프라모델',
    image: 'http://gundamfactory.godohosting.com/new/main_slide/circle_4.jpg',
    href: '/category/character',
    itemCount: 456,
  },
  {
    name: '초합금',
    image: 'http://gundamfactory.godohosting.com/new/main_slide/circle_5.jpg',
    href: '/category/chogokin',
    itemCount: 234,
  },
  {
    name: '도색용품',
    image: 'http://gundamfactory.godohosting.com/new/main_slide/circle_6.jpg',
    href: '/category/painting',
    itemCount: 567,
  },
  {
    name: '조립용품',
    image: 'http://gundamfactory.godohosting.com/new/main_slide/section_3.jpg',
    href: '/category/tools',
    itemCount: 345,
  },
];

export default function CategorySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">카테고리</h2>
          <Link href="/categories" className="text-sm text-[#e94560] hover:underline flex items-center gap-1">
            전체보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group"
            >
              <div className="category-card aspect-square mb-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="overlay">
                  <span className="category-name">{category.name}</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-medium group-hover:text-[#e94560] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.itemCount.toLocaleString()}개 상품
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
