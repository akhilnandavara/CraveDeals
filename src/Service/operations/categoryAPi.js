import { apiConnector } from "../apiConnector";

const getCategoryDataApi= process.env.REACT_APP_BASE_URL+"/category/getCategoryData";

export const getCategoryData= async (category) => {    
    try {
        const response = await apiConnector('POST',getCategoryDataApi, {categoryName:category});
    console.log("GET CATEGORY DATA API RESPONSE",response);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Category Data")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}
