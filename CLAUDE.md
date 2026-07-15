# Mokiru — 수학·과학 학습 사이트

수학과 과학을 공부하는 정적 웹사이트.

> 파일별 기술 상세는 [TECH.md](./TECH.md), 설정 파일·패키지 용도는 [PROJECT.md](./PROJECT.md),
> 프로젝트 소개는 [README.md](./README.md) 참고.

---

## 프로젝트 스택

| 항목 | 선택 |
|------|------|
| 빌드 | Vite + React 19 + TypeScript |
| 패키지 매니저 | pnpm |
| 스타일 | Tailwind CSS v3 |
| UI 컴포넌트 | mokona-ui (1차), Radix UI Primitives (2차) |
| 애니메이션 | framer-motion (Drawer 슬라이드 등) |
| 아이콘 | lucide-react (SVG 컴포넌트, 아이콘 폰트 아님) |
| 수식 | KaTeX (`remark-math` + `rehype-katex`) |
| 수학 그래프 | Mafs — 설치됨, 아직 콘텐츠에서 미사용 |
| 차트 | Recharts — 실사용 중 (`chart` 언어의 코드 펜스, [TECH.md](./TECH.md) 참고). Plotly.js는 런타임 패키지 미설치(타입만 devDependency) |
| 다이어그램 | Mermaid — 설치됨, 아직 콘텐츠에서 미사용 |
| 분자 구조 | smiles-drawer — 미설치, 화학 커리큘럼 작성 시 추가 설치 필요 |
| MD 렌더링 | `react-markdown` 런타임 렌더링 (빌드 타임 MDX 아님) + remark/rehype 파이프라인 |
| 코드 하이라이팅 | rehype-highlight + highlight.js (`github-dark` 테마) |
| Frontmatter | 브라우저 호환 자체 파서 (`src/utils/frontmatter.ts`) — gray-matter는 Node Buffer 의존이라 미사용 |
| 라우팅 | React Router v7 (`react-router-dom` 패키지로 import) |
| 검색 | Fuse.js (클라이언트 사이드 퍼지 검색) |
| SEO / 타이틀 | `useDocumentTitle` 훅으로 네이티브 `document.title` 갱신. `react-helmet-async`는 의존성에는 남아있지만 코드에서 미사용 |

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

> 두 패키지 모두 아직 `package.json`에 런타임 의존성으로 설치되어 있지 않다
> (`react-plotly.js`/`plotly.js`, `smiles-drawer`). 실제로 사용하는 콘텐츠를 추가할 때
> `pnpm add`로 먼저 설치한다.

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
> 실제 구현은 `src/components/Drawer.tsx` — mokona-ui의 `Drawer`가 아니라
> `@radix-ui/react-dialog` + `framer-motion`으로 직접 만든 컴포넌트다.
> 사이드바 네비게이션 트리(`NavTree.tsx`)는 `@radix-ui/react-accordion`으로 구현했다.

```tsx
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
```

---

## MD 렌더링 파이프라인

> 실제 구현은 MDX가 아니라 `react-markdown`을 이용한 **런타임(브라우저) 렌더링**이다.
> 파일 위치는 [TECH.md](./TECH.md)의 해당 항목 참고.

### 파이프라인 흐름

```
content/**/*.md
  → import.meta.glob("/content/**/*.md", { query: "?raw", eager: true })  (src/utils/content.ts)
  → 자체 frontmatter 파서 (src/utils/frontmatter.ts, gray-matter 미사용 — Node Buffer 의존이라 브라우저 비호환)
  → <ReactMarkdown> 컴포넌트가 요청 시점(라우트 진입 시)에 파싱·렌더링
      remarkPlugins: [remarkGfm, remarkMath]
      rehypePlugins: [rehypeHeadingIds(자체 구현), rehypeKatex, rehypeHighlight]
  → components 오버라이드 (src/components/MdxComponents.tsx)
```

