# PROJECT — 설정 파일 & 패키지 용도

"이 설정은 왜 이렇게 되어 있는가", "이 패키지는 왜 추가했는가"를 답하는 문서. 파일별 구현
설명은 [TECH.md](./TECH.md), 아키텍처 요약은 [CLAUDE.md](./CLAUDE.md) 참고.

---

## 설정 파일

### `package.json`

pnpm 워크스페이스 기준 스크립트. `build`는 타입 체크(`tsc -b`)를 먼저 통과시킨 뒤에만
Vite 빌드를 진행해, 타입 에러가 있는 상태로 배포 산출물이 만들어지지 않게 한다.

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "format": "prettier --write .",
  "test": "vitest run",
  "test:watch": "vitest",
  "test:e2e": "playwright test"
}
```

### `tsconfig.json`

실제 컴파일 옵션은 없고, 앱 코드(`tsconfig.app.json`)와 Node 환경에서 도는 설정 파일
(`tsconfig.node.json`)로 프로젝트 레퍼런스만 분리한다 — 두 컨텍스트가 `lib`/`types`
요구사항이 다르기 때문(브라우저 DOM API vs Node API).

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }]
}
```

### `tsconfig.app.json`

`src/` 전용. 경로 별칭(`@`, `@components`, `@hooks`, `@utils`, `@t`, `@pages`, `@content`)이
여기서 정의되고, `vite.config.ts`의 `resolve.alias`에도 같은 매핑이 중복 등록되어 있다(TS는
타입 체크용, Vite는 실제 번들링용이라 둘 다 필요).

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "paths": {
      "@t/*": ["./src/types/*"]
    }
  },
  "include": ["src"]
}
```

### `tsconfig.node.json`

`vite.config.ts` 자체를 타입 체크하기 위한 별도 설정. `lib: ["ES2023"]`만 있고 DOM이 없다 —
Node(빌드 스크립트) 컨텍스트이기 때문이다.

```json
{
  "compilerOptions": { "types": ["node"], "lib": ["ES2023"] },
  "include": ["vite.config.ts"]
}
```

### `vite.config.ts`

React 플러그인과 함께 자체 제작한 `stripMokonaCdnFontImport` 플러그인을 등록하고, 경로
별칭을 `path.resolve`로 절대 경로화한다. `stripMokonaCdnFontImport`는 `mokona-ui/dist/styles.css`
안에 내장된 `@import url("https://cdn.jsdelivr.net/.../pretendard...")` 줄을 `transform`
훅에서 정규식으로 제거한다 — 이 프로젝트가 `pretendard` 패키지로 이미 같은 폰트를
self-hosting하고 있어서, CDN import를 그대로 두면 동일 폰트를 두 번(CDN + 로컬) 받아오게
되기 때문이다. `enforce: "pre"`로 다른 플러그인(특히 CSS 처리)보다 먼저 실행되도록 강제한다.

```ts
function stripMokonaCdnFontImport(): Plugin {
  return {
    name: "strip-mokona-cdn-font-import",
    enforce: "pre",
    transform(code, id) {
      if (id.includes("mokona-ui") && id.endsWith("styles.css") && code.includes("cdn.jsdelivr.net")) {
        return code.replace(/@import url\("https:\/\/cdn\.jsdelivr\.net\/[^"]*pretendard[^"]*"\);?/i, "");
      }
    },
  };
}

export default defineConfig({
  plugins: [stripMokonaCdnFontImport(), react()],
  resolve: {
    alias: {
      "@t": path.resolve(__dirname, "./src/types"),
      "@content": path.resolve(__dirname, "./content"),
    },
  },
});
```

### `vitest.config.ts`

Vite 설정과 별도 파일로 분리되어 있어 별칭 목록을 직접 다시 선언한다. 이름이 `@t`가 아니라
`@types`로 되어 있는데, 이는 `tsconfig.app.json`/`vite.config.ts`와 어긋난 상태다 — 아직
이 별칭을 쓰는 테스트 파일이 없어 드러나지 않았을 뿐이다. 테스트를 추가하며 타입을 import할
일이 생기면 `@t`로 통일한다.

```ts
export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom", globals: true, setupFiles: ["./src/test/setup.ts"] },
  resolve: { alias: { "@types": path.resolve(__dirname, "./src/types") /* ⚠ vite.config.ts와 다름 */ } },
});
```

### `eslint.config.js`

Flat config. `js.configs.recommended` + `typescript-eslint` 권장 규칙 + React Hooks/Refresh
+ `jsx-a11y`(접근성)를 켜고, 마지막에 `eslint-config-prettier`로 포맷 관련 규칙을 꺼서
ESLint와 Prettier가 같은 문제를 이중으로 지적하지 않게 한다.

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      prettierConfig,
    ],
  },
]);
```

### `tailwind.config.js`

`darkMode: "class"`로 `.dark` 클래스 기반 다크모드를 쓴다(미디어쿼리 자동 전환이 아니라
`ThemeContext`가 직접 클래스를 토글). `extend.keyframes`/`animation`은 Radix Accordion의
`--radix-accordion-content-height` CSS 변수를 이용한 펼침/접힘 애니메이션 전용이다.

```js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
      },
      animation: { "accordion-down": "accordion-down 0.2s ease-out" },
    },
  },
};
```

### `postcss.config.js`

Tailwind와 `autoprefixer`만 체이닝하는 최소 구성.

