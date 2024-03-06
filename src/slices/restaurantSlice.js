import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurantData: [],
    loading: false,
  },
  reducers: {
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export actions and reducer from the slice
export const { setRestaurantData ,setLoading} = restaurantSlice.actions;
export default restaurantSlice.reducer;
