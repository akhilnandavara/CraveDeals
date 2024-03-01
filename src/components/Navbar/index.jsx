import React from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";


const NavbarLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Restaurants",
    path: "/restaurant/category/getAll",
  },
  {
    name: "Order Online",
    path: "/orderonline/category/getAll",
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
  const [showMenu, setShowMenu] = React.useState(false);
  const {carts}=useSelector(state=>state.cart)

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
        <Img className="h-[51px] cursor-pointer" src={"/images/img_logo.png"} alt="Logo"  onClick={() => navigate("/")}  />
        <div
          className="mobile-menu   lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <RxCross1 />
          ) : (
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>

      {/* navbar links in small  device */}
      <div
        className={` ${
          showMenu ? "flex" : "hidden"
        }  minmd:hidden flex-col  gap-5`}
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

        {/* cart and login button */}
        <div
          className={`flex sm:flex-col flex-row  sm:items-start  items-center gap-2`}
        >
          <Button
            className={` ${
              matchRoute("/cart") ? "bg-red-400  " : "bg-transparent"
            }  cursor-pointer relative flex h-fit items-center justify-center rounded-[50%] w-fit p-2`}
            onClick={() => navigate("/cart")}
            leftIcon={
              <Img className="h-6  " src={"/images/img_cart.svg"} alt="cart" />
            }
          >
             {carts.length > 0 && <div className="text-red-400 absolute bottom-[20%] bg-white-A700 rounded-full w-[40%] h-fit   right-0  text-xs">{carts.length}</div>}
          </Button>
        </div>
      </div>

      {/*navlinks in large device  */}
      <div className={`flex sm:hidden flex-row items-center gap-4 w-full `}>
        {NavbarLinks.map((link, index) => (
          <div key={index} className="flex flex-col items-center   w-full">
            <Text
              className={` cursor-pointer text-center py-2 text-lg ${
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

      {/* cart and login button */}
      <div
        className={`flex sm:hidden sm:flex-col flex-row  sm:items-start  items-center gap-2`}
      >
        <Button
          className={` ${
            matchRoute("/cart") ? "bg-red-400  " : "bg-transparent"
          }  cursor-pointer relative flex h-[50px] items-center justify-center rounded-[50%] w-[50px]`}
          onClick={() => navigate("/cart")}
          leftIcon={
            <Img
              className="h-6 m-[13px] "
              src={"/images/img_cart.svg"}
              alt="cart"
            />
          }
        >
           {carts.length > 0 && <div className="text-red-400 absolute bottom-[20%] bg-white-A700 rounded-full w-[40%] h-fit   right-0  text-xs">{carts.length}</div>}
        </Button>

        {/* login button can be added in future  */}
      </div>
    </div>
  );
};

export default NavBar;
