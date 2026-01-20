'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'shipping' | 'reviews'>('description');

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const formatPrice = (value: number) => {
    return value.toLocaleString('ko-KR');
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-3">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[var(--primary)]">홈</Link>
            <span className="mx-2">/</span>
            <span>{product.categoryPath}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container py-6 md:py-10">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="p-4 md:p-8 bg-gray-50">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  unoptimized
                  priority
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 badge badge-${product.badge}`}>
                    {product.badge === 'new' && 'NEW'}
                    {product.badge === 'sale' && `${discount}% OFF`}
                    {product.badge === 'hot' && 'HOT'}
                  </span>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? 'border-[var(--primary)]'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain bg-white"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 md:p-8">
              {/* Brand & Category */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-[var(--primary)]">{product.brand}</span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>

              {/* Product Name */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* SKU */}
              <p className="text-sm text-gray-400 mb-4">
                상품코드: {product.sku}
              </p>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6">
                <span className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                  {formatPrice(product.price)}원
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}원
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-bold rounded">
                      {discount}% 할인
                    </span>
                  </>
                )}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.scale && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">스케일:</span>
                    <span className="font-medium">{product.scale}</span>
                  </div>
                )}
                {product.size && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">크기:</span>
                    <span className="font-medium">{product.size}</span>
                  </div>
                )}
                {product.material && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">재질:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                )}
                {product.releaseDate && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">출시:</span>
                    <span className="font-medium">{product.releaseDate}</span>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.stock > 0 ? (
                  <>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-green-600 font-medium">재고 있음</span>
                    <span className="text-sm text-gray-400">({product.stock}개)</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-sm text-red-600 font-medium">품절</span>
                  </>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-gray-600">수량:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  총 <span className="font-bold text-[var(--primary)]">{formatPrice(product.price * quantity)}원</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 btn btn-primary py-4 text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  장바구니
                </button>
                <button className="flex-1 btn btn-secondary py-4 text-base">
                  바로 구매
                </button>
                <button className="w-14 h-14 flex items-center justify-center border-2 border-gray-300 rounded-xl hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Shipping Info Quick */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <div className="text-sm">
                    <p className="font-medium text-gray-700">배송비 3,000원</p>
                    <p className="text-gray-500">60,000원 이상 무료배송 · 도서산간 추가비용</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('description')}
              className={`flex-1 py-4 px-6 text-sm md:text-base font-medium transition-colors relative ${
                activeTab === 'description'
                  ? 'text-[var(--primary)]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              상품 상세정보
              {activeTab === 'description' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`flex-1 py-4 px-6 text-sm md:text-base font-medium transition-colors relative ${
                activeTab === 'shipping'
                  ? 'text-[var(--primary)]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              배송/반품 안내
              {activeTab === 'shipping' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 py-4 px-6 text-sm md:text-base font-medium transition-colors relative ${
                activeTab === 'reviews'
                  ? 'text-[var(--primary)]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              상품 후기
              {activeTab === 'reviews' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            {activeTab === 'description' && (
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold mb-4">상품 설명</h3>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold mb-4">주요 특징</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div>
                  <h3 className="text-lg font-bold mb-4">구성품</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {product.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product Image (if available) */}
                {product.images.length > 1 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4">상세 이미지</h3>
                    <div className="space-y-4">
                      {product.images.slice(1).map((image, index) => (
                        <div key={index} className="relative w-full max-w-2xl mx-auto">
                          <Image
                            src={image}
                            alt={`${product.name} 상세 이미지 ${index + 1}`}
                            width={800}
                            height={800}
                            className="w-full h-auto rounded-lg"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-8">
                {/* Shipping Info */}
                <div>
                  <h3 className="text-lg font-bold mb-4">배송 정보</h3>
                  <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-20 shrink-0">배송 방법</span>
                      <span className="text-gray-700">택배 (CJ대한통운)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-20 shrink-0">배송 지역</span>
                      <span className="text-gray-700">전국 (일부 도서산간 지역 제외)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-20 shrink-0">배송비</span>
                      <span className="text-gray-700">
                        <strong>3,000원</strong> (60,000원 이상 구매 시 무료)
                        <br />
                        <span className="text-sm text-gray-500">제주도/도서산간 +3,000원 추가</span>
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-20 shrink-0">배송 기간</span>
                      <span className="text-gray-700">2~5일 (영업일 기준)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500 w-20 shrink-0">주문 마감</span>
                      <span className="text-gray-700">오후 3시 (이후 주문은 익일 발송)</span>
                    </div>
                  </div>
                </div>

                {/* Return Policy */}
                <div>
                  <h3 className="text-lg font-bold mb-4">교환/반품 안내</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="font-medium text-green-800 mb-2">교환/반품 가능</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• 구매자 단순변심: 상품 수령 후 7일 이내 (반품비용 고객부담)</li>
                        <li>• 상품 하자: 상품 수령 후 7일 이내 (반품비용 당사부담)</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6">
                      <h4 className="font-medium text-red-800 mb-2">교환/반품 불가</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• 비닐포장을 개봉한 경우</li>
                        <li>• 교환/반품 가능 기간을 초과한 경우</li>
                        <li>• 상품 및 부품을 분실하거나 파손/오염된 경우</li>
                        <li>• 고객 요청에 의해 상품이 변경된 경우</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-gray-500 mb-4">아직 작성된 후기가 없습니다.</p>
                <p className="text-sm text-gray-400">
                  이 기능은 데모 사이트에서는 제공되지 않습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
