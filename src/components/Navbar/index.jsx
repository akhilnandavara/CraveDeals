import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPath } from "slices/restaurantSlice";
import { IoIosSearch } from "react-icons/io";

const NavbarLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Restaurants",
    path: "/restaurant",
  },
  {
    name: "Order Online",
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
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = React.useState(false);
  const { carts } = useSelector((state) => state.cart);

  const matchRoute = (path) => {
    if (typeof location.pathname === "string") {
      // Special case for the root path
      if (path === "/") {
        return location.pathname === path;
      } else {
        // Check if the location pathname exactly matches the provided path
        return (
          location.pathname === path || location.pathname.startsWith(path + "/")
        );
      }
    } else {
      return false; // Handle the case where pathname is not a string
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.trim() !== "") {
      dispatch(setCurrentPath(value)); // Dispatch action with the current search term
    } else {
      // If input is empty, set the state back to the default value (e.g., "getAll")
      dispatch(setCurrentPath("getAll"));
    }
  };

  return (
    <div className={props.className}>
      <div className="header-row">
        <Img
          className="h-[51px] cursor-pointer"
          src={"/images/img_logo.png"}
          alt="Logo"
          onClick={() => navigate("/")}
        />
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
              onClick={() => {
                if (!location.pathname.startsWith(link.path + "/")) {
                  navigate(link.path);
                }
              }}
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

        {/* cart and login button in small device */}
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
            {carts.length > 0 && (
              <div className="text-red-400 absolute bottom-[20%] bg-white-A700 rounded-full w-[40%] h-fit   right-0  text-xs">
                {carts.length}
              </div>
            )}
          </Button>
        </div>

        

      </div>

      {/*navlinks in large device  */}
      <div className={`flex sm:hidden  flex-row items-center gap-4 w-full `}>
        {NavbarLinks.map((link, index) => (
          <div key={index} className="flex flex-col items-center   w-full">
            <Text
              className={` cursor-pointer text-center py-2 text-lg ${
                matchRoute(link.path) ? "text-red-400" : "text-gray-900_a2"
              }`}
              size="txtOpenSansRomanRegular16Gray900a2"
              onClick={() => {
                navigate(link.path);
              }}
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

      {/* cart and login button in large device */}
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
          {carts.length > 0 && (
            <div className="text-red-400 absolute bottom-[20%] bg-white-A700 rounded-full w-[40%] h-fit   right-0  text-xs">
              {carts.length}
            </div>
          )}
        </Button>

        {/* Search Field */}
        { location.pathname.includes("/category")  && <div className="relative flex justify-center items-center">
          <input
            className=" w-72 h-10 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-red-400"
            onChange={handleInputChange}
            placeholder="Search for restaurants, cuisines..."
          />
          <span className="absolute right-2 bg-gray-50">
            {" "}
            <IoIosSearch />
          </span>
        </div>}
      </div>

      {/* search menu  */}
      <div className="minmd:hidden mx-auto">
      { location.pathname.includes("/category")  && <div className="relative flex justify-center items-center">
          <input
            className=" w-72 h-10 px-3 rounded-lg border-2  border-gray-300 focus:outline-none focus:border-red-400"
            onChange={handleInputChange}
            placeholder="Search for restaurants, cuisines..."
          />
          <span className="absolute right-2 bg-gray-50">
            {" "}
            <IoIosSearch />
          </span>
        </div>}
      </div>
    </div>
  );
};

export default NavBar;
