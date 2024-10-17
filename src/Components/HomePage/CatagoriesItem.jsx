// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module
import { Link, NavLink } from "react-router-dom";

export default function CatagoriesItem() {
  return (
    <div className="my-10">
      <h2 className="mb-5 text-xl font-semibold text-tColor">
        Categories Items
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000, // Delay in ms (2.5 seconds)
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]} // Include Autoplay in the modules
        className="mySwiper"
      >
        
        {[...Array(10)].map((_, idx) => (
          <SwiperSlide key={idx} className="h-auto w-full bg-primary relative">
          <NavLink to={'/categories/:id'}>
            <img
              loading="lazy"
              src="https://mohasagor.com/public/storage/images/category/2Geo6S0bALej04uMsQZeZtQq6XGzkt6hmJcka9OB.png"
              alt=""
            />
            <span className="absolute bottom-5 bg-white p-2 rounded-md left-[35%]">
              T-shirt
            </span>
          </NavLink>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
