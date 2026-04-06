import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/layout/Layout";
import { HomePage } from "@pages/HomePage";

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
