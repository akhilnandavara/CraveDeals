import { Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto w-full">
      <div className="flex flex-col font-opensans gap-10  p-[50px]  md:px-5 items-center justify-start w-full">
      <div className="flex flex-col md:gap-10  items-center justify-start  w-full  mb-5 mx-auto gap-[4rem] lg:max-w-[1250px] md:px-5">
        <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
        
          <div className="w-full font-opensans">
              <div className="flex flex-col  font-opensans gap-6 justify-center items-center">
               <div className="flex flex-row justify-center items-center">
                <h2 className="font-bold text-red-400 md:text-[10rem] text-[15rem]">4</h2>
                <img
                  src="/images/empty-cart.png"
                  alt=""
                  className="md:w-[10rem] w-[15rem]"
                  />
                  <h2 className="font-bold text-red-400 md:text-[10rem] text-[15rem]">4</h2>
                  </div>
                <Text className="text-4xl  text-center font-bold">
                  Oopsie Something's <span className="text-red-400"> missing...</span>
                </Text>
                <Text className="text-sm text-center">
                  It seems like we donut find what you searched. <br />
                  The page you were looking for does not exist,isn't available or was loading incorrectly.
                </Text>

                <button
                  onClick={() => navigate("/restaurant/category/getAll")}
                  className=" text-sm flex rounded-full items-center bg-red-400 p-4 text-white-A700  hover:bg-red-500 gap-2 justify-center "
                >
                  <FaHome size={24} />
                  RETURN TO HOME
                </button>
              </div>
            
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full " />
    </div>
  );
};

export default NotFound;
