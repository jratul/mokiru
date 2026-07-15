import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "mokona-ui/styles.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
