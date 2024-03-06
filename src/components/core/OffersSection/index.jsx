import React, { useEffect, useState } from "react";

// Functional component for displaying offers based on filters
const OffersSection = ({ filterButtons, zomatoOffers, swiggyOffers, magicPinOffers }) => {
  
  // State variable to manage the active card
  const [activeCard, setActiveCard] = useState("swiggy");
 
  // Effect to update activeCard based on filterButtons
  useEffect(() => {
    if(filterButtons === undefined) return;
    setActiveCard(filterButtons);
  }, [filterButtons]);

  return (
    <>
    {/* Display filter buttons if filterButtons prop is not provided */}
    { !filterButtons &&
      <div className="flex gap-4 sm:text-sm ">
        <button
          className={` ${activeCard === "swiggy" ? "bg-red-400" :"bg-gray-400_63"} p-2 rounded-lg`}
          onClick={() => setActiveCard("swiggy")}
        >
          Swiggy Offers
        </button>
        <button
          className={` ${activeCard === "zomato" ? "bg-red-400" :"bg-gray-400_63"} p-2 rounded-lg`}
          onClick={() => setActiveCard("zomato")}
        >
          Zomato Offers
        </button>
        <button
          className={` ${activeCard === "magicPin" ? "bg-red-400" :"bg-gray-400_63"} p-2 rounded-lg`}
          onClick={() => setActiveCard("magicPin")}
        >
          MagicPin Offers{" "}
        </button>
      </div>
    }

    {/* Display Swiggy offers */}
    <div className={` ${activeCard === "swiggy" ? "block" : "hidden"} `}>
      <div className="flex flex-wrap py-4  gap-4">
        {swiggyOffers.length ? swiggyOffers.map((offer, index) => (
          <div className="" key={`zomato-${index}`}>
            <div className="flex flex-col bg-blue-900 text-white-A700 rounded-lg  text-xs lg:text-sm md:p-2 p-4">
              <p>{offer.code.split("ABOVE").join(" ABOVE")}</p>
              <p>{offer.discount}</p>
            </div>
          </div>
        ))
        :
        (<p >No Offers Available</p>)
        }
      </div>
    </div>

    {/* Display Zomato offers */}
    <div className={` ${activeCard === "zomato" ? "block" : "hidden"} `}>
      <div className="flex flex-wrap py-4  gap-4">
        {zomatoOffers.length ? zomatoOffers.map((offer, index) => (
          <div className="" key={`zomato-${index}`}>
             <div className="flex flex-col bg-blue-900 text-white-A700 rounded-lg text-xs lg:text-sm  md:p-2 p-4">
              <p>{offer.code}</p>
              <p>{offer.discount}</p>
            </div>
          </div>
        ))
        :
        (<p >No offers available</p>)
        }
      </div>
    </div>

    {/* Display MagicPin offers */}
    <div className={` ${activeCard === "magicPin" ? "block" : "hidden"} `}>
      <div className="flex flex-wrap py-4  gap-4">
        {magicPinOffers.length ? magicPinOffers.map((offer, index) => (
          <div className="" key={`zomato-${index}`}>
            <div className="flex flex-col bg-blue-900 text-white-A700 rounded-lg text-xs lg:text-sm  md:p-2 p-4">
              <p>{offer}</p>
              <p>No Code Required </p>
            </div>
          </div>
        ))
        :
        (<p >No offers available</p>)
        }
      </div>
    </div>
  </>
  );
};

export default OffersSection;
