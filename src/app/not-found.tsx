import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="text-8xl font-bold text-[var(--primary)]">404</span>
        </div>

        <h1 className="text-2xl font-bold text-[var(--secondary)] mb-4">
          페이지를 찾을 수 없습니다
        </h1>

        <p className="text-[var(--muted)] mb-2">
          이 기능은 아직 구현되지 않았습니다.
        </p>
        <p className="text-[var(--muted)] mb-8">
          본 사이트는 <span className="font-semibold">데모 웹사이트</span>로,
          일부 페이지와 기능이 제한되어 있습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            홈으로 돌아가기
          </Link>
          <a
            href="https://hobbyfactory.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            실제 사이트 방문
          </a>
        </div>
      </div>
    </div>
  );
}
