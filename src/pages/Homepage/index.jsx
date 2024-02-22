import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import RestaurantCard from "components/RestaurantCard";
import NavBar from "components/Navbar";

const HomepagePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full overflow-x-hidden ">
        <div className="bg-gradient  flex flex-col items-center justify-start p-[50px]  md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1112px]  mb-5 mx-auto w-full">
          <NavBar  className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full"/>
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
                      We Find  best price in town, we find quick home delivery and
                      dine in services.
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[85%] md:w-full">
                    <Button
                      className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[232px] py-[27px] rounded-[16px] text-center text-white-A700 text-xl"
                      onClick={() => navigate("/restaurant")}
                    >
                      Order now
                    </Button>
                    <Button
                      className="common-pointer bg-red-400_19 cursor-pointer font-semibold min-w-[232px] py-[27px] rounded-[16px] text-center text-red-400 text-xl"
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
        <div className="bg-green-50 flex flex-row items-center justify-start mt-[139px] p-3.5 w-full">
          <div className="flex md:flex-col flex-row gap-[13px] items-start justify-start ml-[149px] md:px-5 w-[79%]">
            <div className="md:h-[558px] h-[646px] relative w-3/5 md:w-full">
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
                      Our Most <br />
                      Popular{" "}
                    </>
                  </span>
                  <span className="text-red-400 font-opensans text-left font-bold leading-[normal]">
                    Dish.
                  </span>
                </Text>
                <Text
                  className="leading-[200.00%] text-gray-801 text-xl w-full"
                  size="txtPoppinsRegular20Gray801"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[232px] py-[27px] rounded-[16px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/restaurant")}
              >
                Order now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start max-w-[1112px] mt-[133px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
            size="txtOpenSansRomanBold52"
          >
            Our Popular Menu
          </Text>
          <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
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
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {new Array(6).fill({}).map((props, index) => (
                    <React.Fragment key={`RestaurantCard${index}`}>
                      <RestaurantCard
                        className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
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
                    <Img className="h-5" src="images/img_user.svg" alt="user" />
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
      
        <div className="bg-red-100 flex flex-col font-opensans items-center justify-end w-[80%] lg:max-w-[1112px] mt-[120px] mx-auto p-[93px] md:px-5 rounded-[24px] ">
          <div className="flex flex-col gap-12 items-center justify-start mt-[17px] w-[77%] md:w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Hungry? Find the best Deal.
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-6 items-center justify-center w-[70%] md:w-full">
              <Button
                className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[232px] py-[27px] rounded-[16px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/restaurant")}
              >
                Order now
              </Button>
              <Button
                className="common-pointer bg-white-A700_7f cursor-pointer font-semibold min-w-[232px] py-[27px] rounded-[16px] text-center text-red-400 text-xl"
                onClick={() => navigate("")}
              >
                Dine Out
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
