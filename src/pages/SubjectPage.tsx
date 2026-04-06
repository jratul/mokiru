import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { navigation } from "@/config/navigation";
import { cn } from "@utils/cn";
import type { NavItem } from "@t/navigation";

function ChapterCard({ item }: { item: NavItem }) {
  const hasContent = !!item.path;

  return (
    <Link
      to={item.path ?? "#"}
      className={cn(
        "block rounded-lg px-4 py-2.5 text-sm transition-colors",
        "border border-[var(--color-border)]",
        hasContent
          ? "hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] text-[var(--color-foreground)]"
          : "opacity-40 cursor-not-allowed text-[var(--color-muted-foreground)] pointer-events-none",
      )}
    >
      {item.label}
      {!hasContent && <span className="ml-2 text-xs">(준비 중)</span>}
    </Link>
  );
}

function SectionCard({ item }: { item: NavItem }) {
  return (
    <section>
      <h2 className="text-base font-bold text-[var(--color-foreground)] mb-3 pb-2 border-b border-[var(--color-border)]">
        {item.label}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {item.children?.map((child) => (
          <li key={child.id}>
            <ChapterCard item={child} />
          </li>
        ))}
      </ul>
    </section>
  );
}

const SUBJECT_EMOJI: Record<string, string> = {
  math: "📐",
  science: "🔬",
};

export function SubjectPage() {
  const { subject } = useParams<{ subject: string }>();
  const section = navigation.find((s) => s.id === subject);

  if (!section) return <Navigate to="/" replace />;

  const emoji = SUBJECT_EMOJI[subject ?? ""] ?? "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Helmet>
        <title>{section.label} | mokiru</title>
        <meta name="description" content={`${section.label} 전체 목차`} />
      </Helmet>

      <h1 className="text-3xl font-bold text-[var(--color-foreground)] mb-8">
        {emoji} {section.label}
      </h1>

      <div className="flex flex-col gap-8">
        {section.items.map((item) =>
          item.children ? (
            <SectionCard key={item.id} item={item} />
          ) : (
            <ChapterCard key={item.id} item={item} />
          ),
        )}
      </div>
    </div>
  );
}
