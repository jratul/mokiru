import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import { searchPosts } from "@utils/search";
import { cn } from "@utils/cn";
import type { PostMeta } from "@t/content";

const LEVEL_LABEL: Record<string, string> = {
  middle: "중학교",
  high: "고등학교",
  university: "대학교",
  "ai-math": "AI 수학",
};

const SUBJECT_LABEL: Record<string, string> = {
  math: "수학",
  science: "과학",
};

function ResultCard({ post }: { post: PostMeta }) {
  return (
    <Link
      to={post.slug}
      className={cn(
        "group flex flex-col gap-1.5 rounded-xl px-4 py-3.5",
        "border border-[var(--color-border)]",
        "hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]",
        "transition-colors",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-md px-2 py-0.5">
          {SUBJECT_LABEL[post.subject]} · {post.category}
        </span>
        {LEVEL_LABEL[post.level] && (
          <span className="text-xs text-[var(--color-muted-foreground)]">
            {LEVEL_LABEL[post.level]}
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
        {post.title}
      </p>
      <p className="text-xs text-[var(--color-muted-foreground)] line-clamp-2">{post.description}</p>
      <div className="flex flex-wrap gap-1 mt-0.5">
        {post.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs text-[var(--color-muted-foreground)] bg-[var(--color-muted)] rounded-full px-2 py-0.5"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const results = searchPosts(query);

  return (
    <>
      <Helmet>
        <title>{query ? `모키루 | "${query}" 검색 결과` : "모키루 | 검색"}</title>
      </Helmet>

      <div className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">검색</h1>

        {/* 검색 입력 */}
        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] pointer-events-none"
          />
          <input
            type="search"
            placeholder="제목, 태그, 설명으로 검색..."
            value={query}
            onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
            className={cn(
              "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]",
              "pl-10 pr-4 py-3 text-sm text-[var(--color-foreground)]",
              "placeholder:text-[var(--color-muted-foreground)]",
              "focus:outline-none focus:border-[var(--color-primary)]",
              "transition-colors",
            )}
          />
        </div>

        {/* 결과 */}
        {query && (
          <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
            {results.length > 0 ? `${results.length}개 결과` : "결과 없음"}
          </p>
        )}

        {results.length > 0 && (
          <ul className="flex flex-col gap-2">
            {results.map((post) => (
              <li key={post.slug}>
                <ResultCard post={post} />
              </li>
            ))}
          </ul>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-16 text-[var(--color-muted-foreground)]">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-medium">"{query}"에 대한 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
