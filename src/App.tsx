import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "@components/layout/Layout";
import { HomePage } from "@pages/HomePage";
import { SubjectPage } from "@pages/SubjectPage";
import { ArticlePage } from "@pages/ArticlePage";
import { SearchPage } from "@pages/SearchPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/:subject" element={<SubjectPage />} />
                <Route path="*" element={<ArticlePage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
