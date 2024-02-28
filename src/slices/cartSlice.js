import { createSlice } from "@reduxjs/toolkit";


// Define your calculateTotalCost function
function calculateTotalCost(swiggyPrice, zomatoPrice, magicPinPrice, magicPinOffer) {

  const foodGSTRate = 0.05;
  const swiggyPlatformCharge = 3;
  const swiggyPlatformGSTRate = 0.18;

  const swiggyTotalFoodPrice = swiggyPrice * (1 + foodGSTRate);
  const SwiggyPlatformGST = swiggyPlatformCharge * (1 + swiggyPlatformGSTRate);
  const swiggyTotalIncludingTax = swiggyTotalFoodPrice + SwiggyPlatformGST;

  const zomatoTotalIncludingTax = zomatoPrice * (1 + foodGSTRate);

  const magicPinTotalFoodPrice = magicPinPrice * (1 + foodGSTRate);
  const magicPinTaxes = magicPinTotalFoodPrice - magicPinPrice;
  const magicPinTotalIncludingTax = (magicPinPrice - (magicPinPrice * (magicPinOffer / 100))) + magicPinTaxes;

  return { swiggyTotalIncludingTax, zomatoTotalIncludingTax, magicPinTotalIncludingTax };
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [], // Array to store carts for different restaurants
  },
  reducers: {
    addToCart: (state, action) => {
      const { restaurantId, name, item, magicPinOffers, swiggyOffers, zomatoOffers } = action.payload;

      // Find the cart for the given restaurant ID
      const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

      if (cartIndex !== -1) {
        // If the cart for the restaurant already exists
        const existingCart = state.carts[cartIndex];
        const existingItemIndex = existingCart.items.findIndex((cartItem) => cartItem._id === item._id);

        if (existingItemIndex !== -1) {
          // If the item already exists in the cart, update its quantity and total price
          existingCart.items[existingItemIndex].quantity += 1;
          existingCart.swiggyTotalPrice += item.swiggyPrice !== undefined ? parseFloat(item.swiggyPrice):0;
          existingCart.zomatoTotalPrice += item.zomatoPrice !== undefined ? parseFloat(item.zomatoPrice):0;
          existingCart.magicPinTotalPrice += item.magicPinPrice !== undefined ? parseFloat(item.magicPinPrice) : 0;
        } else {
          // If the item does not exist in the cart, add it
          // console.log("magicpIn price", item.magicPinPrice)
          existingCart.items.push({ ...item, quantity: 1 });
          existingCart.swiggyTotalPrice += item.swiggyPrice !== undefined ? parseFloat(item.swiggyPrice):0;
          existingCart.zomatoTotalPrice += item.zomatoPrice !== undefined ? parseFloat(item.zomatoPrice):0;
          existingCart.magicPinTotalPrice += item.magicPinPrice !== undefined ? parseFloat(item.magicPinPrice) : 0;
        }


        // Update the total cost for the restaurant
        const { swiggyTotalIncludingTax, zomatoTotalIncludingTax, magicPinTotalIncludingTax } = calculateTotalCost(
          existingCart.swiggyTotalPrice,
          existingCart.zomatoTotalPrice,
          existingCart.magicPinTotalPrice,
          magicPinOffers[0].match(/\d+/)[0],

        );

        existingCart.swiggyTotalIncludingTax = swiggyTotalIncludingTax;
        existingCart.zomatoTotalIncludingTax = zomatoTotalIncludingTax;
        existingCart.magicPinTotalIncludingTax = magicPinTotalIncludingTax;


        // Update the cart in the state
        state.carts[cartIndex] = existingCart;
      } else {
        // If the cart for the restaurant does not exist, create a new one
        const newCart = {
          restaurantId: restaurantId,
          name: name,
          items: [{ ...item, quantity: 1 }],
          swiggyTotalPrice:item.swiggyPrice !== undefined ? parseFloat(item.swiggyPrice):0,
          zomatoTotalPrice:item.zomatoPrice !== undefined ? parseFloat(item.zomatoPrice):0,
          magicPinTotalPrice: item.magicPinPrice !== undefined ? parseFloat(item.magicPinPrice) : 0,
          magicPinOffers: magicPinOffers,
          swiggyOffers: swiggyOffers,
          zomatoOffers: zomatoOffers,
          // Calculate total cost for the new cart
          ...calculateTotalCost(
            item.swiggyPrice !== undefined ? parseFloat(item.swiggyPrice):0,
            item.zomatoPrice !== undefined ? parseFloat(item.zomatoPrice):0,
              item.magicPinPrice !== undefined ? parseFloat(item.magicPinPrice) : 0,
               magicPinOffers[0].match(/\d+/)[0],),
        };


        // Add the new cart to the state
        state.carts.push(newCart);
      }
    },
    removeFromCart: (state, action) => {
      const { restaurantId, itemId } = action.payload;

      // Find the cart for the given restaurant ID
      const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

      if (cartIndex !== -1) {
        // If the cart for the restaurant exists
        const existingCart = state.carts[cartIndex];
        const itemIndex = existingCart.items.findIndex((item) => item._id === itemId);

        if (itemIndex !== -1) {
          // If the item to remove is found in the cart, remove it
          const removedItem = existingCart.items.splice(itemIndex, 1)[0];
          existingCart.swiggyTotalPrice -= parseFloat(removedItem.swiggyPrice) * removedItem.quantity;
          existingCart.zomatoTotalPrice -= parseFloat(removedItem.zomatoPrice) * removedItem.quantity;
          existingCart.magicPinTotalPrice -= removedItem.magicPinPrice > 0 ? parseFloat(removedItem.magicPinPrice) * removedItem.quantity : 0;
        }

        // If no items left in the cart, remove the entire cart
        if (existingCart.items.length === 0) {
          state.carts.splice(cartIndex, 1);
        } else {

          // Update the cart in the state
          state.carts[cartIndex] = existingCart;
        }
      }
    },
    increaseQuantity: (state, action) => {
      const { restaurantId, itemId } = action.payload;
      const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

      if (cartIndex !== -1) {
        // If the cart for the restaurant exists
        const existingCart = state.carts[cartIndex];
        const itemIndex = existingCart.items.findIndex((item) => item._id === itemId);

        if (itemIndex !== -1) {
          existingCart.items[itemIndex].quantity += 1;

          // Update total prices only if the price is defined
          if (existingCart.items[itemIndex].swiggyPrice !== undefined) {
            existingCart.swiggyTotalPrice += parseFloat(existingCart.items[itemIndex].swiggyPrice);
          }
          if (existingCart.items[itemIndex].zomatoPrice !== undefined) {
            existingCart.zomatoTotalPrice += parseFloat(existingCart.items[itemIndex].zomatoPrice);
          }
          if (existingCart.items[itemIndex].magicPinPrice !== undefined) {
            existingCart.magicPinTotalPrice += parseFloat(existingCart.items[itemIndex].magicPinPrice);
          }

          const { swiggyTotalIncludingTax, zomatoTotalIncludingTax, magicPinTotalIncludingTax } = calculateTotalCost(
            existingCart.swiggyTotalPrice,
            existingCart.zomatoTotalPrice,
            existingCart.magicPinTotalPrice,
            existingCart.magicPinOffers[0].match(/\d+/)[0],

          );

          existingCart.swiggyTotalIncludingTax = swiggyTotalIncludingTax;
          existingCart.zomatoTotalIncludingTax = zomatoTotalIncludingTax;
          existingCart.magicPinTotalIncludingTax = magicPinTotalIncludingTax;


          state.carts[cartIndex] = existingCart;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      const { restaurantId, itemId } = action.payload;
      const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

      if (cartIndex !== -1) {
        const existingCart = state.carts[cartIndex];
        const itemIndex = existingCart.items.findIndex((item) => item._id === itemId);

        if (itemIndex !== -1) {
          // If the item to remove is found in the cart, remove it
          if (existingCart.items[itemIndex].quantity === 1) {
            const removedItem = existingCart.items.splice(itemIndex, 1)[0];
            if (removedItem.swiggyPrice !== undefined) {
              existingCart.swiggyTotalPrice -= parseFloat(removedItem.swiggyPrice) * removedItem.quantity;
            }
            if (removedItem.zomatoPrice !== undefined) {
              existingCart.zomatoTotalPrice -= parseFloat(removedItem.zomatoPrice) * removedItem.quantity;
            }
            if (removedItem.magicPinPrice !== undefined) {
              existingCart.magicPinTotalPrice -= parseFloat(removedItem.magicPinPrice) * removedItem.quantity;
            }
          } else {
            // If the item to remove is found in the cart, remove it
            existingCart.items[itemIndex].quantity -= 1;
            if (existingCart.items[itemIndex].swiggyPrice !== undefined) {
              existingCart.swiggyTotalPrice -= parseFloat(existingCart.items[itemIndex].swiggyPrice);
            }
            if (existingCart.items[itemIndex].zomatoPrice !== undefined) {
              existingCart.zomatoTotalPrice -= parseFloat(existingCart.items[itemIndex].zomatoPrice);
            }
            if (existingCart.items[itemIndex].magicPinPrice !== undefined) {
              existingCart.magicPinTotalPrice -= parseFloat(existingCart.items[itemIndex].magicPinPrice);
            }
          }
          // If no items left in the cart, remove the entire cart
          if (existingCart.items.length === 0) {
            state.carts.splice(cartIndex, 1);
          } else {
            const { swiggyTotalIncludingTax, zomatoTotalIncludingTax, magicPinTotalIncludingTax } = calculateTotalCost(
              existingCart.swiggyTotalPrice,
              existingCart.zomatoTotalPrice,
              existingCart.magicPinTotalPrice,
              existingCart.magicPinOffers[0].match(/\d+/)[0],

            );

            existingCart.swiggyTotalIncludingTax = swiggyTotalIncludingTax;
            existingCart.zomatoTotalIncludingTax = zomatoTotalIncludingTax;
            existingCart.magicPinTotalIncludingTax = magicPinTotalIncludingTax;
            // Update the cart in the state
            state.carts[cartIndex] = existingCart;
          }
        }
      }
    },
    clearRestaurantCart: (state, action) => {
      const { restaurantId } = action.payload;
      state.carts = state.carts.filter(cart => cart.restaurantId !== restaurantId);
    },
    clearCart: (state) => {
      state.carts = []; // Set the carts array to an empty array to clear the cart
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearRestaurantCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
