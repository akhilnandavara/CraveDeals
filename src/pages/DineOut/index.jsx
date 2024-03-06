import { Button, Heading, Img, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DineOut() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto  w-full ">
        <div className="flex flex-col font-opensans md:gap-10 gap-[79px] p-[50px]  md:px-5 items-center justify-start w-full">
          <div className="flex flex-col md:gap-10  items-center justify-start  w-full  mb-5 mx-auto gap-[102px] lg:max-w-[1250px] md:px-5">
            <NavBar className="flex md:flex-col flex-row md:gap-4 md:items-start items-center justify-between w-full" />
            <div className="flex sm:flex-col flex-row justify-between gap-10  w-full overflow-hidden rounded-lg">
              <Img
                src="images/img_rectangle_150.png"
                alt="image"
                className="  object-cover h-[500px] rounded-[24px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
              />
              <div className="flex flex-col items-start justify-center  gap-10">
                <Heading
                  size="s"
                  as="h1"
                  className="!text-gray-900  sm:text-xl !font-opensans"
                >
                  We are Launching Soon
                </Heading>
                <Text className="text-gray-700 ">
                  Exciting Deals are coming! Stay tuned for updates.
                </Text>
                <div className="flex flex-col items-center justify-start gap-10">
                  <Button
                    onClick={() => navigate("/")}
                    className="bg-red-400 hover:bg-red-500 text-white-A700 !font-poppins lg:text-lg font-bold px-4 lg:!px-8 !py-3 !rounded-[10px] lg:!w-44 !h-12"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full " />
      </div>
    </>
  );
}