```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

### `.prettierrc`

큰따옴표(`singleQuote: false`), 후행 콤마(`trailingComma: "all"`), 100자 줄바꿈을 강제한다.
`@prettier/plugin-xml`이 devDependency로 설치되어 있지만 이 파일에 `plugins` 항목이 없어
실제로는 적용되지 않는다.

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

### `vercel.json`

React Router의 클라이언트 사이드 라우팅 때문에 `/math/university/calculus` 같은 경로를
새로고침하거나 직접 접속하면 Vercel이 실제 파일을 못 찾아 404를 낸다 — 모든 경로를
`index.html`로 rewrite해서 라우팅을 클라이언트에 위임한다.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 패키지 목록

### dependencies

| 패키지 | 용도 |
|--------|------|
| `@radix-ui/react-accordion` | `NavTree.tsx` 사이드바 트리 펼침/접힘 |
| `@radix-ui/react-dialog` | `Drawer.tsx` 모바일 내비게이션 오버레이 |
| `clsx` | `utils/cn.ts` 조건부 클래스 조합 |
| `framer-motion` | `Drawer.tsx` 슬라이드 인/아웃 애니메이션 |
| `fuse.js` | `utils/search.ts` 클라이언트 사이드 퍼지 검색 |
| `highlight.js` | `main.tsx`에서 `github-dark` 테마 CSS import (하이라이팅 실행은 `rehype-highlight`) |
| `katex` | 수식 렌더링 엔진 + CSS |
| `lowlight` | `rehype-highlight`가 내부적으로 쓰는 하이라이터 — 직접 import하는 코드는 없음 |
| `lucide-react` | 전 UI의 SVG 아이콘 (Sidebar, Header, NavTree, SearchPage, Drawer) |
| `mafs` | 함수/기하 그래프 라이브러리 — 설치만 되어 있고 콘텐츠에서 아직 미사용 |
| `mermaid` | 다이어그램 라이브러리 — 설치만 되어 있고 콘텐츠에서 아직 미사용 |
| `mokona-ui` | 자체 UI 라이브러리 — `main.tsx`에서 `styles.css`를 import해 CSS 변수(`--color-*` 등)를 공급. 컴포넌트(`Button`, `Card` 등)는 아직 프로젝트 코드에서 import되지 않음 |
| `pretendard` | `main.tsx`에서 self-hosting하는 본문 폰트 |
| `react`, `react-dom` | 프레임워크 |
| `react-helmet-async` | 과거 SEO 메타태그용으로 추가됐으나 `useDocumentTitle` 훅으로 대체되어 현재 미사용 |
| `react-markdown` | `ArticlePage.tsx` MD → React 엘리먼트 런타임 렌더링 |
| `react-router-dom` | 전체 라우팅 (`App.tsx`) |
| `recharts` | `ChartBlock.tsx` 차트 렌더링 |
| `rehype-highlight` | 코드 블록 문법 하이라이팅 (ArticlePage rehype 파이프라인) |
| `rehype-katex` | LaTeX → KaTeX HTML 변환 (ArticlePage rehype 파이프라인) |
| `remark-gfm` | GFM(테이블/체크박스/취소선) 지원 (ArticlePage remark 파이프라인) |
| `remark-math` | `$...$`/`$$...$$` 수식 구문 인식 (ArticlePage remark 파이프라인) |
| `tailwind-merge` | `utils/cn.ts`에서 충돌하는 Tailwind 클래스 정리 |

### devDependencies

| 패키지 | 용도 |
|--------|------|
| `@eslint/js` | ESLint 기본 권장 규칙 (`eslint.config.js`) |
| `@playwright/test` | E2E 테스트 러너 — 스크립트만 있고 아직 테스트 파일/설정 없음 |
| `@prettier/plugin-xml` | 설치되어 있으나 `.prettierrc`에 미등록 — 실질적으로 미사용 |
| `@testing-library/jest-dom` | `src/test/setup.ts`에서 커스텀 matcher 등록 |
| `@testing-library/react`, `@testing-library/user-event` | 컴포넌트 테스트용 — 아직 이를 쓰는 테스트 파일 없음 |
| `@types/node` | `vite.config.ts` 등에서 Node `path` 모듈 타입 |
| `@types/react`, `@types/react-dom` | React 타입 |
| `@types/react-plotly.js` | Plotly 타입만 설치됨 — 런타임 패키지(`react-plotly.js`, `plotly.js`)는 미설치 상태라 아직 사용 불가 |
| `@vitejs/plugin-react` | `vite.config.ts`/`vitest.config.ts` React 플러그인 |
| `autoprefixer` | `postcss.config.js` |
| `eslint` | 린팅 |
| `eslint-config-prettier` | ESLint와 Prettier 규칙 충돌 방지 |
| `eslint-plugin-jsx-a11y` | JSX 접근성 규칙 |
| `eslint-plugin-react-hooks` | React Hooks 규칙 (의존성 배열 등) |
| `eslint-plugin-react-refresh` | Vite HMR과 호환되는 컴포넌트 export 규칙 |
| `globals` | `eslint.config.js`의 브라우저 전역 변수 목록 |
| `jsdom` | `vitest.config.ts` 테스트 환경 (DOM 시뮬레이션) |
| `postcss` | Tailwind 처리 파이프라인 |
| `prettier` | 코드 포맷 |
| `tailwindcss` | 스타일 유틸리티 |
| `typescript` | 타입 체크 (`tsc -b`) |
| `typescript-eslint` | TS용 ESLint 규칙/파서 |
| `vite` | 빌드 도구 |
| `vitest` | 단위 테스트 러너 |
