# mokiru

수학과 과학을 처음부터 제대로 공부하는 정적 학습 사이트. 중학교부터 대학교(공학수학,
AI를 위한 수학 포함)까지 커리큘럼을 다루며, 수식·차트를 곁들인 마크다운 콘텐츠를
사이드바 트리 내비게이션과 자동 생성 목차(ToC)로 탐색할 수 있다.

> 더 자세한 문서:
> [CLAUDE.md](./CLAUDE.md) — 아키텍처/규칙 요약,
> [TECH.md](./TECH.md) — 파일별 기술 설명,
> [PROJECT.md](./PROJECT.md) — 설정 파일·패키지 용도

---

## 기술 스택

| 항목 | 선택 |
|------|------|
| 빌드 | Vite + React 19 + TypeScript |
| 패키지 매니저 | pnpm |
| 스타일 | Tailwind CSS v3, CSS 변수 기반 다크모드 |
| UI | mokona-ui + Radix UI Primitives, framer-motion, lucide-react |
| 마크다운 렌더링 | react-markdown (런타임) + remark-gfm/remark-math + rehype-katex/rehype-highlight |
| 수식 | KaTeX |
| 차트 | Recharts (`chart` 언어의 코드 펜스로 MD 안에서 바로 작성) |
| 검색 | Fuse.js (클라이언트 사이드 퍼지 검색) |
| 라우팅 | React Router v7 |
| 폰트 | Pretendard Variable (self-hosted) |
| 배포 | Vercel |

## 시작하기

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

```bash
pnpm build        # 프로덕션 빌드
pnpm preview      # 빌드 결과물 로컬 미리보기
pnpm lint         # ESLint 검사
pnpm format       # Prettier 포맷
pnpm test         # Vitest 단위 테스트
pnpm test:e2e     # Playwright E2E 테스트
```

## 콘텐츠 작성

`content/math/**`, `content/science/**` 아래에 frontmatter가 있는 `.md` 파일을 추가하면
`import.meta.glob`이 빌드 타임에 수집해 자동으로 라우트가 생긴다.

```md
---
title: "미분의 정의"
description: "극한을 이용한 미분의 기본 개념"
date: "2026-01-01"
subject: "math"
category: "calculus"
level: "university"
tags: ["미분", "극한", "calculus"]
---

본문...
```

새 카테고리를 추가할 때는 `src/config/navigation.ts`에도 항목을 등록해야 사이드바에 노출된다.
콘텐츠 목차 구조와 새 문서를 어느 폴더에 둘지는 [CLAUDE.md](./CLAUDE.md#콘텐츠-목차-구조)를
참고한다.

## 프로젝트 구조

```
src/
  components/    # 렌더링 전용 컴포넌트 (layout/, MdxComponents.tsx, ChartBlock.tsx, Drawer.tsx)
  hooks/         # 커스텀 훅
  utils/         # 순수 함수 유틸 (frontmatter 파서, ToC 추출, 검색 등)
  types/         # 타입 정의
  pages/         # 라우트별 페이지
  config/        # 사이드바 내비게이션 트리 데이터
  contexts/      # 다크모드 등 전역 상태

content/
  math/          # 수학 콘텐츠
  science/       # 과학 콘텐츠
```

## 배포

Vercel에 배포하며, 클라이언트 사이드 라우팅 새로고침 404를 막기 위해 `vercel.json`에
SPA rewrite 규칙이 설정되어 있다.
