// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module
import { NavLink } from "react-router-dom";
import { API } from "../../Api";
import { useEffect, useState } from "react";
export default function CatagoriesItem() {
  const api = API;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${api}/all-categories`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data); // Set the fetched data into the categories state
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // console.log(categories);

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
        {categories?.map((category, idx) => (
          <SwiperSlide key={idx} className="h-auto w-full bg-primary relative">
            <NavLink to={`/categories/${category?.categoryName}`}>
              <img loading="lazy" src={category?.uploadImage} alt="" />
              <div className="absolute bottom-5 w-full ">
                <span className="  bg-white p-1 rounded font-semibold ">
                  {category?.categoryName}
                </span>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
