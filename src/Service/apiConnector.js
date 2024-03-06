// Importing the Axios library for making HTTP requests
import axios from "axios";

// Creating an instance of Axios with default configuration
export const axiosInstance = axios.create({});

// Function for making API requests with Axios
export const apiConnector = (method, url, bodyData, header, params) => {
    // Making a request using the Axios instance with the provided parameters
    return axiosInstance({
        method: `${method}`,      // HTTP method for the request
        url: `${url}`,            // URL of the API endpoint
        data: bodyData ? bodyData : null,   // Request body data (if provided)
        headers: header ? header : null,    // Request headers (if provided)
        params: params ? params : null      // URL parameters (if provided)
    });
}
