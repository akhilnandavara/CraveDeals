import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, RatingBar, Text } from "components";

const RestaurantCard = (props) => {
  const {resto} = props;
  const navigate = useNavigate();
  
  return (
    <>
      <div className={props.className}>
       
              <Img
                className="md:h-auto mt-1.5 rounded-lg object-cover w-full cursor-pointer"
                src={resto?.images}
                alt="restaurant image"
                onClick={() => navigate(`/restaurantData/${resto._id}`)}
              />
            
        <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
          <div className="flex flex-col gap-[18px] items-center justify-start w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
              size="txtPoppinsSemiBold30"
            >
              {resto?.name}
            </Text>
            <Text
              className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
              size="txtPoppinsRegular14Gray800"
            >
            {resto?.cuisine.join(", ")}{" "}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
            <RatingBar
              className="flex justify-between w-[140px]"
              value={resto?.googleData.ratings?.[0]?.rating}
              // starCount={resto?.googleData.ratings?.[0]?.rating}
              activeColor="#f54748"
              size={24}
            />
            <Text
              className=" md:text-[1rem] font-poppins text-[1.5rem] text-gray-902"
              size="txtPoppinsSemiBold20"
            >
            {resto?.googleData.ratings?.[0]?.reviews} Reviews
            </Text>
          </div>
        </div>
            
            
        
      </div>
    </>
  );
};

RestaurantCard.defaultProps = {};

export default RestaurantCard;
