import { RatingBar } from "components"; // Importing the RatingBar component from custom components
import React from "react"; // Importing React library
import { useSelector } from "react-redux"; // Importing useSelector hook from React Redux

// Review component
export default function Review() {
  // Selecting restaurantData from Redux store
  const { restaurantData } = useSelector((state) => state.restaurant);

  // Destructuring reviews from restaurantData.googleData
  const { reviews } = restaurantData.googleData;

  return (
    <div>
      {/* Title for Google Reviews */}
      <h2 className="text-2xl font-bold font-poppins py-6">Google Reviews </h2>
      <div className="flex flex-col gap-6 font-poppins ">
        {/* Mapping over each review */}
        {reviews.map((review, index) => (
          // Main div for each review
          <div key={index} className="flex flex-col gap-4">
            {/* Section 1: Reviewer's info */}
            <div className="flex gap-2">
              {/* Reviewer's profile image */}
              <img src={review.profileImg} alt="" className=" w-fit" />
              <div className="flex flex-col gap-1">
                {/* Reviewer's name */}
                <p className="font-semibold">{review.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                {/* Reviewer's introduction */}
                <p className="text-gray-600">{review?.intro}</p>
              </div>
            </div>
            {/* Section 2: Review details */}
            <div>
              {/* Star rating */}
              <div className="flex gap-4 items-center">
                {/* RatingBar component */}
                <RatingBar starCount={5} value={review.star.split(" ")[0]} size={24} />
                {/* Review posting time */}
                <p>{review?.postedTime}</p>
              </div>
              {/* Review description */}
              <p className="max-w-[80%] font-light">{review.reviewDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
