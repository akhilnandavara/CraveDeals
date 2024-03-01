import { getRestaurantList } from "Service/operations/RestaurantApi";
import { getCategoryData } from "Service/operations/categoryAPi";
import RestaurantCard from "components/RestaurantCard";
import getRandomLoader from "components/loader";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryData() {
  const { categoryName } = useParams();
  const [restoLists, setRestoLists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (categoryName === "getAll") {
      (async () => {
        console.log("inside get all restaurant List");
        const getAllRestaurant = await getRestaurantList();
        setRestoLists(getAllRestaurant);
      })();
    } else {
      (async () => {
        console.log("inside get all restaurant List");
        const getCategoryBasedRestaurants = await getCategoryData(categoryName);
        setRestoLists(getCategoryBasedRestaurants);
      })();
    }
    setLoading(false);
  }, [categoryName]);

  return (
    <>
       { loading ? <div className="flex items-center justify-center h-screen w-full"><img src={getRandomLoader()} alt="loading..." className="h-28"/></div> : (
        <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
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
        </div>
      )}
    </>
  );
}
