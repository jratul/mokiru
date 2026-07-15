# TECH — 파일별 기술 상세

각 파일이 어떤 기술을 어떻게 쓰는지 정리한 문서. 아키텍처 요약은 [CLAUDE.md](./CLAUDE.md),
설정 파일/패키지 용도는 [PROJECT.md](./PROJECT.md) 참고.

---

## 엔트리 포인트

### `src/main.tsx`

앱 진입점. 전역 CSS/폰트/KaTeX/하이라이팅 테마를 순서대로 import하고, `BrowserRouter` →
`ThemeProvider` → `App` 순으로 감싼다. import 순서가 곧 CSS 우선순위이므로, Tailwind
유틸리티가 폰트/KaTeX 기본 스타일을 덮어쓸 수 있도록 `index.css`를 가장 나중에 둔다.

```tsx
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
```

### `src/App.tsx`

라우트 정의. `ScrollToTop`은 React Router의 클라이언트 사이드 내비게이션이 스크롤 위치를
보존하는 기본 동작을 막기 위한 컴포넌트로, `pathname`이 바뀔 때마다 `window.scrollTo(0, 0)`을
호출한다. 라우트 매칭 순서상 `/:subject`가 먼저, 나머지는 전부 `ArticlePage`(`*`)로
떨어진다 — 실제 글 존재 여부는 `ArticlePage` 내부에서 `getPostBySlug`로 판단한다.

```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/search" element={<SearchPage />} />
  <Route path="/:subject" element={<SubjectPage />} />
  <Route path="*" element={<ArticlePage />} />
</Routes>
```

### `index.html`

`<head>` 안 인라인 스크립트가 React가 로드되기 전에 `localStorage`의 테마 값(또는
`prefers-color-scheme`)을 읽어 `<html>`에 `.dark`를 붙인다. 이게 없으면 라이트 모드로
먼저 렌더링된 후 `ThemeProvider`의 `useEffect`가 뒤늦게 다크로 바꾸면서 깜빡임(FOUC)이
생긴다.

```html
<script>
  (function () {
    var t = localStorage.getItem("theme");
    if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
  })();
</script>
```

---

## 콘텐츠 파이프라인

### `src/utils/content.ts`

`import.meta.glob`으로 `content/**/*.md`를 raw 문자열로 즉시(eager) 수집한다. Vite가
빌드 타임에 이 glob을 정적 import 목록으로 변환하므로, 새 `.md` 파일을 추가하면 dev 서버
재시작 없이도(HMR) 반영된다. `getPostBySlug`는 `slug.md`와 `slug/index.md` 두 후보를
순서대로 찾아 카테고리 인덱스 페이지(`index.md`)를 지원한다.

```ts
const modules = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  eager: true,
  import: "default",
}) as Record<string, string>;

export function getPostBySlug(slug: string) {
  const candidates = [`/content${slug}.md`, `/content${slug}/index.md`];
  for (const filePath of candidates) {
    const raw = modules[filePath];
    if (!raw) continue;
    const { data, content } = parseFrontmatter(raw);
    return { meta: { ...(data as Omit<PostMeta, "slug">), slug }, content };
  }
  return null;
}
```

### `src/utils/frontmatter.ts`

`gray-matter`는 Node.js `Buffer`에 의존해 브라우저 번들에 넣을 수 없으므로, YAML의 부분
집합(스칼라, 인라인 배열 `[a, b]`, 멀티라인 `- a` 배열)만 지원하는 자체 파서를 만들었다.
정규식으로 `---\n...\n---\n` 블록을 분리한 뒤 줄 단위로 `key: value`를 읽는다.

```ts
export function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]+([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  // key: value / key: [a, b] / key:\n  - a\n  - b 세 형태만 처리
}
```

### `src/utils/markdown.ts`

두 가지 역할: (1) 콘텐츠 문자열에서 정규식으로 `##`/`###` 헤딩을 뽑아 ToC 데이터를 만드는
`extractToc`, (2) rehype 플러그인 `rehypeHeadingIds`. `rehypeHeadingIds`는 반드시
`rehype-katex`보다 먼저 파이프라인에 들어가야 한다 — katex가 먼저 실행되면 헤딩 텍스트가
수식 원문이 아니라 KaTeX가 생성한 HTML(스팬 트리)로 바뀌어 있어서, `extractToc`가 만든
슬러그와 실제 렌더링된 헤딩의 `id`가 어긋난다.

