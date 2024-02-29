import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaDirections, FaStar } from "react-icons/fa";
import { getRestaurantData } from "Service/operations/RestaurantApi";
import NavBar from "components/Navbar";
import { Button, Img, Line, Text } from "components";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurantData } from "slices/restaurantSlice";
import Footer from "components/Footer";
import getRandomLoader from "components/loader";

const filterButtons = [
  {
    id: 1,
    name: "Overview",
    url: "",
  },
  {
    id: 2,
    name: "Menu",
    url: "menu",
  },
  {
    id: 3,
    name: "Reviews",
    url: "reviews",
  },
];

export default function RestaurantDataPage() {
  let { restaurantId } = useParams();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
const { restaurantData } = useSelector((state) => state.restaurant);


  const location = useLocation();

 
  const matchRoute = (path) => {
    if (path === "") {
      return (
        location.pathname.split("/")[3] === undefined ||
        location.pathname.split("/")[3] === ""
      );
    } else {
      return location.pathname.split("/")[3] === path;
    }
  };

  useEffect(() => {
   ( async () => {
      setLoading(true);
      const res = await getRestaurantData(restaurantId);
      console.log("res",res)
      dispatch(setRestaurantData(res));
      setLoading(false);
    })();
  
  }, []);


  function getTodaysOperatingHours() {
    const operatingHours = restaurantData?.googleData?.operatingHours?.filter(
      (day) => {
        return day.includes(
          new Date().toLocaleString("en-us", { weekday: "long" })
        );
      }
    );

    if (operatingHours?.length > 0) {
      const todayTiming = operatingHours[0];
      const timing = todayTiming.substring(todayTiming.indexOf(":") + 2);
      return timing;
    } else {
      return "Operating hours not available";
    }
  }
  return (
    <>
    { loading ? <div className="flex items-center justify-center   w-full h-screen"> <img src={getRandomLoader()} alt="loading..." className="h-28"/> </div> :
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto  w-full ">
        <div className="flex flex-col font-opensans md:gap-10 gap-[79px] p-[50px]  md:px-5 items-center justify-start w-full">
          <div className="flex flex-col md:gap-10  items-center justify-start  w-full  mb-5 mx-auto gap-[50px] lg:max-w-[1250px] md:px-5">
            <NavBar className="flex md:flex-col flex-row md:gap-10 md:items-start items-center justify-between w-full" />
            {/* header content */}
            <div className="w-full flex flex-col gap-4">
              {/* Restaurant image */}
              <div className="grid grid-cols-4 grid-rows-2 gap-1   w-full max-h-[20rem] overflow-hidden">
                {restaurantData?.images?.map((img, index) => (
                  <div
                    key={index}
                    className={`relative  rounded-lg overflow-hidden  ${
                      index === 0 ? "col-span-3 row-span-2" : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className={`w-full h-full object-cover rounded-lg transition-transform duration-200 transform origin-center hover:scale-105 cursor-pointer`}
                    />
                  </div>
                ))}
              </div>

              <div className=" flex flex-col gap-4 sticky top-0 z-[1000] bg-white-A700 py-4">

              {/* Restaurant details */}
              <div className="flex flex-col gap-4">
                {/* title  and rating*/}
                <div className="flex justify-between">
                  <h1 className="text-4xl font-bold ">{restaurantData?.name}</h1>

                  {/* Ratings */}
                  <div className="flex gap-2 text-lg md:text-sm">
                    {/* rating star */}
                    <div className="flex items-center justify-center gap-1 px-2 py-1 h-fit  text-white-A700  bg-green-800 rounded-lg  ">
                      <div>
                        {restaurantData?.googleData?.ratings?.[0]?.rating}
                      </div>
                      <FaStar size={15} />
                    </div>
                    <div className="flex flex-col">
                      <Text className="font-semibold">
                        {restaurantData?.googleData?.ratings?.[0]?.reviews}+
                      </Text>
                      <Text className=" text-sm md:text-xs border-gray-700 border-b border-dotted ">
                        Google Ratings
                      </Text>
                    </div>
                  </div>
                </div>

                {/* cuisine */}
                <p>{restaurantData?.cuisine?.join(", ")}</p>
                {/* time */}
                <p>Open {getTodaysOperatingHours()}</p>

                {/* buttons */}
                <Button
                  className="flex items-center gap-2 w-fit border-2 p-2 rounded-md"
                  onClick={() =>
                    window.open(restaurantData?.googleData?.mapUrl, "_blank")
                  }
                >
                  <FaDirections />
                  <span>Direction</span>
                </Button>
              </div>

              {/* filter button  */}
              <div className=" flex w-full  gap-4 justify-between">
                {filterButtons.map((button) => (
                  <Link
                    key={button.id}
                    to={`/restaurantData/${restaurantId}/${button.url}`}
                    className={`cursor-pointer py-5 w-full  md:py-3  lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
                      matchRoute(button.url) ? " bg-red-400" : "bg-gray-400_63"
                    }`}
                  >
                    <span>{button.name}</span>
                  </Link>
                ))}
              </div>
              </div>
              {/* Dynamic sections order menu/reviews/offers*/}
              <div className="w-full z-10">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
            <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full"/>
      </div>}
    </>
  );
}
