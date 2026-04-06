import type { TocItem } from "@components/layout/TableOfContents";

export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "");
}

export function extractToc(content: string): TocItem[] {
  const items: TocItem[] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const text = match[2].trim();
    items.push({ id: slugify(text), text, level });
  }

  return items;
}