```ts
export function rehypeHeadingIds(): (tree: any) => void {
  return (tree) => {
    function walk(node) {
      if (node.type === "element" && /^h[2-6]$/.test(node.tagName)) {
        node.properties = node.properties ?? {};
        node.properties.id = slugify(hastToText(node));
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    }
    walk(tree);
  };
}
```

### `src/pages/ArticlePage.tsx`

콘텐츠 렌더링의 핵심. `getPostBySlug`로 raw MD를 불러오고, `ReactMarkdown`에
remark(`gfm`, `math`) → rehype(`headingIds`, `katex`, `highlight`) 순서로 플러그인을
꽂는다. `key={pathname}`을 `ArticleContent`에 줘서 같은 컴포넌트 트리 안에서 slug만
바뀌는 내비게이션에도 `useMemo`/`useActiveHeading`이 완전히 리셋되도록 강제한다(그렇지
않으면 이전 글의 ToC 활성 헤딩이 잠깐 남아있는 버그가 생긴다).

```tsx
<ReactMarkdown
  remarkPlugins={[remarkGfm, remarkMath]}
  rehypePlugins={[rehypeHeadingIds, rehypeKatex, rehypeHighlight]}
  components={mdxComponents}
>
  {content}
</ReactMarkdown>
```

```tsx
export function ArticlePage() {
  const { pathname } = useLocation();
  const post = getPostBySlug(pathname);
  if (!post) return <NotFound />;
  return <ArticleContent key={pathname} meta={post.meta} content={post.content} />;
}
```

### `src/components/MdxComponents.tsx`

`react-markdown`의 `Components` 타입에 맞춰 각 마크다운 요소를 Tailwind 클래스가 적용된
컴포넌트로 오버라이드한다. 이름은 `MdxComponents`지만 실제로는 MDX가 아니라
`react-markdown` 전용이다(과거 MDX 파이프라인을 계획했던 흔적).

두 가지 비자명한 부분:
1. `h2`~`h4`는 `id`가 없으면(=`rehypeHeadingIds`가 안 붙었으면) `extractText` +
   `slugify`로 직접 계산해 앵커 링크(`#`)를 만든다 — ToC 클릭 시 이동할 대상이다.
2. `code`/`pre`는 ` ```chart ` 코드 펜스를 감지해 JSON을 파싱하고 `ChartBlock`으로
   대체한다. `pre` 오버라이드는 자식이 차트 코드 블록이면 `<pre>` 래퍼 자체를 생략해서
   차트가 코드 블록 스타일(회색 배경 박스 등) 없이 렌더링되게 한다.

```tsx
code: ({ children, className }) => {
  if (className?.includes("language-chart")) {
    const raw = typeof children === "string" ? children : String(children ?? "");
    try {
      const config = JSON.parse(raw.trim());
      return <ChartBlock config={config} />;
    } catch {
      // JSON 파싱 실패 시 평범한 코드 블록으로 폴백
    }
  }
  return <code className={className}>{children}</code>;
},
```

### `src/components/ChartBlock.tsx`

MD의 ` ```chart ` JSON 설정을 Recharts 컴포넌트로 그린다. `type`에 따라
`bar`/`line`/`area`/`scatter` 네 가지 차트 중 하나를 렌더링하는 판별 유니언(discriminated
union) 타입을 쓴다. 색상은 `DEFAULT_COLORS` 팔레트를 시리즈 인덱스로 순환하되, `series[i].color`로
개별 오버라이드할 수 있다. 축/툴팁 색은 하드코딩 대신 mokona-ui CSS 변수(`var(--color-*)`)를
참조해 다크모드 전환 시 별도 처리 없이 자동으로 맞는다.

```tsx
type ChartConfig =
  | { type: "bar" | "line" | "area"; data: Record<string, unknown>[]; xKey: string; series: ChartSeries[]; /* ... */ }
  | { type: "scatter"; groups: { name: string; color?: string; data: ScatterPoint[] }[]; /* ... */ };

const TOOLTIP_STYLE = {
  contentStyle: { background: "var(--color-card)", border: "1px solid var(--color-border)" },
};
```

