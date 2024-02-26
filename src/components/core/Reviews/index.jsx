import { RatingBar } from "components";
import React from "react";
import { useSelector } from "react-redux";

export default function Review() {
  const { restaurantData } = useSelector((state) => state.restaurant);

  const { reviews } = restaurantData.googleData;
  console.log(reviews, "reviews");
  return (
    <div>
      <h2 className="text-2xl font-bold font-poppins py-6">Google Reviews </h2>
      <div className="flex flex-col gap-6 font-poppins ">
        {reviews.map((review, index) => (
          // main div for each review
          <div key={index} className="flex flex-col gap-4">
            {/* section 1 */}
            <div className="flex gap-2">
              <img src={review?.profileImg} alt="" className="w-fit" />
              <div className="flex flex-col gap-1">
              <p className="font-semibold">{review.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                <p className="text-gray-600">{review?.intro}</p>
              </div>
            </div>
            {/* section 2 */}
            <div>
              {/* star */}
              <div className="flex gap-4 items-center">
                  <RatingBar starCount={5}  value={review.star.split(" ")[0]} size={24} />
                <p>{review?.postedTime}</p>
              </div>
              {/* description */}
              <p className="max-w-[80%] font-light">{review.reviewDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