`rehypeHeadingIds`(`src/utils/markdown.ts`)는 rehype-katex보다 먼저 실행되어야 한다 —
헤딩 텍스트가 아직 순수 LaTeX 소스 문자열일 때 슬러그를 만들기 위해서다. rehype-katex가
먼저 실행되면 헤딩 안의 수식이 KaTeX HTML로 바뀐 뒤라 슬러그 생성이 깨진다.

### ArticlePage.tsx 실제 설정

```tsx
<ReactMarkdown
  remarkPlugins={[remarkGfm, remarkMath]}
  rehypePlugins={[rehypeHeadingIds, rehypeKatex, rehypeHighlight]}
  components={mdxComponents}
>
  {content}
</ReactMarkdown>
```

### 컴포넌트 오버라이드

`src/components/MdxComponents.tsx`에 `react-markdown`의 `Components` 타입에 맞춰
h1~h4, p, ul/ol/li, blockquote, table, code/pre 등을 오버라이드한다. h2~h4는 자체
`slugify`로 id를 부여해 ToC 앵커 이동을 지원한다.

```tsx
h2: ({ children, id }) => (
  <Heading level={2} className="text-2xl font-bold ... scroll-mt-20" id={id}>
    {children}
  </Heading>
),
```

### 차트 작성 규칙 (content 작성자용)

MD 안에서 ` ```chart ` 코드 펜스에 JSON을 넣으면 `MdxComponents.tsx`의 `code` 오버라이드가
`language-chart` 클래스를 감지해 JSON을 파싱하고 `ChartBlock`(Recharts 래퍼)으로 렌더링한다.
`type`은 `"bar" | "line" | "area" | "scatter"`.

````
```chart
{ "type": "line", "xKey": "x", "data": [...], "series": [{ "key": "y", "name": "f(x)" }] }
```
````

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
이 프로젝트는 `@fontsource/*`가 아니라 `pretendard` 패키지(가변 폰트, 한국어 최적화)를
직접 self-hosting한다.

```ts
// main.tsx
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
```

```css
/* src/index.css */
body {
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
}
```

아이콘은 아이콘 폰트가 아니라 `lucide-react`의 SVG 컴포넌트를 사용하므로 FOUT 방지 패턴이
필요 없다. 초기 렌더와 무관한 리소스를 비동기로 로드하는 원칙 자체는 동일하게 적용한다.

---

## 이미지 최적화 (Vite 환경 — 전역 CLAUDE.md 오버라이드)

전역 CLAUDE.md의 `next/image` 규칙은 이 프로젝트에 적용되지 않는다.

- 정적 이미지: `import` 후 `<img>` 사용 (Vite가 hash + 최적화 처리)
- 외부 이미지: `loading="lazy"` + `width`/`height` 명시 필수
- SVG는 `?react` 쿼리로 컴포넌트로 import 가능: `import Logo from "./logo.svg?react"`

---

## 디렉토리 구조

세부 파일별 설명은 [TECH.md](./TECH.md), 설정 파일·패키지 용도는
[PROJECT.md](./PROJECT.md) 참고.

```
src/
  components/           # 렌더링 전용 컴포넌트
    layout/                # Sidebar, Header, NavTree, TableOfContents, Layout
    MdxComponents.tsx      # react-markdown 요소 스타일 오버라이드 (MDX 아님)
    ChartBlock.tsx          # ```chart 코드 펜스용 Recharts 래퍼
    Drawer.tsx              # 모바일 네비게이션 (Radix Dialog + framer-motion)
  hooks/                # 커스텀 훅 (use*.ts)
  utils/                # 순수 함수 유틸 (frontmatter 파서, TOC 추출, 검색 등)
  types/                # 타입/인터페이스 정의
  pages/                # 라우트별 페이지 컴포넌트
  config/               # navigation.ts — 사이드바/카테고리 트리 데이터
  contexts/             # ThemeContext — 다크모드 상태
  assets/               # 정적 이미지/SVG
  test/                 # Vitest 셋업 (setup.ts)

