import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurantData: [],
  },
  reducers: {
    setRestaurantData: (state, action) => {
      console.log("restaurantData", action.payload);
      state.restaurantData = action.payload;
    },
  },
});

// Export actions and reducer from the slice
export const { setRestaurantData } = restaurantSlice.actions;
export default restaurantSlice.reducer;
