import { useState } from "react";
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
import { toast, ToastContainer } from "react-toastify";

export default function NewProducts({ data }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  // Handle favorite click
  const handleFavoriteClick = (productId) => {
    let updatedFavorites = [...favorites];

    // Check if the product ID is already in favorites
    if (updatedFavorites.includes(productId)) {
      updatedFavorites = updatedFavorites.filter((id) => id !== productId); // Remove from favorites
      toast.success("Remove wishlist !!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      updatedFavorites.push(productId); // Add to favorites
       toast.success("Add wishlist !!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // Save the updated favorites list to localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // Update state
    setFavorites(updatedFavorites);



    window.location.reload(true);


    // Clear the message after 2 seconds
  };

  return (
    <div className="my-10">
      <ToastContainer />
      <h2 className="mb-5 text-xl font-semibold text-tColor">{data}</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000, // Delay in ms (2 seconds)
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
        {/* Using a static array of 7 items */}
        {[...Array(7)].map((_, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-auto p-2 rounded-md bg-white text-left group"
          >
            <div className="relative">
              <Link to={`/products/${idx}`} className="">
                <img
                  loading="lazy"
                  className="w-full h-[120px] object-cover rounded-t-md"
                  src="https://mohasagor.com/public/storage/images/product_thumbnail_img/thumbnail_1728107065_4046.jpg"
                  alt="Product Thumbnail"
                />
              </Link>
              <span className="absolute top-2 left-0 bg-primary text-sm text-white px-2 rounded-tr-lg rounded-br-lg">
                0%
              </span>
              <div className="mt-2">
                <h2 className="group-hover:text-primary duration-200 text-sm text-gray-900">
                  Men{`'`}s Stylish Winter Set Combo- Red
                </h2>
                <h3 className="text-sm font-semibold text-gray-800">350 TK</h3>
                <div className="flex justify-between mt-2">
                  <Link
                    to={`/products/${idx}`}
                    className="px-6 py-[3px] rounded-br-[20px] border-primary border-2 text-primary text-sm"
                  >
                    Order Now
                  </Link>
                  <FaRegHeart
                    className={`text-primary cursor-pointer text-2xl hover:scale-105 ${
                      favorites.includes(idx) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleFavoriteClick(idx)} // Pass product index as ID
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
