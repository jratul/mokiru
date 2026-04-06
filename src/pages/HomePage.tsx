import { Link } from "react-router-dom";
import { getRecentBySubject } from "@utils/content";
import { cn } from "@utils/cn";
import type { PostMeta } from "@t/content";

const LEVEL_LABEL: Record<string, string> = {
  middle: "중학교",
  high: "고등학교",
  university: "대학교",
  "ai-math": "AI 수학",
};

function PostCard({ post }: { post: PostMeta }) {
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
          {post.category}
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
      <p className="text-xs text-[var(--color-muted-foreground)] line-clamp-1">
        {post.description}
      </p>
    </Link>
  );
}

function SubjectSection({
  emoji,
  label,
  subject,
}: {
  emoji: string;
  label: string;
  subject: "math" | "science";
}) {
  const posts = getRecentBySubject(subject, 5);

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-[var(--color-foreground)]">
          {emoji} {label}
        </h2>
        <Link
          to={`/${subject}`}
          className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
        >
          더 보기 →
        </Link>
      </div>
      {posts.length === 0 ? (
        <p className="text-sm text-[var(--color-muted-foreground)] px-1">아직 글이 없습니다.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[var(--color-foreground)]">mokiru</h1>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
          수학과 과학을 처음부터 제대로.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <SubjectSection emoji="📐" label="수학" subject="math" />
        <SubjectSection emoji="🔬" label="과학" subject="science" />
      </div>
    </div>
  );
}
