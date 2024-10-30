import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import {
  FaRegHeart,
  FaRegUser,
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import axios from "axios";

function App() {
  const { loading } = useContext(AuthContext);

  // State for storing counts
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Helper function to get the favorite items from localStorage
  const getFavoriteCount = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCount(favorites.length);
  };

  // Helper function to get the cart items from localStorage
  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  // Fetch counts from localStorage on component mount
  useEffect(() => {
    getFavoriteCount(); // Fetch favorite count on mount
    getCartCount(); // Fetch cart count on mount

    // Add an event listener for potential changes in localStorage
    window.addEventListener("storage", () => {
      getFavoriteCount();
      getCartCount();
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", getFavoriteCount);
      window.removeEventListener("storage", getCartCount);
    };
  }, []);
  const [settingInfo, setSettingInfo] = useState([]);
  console.log(settingInfo)
  
  useEffect(() => {
    axios.get("http://localhost:5000/site-settings").then((res) => {
      if (res?.data) setSettingInfo(res?.data);
    });
  }, []);

  



  if (loading) {
    return (
      <div className="w-32 mx-auto my-[250px]">
        <img
          className="w-full animate-pulse"
          src="https://res.cloudinary.com/nerob/image/upload/v1729153381/BongoBuy/vjrj5chnn35depdimlhs.gif"
          alt=""
        />
      </div>
    );
  }



  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <header className="z-10">
        <Header />
      </header>

      {/* Main content: Outlet goes here */}
      <main className="flex-grow">
        <Outlet />
        <div className="fixed md:hidden bottom-0 w-full bg-white z-[9999] grid grid-cols-5 items-center justify-between py-3 sm:px-4 gap-3">
          <Link
            to={"/"}
            className="flex flex-col items-center text-sm cursor-pointer"
          >
            <IoHomeSharp className="text-xl text-primary" />
            <span>Home</span>
          </Link>
          <Link
            to={"/wishlist"}
            className="flex relative flex-col items-center text-sm cursor-pointer"
          >
            <FaRegHeart className="text-xl text-primary" />
            <span>Wishlist</span>
            {/* Show favorite count */}
            {favoriteCount > 0 && (
              <span className="absolute top-0 right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                {favoriteCount}
              </span>
            )}
          </Link>
          <Link
            to={"/add-to-cart"}
            className="flex relative flex-col items-center text-sm cursor-pointer"
          >
            <FaShoppingCart className="text-xl text-primary" />
            <span>Cart</span>
            {/* Show cart count */}
            {cartCount > 0 && (
              <span className="absolute top-0 right-2 bg-red-600 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to={`tel:+88${settingInfo[0].phone}`}
            className="flex flex-col items-center text-sm cursor-pointer"
          >
            <MdCall className="text-xl text-primary" />
            <span>Call</span>
          </Link>
          <Link
            to={"/profile"}
            className="flex flex-col items-center text-sm cursor-pointer"
          >
            <FaRegUser className="text-xl text-primary" />
            <span>Account</span>
          </Link>
        </div>
      </main>

      {/* Footer section */}
      <footer>
        <Footer />
      </footer>

      {/* WhatsApp link */}
      <Link
        target="_blank"
        to={`https://api.whatsapp.com/send/?phone=%2B88${settingInfo[0]?.wpNumber}&text&type=phone_number&app_absent=0`}
        className="fixed md:bottom-10 bottom-20 right-5 flex h-12 w-12 cursor-pointer z-[9999]"
      >
        <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#0dc043] opacity-75"></span>
        <span className="relative rounded-full h-12 w-12 bg-[#0dc043] flex justify-center items-center">
          <FaWhatsapp className="text-3xl text-white" />
        </span>
      </Link>

      <Link
        to={"/add-to-cart"}
        className="fixed md:block hidden right-0 top-[45%] bg-white shadow-lg cursor-pointer z-[9999]"
      >
        <div>
          <span className="flex justify-center items-center p-3">
            <FaShoppingCart className="text-2xl text-primary" />
          </span>
          <div className="block bg-primary px-4 text-white font-semibold">
            Cart
          </div>
        </div>
        <div className="w-6 h-6 flex justify-center items-center bg-red-600 rounded-full text-white text-xs absolute -top-2 -left-2">
          {cartCount} {/* Display the cart count here */}
        </div>
      </Link>
    </div>
  );
}

export default App;