content/
  math/                 # 수학 콘텐츠 (위 목차 구조 참고)
  science/              # 과학 콘텐츠 (위 목차 구조 참고)
```

---

## 콘텐츠 로딩 패턴

Vite의 `import.meta.glob`(eager + `?raw`)으로 빌드 타임에 모든 MD 파일을 문자열로 수집한다.

```ts
// src/utils/content.ts
const modules = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  eager: true,
  import: "default",
}) as Record<string, string>;

// content/math/university/calculus.md → /math/university/calculus
function pathToSlug(filePath: string): string {
  return filePath.replace(/^\/content/, "").replace(/\.md$/, "");
}

export function getAllPosts(): PostMeta[] { /* 전체 목록 + frontmatter */ }
export function getPostBySlug(slug: string) { /* index.md 폴백 포함 */ }
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

```ts
// eslint.config.js — flat config
extends: [
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  jsxA11y.flatConfigs.recommended,
  prettierConfig, // eslint-config-prettier — 포맷 충돌 규칙 off
],
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
// tsconfig.app.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@utils/*": ["./src/utils/*"],
      "@t/*": ["./src/types/*"],
      "@pages/*": ["./src/pages/*"],
      "@content/*": ["./content/*"]
    }
  }
}
```

타입 별칭은 `@types`가 아니라 `@t`다(`@types`는 npm의 `@types/*` 스코프와 이름이 겹쳐서 회피).
Vite에서도 동일하게 `vite.config.ts`의 `resolve.alias`에 등록 필요.

> `vitest.config.ts`에는 아직 `@types` 별칭이 남아있어 `vite.config.ts`/`tsconfig.app.json`의
> `@t`와 이름이 다르다. 테스트 코드에서 타입 경로를 import할 때는 `@t`를 쓴다 — 새 테스트를
> 추가하며 이 불일치를 건드리게 되면 `vitest.config.ts` 쪽을 `@t`로 맞춘다.

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

## 구현 현황

### 구현 완료

- **사이드바 네비게이션** — 과목/단원별 트리 구조 (Radix Accordion, `NavTree.tsx`), 모바일은 `Drawer.tsx`
- **목차(ToC) 자동 생성** — MD의 h2/h3 헤딩을 파싱해 우측 사이드에 표시 (`TableOfContents.tsx`)
- **다크 모드** — `.dark` 클래스 + CSS 변수, `localStorage`로 유지, FOUC 방지용 인라인 스크립트가 `index.html`에 있음
- **문서 타이틀** — `useDocumentTitle` 훅으로 `document.title`만 갱신 (OG/description 등 풀 메타태그는 아직 없음)
- **검색** — Fuse.js로 제목/태그/카테고리/설명 클라이언트 사이드 퍼지 검색

### 아직 미구현 / 선택적 고려

- **풀 SEO 메타태그** — `<meta description>`, Open Graph 등. `react-helmet-async`는 의존성에는
  있으나 실제로는 미사용 상태이므로, 추가한다면 React 19 네이티브 `<title>`/`<meta>` 호이스팅
  방식을 우선 검토한다.
- **Mafs/Mermaid/Plotly/smiles-drawer 콘텐츠 적용** — 패키지는 설치되어 있거나(Mafs, Mermaid)
  선택 규칙만 정해져 있고(Plotly, smiles-drawer), 실제 콘텐츠에서는 아직 쓰이지 않았다.
- **Vitest/Playwright 테스트 작성** — 스크립트와 devDependency는 설정돼 있으나 실제 테스트
  파일은 아직 없다.
- **3D 시각화** — `@react-three/fiber` (3D 분자 모델, 지구과학 지구본, 물리 벡터장)
- **진도 추적** — `localStorage`에 읽은 항목 저장
- **에러 모니터링** — Sentry (`@sentry/react`), 프로젝트 완성 후 `main.tsx`에 추가
