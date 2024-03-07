import React from "react"; // Importing React library
import { Button } from "components"; // Importing Button component from custom components
import { Outlet, useNavigate } from "react-router-dom"; // Importing Outlet and useNavigate hooks from React Router DOM
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPath } from "slices/restaurantSlice";


// Array of restaurant categories with name and path
const categories = [
  {
    name: "All Restaurants",
    path: "getAll",
  },
  {
    name: "Biryani",
    path: "Biryani",
  },
  {
    name: "Pizza",
    path: "Pizzas",
  },
  {
    name: "Pasta",
    path: "Pastas",
  },
  {
    name: "Dessert",
    path: "Desserts",
  },
  {
    name: "Drink",
    path: "drink",
  },
];

// RestaurantList component
export default function RestaurantList({ categoryPath }) {
  const navigate = useNavigate(); // Initializing useNavigate hook from React Router DOM
 const {currentPath} = useSelector(state=>state.restaurant) // Getting currentPath from restaurant state
 const dispatch = useDispatch(); // Initializing useDispatch hook from React Redux

  // Effect to navigate to the current category path
  React.useEffect(() => {
    navigate(`category/${currentPath}`);
  }, [currentPath]);

  return (
    <div className="w-full">
      {/* Categories list */}
      <div className="flex sm:flex-col flex-row md:flex-wrap font-poppins md:gap-2 gap-4 items-center justify-center lg:mt-[2rem] w-full overflow-hidden">
        {categories.map((category, index) => (
          <Button
            key={index}
            className={` box-content  cursor-pointer w-[50%] py-4 lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
              categoryPath === category.path ? "bg-red-400" : "bg-gray-400_63"
            }`}
            onClick={() => dispatch(setCurrentPath(category.path))} // Setting current path onClick
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Outlet for nested routes */}
      <div className="flex md:flex-col flex-row font-poppins md:gap-[46px] items-center justify-between lg:mt-[70px] w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
