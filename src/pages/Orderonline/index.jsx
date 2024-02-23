import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import CategorySlider from "components/CategorySlider";
import { categoryUrls } from "assets/category-Urls";
import RestaurantList from "components/core/RestaurantList";
import { Outlet } from "react-router-dom";




const OrderonlinePage = () => {

 

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <NavBar className="flex md:flex-col flex-row md:gap-5 md:items-start items-center  md:justify-start  lg:justify-between w-full" />
            <Text
              className="md:ml-[0]  mt-[117px] md:text-5xl text-[80px] text-gray-900"
              size="txtOpenSansRomanBold80"
            >
              Choose your favorite food
            </Text>
            <CategorySlider Urls={categoryUrls}/>
            
      <div className="flex md:flex-col flex-row font-poppins md:gap-[46px] items-center justify-between mt-[70px] w-full">
        <Outlet />
      </div>
  
          {/* <RestaurantList categoryPath={categoryPath}/> */}
          </div>
          <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderonlinePage;
