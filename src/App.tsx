import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SiteNav } from "./components/SiteNav";
import { PlantsPage } from "./pages/PlantsPage";

const MapPage = lazy(() => import("./pages/MapPage").then((m) => ({ default: m.MapPage })));

function App() {
  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<PlantsPage />} />
        <Route path="/map" element={<Suspense fallback={null}><MapPage /></Suspense>} />
      </Routes>
    </>
  );
}

export default App;
