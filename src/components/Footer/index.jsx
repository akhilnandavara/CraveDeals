import React from "react";

import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const navigate =useNavigate()
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-center mb-[76px] mt-[70px] mx-auto  w-[80%] lg:max-w-[1112px]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-2 w-[38%] md:w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-[30%] md:w-full">
                <img src="/android-chrome-192x192.png" alt="" className="h-20 hover:scale-[1.1] cursor-pointer" />
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsSemiBold18WhiteA700"
                >
                  <span className="text-white-A700 font-poppins text-left font-semibold">
                    CraveDeals
                  </span>
                  <span className="text-red-400 font-poppins text-left font-semibold">
                    .
                  </span>
                </Text>
              </div>
              <Text
                className="leading-[200.00%] mt-14 text-gray-300 text-lg lg:text-xl w-[72%] sm:w-full"
                size="txtPoppinsRegular20Gray300"
              >
                Find the best Deals on restaurant, cafe, fast food, bar and food.{" "}
              </Text>
              <div className="flex flex-row gap-[30px] items-center justify-start md:ml-[0] ml-[3px] mt-[47px] w-[58%] md:w-full">
                <Button className="bg-gray-301 flex h-[60px] items-center justify-center p-[15px] rounded-[50%] w-[60px]">
                  <Img
                    className="h-[30px]"
                    src="/images/img_twitter.png"
                    alt="twitter"
                  />
                </Button>
                <Button className="bg-bluegray-100 flex h-[60px] items-center justify-center p-[15px] rounded-[50%] w-[60px]">
                  <Img
                    className="h-[30px]"
                    src="/images/img_instagram.png"
                    alt="Instagram"
                  />
                </Button>
                <Button className="bg-bluegray-100 flex h-[60px] items-center justify-center p-[15px] rounded-[50%] w-[60px]">
                  <Img
                    className="h-[30px]"
                    src="/images/img_facebook.png"
                    alt="Facebook"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-4">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                size="txtPoppinsSemiBold25Red400"
              >
                Page
              </Text>
              <Link
                className="mt-[43px] text-gray-300 text-lg lg:text-xl"
                size="txtPoppinsRegular20Gray300"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="mt-[35px] text-gray-300 text-lg lg:text-xl"
                size="txtPoppinsRegular20Gray300"
                to={"/restaurant"}
              >
                Restaurant
              </Link>
              <Link
                className="mt-[34px] text-gray-300 text-lg lg:text-xl"
                size="txtPoppinsRegular20Gray300"
                to={"/orderonline/category/getAll"}
              >
                Order online
              </Link>
          
              <Link
                className="mt-8 text-gray-300 text-lg lg:text-xl"
                size="txtPoppinsRegular20Gray300"
                to={"/dine-out"}
              >
                Dine Out
              </Link>
            </div>
           
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[11px]">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                size="txtPoppinsSemiBold25Red400"
              >
                Get in touch
              </Text>
              <Text
                className="leading-[153.00%] mt-[46px] text-gray-300  text-lg lg:text-xl w-full"
                size="txtPoppinsRegular20Gray300"
              >
                Sector 252 banglore, India
              </Text>
              <Text
                className="mt-[31px] text-gray-300  text-lg lg:text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                Akhiln1108@gmail.com
              </Text>
              <Text
                className="mt-8 text-gray-300  text-lg lg:text-xl"
                size="txtPoppinsRegular20Gray300"
              >
                +1800 123 4567
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center  gap-2 justify-center w-[30%] md:w-full">
            <Text
              className=" text-gray-301 text-sm lg:text-xl"
              size="txtPoppinsRegular20Gray301"
            >
              Copyright&copy;
            </Text>
            
            <Text
              className="text-gray-301 text-sm lg:text-xl"
              size="txtPoppinsRegular20Gray301"
            >
              2024 CraveDeals
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
