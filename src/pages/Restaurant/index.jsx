import React, { useEffect, useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
const RestaurantList = React.lazy(() =>
  import("components/core/RestaurantList")
);

const RestaurantPage = () => {
  const location = useLocation();
  const path = location.pathname;

  const match = path.match(/\/category\/(.+)/);
  const categoryPath = match ? match[1] : "getAll";

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto  w-full ">
        <div className="flex flex-col font-opensans md:gap-10 gap-[79px] p-[50px]  md:px-5 items-center justify-start w-full">
          <div className="flex flex-col md:gap-10  items-center justify-start  w-full  mb-5 mx-auto gap-[5rem] lg:max-w-[1250px] md:px-5">
            <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Order food from your favourite restaurants in Bangalore
            </Text>
            <RestaurantList categoryPath={categoryPath} />
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default RestaurantPage;
