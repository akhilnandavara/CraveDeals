import React from "react";

import { Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import CategorySlider from "components/CategorySlider";
import { categoryUrls } from "assets/category-Urls";
import { Outlet } from "react-router-dom";



const OrderonlinePage = () => {

  return (
    <>
     <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto  w-full ">
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] p-[50px]  md:px-5 items-center justify-start w-full">
      <div className="flex flex-col md:gap-10  items-center justify-start  w-full  mb-5 mx-auto gap-[102px] lg:max-w-[1250px] md:px-5">
      <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
            <Text
              className="md:ml-[0]  mt-4 md:text-5xl text-3xl lg:text-[5rem] text-gray-900"
              size="txtOpenSansRomanBold80"
            >
              Choose your favorite food
            </Text>
            <CategorySlider Urls={categoryUrls}/>
            
      <div className="flex md:flex-col flex-row font-poppins md:gap-[46px] items-center justify-between mt-4 w-full">
        <Outlet />
      </div>
  
          </div>
          <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderonlinePage;
