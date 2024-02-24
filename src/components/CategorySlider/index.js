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
    <section className=" w-full my-4 relative ">
      <Swiper
        className="text-center"
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={30}
        cssMode={true}
        loop={true}
        parallax={true}
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
              <h3 className={`text-lg p-2 ${data.url === currentPath ? "text-xl font-bold" : ""}`}>{data.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Customized navigation buttons */}
      <div className="lg:hidden absolute  flex gap-2  right-0 text-2xl cursor-pointer">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaArrowLeft/>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <FaArrowRight/>
        </button>
      </div>
    </section>
  );
};

export default CategorySlider;
