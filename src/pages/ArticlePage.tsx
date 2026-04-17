import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import { getPostBySlug } from "@utils/content";
import { extractToc, rehypeHeadingIds } from "@utils/markdown";
import { mdxComponents } from "@components/MdxComponents";
import { TableOfContents } from "@components/layout/TableOfContents";
import { useActiveHeading } from "@hooks/useActiveHeading";
import { useDocumentTitle } from "@hooks/useDocumentTitle";
import { useMemo } from "react";
import type { PostMeta } from "@t/content";

const LEVEL_LABEL: Record<string, string> = {
  middle: "중학교",
  high: "고등학교",
  university: "대학교",
  "ai-math": "AI 수학",
};

function ArticleContent({ meta, content }: { meta: PostMeta; content: string }) {
  const toc = useMemo(() => extractToc(content), [content]);
  const tocIds = useMemo(() => toc.map((t) => t.id), [toc]);
  const activeId = useActiveHeading(tocIds);
  useDocumentTitle(`모키루 | ${meta.title}`);

  return (
    <>
      <article className="mx-auto max-w-4xl">
        <header className="mb-8 pb-6 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-md px-2 py-0.5">
              {meta.category}
            </span>
            {LEVEL_LABEL[meta.level] && (
              <span className="text-xs text-[var(--color-muted-foreground)]">
                {LEVEL_LABEL[meta.level]}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-foreground)] mb-3">{meta.title}</h1>
          <p className="text-[var(--color-muted-foreground)]">{meta.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[var(--color-muted-foreground)] bg-[var(--color-muted)] rounded-full px-2.5 py-0.5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeHeadingIds, rehypeKatex, rehypeHighlight]}
            components={mdxComponents}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>

      <TableOfContents items={toc} activeId={activeId} />
    </>
  );
}

export function ArticlePage() {
  const { pathname } = useLocation();
  const post = getPostBySlug(pathname);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-5xl mb-4">📭</p>
        <p className="text-xl font-bold text-[var(--color-foreground)]">페이지를 찾을 수 없습니다</p>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">{pathname}</p>
      </div>
    );
  }

  return <ArticleContent meta={post.meta} content={post.content} />;
}
