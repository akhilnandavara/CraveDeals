import React, { useState } from "react";
import { useSelector } from "react-redux";
import OffersSection from "../OffersSection";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "components";
import { FaRegCopy } from "react-icons/fa";
import getRandomLoader from "components/loader";

export default function OverView() {
  const { restaurantData } = useSelector((state) => state.restaurant);
  const [copied, setCopied] = useState(false);

  // Check if restaurantData exists
  if (!restaurantData) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <img src={getRandomLoader()} alt="loading..." className="h-28" />
      </div>
    );
  }

  // Destructure required data if it exists
  const { googleData, zomatoOffers, swiggyOffers, magicPinOffers } =
    restaurantData;

  // Check if googleData exists
  if (!googleData) {
    return <div>Error: Google data not available</div>;
  }

  return (
    <>
      <div className="flex lg:h-[70vh] overflow-y-scroll  overView-scrollbar overflow-x-hidden md:flex-col relative items-start flex-row">
        <div className="flex flex-col gap-4 w-[80%]">
          <h2 className=" text-lg lg:text-3xl font-bold">About This place</h2>
          <div className="flex gap-2 items-center sm:text-sm">
            <h3 className="lg:text-xl text-sm">Known For</h3>
            <span className="border-2  rounded-lg p-1 hover:bg-gray-400 cursor-pointer">
              {googleData.cuisine}
            </span>
          </div>
          {/* Offers section */}
          <div>
            <OffersSection
              zomatoOffers={zomatoOffers}
              swiggyOffers={swiggyOffers}
              magicPinOffers={magicPinOffers}
            />
          </div>
          {/* Timings */}
          <div>
            <h3 className=" text-lg lg:text-2xl font-bold py-2">Timings</h3>
            <p className="flex gap-2 flex-col sm:text-sm">
              {googleData.operatingHours.map((day, index) => {
                // Define a function to highlight the content before the colon
                const highlightContent = (str) => {
                  const splitString = str.split(":");
                  const beforeColon = splitString[0];
                  const afterColon = splitString.slice(1).join(":"); // Join in case the time string has colons inside it
               
                  return (
                    <span>
                      <span className="font-bold">
                        {beforeColon}{" "}
                      </span>
                       : {afterColon}
                    </span>
                  );
                };

                return day !== "" ? (
                  <div key={index}>
                    {highlightContent(
                      day.replace(/\s*. Hide open hours for the week\s*/gi, "")
                    )}
                  </div>
                ) : null;
              })}
            </p>
          </div>
          {/* Facilities */}
          <div>
            <h3 className=" text-lg lg:text-2xl py-2 font-bold">Facilities</h3>
            <p className="flex gap-2 sm:text-xs">
              {googleData.restoOptions.map((facility, index) => (
                <React.Fragment key={index}>
                  {facility}{" "}
                  {index !== googleData.restoOptions.length - 1 && "|"}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        {/* Map Div */}
        <div className="sticky top-10 z-10 flex flex-col gap-2  lg:w-[20%] py-4 ">
          <button
            className="flex flex-col"
            onClick={() =>
              window.open(restaurantData?.googleData?.mapUrl, "_blank")
            }
          >
            {" "}
            <span className="font-bold">Website</span>
            {googleData?.url}
          </button>
          <div className="flex flex-col">
            {" "}
            <span className="text-lg font-bold">Call</span> {googleData?.phone}
          </div>
          <div className="flex flex-col">
            {" "}
            <span className="text-lg font-bold  ">Address</span>{" "}
            <span className="font-light"> {googleData?.address}</span>
            <CopyToClipboard
              text={googleData?.address}
              onCopy={() => setCopied(true)}
            >
              <button className=" hover:bg-gray-400_64 sm:text-xs  mt-2 border-2 w-fit p-2 rounded-lg flex gap-2 items-center">
                {" "}
                <FaRegCopy />
                {copied ? "Copied" : "Copy Address"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
}
