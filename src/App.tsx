import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { FirstRunPage } from "./pages/FirstRunPage";
import { HomePage } from "./pages/HomePage";
import { MapPage } from "./pages/MapPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SymphonyPage } from "./pages/SymphonyPage";
import { WorkflowPage } from "./pages/WorkflowPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/symphony" element={<SymphonyPage />} />
        <Route path="/symphony/first" element={<FirstRunPage />} />
        <Route path="/symphony/workflow" element={<WorkflowPage />} />
        <Route path="/symphony/map" element={<MapPage />} />
        <Route path="/atlas-symphony" element={<Navigate to="/symphony" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
