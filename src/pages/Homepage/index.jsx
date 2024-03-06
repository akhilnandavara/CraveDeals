import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Text,
} from "components";
import Footer from "components/Footer"; //importing the footer component
import NavBar from "components/Navbar"; //importing the navbar component

const HomepagePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); //scroll to top when component loads
  }, []);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full overflow-x-hidden ">
        <div className="bg-gradient  flex flex-col items-center justify-start p-[50px]  md:px-5 w-full">
          <div className="flex flex-col md:gap-10  items-center justify-start  w-full   mb-5 mx-auto gap-[102px] lg:max-w-[1250px] md:px-5">
            <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start rounded-[16px]">
                <div className="flex flex-col gap-9 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="md:text-5xl text-[70px] text-gray-902"
                      size="txtOpenSansRomanBold70"
                    >
                      <span className="text-gray-902 font-opensans text-left font-bold">
                        <>
                          Find the Best Restaurant
                          <br />
                          In{" "}
                        </>
                      </span>
                      <span className="text-red-400 font-opensans text-left font-bold">
                        Town.
                      </span>
                    </Text>
                    <Text
                      className="leading-[200.00%] text-gray-802 text-xl w-[91%] sm:w-full"
                      size="txtPoppinsRegular20"
                    >
                      We Find best price in town, we find quick home delivery
                      and dine in services.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-center  sm:w-full">
                    <Button
                      className=" box-content cursor-pointer bg-red-400 font-semibold  md:px-4 lg:min-w-[232px] md:py-4 lg:py-[1.5rem] rounded-[1rem] text-center text-white-A700 lg:text-xl"
                      onClick={() => navigate("/restaurant")}
                    >
                      Order now
                    </Button>
                    <Button
                      className=" box-content bg-red-400_19 cursor-pointer font-semibold  md:px-4 lg:min-w-[232px] md:py-4 lg:py-[1.5rem] rounded-[1rem] text-center text-red-400 lg:text-xl"
                      onClick={() => navigate("")}
                    >
                      Dine Out
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="h-[502px] md:h-auto object-cover"
                src="images/img_illustration.png"
                alt="illustration"
              />
            </div>
          </div>
        </div>
        <div className="bg-green-50 flex flex-row items-center justify-center mt-[139px] p-3.5 w-full">
          <div className="flex md:flex-col flex-row gap-[13px] items-start justify-start lg:ml-[149px] md:px-5  w-[90%] lg:max-w-[1250px]">
            <div className="md:h-[558px] lg:h-[646px] relative w-3/5 md:w-full ">
              <Img
                className="absolute h-[558px] inset-y-[0] left-[4%] my-auto object-cover w-[85%]"
                src="images/img_kindpng3443995.png"
                alt="kindpng3443995"
              />
              <Img
                className="absolute bottom-[7%] h-[175px] left-[0] object-cover w-[28%]"
                src="images/img_kisspngleafpe.png"
                alt="kisspngleafpe"
              />
              <Img
                className="absolute bottom-[0] h-[117px] left-[39%] object-cover w-[17%]"
                src="images/img_kisspngleafpe_117X110.png"
                alt="kisspngleafpe One"
              />
              <Img
                className="absolute h-[158px] object-cover right-[0] top-[0] w-[24%]"
                src="images/img_kisspngleafpe_158X154.png"
                alt="kisspngleafpe Two"
              />
            </div>
            <div className="flex flex-col gap-9 items-start justify-start md:mt-0 mt-[91px] rounded-[16px] w-[39%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[110.00%] sm:text-[38px] md:text-[44px] text-[52px] text-red-400"
                  size="txtTinosBold52"
                >
                  <span className="text-gray-902 font-opensans text-left font-bold leading-[normal]">
                    <>
                    Discover the Best Deals 
                    on Your Favorite{" "}
                    </>
                  </span>
                  <span className="text-red-400 font-opensans text-left font-bold leading-[normal]">
                   Dishes! 
                  </span>
                </Text>
                <Text
                  className="leading-[200.00%] text-gray-801 text-xl w-full"
                  size="txtPoppinsRegular20Gray801"
                >
                   Uncover the lowest prices for your favorite restaurant dishes across three
                  top food delivery services. Save money while savoring every
                  bite!
                </Text>
              </div>
              <Button
                className="common-pointer bg-red-400 cursor-pointer font-semibold md:px-4 lg:min-w-[232px] md:py-4 lg:py-[27px] rounded-[16px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/restaurant")}
              >
                Order now
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-red-100 flex flex-col font-opensans items-center justify-end w-[79%] lg:max-w-[1112px] mt-[120px] mx-auto p-[93px] md:px-5 rounded-[24px] ">
          <div className="flex flex-col gap-12 items-center justify-start mt-[17px] w-[79%] md:w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Hungry? Find the best Deal.
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-6 items-center justify-center w-[70%] md:w-full">
              <Button
                className="common-pointer bg-red-400 cursor-pointer font-semibold md:px-4 lg:min-w-[232px] md:py-4 lg:py-[27px]  rounded-[16px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/restaurant")}
              >
                Order now
              </Button>
              <Button
                className="common-pointer bg-white-A700_7f cursor-pointer font-semibold md:px-4 lg:min-w-[232px] md:py-4 lg:py-[27px]  rounded-[16px] text-center text-red-400 text-xl"
                onClick={() => navigate("")}
              >
                Dine Out
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full " />
      </div>
    </>
  );
};

export default HomepagePage;
