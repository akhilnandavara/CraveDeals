import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { Table, Tbody, Td, Thead, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { clearCart, clearRestaurantCart, decreaseQuantity, increaseQuantity, removeFromCart } from "slices/cartSlice";
import { FaRupeeSign } from "react-icons/fa";
import { Button, Text, Line } from "components"; // Assuming you have these components
import NavBar from "components/Navbar";
import OffersSection from "components/core/OffersSection";
import { useNavigate } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import Footer from "components/Footer";


export default function Cart() {
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterButtons, setFilterButtons] = React.useState({});

  React.useEffect(() => {
    // Initialize filter state for each restaurant
    const initialFilterButtons = {};
    carts.forEach((resto) => {
      initialFilterButtons[resto.restaurantId] = "swiggy"; // Default filter button for each restaurant
    });
    setFilterButtons(initialFilterButtons);
  }, [carts]);

  const handleFilter = (restaurantId, filter) => {
    setFilterButtons((prevState) => ({
      ...prevState,
      [restaurantId]: filter,
    }));
  };

  const handleDecreaseQuantity = (restaurantId, itemId) => {
    dispatch(decreaseQuantity({ restaurantId, itemId }));
  };

  const handleIncreaseQuantity = (restaurantId, itemId) => {
    dispatch(increaseQuantity({ restaurantId, itemId }));
  };

  return (
    <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
      <div className="flex flex-col font-opensans gap-10  p-[50px]  md:px-5 items-center justify-start w-full">
        <div className="flex flex-col gap-10 items-center justify-start w-full mb-5 mx-auto max-w-[1250px] px-5">
        <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
         {carts.length > 0 && <div className="flex justify-start w-full font-opensans">
            <Text className="text-5xl text-gray-902" size="txtOpenSansRomanBold70">
              Cart
            </Text>
          </div>}

          {/* restaurant card */}
          <div className="w-full font-opensans">
            {!carts.length ? (
              <div className="flex flex-col  font-opensans gap-6 justify-center items-center">
                <img src="/images/empty-cart.png" alt=""  className="md:w-[10rem] w-[15rem]" />
                 <Text className="text-4xl font-bold">Oh oh Cart is <span className="text-red-400"> Empty!</span></Text>
                 <Text className="text-sm">Add items to your cart to find best deals.</Text>
              
              <button onClick={()=>navigate('/restaurant/category/getAll')} className=" text-sm flex rounded-full items-center bg-red-400 p-4 text-white-A700  hover:bg-red-500 ">
                <CiShoppingBasket size={24}/>
                RETURN TO RESTAURANT</button>
              </div>
            ) : (
              carts.map((resto, index) => (
                <div key={index} className="flex flex-col gap-5 w-full">
                  {/* Clear cart button */}
                  <div className="flex justify-end" >
                    <button className="text-red-400 text-lg " onClick={() => dispatch(clearCart())}>
                    Clear Cart
                    </button>
                  </div>

                  {/* restaurant name */}
                  <div className="flex justify-between items-center p-2 border-t-4 border-gray-400_63 border-dotted">
                    <div className="flex items-center">
                      <Text className="text-3xl" font="opensans">
                        {resto.name}
                      </Text>
                    </div>
                    <div className="text-xl cursor-pointer text-red-400" onClick={() => dispatch(clearRestaurantCart({ restaurantId: resto.restaurantId }))}>
                      <RxCross1 />
                    </div>
                  </div>

                  {/* Filter buttons */}
                  <div className="flex gap-4 w-full">
                    <Button
                      className={`cursor-pointer w-full py-5 md:py-3 lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
                        filterButtons[resto.restaurantId] === "swiggy"
                          ? "bg-red-400 text-white-A700"
                          : "bg-gray-400_63"
                      }`}
                      onClick={() => handleFilter(resto.restaurantId, "swiggy")}
                    >
                      Swiggy
                    </Button>

                    <Button
                      className={`cursor-pointer w-full py-5 md:py-3 lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
                        filterButtons[resto.restaurantId] === "zomato"
                          ? "bg-red-400 text-white-A700"
                          : "bg-gray-400_63"
                      }`}
                      onClick={() => handleFilter(resto.restaurantId, "zomato")}
                    >
                      Zomato
                    </Button>

                    <Button
                      className={`cursor-pointer w-full py-5 md:py-3 lg:min-w-[10rem] rounded-full text-center text-gray-900 text-lg ${
                        filterButtons[resto.restaurantId] === "magicPin"
                          ? "bg-red-400 text-white-A700"
                          : "bg-gray-400_63"
                      }`}
                      onClick={() => handleFilter(resto.restaurantId, "magicPin")}
                    >
                      ONDC
                    </Button>
                  </div>

                  {/* Item Table */}
                  <Table>
                    <Thead>
                      <Tr>
                        <th className="w-[50%]">Items</th>
                        <th className="w-[25%]">Quantity</th>
                        <th className="w-[25%]">Price</th>
                        <th></th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {resto.items.map((item, index) => (
                        <Tr key={index} className="text-center">
                          <Td className="flex gap-2 w-full py-4">
                          {item.image &&  <img src={item?.image} alt="" className="w-[10rem] rounded-md" />}
                            <Text>{item.ItemName}</Text>
                          </Td>
                          <Td>
                            <div className="flex gap-2  lg:justify-center items-center">
                              {/* decrease quantity */}
                              <Button className="lg:p-2 rounded-md bg-gray-400_63" onClick={() => handleDecreaseQuantity(resto.restaurantId, item._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              </Button>
                              {/* item quantity */}
                              <Text>{item.quantity}</Text>
                              {/* increase quantity */}
                              <Button className="lg:p-2 rounded-md bg-gray-400_63 " onClick={() => handleIncreaseQuantity(resto.restaurantId, item._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </Button>
                            </div>
                          </Td>
                          <Td>
                            {filterButtons[resto.restaurantId] === "swiggy" && <span>₹ {item.swiggyPrice}</span>}
                            {filterButtons[resto.restaurantId] === "zomato" && (
                              <span> {item.zomatoPrice > 0 ? ` ₹ ${item.zomatoPrice}` : "Not Available"}</span>
                            )}
                            {filterButtons[resto.restaurantId] === "magicPin" && (
                              <span>
                                {" "}
                                {item.magicPinPrice > 0 ? `₹ ${item.magicPinPrice - item.magicPinPrice * (5 / 100)}` : "Not Available"}
                              </span>
                            )}
                          </Td>
                          <Td>
                            <Button className="text-red-400 text-xl" onClick={() => dispatch(removeFromCart({ restaurantId: resto.restaurantId, itemId: item._id }))}>
                              <RiDeleteBinLine />
                            </Button>
                          </Td>
                        </Tr>
                      ))}

                      {/* Total row */}
                      <Tr >
                        <Td colSpan="1"  >
                          <span className=" flex font-bold  items-center text-lg pt-4">Total: <FaRupeeSign />
                          {filterButtons[resto.restaurantId] === "magicPin" && resto.magicPinTotalIncludingTax.toFixed(2)}
                          {filterButtons[resto.restaurantId] === "zomato" && resto.zomatoTotalIncludingTax.toFixed(2)}
                          {filterButtons[resto.restaurantId] === "swiggy" && resto.swiggyTotalIncludingTax.toFixed(2)}
                          </span>
                        </Td>
                  <Text className="sm:block  hidden text-xs ">(The total amount excludes package and delivery fees.)</Text>
                      </Tr>
                    </Tbody>
                 
                  <Text className="sm:hidden text-xs ">(The total amount excludes package and delivery fees.)</Text>

                  </Table>
                 <div className="w-full">
                 <Text className="text-xl py-2 ">Bonus Offers</Text>
                  <OffersSection filterButtons={filterButtons[resto.restaurantId]} zomatoOffers={resto.zomatoOffers} swiggyOffers={resto.swiggyOffers} magicPinOffers={resto?.magicPinOffers} />
                  </div> 
                  <Line className={"border-t-4 border-gray-400_63 border-dotted"} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full " />
    </div>
  );
}
