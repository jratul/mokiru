export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
  activeId?: string;
}

export function TableOfContents({ items, activeId }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block fixed right-0 top-0 h-screen w-52 border-l border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="px-4 py-4 border-b border-[var(--color-border)]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
          이 페이지
        </p>
      </div>
      <nav className="px-4 py-4 overflow-y-auto">
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={[
                  "block text-sm py-0.5 transition-colors",
                  item.level === 3 ? "pl-3" : "",
                  activeId === item.id
                    ? "text-[var(--color-primary)] font-medium"
                    : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]",
                ].join(" ")}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
