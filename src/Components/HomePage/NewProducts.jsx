// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewProducts({ data }) {
  return (
    <div className="my-10">
      <h2 className="mb-5 text-xl font-semibold text-tColor">{data}</h2>
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
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]} // Include Autoplay in the modules
      >
        {/* Example for rendering each product in a loop */}
        {[...Array(7)].map((_, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-auto p-2 rounded-md bg-white   text-left group"
          >
            <div className="relative">
              <Link to={'/products/:id'} className="">
                <img
                  className="w-full h-[120px] object-cover rounded-t-md"
                  src="https://mohasagor.com/public/storage/images/product_thumbnail_img/thumbnail_1728107065_4046.jpg"
                  alt="Product Thumbnail"
                />
              </Link>
              <span className="absolute top-2 left-0 bg-primary text-sm text-white px-2 rounded-tr-lg rounded-br-lg">
                0%
              </span>
              <div className="mt-2">
                {/* Ensure text is visible */}
                <h2 className="group-hover:text-primary duration-200 text-sm text-gray-900">
                  Men{`'`}s Stylish Winter Set Combo- Red
                </h2>
                <h3 className="text-sm font-semibold text-gray-800">350 TK</h3>
                <div className="flex justify-between mt-2">
                  <Link to={'/products/:id'} className="px-6 py-[3px] rounded-br-[20px] border-primary border-2 text-primary text-sm">
                    Order Now
                  </Link>
                  <FaRegHeart className="text-primary cursor-pointer text-2xl hover:scale-105" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
