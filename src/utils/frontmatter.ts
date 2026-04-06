/**
 * 브라우저 호환 frontmatter 파서.
 * gray-matter 대신 사용 (gray-matter는 Node.js Buffer에 의존).
 */
export function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]+([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlStr = match[1];
  const content = match[2];
  const data: Record<string, unknown> = {};

  const lines = yamlStr.split(/\r?\n/);
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) {
      i++;
      continue;
    }

    const key = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim();

    if (!key) {
      i++;
      continue;
    }

    if (rest.startsWith("[")) {
      // 인라인 배열: tags: ["a", "b", "c"]
      data[key] = rest
        .replace(/^\[|\]$/g, "")
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else if (rest === "") {
      // 멀티라인 배열:
      // tags:
      //   - a
      //   - b
      const items: string[] = [];
      i++;
      while (i < lines.length && lines[i].trimStart().startsWith("-")) {
        items.push(lines[i].replace(/^\s*-\s*/, "").trim().replace(/^["']|["']$/g, ""));
        i++;
      }
      data[key] = items;
      continue;
    } else {
      // 스칼라 값 (문자열, 숫자)
      const val = rest.replace(/^["']|["']$/g, "");
      data[key] = isNaN(Number(val)) || val === "" ? val : Number(val);
    }

    i++;
  }

  return { data, content };
}
