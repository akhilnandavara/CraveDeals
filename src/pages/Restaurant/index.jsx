import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";
import RestaurantCard from "components/RestaurantCard";
import NavBar from "components/Navbar";
import { getRestaurantList } from "Service/operations/RestaurantApi";

const RestaurantPage = () => {
  const navigate = useNavigate();

  const [restoLists, setRestoLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRestaurantList = async () => {
    const res = await getRestaurantList();
    setRestoLists(res);
  };
  useEffect(() => {
    setLoading(true);
    if (!restoLists.length) {
      fetchRestaurantList();
    }
    setLoading(false);
  }, []);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full ">
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <NavBar className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full" />
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Order food from your favourite restaurants in Bangalore
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
              {/* filtering options */}
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
                <Button className="bg-red-400 cursor-pointer font-semibold min-w-[232px] py-[26px] rounded-[16px] text-center text-white-A700 text-xl">
                  All catagory
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Dinner
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Lunch
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Dessert
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Drink
                </Button>
              </div>
              {/* restaurant cards */}
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    {restoLists.map((restoData, index) => (
                      <React.Fragment key={`RestaurantCard${index}`}>
                        <RestaurantCard
                          resto={restoData} // Passing restaurant data as a prop named "resto"
                          className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full"
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                {/* pagination buttons */}
                <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-1/5 md:w-full">
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
                    <Button className="bg-gray-900 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded text-center text-sm text-white-A700 tracking-[-0.50px] w-[35px]">
                      1
                    </Button>
                    <Button className="bg-gray-200 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                      2
                    </Button>
                    <Button className="bg-gray-200 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                      3
                    </Button>
                    <Button className="bg-gray-200 flex h-[35px] items-center justify-center p-[7px] rounded w-[35px]">
                      <Img
                        className="h-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default RestaurantPage;
