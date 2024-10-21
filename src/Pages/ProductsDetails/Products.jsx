import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Products() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  // Handle favorite click
  const handleFavoriteClick = (productId) => {
    let updatedFavorites = [...favorites];

    // Check if the product ID is already in favorites
    if (updatedFavorites.includes(productId)) {
      updatedFavorites = updatedFavorites.filter((id) => id !== productId); // Remove from favorites
      toast.success("Removed from wishlist!", {
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
      toast.success("Added to wishlist!", {
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
  };

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10 ">
      <ToastContainer />
      <div className="mb-5 text-2xl font-semibold text-tColor">
        T-shirt Catagories
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-5">
        {[...Array(9)].map((_, idx) => (
          <div className="bg-white w-full relative  p-2  rounded-md" key={idx}>
            <Link to={"/products/:id"} className="">
              <img
                className="w-full h-auto object-cover rounded-t-md"
                src="https://mohasagor.com/public/storage/images/product_thumbnail_img/thumbnail_1728107065_4046.jpg"
                alt="Product Thumbnail"
              />
            </Link>
            <span className="absolute top-4 left-2 bg-primary text-white px-1 rounded-tr-lg rounded-br-lg text-sm">
              0%
            </span>
            <div className="mt-2">
              {/* Ensure text is visible */}
              <h2 className="group-hover:text-primary duration-200 text-sm text-left text-gray-900">
                Men{`'`}s Stylish Winter Set Combo- Red
              </h2>
              <h3 className="text-sm font-semibold text-gray-800 text-left">
                350 TK
              </h3>
              <div className="flex justify-between mt-2">
                <Link
                  to={"/products/:id"}
                  className="px-6 py-[3px] rounded-br-[20px] border-primary border-2 text-primary text-sm"
                >
                  Order Now
                </Link>
                <FaRegHeart
                  className={`text-primary cursor-pointer text-2xl hover:scale-105 ${
                    favorites.includes(idx) ? "text-red-500" : ""
                  }`}
                  onClick={() => handleFavoriteClick(idx)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
