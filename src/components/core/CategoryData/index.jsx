import { getRestaurantList } from "Service/operations/RestaurantApi";
import { getCategoryData } from "Service/operations/categoryAPi";
import RestaurantCard from "components/RestaurantCard";
import getRandomLoader from "components/loader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoading } from "slices/restaurantSlice";

export default function CategoryData() {
  const { categoryName } = useParams();
  const [restoLists, setRestoLists] = useState([]);
  const { loading } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const fetchData = async () => {
      try {
        if (categoryName === "getAll") {
          const getAllRestaurant = await getRestaurantList();
          setRestoLists(getAllRestaurant);
        } else {
          const getCategoryBasedRestaurants = await getCategoryData(categoryName);
          setRestoLists(getCategoryBasedRestaurants);
        }
        dispatch(setLoading(false));
      } catch (error) {
        // Handle errors
        console.error("Error fetching restaurant data:", error);
        dispatch(setLoading(false)); // Ensure loading state is set to false even in case of errors
      }
    };
  
    fetchData();
  }, [categoryName, dispatch]);
  

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center  min-h-[15rem] w-full">
          <img src={getRandomLoader()} alt="loading..." className="h-28" />
        </div>
      ) : (
        <div className="flex flex-col mt-6 items-center justify-start rounded-[40px] w-full ">
          {!loading && restoLists.length > 0 ? (
            <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {restoLists.map((restoData, index) => (
               <React.Fragment key={`RestaurantCard${index}`}>
                  <RestaurantCard
                    resto={restoData} // Passing restaurant data as a prop named "resto"
                    className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full  hover:shadow-lg transition-all duration-300 ease-in-out"
                  />
                </React.Fragment>
              ))}
            </div>
          ) 
        : (
            <div className="flex items-center justify-center h-full w-full">
              <h2 className="text-2xl text-gray-500">No Restaurants Found</h2>
            </div>
          )}
        </div>
      )}
    </>
  );
}
