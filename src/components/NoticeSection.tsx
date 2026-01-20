'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample notice data (공지사항)
const notices = [
  { id: 1, title: '운영 방침 변경으로 인한 합배송 안내', date: '2025.01.15', isNotice: true },
  { id: 2, title: '[신년 이벤트] 피규어 전상품 10% 할인', date: '2025.01.10' },
  { id: 3, title: '[신년 이벤트] 프라모델 상품 특가전', date: '2025.01.10' },
  { id: 4, title: '설 연휴 배송 및 온라인 관련 안내', date: '2025.01.08' },
  { id: 5, title: '[겨울방학 맞이 특가전] 마블 Vol.2', date: '2025.01.05' },
];

// Sample incoming stock data (입고예정)
const incomingStock = [
  { id: 1, title: '1월 20일 코토부키야/타카라토미 입고 안내', date: '2025.01.18' },
  { id: 2, title: '1월 15일 반다이 프라모델 입고 안내', date: '2025.01.14' },
  { id: 3, title: '1월 10일 코토부키야/굿스마일 제품 입고', date: '2025.01.09' },
  { id: 4, title: '1월 5일 반다이 피규어 입고 안내', date: '2025.01.04' },
  { id: 5, title: '12월 말 메가하우스 제품 입고 예정', date: '2024.12.28' },
];

type TabType = 'notices' | 'incoming';

export default function NoticeSection() {
  const [activeTab, setActiveTab] = useState<TabType>('notices');

  const currentData = activeTab === 'notices' ? notices : incomingStock;

  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Tab Header */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('notices')}
              className={`flex-1 py-4 px-6 text-sm md:text-base font-semibold transition-colors relative ${
                activeTab === 'notices'
                  ? 'text-[var(--primary)] bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                공지사항
              </span>
              {activeTab === 'notices' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('incoming')}
              className={`flex-1 py-4 px-6 text-sm md:text-base font-semibold transition-colors relative ${
                activeTab === 'incoming'
                  ? 'text-[var(--primary)] bg-gray-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                입고예정
              </span>
              {activeTab === 'incoming' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
              )}
            </button>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            <ul className="space-y-3">
              {currentData.map((item) => (
                <li key={item.id}>
                  <Link
                    href="/notice"
                    className="flex items-center justify-between gap-4 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {'isNotice' in item && item.isNotice && (
                        <span className="shrink-0 px-2 py-0.5 text-xs font-bold bg-[var(--primary)] text-white rounded">
                          공지
                        </span>
                      )}
                      <span className="text-sm md:text-base text-gray-700 group-hover:text-[var(--primary)] transition-colors truncate">
                        {item.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs md:text-sm text-gray-400">
                      {item.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* View More Button */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href={activeTab === 'notices' ? '/notice' : '/incoming'}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-gray-600 hover:text-[var(--primary)] transition-colors"
              >
                전체보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
