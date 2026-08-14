import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AtlasPage } from "./pages/AtlasPage";
import { EvidencePage } from "./pages/EvidencePage";
import { FirstRunPage } from "./pages/FirstRunPage";
import { HomePage } from "./pages/HomePage";
import { MapPage } from "./pages/MapPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PathPage } from "./pages/PathPage";
import { SoftwarePage } from "./pages/SoftwarePage";
import { SymphonyPage } from "./pages/SymphonyPage";
import { WhatILearnedPage } from "./pages/WhatILearnedPage";
import { WorkflowPage } from "./pages/WorkflowPage";

function Portfolio() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/atlas" element={<AtlasPage />} />
        <Route path="/path" element={<PathPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/evidence" element={<EvidencePage />} />
        <Route path="/what-i-learned" element={<WhatILearnedPage />} />
        <Route path="/what-broke" element={<Navigate to="/what-i-learned" replace />} />
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

export function App() {
  return <Portfolio />;
}
