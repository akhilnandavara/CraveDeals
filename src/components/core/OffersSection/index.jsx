import React, { useState } from "react";

const OffersSection = ({ zomatoOffers, swiggyOffers, magicPinOffers }) => {
  console.log("magicPinOffers",magicPinOffers)
  const [activeCard, setActiveCard] = useState("swiggy");
  return (
    <>
      <div className="flex gap-4 ">
        <button
          className= {` ${activeCard === "swiggy" ? "bg-red-400" :"bg-gray-400_63"} p-2 rounded-lg`}
          onClick={() => setActiveCard("swiggy")}
        >
          Swiggy Offers
        </button>
        <button
          className= {` ${activeCard === "zomato" ? "bg-red-400" :"bg-gray-400_63"} p-2 rounded-lg`}
          onClick={() => setActiveCard("zomato")}
        >
          Zomato Offers
        </button>
        <button
          className= {` ${activeCard === "magicPin" ? "bg-red-400" :"bg-gray-400_63"} p-2 rounded-lg`}
          onClick={() => setActiveCard("magicPin")}
        >
          MagicPin Offers{" "}
        </button>
      </div>

      <div className={` ${activeCard === "swiggy" ? "block" : "hidden"} `}>
        <div className="flex flex-wrap py-4  gap-4">
          {swiggyOffers?.map((offer, index) => (
            <div className="" key={`zomato-${index}`}>
              <div className="flex flex-col bg-blue-900 text-white-A700 rounded-lg p-4">
                {" "}
                <p>{offer.code.split("ABOVE").join(" ABOVE")}</p>
                <p>{offer.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* zomato offers card */}
      <div className={` ${activeCard === "zomato" ? "block" : "hidden"} `}>
        <div className="flex flex-wrap py-4  gap-4">
          {zomatoOffers?.map((offer, index) => (
            <div className="" key={`zomato-${index}`}>
              <div className="flex flex-col bg-blue-900 text-white-A700 rounded-lg p-4">
                {" "}
                <p>{offer.code}</p>
                <p>{offer.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Magicpin offers card */}
      <div className={` ${activeCard === "magicPin" ? "block" : "hidden"} `}>
        <div className="flex flex-wrap py-4  gap-4">
          {magicPinOffers.length && magicPinOffers.map((offer, index) => (
            <div className="" key={`zomato-${index}`}>
              <div className="flex flex-col bg-blue-900 text-white-A700 rounded-lg p-4">
                {" "}
                <p>{offer}</p>
                <p>No Code Required Upto Unlimited Limit</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default OffersSection;
