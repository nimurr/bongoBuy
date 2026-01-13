// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CatagoriesItem() {
  // Demo data for categories
  const demoCategories = [
    {
      id: 1,
      categoryName: "Shirts",
      uploadImage: "/Images/Categories/shirt.png",
    },
    {
      id: 1,
      categoryName: "T-Shirts",
      uploadImage: "/Images/Categories/t-shirt.png",
    },
    {
      id: 1,
      categoryName: "Polo Shirts",
      uploadImage: "/Images/Categories/polo-shirt.png",
    },
    {
      id: 1,
      categoryName: "Jursey",
      uploadImage: "/Images/Categories/football-uniform.png",
    },
    {
      id: 1,
      categoryName: "Pants",
      uploadImage: "/Images/Categories/pants.png",
    },
    {
      id: 1,
      categoryName: "Panjabi",
      uploadImage: "/Images/Categories/kurta.png",
    },
    {
      id: 1,
      categoryName: "New Offers",
      uploadImage: "/Images/Categories/new-offer.png",
    },
    {
      id: 1,
      categoryName: "Shirts",
      uploadImage: "/Images/Categories/shirt.png",
    },
    {
      id: 1,
      categoryName: "T-Shirts",
      uploadImage: "/Images/Categories/t-shirt.png",
    },
    {
      id: 1,
      categoryName: "Polo Shirts",
      uploadImage: "/Images/Categories/polo-shirt.png",
    },
    {
      id: 1,
      categoryName: "Jursey",
      uploadImage: "/Images/Categories/football-uniform.png",
    },
    {
      id: 1,
      categoryName: "Pants",
      uploadImage: "/Images/Categories/pants.png",
    },
    {
      id: 1,
      categoryName: "Panjabi",
      uploadImage: "/Images/Categories/kurta.png",
    },
    {
      id: 1,
      categoryName: "New Offers",
      uploadImage: "/Images/Categories/new-offer.png",
    },
  ];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulate fetching demo data instead of API call
    setCategories(demoCategories);
  }, []);

  return (
    <div className="my-10">
      <h2 className="mb-5 text-xl font-semibold text-tColor">Categories Items</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000, // Delay in ms (2 seconds)
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]} // Include Autoplay in the modules
        className="mySwiper"
      >
        {categories.map((category, idx) => (
          <SwiperSlide key={idx} className="h-auto w-full p-5 relative">
            <NavLink className={" w-full h-full "} to={`/categories/${category.id}`}>
              <img className="w-3/4 mx-auto " loading="lazy" src={category.uploadImage} alt={category.categoryName} />
              <div className="absolute bottom-2 right-0  w-full ">
                <span className="bg-primary text-white p-1 rounded text-sm font-semibold ">
                  {category.categoryName}
                </span>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