---

## 레이아웃 & 내비게이션

### `src/components/layout/Layout.tsx`

전체 페이지 셸. 데스크톱은 `Sidebar`(고정, `lg:ml-60`으로 본문을 밀어냄), 모바일은
`Header`(고정 상단바 + Drawer)로 분기하며 브레이크포인트는 Tailwind `lg`를 기준으로 한다.

```tsx
<div className="lg:ml-60 xl:mr-52">
  <div className="lg:hidden h-14" /> {/* 모바일 헤더 높이만큼 여백 */}
  <main className="mx-auto max-w-4xl px-6 py-8">{children}</main>
</div>
```

### `src/components/layout/NavTree.tsx`

`src/config/navigation.ts`의 트리 데이터를 `@radix-ui/react-accordion`(`type="multiple"`)으로
렌더링한다. 리프 노드는 `Link`, 그룹 노드는 `Accordion.Item`으로 나뉘며, 현재 경로와 일치하는
리프가 있으면 부모 트리거의 텍스트 색을 강조해 "지금 이 챕터가 열려 있는 섹션 안에 있다"를
시각적으로 표시한다.

```tsx
const isChildActive = item.children?.some((c) => pathname === c.path);
<Accordion.Trigger className={cn(isChildActive ? "text-[var(--color-primary)]" : "...")}>
```

### `src/components/layout/TableOfContents.tsx`

우측 고정 ToC. `items`가 비어 있으면(짧은 글이거나 헤딩이 없으면) `null`을 반환해 빈
사이드바 공간이 남지 않게 한다. `activeId`는 `useActiveHeading`이 계산해 부모(`ArticlePage`)에서
내려준다.

```tsx
export function TableOfContents({ items, activeId }: TableOfContentsProps) {
  if (items.length === 0) return null;
  // ...
}
```

### `src/hooks/useActiveHeading.ts`

`IntersectionObserver`로 "지금 화면에 걸쳐 있는 헤딩"을 찾아 ToC의 활성 항목을 결정하는
스크롤스파이(scrollspy) 훅. `rootMargin: "0px 0px -70% 0px"`로 관찰 영역을 화면 상단
30%로 좁혀서, 헤딩이 화면 아주 아래쪽에 나타나자마자가 아니라 상단 근처에 왔을 때
활성화되도록 만든다.

```ts
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
        break;
      }
    }
  },
  { rootMargin: "0px 0px -70% 0px" },
);
```

### `src/components/Drawer.tsx`

모바일 내비게이션 오버레이. mokona-ui의 `Drawer`가 아니라 `@radix-ui/react-dialog` +
`framer-motion`으로 직접 구현했다. `open`/`onOpenChange`를 props로 주면 controlled,
안 주면 내부 state로 uncontrolled 동작하는 이중 모드를 지원한다. `aria-describedby={undefined}`는
Radix Dialog가 기본으로 요구하는 설명(description) 연결이 없을 때 뜨는 콘솔 경고를 의도적으로
끈 것이다.

```tsx
const isControlled = openProp !== undefined;
const open = isControlled ? openProp : internalOpen;
```

### `src/contexts/ThemeContext.tsx`

다크모드 상태를 `localStorage`("theme" 키)와 `prefers-color-scheme` 미디어쿼리로 초기화하고,
값이 바뀔 때마다 `<html>`에 `.dark` 클래스를 토글한다. `index.html`의 인라인 스크립트(위
참고)와 초기값 로직이 동일해야 FOUC가 재발하지 않는다.

```tsx
const [dark, setDark] = useState(() => {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});
```

---

## 페이지

### `src/pages/HomePage.tsx`

과목별(수학/과학) 최신 글 12개를 2열 카드 그리드로 보여준다. `getRecentBySubject`는
`getAllPosts()`를 날짜 내림차순 정렬 후 `subject`로 필터링한 결과라서, frontmatter의
`date`가 최신순 정렬의 유일한 기준이다.

