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
import { Button, Img, Text } from "components";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurantData } from "slices/restaurantSlice";
import Footer from "components/Footer";
import getRandomLoader from "components/loader";

// Array of filter buttons for the restaurant details page
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

// Component for rendering restaurant details page
export default function RestaurantDataPage() {
  // Extracting restaurantId from URL params
  let { restaurantId } = useParams();

  // State for managing loading state
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // Redux dispatch function
  const navigate = useNavigate(); // Hook for navigating to different routes
  const { restaurantData } = useSelector((state) => state.restaurant); // Selecting restaurant data from Redux store
  const carts = useSelector((state) => state.cart.carts); // Selecting cart data from Redux store

  // Hook for accessing the current location
  const location = useLocation();

  // Function to check if the current route matches the provided path
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

  // Effect hook to fetch restaurant data when the component mounts
  useEffect(() => {
    // Async function to fetch restaurant data
    (async () => {
      setLoading(true); // Set loading state to true
      const res = await getRestaurantData(restaurantId); // Fetch restaurant data
      dispatch(setRestaurantData(res)); // Dispatch action to set restaurant data in Redux store
      setLoading(false); // Set loading state to false
      window.scrollTo(0, 0); // Scroll to top of the page
    })();
  }, []);

  // Function to get today's operating hours for the restaurant
  function getTodaysOperatingHours() {
    const today = new Date().toLocaleString("en-us", { weekday: "long" });
    const operatingHours = restaurantData?.googleData?.operatingHours?.find(
      (day) => day.startsWith(today)
    );

    if (operatingHours) {
      const timing = operatingHours.substring(operatingHours.indexOf(":") + 2);

      const isOpen = isCurrentlyOpen(timing);
      return isOpen ? (
        <div>
          {" "}
          <span className="font-light text-red-400">Closes at </span>{" "}
          {timing.split(" to ")[1]}{" "}
        </div>
      ) : (
        <div>
          <span className="font-light text-red-400">Opens at</span>{" "}
          {timing.split(" to ")[0]}
        </div>
      );
    } else {
      return "Operating hours not available";
    }
  }

  // Function to check if the restaurant is currently open
  function isCurrentlyOpen(timingString) {
    const now = new Date();

    const [startTimeStr, endTimeStr] = timingString.split(" to ");

    const startTime = parseTime(startTimeStr);
    let endTime = parseTime(endTimeStr);

    // Adjust end time if it's on the next day
    if (endTime < startTime) {
      endTime.setDate(endTime.getDate() + 1);
    }

    return now >= startTime && now <= endTime;
  }

  // Function to parse time string and return Date object
  function parseTime(timeStr) {
    if (!timeStr) return null; // Return null if timeStr is undefined or null

    const trimmedTimeStr = timeStr.trim(); // Remove leading and trailing spaces

    // Adjusted regex pattern to match hour, minute, and period components
    const matches = trimmedTimeStr.match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);

    if (!matches) return null; // Return null if no matches found

    const [, hourStr, minuteStr, period] = matches;

    let hour = parseInt(hourStr);

    // Adjust hour for PM times
    if (period && period.toLowerCase() === "pm" && hour < 12) {
      hour += 12;
    }

    // If the hour is 12 am (midnight), set it to 0
    if (period && period.toLowerCase() === "am" && hour === 12) {
      hour = 0;
    }

    // If the hour is a single digit, prepend '0' to it
    if (hour < 10) {
      hour = "0" + hour;
    }

    // Parse minute if available, otherwise set it to 0
    let minute = 0;
    if (minuteStr) {
      minute = parseInt(minuteStr);
    }

    // Create a new Date object and set the hours and minutes
    const time = new Date();
    time.setHours(hour, minute, 0, 0);

    return time;
  }
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center   w-full h-screen">
          {" "}
          <img src={getRandomLoader()} alt="loading..." className="h-28" />{" "}
        </div>
      ) : (
        <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto  w-full ">
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] p-[50px]  md:px-5 items-center justify-start w-full">
            <div className="flex flex-col md:gap-10  items-center justify-start  w-full  mb-5 mx-auto gap-[50px] lg:max-w-[1250px] md:px-5">
              <NavBar className="flex md:flex-col flex-row md:gap-10 md:items-start items-center justify-between w-full" />
              {/* header content */}
              <div className="w-full flex flex-col gap-4">
                {/* Restaurant image */}
                <div className="grid  grid-cols-4 grid-rows-2 gap-1 z-[100]   w-full max-h-[20rem] overflow-hidden">
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

                <div className=" flex flex-col sm:gap-1 gap-4 sticky top-0 z-[100]  bg-gray-50 py-4">
                  {/* Restaurant details */}
                  <div className="flex flex-col gap-2">
                    {/* title  and rating*/}
                    <div className="flex  justify-between">
                      <h1 className=" text-3xl w-[80%] lg:text-4xl font-bold ">
                        {restaurantData?.name}
                      </h1>

                      {/* Ratings */}
                      <div className="flex gap-2  items-center  sm:text-xs  text-lg  md:text-sm">
                        {/* rating star */}
                        <div className="flex items-center  gap-1 px-2 py-1 h-fit  text-white-A700  bg-green-800 rounded-lg  ">
                          <div>
                            {restaurantData?.googleData?.ratings?.[0]?.rating}
                          </div>
                          <FaStar size={15} />
                        </div>
                        {/* review count */}
                        <div className="flex flex-col w-full ">
                          <Text className="font-semibold ">
                            {restaurantData?.googleData?.ratings?.[0]?.reviews}+
                          </Text>

                          <Text className=" sm:w-[60%] pb-1 border-gray-700 border-b border-dotted  bottom-0 ">
                            Google Ratings
                          </Text>
                        </div>
                      </div>
                    </div>

                    {/* cuisine */}
                    <p className="sm:text-xs">
                      {restaurantData?.cuisine?.join(", ")}
                    </p>

                    {/* time */}
                    <span className="sm:text-xs">
                      {getTodaysOperatingHours()}
                    </span>

                    {/* direction buttons */}
                    <Button
                      className="flex mb-2 text-red-400 sm:text-xs items-center gap-2 w-fit border-2 p-2 rounded-md"
                      onClick={() =>
                        window.open(
                          restaurantData?.googleData?.mapUrl,
                          "_blank"
                        )
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
                        className={`cursor-pointer  py-5 w-full  md:py-2  lg:min-w-[10rem] rounded-full text-center text-gray-900 sm:text-sm text-lg ${
                          matchRoute(button.url)
                            ? " bg-red-400"
                            : "bg-gray-400_63"
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

              {/* Cart Icon */}
              {carts.length > 0 && (
                <Button
                  id="cartIcon"
                  className={`fixed bottom-10 bg-gray-50 z-[10] cursor-pointer flex h-[50px] items-center justify-center rounded-full right-0  lg:right-[5%] xl:right-[20%] 2xl:right-[35%] w-[50px]`}
                  onClick={() => navigate("/cart")}
                  leftIcon={
                    <Img
                      className="h-6 lg:h-[2rem] xl:h-[4rem]  m-[.5rem]"
                      src={"/images/img_cart.svg"}
                      alt="cart"
                    />
                  }
                >
                  <div className="text-red-400 absolute bottom-[20%] bg-white-A700 rounded-full w-[40%] h-fit right-0 text-xs">
                    {carts.length}
                  </div>
                </Button>
              )}
            </div>
          </div>
          <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
        </div>
      )}
    </>
  );
}
