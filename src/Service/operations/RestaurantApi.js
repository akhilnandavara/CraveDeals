// Importing the 'apiConnector' function from the '../apiConnector' file
import { apiConnector } from "../apiConnector";

// Define the API endpoints for fetching restaurant list and data
const getRestaurantListApi = process.env.REACT_APP_BASE_URL + "/restaurant/getRestaurantList";
const getRestaurantDataApi = process.env.REACT_APP_BASE_URL + "/restaurant/getRestaurantData";

// Function to fetch the list of restaurants
export const getRestaurantList = async () => {
    try {  
        // Making a GET request to the 'getRestaurantListApi' endpoint using the 'apiConnector' function
        const response = await apiConnector('GET', getRestaurantListApi);

        // Logging the response received from the API
        // console.log("GET RESTAURANT LIST API RESPONSE", response);

        // If the response indicates a failure, throw an error
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Restaurant List");
        }

        // Return the data received from the API
        return response.data.data;
    } catch (error) {
        // Log any errors that occur during the process
        console.error(error);
    }
}

// Function to fetch restaurant data by restaurant ID
export const getRestaurantData = async (restaurantId) => {
    try {
        // Making a POST request to the 'getRestaurantDataApi' endpoint using the 'apiConnector' function
        const response = await apiConnector('POST', getRestaurantDataApi, { restaurantId: restaurantId });

        // Logging the response received from the API
        // console.log("GET RESTAURANT DATA API RESPONSE", response.data);

        // If the response indicates a failure, throw an error
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Restaurant Data");
        }

        // Return the data received from the API
        return response.data.data;
    } catch (error) {
        // Log any errors that occur during the process
        console.error(error);
    }
}
