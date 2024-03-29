import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import OverView from "components/core/OverView";
import Review from "components/core/Reviews";
import Menu from "components/core/Menu";
import Cart from "pages/Cart";
import getRandomLoader from "components/loader";
const Homepage = React.lazy(() => import("pages/Homepage"));
const DineOut = React.lazy(() => import("pages/DineOut"));
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const Restaurant = React.lazy(() => import("pages/Restaurant"));
const RestaurantData = React.lazy(() => import("pages/RestaurantData"));
const CategoryData = React.lazy(() => import("components/core/CategoryData"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div className="flex items-center justify-center h-screen w-full"><img src={getRandomLoader()} alt="loading..." className="h-28"/></div>} >
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dine-out" element={<DineOut />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/restaurant" element={<Restaurant />} >
            <Route path="category/:categoryName" element={<CategoryData />} />
          </Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/restaurantData/:restaurantId" element={<RestaurantData />} >
            <Route path="" element={<OverView />} />
            <Route path="reviews" element={<Review />} />
            <Route path="menu" element={<Menu />} />
          </Route>
          <Route path="/orderonline" element={<Orderonline />} >
          <Route path="category/:categoryName" element={<CategoryData />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
