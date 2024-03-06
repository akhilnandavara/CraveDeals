import { RatingBar } from "components"; // Importing the RatingBar component from custom components
import getRandomLoader from "components/loader";
import React from "react"; // Importing React library
import { useSelector } from "react-redux"; // Importing useSelector hook from React Redux

// Review component
export default function Review() {
  // Selecting restaurantData from Redux store
  const { restaurantData } = useSelector((state) => state.restaurant);
  const [loading, setLoading] = React.useState(false); // Local state for loading

  // Destructuring reviews from restaurantData.googleData
  const { googleData } = restaurantData;

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-full w-full">
          <img src={getRandomLoader()} alt="loading..." className="h-28" />
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg">
          {/* Title for Google Reviews */}
          <h2 className="text-2xl font-bold font-poppins py-6">
            Google Reviews{" "}
          </h2>
          <div className="flex flex-col gap-6 font-poppins">
            {/* Mapping over each review */}
            {googleData && googleData.reviews.map((review, index) => (
              // Main div for each review
              <div key={index} className="flex flex-col gap-4">
                {/* Section 1: Reviewer's info */}
                <div className="flex gap-2">
                  {/* Reviewer's profile image */}
                  <img
                    src={review.profileImg}
                    alt=""
                    className=" object-cover rounded-full max-h-10"
                  />
                  <div className="flex flex-col gap-1">
                    {/* Reviewer's name */}
                    <p className="font-semibold text-sm lg:text-lg">
                      {review.name
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </p>
                    {/* Reviewer's introduction */}
                    <p className="text-gray-600 text-xs lg:text-lg">
                      {review?.intro}
                    </p>
                  </div>
                </div>
                {/* Section 2: Review details */}
                <div>
                  {/* Star rating */}
                  <div className="flex gap-4 items-center">
                    {/* RatingBar component */}
                    <RatingBar
                      starCount={5}
                      value={Number(review.star.split(" ")[0])}
                     size={20}
                    />
                    {/* Review posting time */}
                    <p className="text-sm lg:text-lg">{review?.postedTime}</p>
                  </div>
                  {/* Review description */}
                  <p className="max-w-[80%] font-light sm:text-xs lg:text-lg">{review.reviewDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
