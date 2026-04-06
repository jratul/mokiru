import matter from "gray-matter";
import type { PostMeta } from "@t/content";

const modules = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  eager: true,
  import: "default",
}) as Record<string, string>;

function pathToSlug(filePath: string): string {
  return filePath.replace(/^\/content/, "").replace(/\.md$/, "");
}

export function getAllPosts(): PostMeta[] {
  return Object.entries(modules)
    .map(([filePath, raw]) => {
      const { data } = matter(raw);
      return { ...(data as Omit<PostMeta, "slug">), slug: pathToSlug(filePath) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentBySubject(subject: "math" | "science", count = 5): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.subject === subject)
    .slice(0, count);
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const filePath = `/content${slug}.md`;
  const raw = modules[filePath];
  if (!raw) return null;

  const { data, content } = matter(raw);
  return {
    meta: { ...(data as Omit<PostMeta, "slug">), slug },
    content,
  };
}
