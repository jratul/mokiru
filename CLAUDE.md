# Mokiru — 수학·과학 학습 사이트

수학과 과학을 공부하는 정적 웹사이트.

---

## 프로젝트 스택

| 항목 | 선택 |
|------|------|
| 빌드 | Vite + React 19 + TypeScript |
| 패키지 매니저 | pnpm |
| 스타일 | Tailwind CSS v3 |
| UI 컴포넌트 | mokona-ui (1차), Radix UI Primitives (2차) |
| 수식 | KaTeX (`remark-math` + `rehype-katex`) |
| 수학 그래프 | Mafs (인터랙티브 함수/기하 시각화) |
| 차트 | Recharts (기본) + Plotly.js (과학 전용) |
| 다이어그램 | Mermaid (`remark-mermaid`) |
| 분자 구조 | smiles-drawer (화학 커리큘럼) |
| MD 렌더링 | `@mdx-js/rollup` + remark/rehype 파이프라인 |
| 코드 하이라이팅 | shiki |
| Frontmatter | gray-matter |
| 라우팅 | React Router v7 |
| 검색 | Fuse.js (클라이언트 사이드 퍼지 검색) |
| SEO | react-helmet-async |

---

## 시각화 라이브러리 선택 규칙

| 상황 | 라이브러리 |
|------|-----------|
| 함수 그래프 (y=f(x), 벡터, 기하 도형) | **Mafs** |
| 기본 데이터 차트 (선형/막대/파이/영역) | **Recharts** |
| 과학·공학 특화 (3D, 등고선, 벡터장, 복잡한 2D 플롯) | **Plotly.js** |
| 다이어그램 (순서도, 계통수, 알고리즘 흐름) | **Mermaid** |
| 화학 분자 구조식 (SMILES 표기법) | **smiles-drawer** |

Plotly와 smiles-drawer는 번들이 크므로 반드시 lazy load:

```tsx
const Plot = lazy(() => import("react-plotly.js"));
const SmilesDrawer = lazy(() => import("smiles-drawer"));
```

---

## 컴포넌트 선택 규칙

### 1차: mokona-ui

mokona-ui에 있는 컴포넌트는 반드시 mokona-ui에서 가져온다.

사용 가능한 컴포넌트:
- **Foundation**: `Button`, `Text`, `Divider`
- **Input**: `TextField`, `Checkbox`, `Toggle`
- **Feedback**: `Toast`, `Toaster`, `BottomSheet`, `Badge`, `Chip`
- **Overlay**: `Drawer` (side="left" | "right", 사이드 슬라이드 네비게이션용)
- **Layout**: `Card`, `Spinner`, `Skeleton`

```tsx
// main.tsx에 1회만 import
import "mokona-ui/styles.css";

import { Button, Card, Badge, Drawer } from "mokona-ui";
```

### 2차: Radix UI Primitives

mokona-ui에 없는 컴포넌트는 Radix UI Primitives로 직접 구현한다.

자주 필요한 것: `Accordion`, `Tabs`, `Dialog`, `Tooltip`, `Select`, `Slider`, `Progress`, `Popover`

> 모바일 햄버거 메뉴 → `Drawer side="left"` 사용. 데스크탑은 고정 사이드바.

```tsx
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
```

---

## MD 렌더링 파이프라인

tjsss(`/Users/yky/dev/tjsss`) 패턴을 참고하되, Vite 환경에 맞게 적용한다.

### 파이프라인 흐름

```
content/**/*.md
  → gray-matter (frontmatter 분리)
  → @mdx-js/rollup (Vite 플러그인, 빌드 타임 처리)
    → remark-gfm (GFM: 테이블, 체크박스, strikethrough)
    → remark-math ($...$ 인라인, $$...$$ 블록 수식 인식)
    → remark-mermaid (```mermaid 블록 → 다이어그램)
    → rehype-katex (수식 → KaTeX HTML 변환)
    → rehype-shiki (코드 블록 → 문법 하이라이팅)
  → MDX 컴포넌트 오버라이드 (커스텀 스타일 적용)
