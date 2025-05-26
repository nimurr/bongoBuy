import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewProducts({ data }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleFavoriteClick = (productId) => {
    let updatedFavorites = [...favorites];

    if (updatedFavorites.includes(productId)) {
      updatedFavorites = updatedFavorites.filter((id) => id !== productId);
      toast.success("Removed from wishlist!", { autoClose: 1000 });
    } else {
      updatedFavorites.push(productId);
      toast.success("Added to wishlist!", { autoClose: 1000 });
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  // DEMO PRODUCTS DATA
  const demoProducts = [
    {
      _id: "1",
      name: "Demo Product 1",
      rPrice: 1000,
      discount: 20,
      uploadImages: "https://images.othoba.com/images/thumbs/0660987_half-sleeve-t-shirt-soft-and-comfortable-fabric-just-do-it-a-round-neck-t-shirt-for-men-ideal-for-ef.jpeg",
    },
    {
      _id: "2",
      name: "Demo Product 2",
      rPrice: 1500,
      discount: 10,
      uploadImages: "https://i0.wp.com/www.pristineshop.com.bd/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-22-at-12.04.54-PM-2.jpeg?resize=1600%2C1600&ssl=1",
    },
    {
      _id: "3",
      name: "Demo Product 3",
      rPrice: 2000,
      discount: 30,
      uploadImages: "https://legacyboutiques.co/cdn/shop/files/mens-solid-color-t-shirt-legacy-boutiques-bangladesh-t-shirtsnavy-249460.png?v=1738828241",
    },
    {
      _id: "4",
      name: "Demo Product 4",
      rPrice: 1800,
      discount: 15,
      uploadImages: "https://comfiq.com.bd/wp-content/uploads/2024/03/round-neck-2-scaled.webp",
    },
    {
      _id: "5",
      name: "Demo Product 5",
      rPrice: 1300,
      discount: 25,
      uploadImages: "https://libas.shop/wp-content/uploads/2024/05/libas-t-shirt-3.jpg",
    },
  ];

  return (
    <div className="my-10">
      <ToastContainer />
      <h2 className="mb-5 text-xl font-semibold text-tColor">{data}</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
        modules={[Pagination, Autoplay]}
      >
        {demoProducts.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-auto p-2 rounded-md bg-white text-left group"
          >
            <div className="relative">
              <Link to={`/products/${item._id}`}>
                <img
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-t-md"
                  src={item.uploadImages}
                  alt="Product Thumbnail"
                />
              </Link>
              <span className="absolute top-2 left-0 bg-primary text-sm text-white px-2 rounded-tr-lg rounded-br-lg">
                {item.discount}%
              </span>
              <div className="mt-2">
                <h2 className="group-hover:text-primary duration-200 font-semibold mb-2 text-sm text-gray-900">
                  {item.name}
                </h2>
                <h3 className="text-sm font-semibold text-gray-800">
                  {(item.rPrice * (1 - item.discount / 100)).toFixed(2)}TK{" "}
                  <del className="ml-2 font-normal">{item.rPrice}TK</del>
                </h3>
                <div className="flex justify-between mt-2">
                  <Link
                    to={`/products/${item._id}`}
                    className="px-6 py-[3px] rounded-br-[20px] border-primary border-2 text-primary text-sm"
                  >
                    Order Now
                  </Link>
                  <FaRegHeart
                    className={`text-primary cursor-pointer text-2xl hover:scale-105 ${
                      favorites.includes(item._id) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleFavoriteClick(item._id)}
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
