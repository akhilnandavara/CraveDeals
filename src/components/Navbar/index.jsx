import React from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";
import { RxCross1 } from "react-icons/rx";

const NavbarLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Restaurant",
    path: "/restaurant",
  },
  {
    name: "Order online",
    path: "/orderonline",
  },
  {
    name: "Dine Out",
    path: "/dine-out",
  },
  {
    name: "Contact us",
    path: "/contactUs",
  },
];

const NavBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuActive, setMenuActive] = React.useState(false);

  const matchRoute = (path) => {
    if (typeof location.pathname === "string") {
      // Special case for the root path
      if (path === "/") {
        return location.pathname === path;
      } else {
        // Check if the location pathname starts with the provided path
        return location.pathname.startsWith(path);
      }
    } else {
      return false; // Handle the case where pathname is not a string
    }
  };

  return (
    <div className={props.className}>
      <div className="header-row">
        <Img className="h-[51px]" src="images/img_logo.svg" alt="Logo" />

        {!menuActive ? (
          <div
            className="mobile-menu "
            onClick={() => setMenuActive(!menuActive)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div
            className="mobile-menu "
            onClick={() => setMenuActive(!menuActive)}
          >
            <RxCross1 />
          </div>
        )}
      </div>

      <div
        className={`sm:${
          menuActive ? "block" : "hidden"
        } flex sm:flex-col  flex-row gap-5`}
      >
        {NavbarLinks.map((link, index) => (
          <div key={index} className="flex flex-col items-start  ">
            <Text
              className={` cursor-pointer py-2 text-lg ${
                matchRoute(link.path) ? "text-red-400" : "text-gray-900_a2"
              }`}
              size="txtOpenSansRomanRegular16Gray900a2"
              onClick={() => navigate(link.path)}
            >
              {link.name}
            </Text>
            <Line
              className={`${
                matchRoute(link.path) ? "bg-red-400" : "bg-transparent"
              } h-px w-full`}
            />
          </div>
        ))}
      </div>
      <div
        className={`sm:${
          menuActive ? "flex" : "hidden"
        } flex sm:flex-col flex-row  sm:items-start  items-center gap-2`}
      >
        <Button
          className="bg-white-A700 cursor-pointer flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
          leftIcon={
            <Img
              className="h-6 m-[13px]"
              src="images/img_cart.svg"
              alt="cart"
            />
          }
        />
        <Button className="bg-red-400 cursor-pointer font-poppins font-semibold leading-[normal] min-w-fit p-2 px-3 lg:min-w-[112px] py-3.5 rounded-[16px] text-center text-sm text-white-A700">
          Log in
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
