import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurantData: [],
    loading: false,
    currentPath: "getAll",
  },
  reducers: {
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

// Export actions and reducer from the slice
export const { setRestaurantData ,setLoading,setCurrentPath} = restaurantSlice.actions;
export default restaurantSlice.reducer;
