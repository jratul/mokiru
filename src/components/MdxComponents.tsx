/* eslint-disable react-refresh/only-export-components */
import { isValidElement, Children, type ReactNode, type ReactElement } from "react";
import type { Components } from "react-markdown";
import { cn } from "@utils/cn";
import { slugify } from "@utils/markdown";
import { ChartBlock } from "./ChartBlock";

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement(node)) {
    return extractText((node as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return "";
}

function Heading({
  level,
  children,
  className,
}: {
  level: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}) {
  const id = slugify(extractText(children));
  const Tag = `h${level}` as "h2" | "h3" | "h4";
  return (
    <Tag id={id} className={className}>
      <a href={`#${id}`} className="group">
        {children}
        <span className="ml-2 opacity-0 group-hover:opacity-40 transition-opacity text-[var(--color-muted-foreground)]">
          #
        </span>
      </a>
    </Tag>
  );
}

export const mdxComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-[var(--color-foreground)] mt-10 mb-4 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <Heading level={2} className="text-2xl font-bold text-[var(--color-foreground)] mt-10 mb-3 scroll-mt-20">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading level={3} className="text-xl font-semibold text-[var(--color-foreground)] mt-7 mb-2 scroll-mt-20">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading level={4} className="text-base font-semibold text-[var(--color-foreground)] mt-5 mb-1 scroll-mt-20">
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <p className="text-[var(--color-foreground)] leading-7 mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 mb-4 space-y-1 text-[var(--color-foreground)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 mb-4 space-y-1 text-[var(--color-foreground)]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 my-4 text-[var(--color-muted-foreground)] italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-[var(--color-border)]" />,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80 transition-opacity"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--color-foreground)]">{children}</strong>
  ),
  // 인라인 코드 + chart 블록
  code: ({ children, className }) => {
    if (className?.includes("language-chart")) {
      const raw = typeof children === "string" ? children : String(children ?? "");
      try {
        const config = JSON.parse(raw.trim());
        return <ChartBlock config={config} />;
      } catch {
        // fallthrough to plain code block
      }
    }
    if (className) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="bg-[var(--color-muted)] text-[var(--color-foreground)] rounded px-1.5 py-0.5 text-[0.85em] font-mono">
        {children}
      </code>
    );
  },
  // 블록 코드 래퍼 — chart 블록이면 pre 스타일 제거
  pre: ({ children, ...props }) => {
    const isChart = Children.toArray(children).some((child) => {
      if (isValidElement(child)) {
        const el = child as ReactElement<{ className?: string }>;
        return el.props?.className?.includes("language-chart");
      }
      return false;
    });
    if (isChart) return <>{children}</>;
    return (
      <pre
        className={cn(
          "overflow-x-auto rounded-xl border border-[var(--color-border)]",
          "bg-[var(--color-muted)] p-4 text-sm my-5",
          "[&>code]:bg-transparent [&>code]:p-0",
        )}
        {...props}
      >
        {children}
      </pre>
    );
  },
  // 테이블
  table: ({ children }) => (
    <div className="overflow-x-auto my-5">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-[var(--color-border)]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 text-left font-semibold text-[var(--color-foreground)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-2 border-b border-[var(--color-border)] text-[var(--color-foreground)]">
      {children}
    </td>
  ),
  tr: ({ children }) => <tr className="hover:bg-[var(--color-muted)]">{children}</tr>,
};
