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


const MAINTENANCE_MODE = true;
let constructionProgress = 15;

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {MAINTENANCE_MODE ? (
            <Route path="*" element={<InDevelopment constructionProgress={constructionProgress} />} />
          ) : (
            <Route element={<MainLayout />}>
              <Route index element={<div>Home</div>} />
              <Route path="*" element={<NotFound />} />
            </Route>
          )}
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
