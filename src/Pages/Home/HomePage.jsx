import { FaHandPointRight, FaRegHeart } from "react-icons/fa";
import HeroSection from "../../Components/HomePage/HeroSection";
import NewProducts from "../../Components/HomePage/NewProducts";
import SupportSection from "../../Components/HomePage/SupportSection";
import CatagoriesItem from "./../../Components/HomePage/CatagoriesItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function HomePage() {
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

  // const [categoryItem , setCategoryItem] = useState([]);

  // useEffect(()=>{
  //   axios.get('http://localhost:5000/all-categories')
  //   .then(res => setCategoryItem(res?.data))

  // },[])

  const [Shirt, setProducts] = useState([]);
  const [Tshirt, setTshirt] = useState([]);
  const [poloTShirt, setPoloTShirt] = useState([]);
  const [pant, setPANT] = useState([]);
  // const [Shirt , setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/addProducts").then((res) => {
      setLoading(true);
      setProducts(res?.data.filter((id) => id.category == "SHIRT"));
      setTshirt(res?.data.filter((id) => id.category == "T-SHIRT"));
      setPoloTShirt(res?.data.filter((id) => id.category == "POLO_T-SHIRT"));
      setPANT(res?.data.filter((id) => id.category == "PANT"));
      setLoading(false);
    });
  }, []);

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto">
      <ToastContainer />
      <HeroSection />
      <CatagoriesItem />

      <NewProducts data={"New Arrival Products"} />



      
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="my-10">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold text-tColor">
              TRACKSUIT {++idx}
            </h2>
            <Link
              to={"/categories/:id"}
              className="bg-primary px-5 py-1 text-white rounded-md flex items-center gap-2"
            >
              View All <FaHandPointRight />
            </Link>
          </div>
          <hr className="h-[1px] bg-gray-300 border-none" />
          <br />
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-2">
            {[...Array(8)].map((_, idx) => (
              <div
                key={idx}
                className="w-full h-auto p-2 rounded-md bg-white text-left group"
              >
                <div className="relative">
                  <Link to={"/products/:id"}>
                    <img
                      loading="lazy"
                      className="w-full h-auto object-cover rounded-t-md"
                      src="https://images.othoba.com/images/thumbs/0660987_half-sleeve-t-shirt-soft-and-comfortable-fabric-just-do-it-a-round-neck-t-shirt-for-men-ideal-for-ef.jpeg"
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
                    <h3 className="text-sm font-semibold text-gray-800">
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
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="md:block hidden">
        <SupportSection />
      </div>
    </div>
  );
}
