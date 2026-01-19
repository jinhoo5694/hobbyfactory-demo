'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: 'new' | 'sale' | 'hot';
  category?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  badge,
  category,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  const formatPrice = (value: number) => {
    return value.toLocaleString('ko-KR');
  };

  return (
    <div className="card product-card group">
      <Link href={`/product/${id}`}>
        <div className="product-image relative">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-contain p-2 md:p-4"
            unoptimized
          />
          {badge && (
            <span className={`badge badge-${badge} absolute top-2 left-2 md:top-3 md:left-3 text-[10px] md:text-xs`}>
              {badge === 'new' && 'NEW'}
              {badge === 'sale' && `${discount}%`}
              {badge === 'hot' && 'HOT'}
            </span>
          )}
        </div>
      </Link>

      {/* Quick actions - Hidden on mobile for cleaner look */}
      <div className="product-actions hidden sm:flex">
        <button
          className="action-btn"
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist logic
          }}
          aria-label="위시리스트에 추가"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button
          className="action-btn"
          onClick={(e) => {
            e.preventDefault();
            // Quick view logic
          }}
          aria-label="빠른보기"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>

      {/* Product info */}
      <div className="p-3 md:p-4">
        {category && (
          <p className="text-[10px] md:text-xs text-gray-500 mb-1 truncate">{category}</p>
        )}
        <Link href={`/product/${id}`}>
          <h3 className="font-medium text-xs md:text-sm mb-1.5 md:mb-2 line-clamp-2 group-hover:text-[#e94560] transition-colors min-h-[32px] md:min-h-[40px]">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
          <span className="text-sm md:text-lg font-bold text-[#e94560]">{formatPrice(price)}원</span>
          {originalPrice && (
            <span className="text-[10px] md:text-sm text-gray-400 line-through">{formatPrice(originalPrice)}원</span>
          )}
        </div>

        {/* Add to cart button */}
        <button
          className="w-full mt-2 md:mt-3 py-1.5 md:py-2 bg-gray-100 hover:bg-[#e94560] hover:text-white rounded-lg text-xs md:text-sm font-medium transition-all duration-200 active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            // Add to cart logic
          }}
        >
          장바구니
        </button>
      </div>
    </div>
  );
}
