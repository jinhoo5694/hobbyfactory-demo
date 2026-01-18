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

const franchises = [
  {
    name: 'Marvel',
    image: 'http://gundamfactory.godohosting.com/new//main_slide/marvel.jpg',
    href: '/franchise/marvel',
  },
  {
    name: 'DC',
    image: 'http://gundamfactory.godohosting.com/new//main_slide/dc.jpg',
    href: '/franchise/dc',
  },
  {
    name: 'Star Wars',
    image: 'http://gundamfactory.godohosting.com/new//main_slide/starwars.jpg',
    href: '/franchise/starwars',
  },
  {
    name: 'Spider-Man',
    image: 'http://gundamfactory.godohosting.com/new//main_slide/spider.jpg',
    href: '/franchise/spiderman',
  },
  {
    name: 'Deadpool',
    image: 'http://gundamfactory.godohosting.com/new//main_slide/deadpool.jpg',
    href: '/franchise/deadpool',
  },
];

export default function BrandShowcase() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        {/* Franchise Banners */}
        <div className="mb-12">
          <h2 className="section-title mb-8">인기 프랜차이즈</h2>
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
                className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center aspect-[3/2] hover:shadow-lg transition-all group"
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
