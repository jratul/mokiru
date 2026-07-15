import path from "path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/**
 * mokona-ui/dist/styles.css는 Pretendard를 jsDelivr CDN에서 불러오는
 * @import url("https://cdn.jsdelivr.net/...")를 내장하고 있다. 이 프로젝트는
 * Pretendard를 pretendard 패키지로 자체 호스팅하므로, 그대로 두면 같은 폰트를
 * CDN과 로컬 양쪽에서 중복으로 받아오게 된다 — CDN import를 제거해 자체 호스팅만 남긴다.
 */
function stripMokonaCdnFontImport(): Plugin {
  return {
    name: "strip-mokona-cdn-font-import",
    enforce: "pre",
    transform(code, id) {
      if (
        id.includes("mokona-ui") &&
        id.endsWith("styles.css") &&
        code.includes("cdn.jsdelivr.net")
      ) {
        return code.replace(
          /@import url\("https:\/\/cdn\.jsdelivr\.net\/[^"]*pretendard[^"]*"\);?/i,
          "",
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [stripMokonaCdnFontImport(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@t": path.resolve(__dirname, "./src/types"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@content": path.resolve(__dirname, "./content"),
    },
  },
});
