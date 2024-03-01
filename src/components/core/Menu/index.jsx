import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp, IoMdAdd } from "react-icons/io";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../slices/cartSlice";
import getRandomLoader from "components/loader";
import { FaRupeeSign } from "react-icons/fa";
import { Button, Img } from "components";
import { useNavigate } from "react-router-dom";

export default function MenuItem() {
  const { restaurantData } = useSelector((state) => state.restaurant);
  const carts = useSelector((state) => state.cart.carts);

  const [loading, setLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState([]);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menu, name, _id, magicPinOffers, swiggyOffers, zomatoOffers } =
    restaurantData;
  const restaurantName = name;

  const restaurantId = _id;

  const handleAddToCart = (restaurantId, data) => {
    dispatch(
      addToCart({
        restaurantId,
        name: restaurantName,
        item: data,
        magicPinOffers: magicPinOffers,
        swiggyOffers: swiggyOffers,
        zomatoOffers: zomatoOffers,
      })
    );
  };

  const handleDecreaseQuantity = (restaurantId, itemId) => {
    dispatch(decreaseQuantity({ restaurantId, itemId }));
  };
  const handleIncreaseQuantity = (restaurantId, itemId) => {
    dispatch(increaseQuantity({ restaurantId, itemId }));
  };

  const toggleSection = (sectionIndex) => {
    setIsCollapsed((prevSections) => {
      if (prevSections.includes(sectionIndex)) {
        return prevSections.filter((index) => index !== sectionIndex);
      } else {
        return [...prevSections, sectionIndex];
      }
    });
  };

  const [showFullDescription, setShowFullDescription] = useState([]);

  const toggleDescription = (menuItemIndex) => {
    console.log("menuItemIndex", menuItemIndex);
    setShowFullDescription((prevSections) => {
      if (prevSections.includes(menuItemIndex)) {
        return prevSections.filter((index) => index !== menuItemIndex);
      } else {
        return [...prevSections, menuItemIndex];
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger the bouncing animation here
      const cartIcon = document.getElementById('cartIcon');
      if (cartIcon) {
        cartIcon.classList.add('animate-bounce');
        setTimeout(() => {
          cartIcon.classList.remove('animate-bounce');
        }, 2000); // Adjust the duration of the animation here
      }
    }, 60000); // 1 minute interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen w-full">
          <img src={getRandomLoader()} alt="loading..." className="h-28" />
        </div>
      ) : (
        <>
          <div className="w-full" id="accordionPanelsStayOpenExample">
            {menu?.map((section, sectionIndex) => (
              <div key={sectionIndex} className="">
                {/* Section Heading */}
                <h2 className="w-full">
                  <button
                    className="flex  justify-between w-full text-sm text-left  p-4 lg:text-lg font-semibold bg-gray-100 hover:bg-gray-200 "
                    type="button"
                    onClick={() => {
                      const panel = document.getElementById(
                        `collapse${sectionIndex}`
                      );
                      panel.classList.toggle("hidden");
                      toggleSection(sectionIndex); //this is the function that is called to set arrow  in header section when the button is clicked
                    }}
                  >
                    {section.sectionHeading}
                    <div>
                      {isCollapsed.includes(sectionIndex) ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowUp />
                      )}
                    </div>
                  </button>
                </h2>

                {/* Menu Items */}
                <div
                  id={`collapse${sectionIndex}`}
                  className="hidden py-4 px-4 bg-gray-100 border-b-4"
                >
                  <div className="flex flex-col gap-4">
                    {section.menuItems.map((menuItem, menuItemIndex) => {
                      const isInCart = cart.carts.some((cartItem) =>
                        cartItem.items.some((item) => item._id === menuItem._id)
                      );
                      const cartItem = cart.carts.find((cartItem) =>
                        cartItem.items.some((item) => item._id === menuItem._id)
                      );
                      return (
                        <div
                          key={menuItemIndex}
                          className="flex justify-between"
                        >
                          {/* Info div left */}
                          <div className="flex flex-col gap-2 w-[70%]">
                            <h4 className="md:text-sm text-lg">
                              {menuItem.name}
                            </h4>
                            <p className="flex sm:text-sm text-lg gap-1 items-center">
                              <FaRupeeSign />
                              {restaurantName.toLowerCase() === "freshmenu"
                                ? menuItem.swiggyPrice % 1000
                                : menuItem.swiggyPrice}
                            </p>
                            <p className="text-xs font-light w-[80%]">
                              {showFullDescription.includes(menuItemIndex)
                                ? menuItem.description
                                : menuItem.description.length > 0 &&
                                  `${menuItem.description.slice(0, 100)}...`}
                              {menuItem.description.length > 100 && (
                                <div
                                  className="text-xs   font-light underline cursor-pointer"
                                  onClick={() =>
                                    toggleDescription(menuItemIndex)
                                  }
                                >
                                  {showFullDescription.includes(menuItemIndex)
                                    ? "Show Less"
                                    : "Show More"}
                                </div>
                              )}
                            </p>
                          </div>

                          {/* image and add to cart button right */}
                          <div className="flex relative  flex-col gap-2 items-center justify-center w-[30%]">
                            {/* Image */}
                            {menuItem.image && (
                              <img
                                src={menuItem.image}
                                alt={menuItem.name}
                                className="max-w-[80%]  object-cover rounded-md"
                              />
                            )}
                            {/* Add to Cart */}
                            {isInCart ? (
                              <div className="flex absolute  justify-between items-center gap-4 ">
                                {/* decrease qnty */}
                                <div
                                  className="cursor-pointer p-1   rounded-md hover:bg-gray-400  bg-gray-400_63"
                                  onClick={() =>
                                    handleDecreaseQuantity(
                                      restaurantId,
                                      menuItem._id
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-4 w-4 lg:h-6 lg:w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M20 12H4"
                                    />
                                  </svg>
                                </div>

                                <div className=" text-sm  lg:text-2xl rounded-md hover:bg-gray-400 p-1 ">
                                  {cartItem &&
                                    cartItem.items.find(
                                      (item) => item._id === menuItem._id
                                    ).quantity}
                                </div>

                                {/* increase qnty */}
                                <div
                                  className="cursor-pointer p-1 rounded-md  hover:bg-gray-400  bg-gray-400_63"
                                  onClick={() =>
                                    handleIncreaseQuantity(
                                      restaurantId,
                                      menuItem._id
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-4 w-4 lg:h-6 lg:w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                  </svg>
                                </div>
                              </div>
                            ) : (
                              <button
                                className="p-1  lg:p-4 absolute  lg:max-w-[80%] flex items-center justify-center  w-fit rounded-md hover:bg-gray-400  bg-gray-400_63"
                                key={menuItem._id}
                                onClick={() =>
                                  handleAddToCart(restaurantId, {
                                    ItemName: menuItem.name,
                                    image: menuItem.image,
                                    swiggyPrice:
                                      restaurantName.toLowerCase() ===
                                      "freshmenu"
                                        ? menuItem.swiggyPrice % 1000
                                        : menuItem.swiggyPrice,
                                    zomatoPrice:
                                      restaurantName.toLowerCase() ===
                                      "freshmenu"
                                        ? menuItem.zomatoPrice % 1000
                                        : menuItem.zomatoPrice,
                                    magicPinPrice:
                                      restaurantName.toLowerCase() ===
                                      "freshmenu"
                                        ? menuItem.magicPinPrice % 1000
                                        : menuItem.magicPinPrice,
                                    _id: menuItem._id,
                                  })
                                }
                              >
                                Add{" "}
                                <sup>
                                  {" "}
                                  <IoMdAdd />
                                </sup>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* cart  */}
        {carts.length > 0 && 
        <Button
        id="cartIcon"
          className={`fixed  bottom-10 right-0  cursor-pointer  flex h-[50px] items-center justify-center rounded-[50%] w-[50px] `}
          onClick={() => navigate("/cart")}
          leftIcon={
            <Img
              className="h-6 m-[13px] "
              src={"/images/img_cart.svg"}
              alt="cart"
            />
          }
        >
          <div className="text-red-400 absolute bottom-[20%] bg-white-A700 rounded-full w-[40%] h-fit  right-0 text-xs">
            {carts.length}
          </div>
        </Button>
        }
        </>
      )}
    </div>
  );
}
