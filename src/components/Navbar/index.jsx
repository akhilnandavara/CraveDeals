import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
const NavbarLinks= [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Restaurant",
    path: "/restaurant"
  },
  {
    name: "Order online",
    path: "/orderonline"
  },
  {
    name: "Dine Out",
    path: "/dine-out"
  },
  {
    name: "Contact us",
    path: "/contactUs"
  }

]

const NavBar = (props) => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  

  const matchRoute = (path) => {
    return location === path;
  };

  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[51px] w-[12%]"
          src="images/img_logo.svg"
          alt="Logo"
        />
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
            {NavbarLinks.map((link, index) => (
            <div key={index} className=" common-pointer flex flex-col gap-1.5 items-start justify-start ml-8 sm:ml-[0] md:w-[30%]  sm:w-full">
            <Text
              className={` ${matchRoute(link.path)?" text-red-400":"text-gray-900_a2"} text-base `}
              size="txtOpenSansRomanRegular16Gray900a2"
              onClick={() => navigate(link.path)}
            >
            {link.name}
            </Text>
            <Line className={` ${matchRoute(link.path)?" bg-red-400": "bg-transparent"} h-px w-full`}></Line>
          </div>
          ))}
        </div>
        <Button
          className="bg-white-A700 cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] rounded-[50%] w-[50px]"
          leftIcon={
            <Img
              className="h-6 m-[13px]"
              src="images/img_cart.svg"
              alt="cart"
            />
          }
        ></Button>
        <Button className="bg-red-400 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] py-3.5 rounded-[16px] text-center text-sm text-white-A700">
          Log in
        </Button>
      </div>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;
