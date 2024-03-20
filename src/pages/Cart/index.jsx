import React from "react"; // Importing React library
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector hooks from React Redux
import { RxCross1 } from "react-icons/rx"; // Importing RxCross1 icon from react-icons/rx
import { RiDeleteBinLine } from "react-icons/ri"; // Importing RiDeleteBinLine icon from react-icons/ri
import { Table, Tbody, Td, Thead, Tr } from "react-super-responsive-table"; // Importing table components from react-super-responsive-table
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"; // Importing table styles from react-super-responsive-table
import {
  clearCart,
  clearRestaurantCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "slices/cartSlice"; // Importing various cart-related actions from cartSlice
import { FaRupeeSign } from "react-icons/fa"; // Importing FaRupeeSign icon from react-icons/fa
import { Button, Text, Line } from "components"; // Importing custom components Button, Text, and Line
import NavBar from "components/Navbar"; // Importing Navbar component from components directory
import OffersSection from "components/core/OffersSection"; // Importing OffersSection component from components/core directory
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import { CiShoppingBasket } from "react-icons/ci"; // Importing CiShoppingBasket icon from react-icons/ci
import Footer from "components/Footer"; // Importing Footer component from components directory

// Cart component
export default function Cart() {
  // Redux state and dispatch setup
  const { carts } = useSelector((state) => state.cart); // Retrieving carts state from Redux store
  const dispatch = useDispatch(); // Initializing useDispatch hook
  const navigate = useNavigate(); // Initializing useNavigate hook
  const [filterButtons, setFilterButtons] = React.useState({}); // Initializing state for filter buttons

  // Effect to initialize filter state for each restaurant
  React.useEffect(() => {
    const initialFilterButtons = {};
    carts.forEach((resto) => {
      initialFilterButtons[resto.restaurantId] = "swiggy"; // Default filter button for each restaurant
    });
    setFilterButtons(initialFilterButtons); // Setting initial filter buttons
    window.scrollTo(0, 0); // Scrolling to top of the page
  }, [carts]);

  // Handler for changing filter buttons
  const handleFilter = (restaurantId, filter) => {
    setFilterButtons((prevState) => ({
      ...prevState,
      [restaurantId]: filter,
    }));
  };

  // Handler for decreasing item quantity in cart
  const handleDecreaseQuantity = (restaurantId, itemId) => {
    dispatch(decreaseQuantity({ restaurantId, itemId }));
  };

  // Handler for increasing item quantity in cart
  const handleIncreaseQuantity = (restaurantId, itemId) => {
    dispatch(increaseQuantity({ restaurantId, itemId }));
  };

  return (
    <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
      <div className="flex flex-col font-opensans gap-10  p-[50px]  md:px-5 items-center justify-start w-full">
      <div className="flex flex-col md:gap-10  items-center justify-start  w-full  mb-5 mx-auto gap-[4rem] lg:max-w-[1250px] md:px-5">
        <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
          {carts.length > 0 && (
            <div className="flex justify-start w-full font-opensans">
              <Text
                className="text-5xl text-gray-902"
                size="txtOpenSansRomanBold70"
              >
                Cart
              </Text>
            </div>
          )}

          {/* Conditional rendering for empty and non-empty carts */}
          <div className="w-full font-opensans">
            {!carts.length ? (
              <div className="flex flex-col  font-opensans gap-6 justify-center items-center">
                <img
                  src="/images/empty-cart.png"
                  alt=""
                  className="md:w-[10rem] w-[15rem]"
                />
                <Text className="text-4xl  text-center font-bold">
                  Oh Oh Cart Is <span className="text-red-400"> Empty!</span>
                </Text>
                <Text className="text-sm">
                  Add items to your cart to find best deals.
                </Text>

                <button
                  onClick={() => navigate("/restaurant/category/getAll")}
                  className=" text-sm flex rounded-full items-center bg-red-400 p-4 text-white-A700  hover:bg-red-500 "
                >
                  <CiShoppingBasket size={24} />
                  RETURN TO RESTAURANT
                </button>
              </div>
            ) : (
              <>
                {/* Button to clear the entire cart */}
                <div className="flex justify-end">
                  <button
                    className="text-red-400 text-lg my-2 "
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>
                </div>
                <Line
                  className={"border-t-4 my-2 border-gray-400_63 border-dotted"}
                />
                {/* Mapping through each restaurant in the cart */}
                {carts.map((resto, index) => (
                  <div key={index} className="flex flex-col gap-5 w-full">
                    {/* Displaying restaurant name */}
                    <div className="flex justify-between items-center p-2 ">
                      <div className="flex items-center">
                        <Text className="text-3xl" font="opensans">
                          {resto.name === "Kfc"
                            ? resto.name.toUpperCase()
                            : resto.name}
                        </Text>
                      </div>
                      <div
                        className="text-xl cursor-pointer text-red-400"
                        onClick={() =>
                          dispatch(
                            clearRestaurantCart({
                              restaurantId: resto.restaurantId,
                            })
                          )
                        }
                      >
                        <RxCross1 />
                      </div>
                    </div>

                    {/* Filter buttons for each restaurant */}
                    <div className="flex gap-4 w-full">
                      {/* Swiggy filter button */}
                      <Button
                        className={`cursor-pointer w-full py-5 md:py-3 lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
                          filterButtons[resto.restaurantId] === "swiggy"
                            ? "bg-red-400 text-white-A700"
                            : "bg-gray-400_63"
                        }`}
                        onClick={() =>
                          handleFilter(resto.restaurantId, "swiggy")
                        }
                      >
                        Swiggy
                      </Button>
                      {/* Zomato filter button */}
                      <Button
                        className={`cursor-pointer w-full py-5 md:py-3 lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
                          filterButtons[resto.restaurantId] === "zomato"
                            ? "bg-red-400 text-white-A700"
                            : "bg-gray-400_63"
                        }`}
                        onClick={() =>
                          handleFilter(resto.restaurantId, "zomato")
                        }
                      >
                        Zomato
                      </Button>
                      {/* MagicPin filter button */}
                      <Button
                        className={`cursor-pointer w-full py-5 md:py-3 lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
                          filterButtons[resto.restaurantId] === "magicPin"
                            ? "bg-red-400 text-white-A700"
                            : "bg-gray-400_63"
                        }`}
                        onClick={() =>
                          handleFilter(resto.restaurantId, "magicPin")
                        }
                      >
                        ONDC
                      </Button>
                    </div>

                    {/* Item Table */}
                    <Table>
                      <Thead>
                        <Tr>
                          <th className="w-[50%] ">Items</th>
                          <th className="w-[20%]">Quantity</th>
                          <th className="w-[20%]">Price</th>
                          <th></th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {/* Mapping through each item in the restaurant */}
                        {resto.items.map((item, index) => (
                          <Tr key={index} className="text-center ">
                            {/* Image and title */}
                            <Td className="flex gap-2 w-full p-4 ">
                              {item.image && (
                                <img
                                  src={item?.image}
                                  alt=""
                                  className="w-[10rem] rounded-md"
                                />
                              )}
                              <Text className="text-gray-600 sm:my-2">
                                {item.ItemName}
                              </Text>
                            </Td>
                            {/* Quantity controls */}
                            <Td>
                              <div className="flex  sm:my-2 gap-2 sm:justify-start justify-center items-center">
                                {/* Button to decrease quantity */}
                                <Button
                                  className="lg:p-2 rounded-md bg-gray-400_63"
                                  onClick={() =>
                                    handleDecreaseQuantity(
                                      resto.restaurantId,
                                      item._id
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="red"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M20 12H4"
                                    />
                                  </svg>
                                </Button>
                                {/* Display quantity */}
                                <Text>{item.quantity}</Text>
                                {/* Button to increase quantity */}
                                <Button
                                  className="lg:p-2 rounded-md bg-gray-400_63 "
                                  onClick={() =>
                                    handleIncreaseQuantity(
                                      resto.restaurantId,
                                      item._id
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="red"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                  </svg>
                                </Button>
                              </div>
                            </Td>
                            {/* Price */}
                            <Td>
                              {/* Displaying price based on selected filter */}
                              {filterButtons[resto.restaurantId] ===
                                "swiggy" && <span>₹ {item.swiggyPrice}</span>}
                              {filterButtons[resto.restaurantId] ===
                                "zomato" && (
                                <span>
                                  {" "}
                                  {item.zomatoPrice > 0
                                    ? ` ₹ ${item.zomatoPrice}`
                                    : "Not Available"}
                                </span>
                              )}
                              {filterButtons[resto.restaurantId] ===
                                "magicPin" && (
                                <span>
                                  {" "}
                                  {item.magicPinPrice > 0
                                    ? `₹ ${
                                        item.magicPinPrice -
                                        item.magicPinPrice * (5 / 100)
                                      }`
                                    : "Not Available"}
                                </span>
                              )}
                            </Td>
                            {/* Delete item */}
                            <Td>
                              <Button
                                className="text-red-400 text-xl  sm:my-2"
                                onClick={() =>
                                  dispatch(
                                    removeFromCart({
                                      restaurantId: resto.restaurantId,
                                      itemId: item._id,
                                    })
                                  )
                                }
                              >
                                <RiDeleteBinLine />
                              </Button>
                            </Td>
                          </Tr>
                        ))}
                        {/* Total row */}
                        <Tr>
                          <Td colSpan="1">
                            <span className=" flex font-bold  items-center text-lg pt-4">
                              Total: <FaRupeeSign />
                              {/* Displaying total price */}
                              {filterButtons[resto.restaurantId] ===
                                "magicPin" &&
                                resto.magicPinTotalIncludingTax.toFixed(2)}
                              {filterButtons[resto.restaurantId] === "zomato" &&
                                resto.zomatoTotalIncludingTax.toFixed(2)}
                              {filterButtons[resto.restaurantId] === "swiggy" &&
                                resto.swiggyTotalIncludingTax.toFixed(2)}
                            </span>
                          </Td>
                          <Text className="sm:block  hidden text-xs ">
                            (The total amount excludes package and delivery
                            fees.)
                          </Text>
                        </Tr>
                      </Tbody>
                      <Text className="sm:hidden text-xs ">
                        (The total amount excludes package and delivery fees and discounts.)
                      </Text>
                    </Table>
                    {/* Bonus Offers Section */}
                    <div className="w-full">
                      <Text className="text-xl py-2 ">Bonus Offers</Text>
                      <OffersSection
                        filterButtons={filterButtons[resto.restaurantId]}
                        zomatoOffers={resto.zomatoOffers}
                        swiggyOffers={resto.swiggyOffers}
                        magicPinOffers={resto?.magicPinOffers}
                      />
                    </div>
                    {/* Divider */}
                    <Line
                      className={
                        "border-t-4 my-4 border-gray-400_63 border-dotted"
                      }
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full " />
    </div>
  );
}
