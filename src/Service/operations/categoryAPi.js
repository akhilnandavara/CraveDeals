// Importing the 'apiConnector' function from the '../apiConnector' file
import { apiConnector } from "../apiConnector";

// Define the API endpoint for fetching category data
const getCategoryDataApi = process.env.REACT_APP_BASE_URL + "/category/getCategoryData";

// Function to fetch category data based on the provided category name
export const getCategoryData = async (searchTerm) => {
    try {
        // Making a POST request to the 'getCategoryDataApi' endpoint using the 'apiConnector' function
        const response = await apiConnector('POST', getCategoryDataApi, { searchTerm });
        
        // Logging the response received from the API
        console.log("GET CATEGORY DATA API RESPONSE", response);

        // If the response indicates a failure, throw an error
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Category Data");
        }

        // Return the data received from the API
        return response.data.data;
    } catch (error) {
        // Log any errors that occur during the process
        console.error(error);
    }
}