```

### vite.config.ts 설정

```ts
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMermaid from "remark-mermaid";
import rehypeKatex from "rehype-katex";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm, remarkMath, remarkMermaid],
      rehypePlugins: [rehypeKatex],
    }),
  ],
});
```

### MDX 컴포넌트 오버라이드

`src/components/MdxComponents.tsx`에 커스텀 컴포넌트를 정의하고 MDXProvider에 전달한다.

```tsx
// tjsss 패턴과 동일: h1~h3, p, ul/li, blockquote, table 등 스타일 오버라이드
export const mdxComponents = {
  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
  // ...
};
```

### Frontmatter 구조

```yaml
---
title: "미분의 정의"
description: "극한을 이용한 미분의 기본 개념"
date: "2026-01-01"
subject: "math"          # math | science
category: "calculus"     # 과목 내 분류
level: "university"      # middle | high | university | ai-math
tags: ["미분", "극한", "calculus"]
---
```

---

## 수식 렌더링

- **인라인 수식**: `$E = mc^2$`
- **블록 수식**: `$$\int_0^\infty f(x)\,dx$$`
- KaTeX CSS는 반드시 main.tsx에서 import:

```ts
import "katex/dist/katex.min.css";
```

---

## 콘텐츠 목차 구조

### 수학

```
math/
  middle/               # 중학교
    number-algebra/       # 수와 연산, 문자와 식
    function/             # 함수
    geometry/             # 기하
    statistics/           # 통계

  high/                 # 고등학교
    math1/                # 수학Ⅰ (지수·로그, 삼각함수, 수열)
    math2/                # 수학Ⅱ (극한, 미분, 적분)
    calculus/             # 미적분
    probability-stats/    # 확률과 통계
    geometry/             # 기하

  university/           # 대학교
    calculus/             # 미적분학 (I, II, III)
    linear-algebra/       # 선형대수학
    probability/          # 확률론
    statistics/           # 통계학
    ode/                  # 상미분방정식
    complex-analysis/     # 복소해석학
    real-analysis/        # 실해석학
    numerical-analysis/   # 수치해석

  discrete/             # 이산수학
    logic/                # 명제·논리·증명
    set-theory/           # 집합론
    graph-theory/         # 그래프이론
    combinatorics/        # 조합론
    number-theory/        # 정수론

  engineering-math/     # 공학수학
    laplace/              # 라플라스 변환
    fourier/              # 푸리에 해석
    pde/                  # 편미분방정식

  ai-math/              # 인공지능을 위한 수학
    linear-algebra/       # 선형대수 (행렬, 고유값, SVD)
    probability-stats/    # 확률·통계 (베이즈, 분포)
    optimization/         # 최적화 이론 (경사하강법, 볼록함수)
    information-theory/   # 정보이론 (엔트로피, KL divergence)
    calculus/             # 미적분 (역전파, 편미분)
```

### 과학

```
science/
  basic/                # 기초 과학 (중학교)
    matter/               # 물질의 성질
    energy/               # 에너지
    life/                 # 생명과학 기초
    earth-space/          # 지구와 우주

  physics/              # 물리
    high/                 # 고등학교 물리
      mechanics/
      electromagnetism/
      optics/
      thermodynamics/
    university/           # 대학 물리
      classical-mechanics/
      electromagnetism/   # 맥스웰 방정식
      quantum-mechanics/
      statistical-mechanics/
      relativity/

  chemistry/            # 화학
    high/                 # 고등학교 화학
      periodic-table/
      chemical-bond/
      acid-base/
      redox/
    university/           # 대학 화학
      general-chemistry/
      organic-chemistry/
      inorganic-chemistry/
      physical-chemistry/
      analytical-chemistry/

  biology/              # 생물
    high/                 # 고등학교 생물
      cell/
      genetics/
      evolution/
      ecology/
    university/           # 대학 생물
      molecular-biology/
      cell-biology/
      genetics/
      biochemistry/
      physiology/

  earth-science/        # 지구과학
    high/                 # 고등학교 지구과학
      geology/
      atmosphere/
      oceanography/
      astronomy/
    university/           # 대학 지구과학
      geophysics/
      meteorology/
      oceanography/
      astrophysics/

  advanced/             # 대학 전공 심화
    astrophysics/         # 천체물리학
    materials-science/    # 재료과학
    environmental-science/ # 환경과학
    computational-science/ # 계산과학
