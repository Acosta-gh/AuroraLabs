import { HashRouter, Routes, Route } from "react-router-dom";

// ===============================================================
// Layouts
// ===============================================================
import MainLayout from "@/components/layout/MainLayout";

// ===============================================================
// Pages
// ===============================================================
import NotFound from "@/pages/NotFound";
import InDevelopment from "@/pages/InDevelopment";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

const MAINTENANCE_MODE = false;
let constructionProgress = 15;

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {MAINTENANCE_MODE ? (
            <Route path="*" element={<InDevelopment constructionProgress={constructionProgress} />} />
          ) : (
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          )}
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
