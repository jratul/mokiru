import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/layout/Layout";
import { HomePage } from "@pages/HomePage";
import { ArticlePage } from "@pages/ArticlePage";

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<ArticlePage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
