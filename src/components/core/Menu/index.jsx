import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../slices/cartSlice";

export default function MenuItem() {
  const { restaurantData } = useSelector((state) => state.restaurant);
  const [loading, setLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full" id="accordionPanelsStayOpenExample">
          {menu?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="">
              {/* Section Heading */}
              <h2 className="w-full">
                <button
                  className="flex  justify-between w-full text-left p-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 "
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
                      <div key={menuItemIndex} className="flex justify-between">
                        {/* Info div left */}
                        <div className="flex flex-col gap-2 w-[70%]">
                          <h4>{menuItem.name}</h4>
                          <p>
                            {restaurantName.toLowerCase() === "freshmenu"
                              ? menuItem.swiggyPrice % 1000
                              : menuItem.swiggyPrice}
                          </p>
                          <p className="text-xs font-light w-[80%]">
                            {menuItem.description}
                          </p>
                        </div>
                        {/* image and add to cart button right */}
                        <div className="flex flex-col gap-4 items-center justify-center w-[30%]">
                          {/* Image */}
                          {menuItem.image && (
                            <img
                              src={menuItem.image}
                              alt={menuItem.name}
                              className="w-full object-cover rounded-md"
                            />
                          )}
                          {/* Add to Cart */}
                          {isInCart ? (
                            <div className="flex justify-between items-center gap-4">
                              <div
                                className="cursor-pointer p-2 rounded-md bg-gray-400"
                                onClick={() =>
                                  handleDecreaseQuantity(
                                    restaurantId,
                                    menuItem._id
                                  )
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
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

                              <div>
                                {cartItem &&
                                  cartItem.items.find(
                                    (item) => item._id === menuItem._id
                                  ).quantity}
                              </div>
                              {/* increase qnty */}
                              <div
                                className="cursor-pointer p-2 rounded-md bg-gray-400"
                                onClick={() =>
                                  handleIncreaseQuantity(
                                    restaurantId,
                                    menuItem._id
                                  )
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
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
                              className="p-2 w-full rounded-md bg-gray-400 hover:bg-gray-500"
                              key={menuItem._id}
                              onClick={() =>
                                handleAddToCart(restaurantId, {
                                  ItemName: menuItem.name,
                                  image: menuItem.image,
                                  swiggyPrice:
                                    restaurantName.toLowerCase() === "freshmenu"
                                      ? menuItem.swiggyPrice % 1000
                                      : menuItem.swiggyPrice,
                                  zomatoPrice:
                                    restaurantName.toLowerCase() === "freshmenu"
                                      ? menuItem.zomatoPrice % 1000
                                      : menuItem.zomatoPrice,
                                  magicPinPrice:
                                    restaurantName.toLowerCase() === "freshmenu"
                                      ? menuItem.magicPinPrice % 1000
                                      : menuItem.magicPinPrice,
                                  _id: menuItem._id,
                                })
                              }
                            >
                              Add to Cart
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
      )}
    </div>
  );
}
