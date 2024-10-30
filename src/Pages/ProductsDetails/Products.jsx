import axios from "axios";
import { useEffect, useState } from "react";
import {  FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Products() {


  const {id} = useParams();



  const [item , setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/addProducts").then((res) => {
      setItem(res?.data.filter((pro) => pro?.category == id )); 
    });
  }, []);




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
        {id} Catagories
      </div>


    
      <div className="my-10"> 
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-2">
          {item?.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-auto p-2 rounded-md bg-white text-left group"
            >
               <div className="relative">
              <Link to={`/products/${item?._id}`}>
                <img
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-t-md"
                  src={item?.uploadImages}
                  alt="Product Thumbnail"
                />
              </Link>
              <span className="absolute top-2 left-0 bg-primary text-sm text-white px-2 rounded-tr-lg rounded-br-lg">
                {item?.discount}%
              </span>
              <div className="mt-2">
                <h2 className="group-hover:text-primary duration-200 font-semibold mb-2 text-sm text-gray-900">
                {item?.name}
                </h2>
                <h3 className="text-sm font-semibold text-gray-800 ">{(item?.rPrice * (1 - item?.discount / 100)).toFixed(2)}TK <del className="ml-2 font-normal">{item?.rPrice}TK</del></h3>
                <div className="flex justify-between mt-2">
                  <Link
                    to={`/products/${item?._id}`}
                    className="px-6 py-[3px] rounded-br-[20px] border-primary border-2 text-primary text-sm"
                  >
                    Order Now
                  </Link>
                  <FaRegHeart
                    className={`text-primary cursor-pointer text-2xl hover:scale-105 ${
                      favorites.includes(item?._id) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleFavoriteClick(item?._id)}
                  />
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
