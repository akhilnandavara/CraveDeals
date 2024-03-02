import React from "react";
import { Button } from "components";
import { Outlet, useNavigate } from "react-router-dom";

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

export default function RestaurantList({ categoryPath }) {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = React.useState("getAll");
  

  React.useEffect(() => {
    navigate(`category/${currentPath}`);
  }, [currentPath]);

  return (
    <div className="w-full">
      <div className="flex sm:flex-col flex-row  md:flex-wrap font-poppins md:gap-2 gap-4 items-center justify-center lg:mt-[2rem] w-full overflow-hidden">
        {categories.map((category, index) => (
          <Button
            key={index}
            className={` box-content  cursor-pointer w-[50%] py-4  lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
              categoryPath === category.path ? "bg-red-400" : "bg-gray-400_63"
            }`}
            onClick={() => setCurrentPath(category.path)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="flex md:flex-col flex-row font-poppins md:gap-[46px] items-center justify-between lg:mt-[70px] w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