```tsx
function SubjectSection({ subject }: { subject: "math" | "science" }) {
  const posts = getRecentBySubject(subject, 12);
  // ...
}
```

### `src/pages/SubjectPage.tsx`

`/:subject` 라우트. `navigation` 설정에서 `id`가 일치하는 섹션을 찾아 챕터 카드 그리드로
렌더링하며, `path`가 없는 챕터(아직 글이 없는 카테고리)는 "준비 중" 배지를 달고
`pointer-events-none`으로 클릭을 막는다. 일치하는 섹션이 없으면(잘못된 subject 값)
홈으로 리다이렉트한다.

```tsx
if (!section) return <Navigate to="/" replace />;
```

### `src/pages/SearchPage.tsx`

`?q=` 쿼리스트링을 `useSearchParams`로 읽고 `searchPosts`(Fuse.js)에 그대로 넘긴다. 검색
상태 자체를 URL에 저장하므로 뒤로가기/공유 링크가 검색어를 보존한다.

```tsx
const [params, setParams] = useSearchParams();
const query = params.get("q") ?? "";
const results = searchPosts(query);
```

### `src/utils/search.ts`

`Fuse` 인스턴스를 모듈 로드 시 한 번만 생성한다(매 검색마다 재생성하지 않음). `title`에
가중치 3, `tags` 2, `category` 1.5, `description` 1을 줘서 제목 일치가 태그/설명 일치보다
우선 노출되게 했다.

```ts
const fuse = new Fuse<PostMeta>(getAllPosts(), {
  keys: [
    { name: "title", weight: 3 },
    { name: "tags", weight: 2 },
    { name: "category", weight: 1.5 },
    { name: "description", weight: 1 },
  ],
  threshold: 0.4,
});
```

### `src/hooks/useDocumentTitle.ts`

`react-helmet-async` 대신 쓰는 최소 구현. 컴포넌트가 마운트/업데이트될 때
`document.title`을 직접 바꾼다(React 19의 네이티브 `<title>` 호이스팅을 시도했다가
동작이 불안정해 `useEffect` 방식으로 되돌린 이력이 있다).

```ts
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
```

---

## 설정 / 타입 / 유틸

### `src/config/navigation.ts`

사이드바 트리 전체를 하드코딩한 데이터 배열. `NavSection[]` 형태이며, 새 카테고리를
추가할 때 [CLAUDE.md](./CLAUDE.md#콘텐츠-목차-구조)의 콘텐츠 목차 구조와 항상 같이
갱신해야 한다 — 이 파일에 없는 카테고리는 콘텐츠가 있어도 사이드바에 노출되지 않는다.

```ts
export const navigation: NavSection[] = [
  {
    id: "math",
    label: "수학",
    items: [
      { id: "math-middle", label: "중학교", children: [
        { id: "math-middle-number", label: "수와 연산", path: "/math/middle/number-algebra" },
      ] },
    ],
  },
];
```

### `src/types/content.ts`

frontmatter가 파싱된 뒤의 글 메타데이터 형태. `content.ts`/`search.ts`/모든 페이지가
공유하는 핵심 타입이다.

```ts
export interface PostMeta {
  title: string;
  description: string;
  date: string;
  subject: "math" | "science";
  category: string;
  level: string;
  tags: string[];
  slug: string;
}
```

### `src/types/navigation.ts`

사이드바 트리 노드 타입. `NavItem`은 `children`이 있으면 그룹, 없으면 리프(실제 문서
링크)로 취급된다.

```ts
export interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
}
```

### `src/utils/cn.ts`

`clsx`로 조건부 클래스를 조합한 뒤 `tailwind-merge`로 충돌하는 Tailwind 유틸리티(예:
`px-2`와 `px-4`가 동시에 들어왔을 때 뒤에 온 것만 남기기)를 정리한다. 프로젝트 전역에서
조건부 스타일링의 표준 진입점이다.

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `src/test/setup.ts`

Vitest 전역 셋업. `@testing-library/jest-dom`의 커스텀 매처(`toBeInTheDocument()` 등)를
등록한다. 아직 이 셋업을 사용하는 테스트 파일 자체는 없다.

```ts
import "@testing-library/jest-dom";
```
