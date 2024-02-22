import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Homepage = React.lazy(() => import("pages/Homepage"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const Restaurant = React.lazy(() => import("pages/Restaurant"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes >
          <Route path="*" element={<NotFound />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
