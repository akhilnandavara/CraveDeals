import React, { useRef } from "react";
import {  useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";

// Initialize Swiper core modules
import "swiper/css";
import "swiper/css/navigation";

const CategorySlider = ({ Urls }) => {

  const swiperRef = useRef();
const navigate=useNavigate();



const [currentPath, setCurrentPath] = React.useState("getAll");
  

React.useEffect(() => {
  navigate(`category/${currentPath}`);
}, [currentPath]);

  return (
    <section className=" w-full mt-4 relative ">
      <Swiper
        className="text-center"
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        cssMode={true}
        parallax={true}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1200: {
            slidesPerView: 10,
            spaceBetween: 20,
            mousewheel:false,
            loop:false,
            watchOverflow:false,
          },
          650: {
            slidesPerView: 5,
            spaceBetween: 30,
            mousewheel:false,
            loop:true,
            watchOverflow:false,
          },
        }}
      >
        {Urls.map((data, index) => (
          <SwiperSlide key={index}>
            <div onClick={()=>setCurrentPath(data.url)}>
              <img
                src={data.imageUrl}
                alt="data"
                className={`rounded-full object-cover cursor-pointer  `}
              />
              <h3 className={` text-xs w-full overflow-hidden lg:text-lg  p-2 ${data.url === currentPath ? "text-xl font-bold" : ""}`}>{data.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Customized navigation buttons */}
      <div className="lg:hidden absolute flex gap-4  text-red-400  transition-all duration-300 ease-in-out right-0 text-3xl sm:text-xl cursor-pointer">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-red-100 rounded-full p-1 hover:bg-red-50"
        >
          <FaArrowLeft/>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}
         className="bg-red-100 rounded-full p-1 hover:bg-red-50"
       
        >
          <FaArrowRight/>
        </button>
      </div>
    </section>
  );
};

export default CategorySlider;
