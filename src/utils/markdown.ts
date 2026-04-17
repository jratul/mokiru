import type { TocItem } from "@components/layout/TableOfContents";

export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9가-힣-]/g, "");
}

function stripMathDelimiters(raw: string): string {
  return raw
    .replace(/\$\$[\s\S]*?\$\$/g, "")
    .replace(/\$([^$\n]+)\$/g, "$1")
    .trim();
}

export function extractToc(content: string): TocItem[] {
  const items: TocItem[] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const rawText = match[2].trim();
    const displayText = stripMathDelimiters(rawText);
    items.push({ id: slugify(displayText), text: displayText, level });
  }

  return items;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hastToText(node: any): string {
  if (node.type === "text") return node.value as string;
  if (Array.isArray(node.children)) return node.children.map(hastToText).join("");
  return "";
}

// Rehype plugin: sets id on heading elements BEFORE rehype-katex runs,
// so math text is plain LaTeX source (not full KaTeX HTML).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function rehypeHeadingIds(): (tree: any) => void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function walk(node: any) {
      if (node.type === "element" && /^h[2-6]$/.test(node.tagName as string)) {
        const text = hastToText(node);
        node.properties = node.properties ?? {};
        node.properties.id = slugify(text);
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    }
    walk(tree);
  };
}
