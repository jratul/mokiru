import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  toc?: ReactNode;
}

export function Layout({ children, toc }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* 데스크탑 사이드바 */}
      <Sidebar />

      {/* 모바일 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <div className="lg:ml-60 xl:mr-52">
        {/* 모바일 헤더 높이만큼 상단 여백 */}
        <div className="lg:hidden h-14" />

        <main className="mx-auto max-w-3xl px-6 py-8">
          {children}
        </main>
      </div>

      {/* ToC (페이지에서 전달) */}
      {toc}
    </div>
  );
}