```

---

## 폰트 로딩 (Vite 환경 — 전역 CLAUDE.md 오버라이드)

전역 CLAUDE.md의 `next/font` 규칙은 이 프로젝트에 적용되지 않는다.
Vite 환경에서는 `@fontsource/*` 패키지를 사용한다.

```ts
// main.tsx
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/700.css";
```

아이콘 폰트 등 초기 렌더와 무관한 리소스는 async script로 로드해 렌더 블로킹 방지 원칙은 동일하게 적용한다.

---

## 이미지 최적화 (Vite 환경 — 전역 CLAUDE.md 오버라이드)

전역 CLAUDE.md의 `next/image` 규칙은 이 프로젝트에 적용되지 않는다.

- 정적 이미지: `import` 후 `<img>` 사용 (Vite가 hash + 최적화 처리)
- 외부 이미지: `loading="lazy"` + `width`/`height` 명시 필수
- SVG는 `?react` 쿼리로 컴포넌트로 import 가능: `import Logo from "./logo.svg?react"`

---

## 디렉토리 구조

```
src/
  components/           # 렌더링 전용 컴포넌트
    MdxComponents.tsx     # MDX 요소 스타일 오버라이드
  hooks/                # 커스텀 훅 (use*.ts)
  utils/                # 순수 함수 유틸
  types/                # 타입/인터페이스 정의
  pages/                # 라우트별 페이지 컴포넌트
  assets/               # 정적 이미지/SVG

content/
  math/                 # 수학 콘텐츠 (위 목차 구조 참고)
  science/              # 과학 콘텐츠 (위 목차 구조 참고)
```

---

## 콘텐츠 로딩 패턴

Vite의 `import.meta.glob`으로 빌드 타임에 모든 MD 파일을 수집한다.

```ts
// src/utils/content.ts
const modules = import.meta.glob("/content/**/*.md", { eager: true });

// URL ↔ 파일 경로 매핑
// content/math/university/calculus/derivatives.md
//   → /math/university/calculus/derivatives
export function pathToUrl(filePath: string): string {
  return filePath
    .replace(/^\/content/, "")
    .replace(/\.md$/, "");
}
```

### URL 구조

```
/                                       # 홈
/math                                   # 수학 과목 목록
/math/university/calculus               # 카테고리
/math/university/calculus/derivatives   # 문서 페이지
/science/chemistry/university/organic   # 문서 페이지
/search?q=미분                          # 검색 결과
```

---

## 개발 명령어

```bash
pnpm dev          # 개발 서버 (http://localhost:5173)
pnpm build        # 프로덕션 빌드
pnpm preview      # 빌드 결과물 로컬 미리보기
pnpm lint         # ESLint 검사
pnpm format       # Prettier 포맷
pnpm test         # Vitest 단위 테스트
pnpm test:e2e     # Playwright E2E 테스트
```

---

## ESLint + Prettier

```jsonc
// .eslintrc or eslint.config.js
// 규칙: @typescript-eslint/recommended + react-hooks + jsx-a11y
```

```jsonc
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

- 작업 완료 전 반드시 `pnpm lint` 실행 — error/warning 0 유지
- Prettier는 저장 시 자동 포맷 (VSCode `editor.formatOnSave: true`)
- `<img>` 태그 lint 경고 → Vite 환경이므로 허용. `next/image` 규칙은 비활성화

---

## TypeScript 경로 별칭

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@utils/*": ["./src/utils/*"],
      "@types/*": ["./src/types/*"],
      "@pages/*": ["./src/pages/*"],
      "@content/*": ["./content/*"]
    }
  }
}
```

Vite에서도 동일하게 `vite.config.ts`의 `resolve.alias`에 등록 필요.

---

## 배포

**Vercel** 사용. `vercel.json`에 SPA 라우팅 설정 필수:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 테스트

| 레이어 | 도구 | 대상 |
|--------|------|------|
| 유틸·컴포넌트 | Vitest + Testing Library | frontmatter 파싱, ToC 생성, 검색 인덱싱, 개별 컴포넌트 |
| E2E | Playwright | 수식 렌더링, 라우팅, 네비게이션, 검색, 모바일 Drawer |

E2E가 이 프로젝트에서 더 중요하다. "MD가 브라우저에서 수식으로 제대로 보이는지"는 단위 테스트로 검증 불가능.

---

## 추가 필요 요소

### 반드시 구현

- **사이드바 네비게이션** — 과목/단원별 트리 구조 (Radix Accordion), 모바일은 Drawer
- **목차(ToC) 자동 생성** — MD의 h2/h3 헤딩을 파싱해 우측 사이드에 표시
- **다크 모드** — Tailwind `dark:` 클래스 사용, `localStorage`로 유지
- **SEO 메타태그** — `react-helmet-async`
- **검색** — Fuse.js로 제목/태그/본문 클라이언트 사이드 퍼지 검색

### 선택적 고려

- **3D 시각화** — `@react-three/fiber` (3D 분자 모델, 지구과학 지구본, 물리 벡터장)
- **진도 추적** — `localStorage`에 읽은 항목 저장
- **에러 모니터링** — Sentry (`@sentry/react`), 프로젝트 완성 후 `main.tsx`에 추가
