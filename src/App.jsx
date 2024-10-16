import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
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

// lg:w-[90%] w-[95%] mx-auto

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-32 mx-auto my-[250px]">
        <img
          className="w-full animate-pulse"
          src="https://res.cloudinary.com/dav9mftpk/image/upload/v1727250935/sopnerPesha/Common/faqa5y5k3iqdu6dlw1pj.png"
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
        <div className="fixed md:hidden bottom-0 w-full bg-white z-[9999] grid grid-cols-5 items-center justify-between  py-3 sm:px-4 gap-3">
          <Link to={'/'} className="flex flex-col items-center text-sm cursor-pointer">
            <IoHomeSharp className="text-xl text-primary" />
            <span>Home</span>
          </Link>
          <Link to={'/wishlist'} className="flex flex-col items-center text-sm cursor-pointer">
            <FaRegHeart className="text-xl text-primary" />
            <span>Wishlist</span>
          </Link>
          <Link to={'/add-to-cart'} className="flex flex-col items-center text-sm cursor-pointer">
            <FaShoppingCart className="text-xl text-primary" />
            <span>Cart</span>
          </Link>
          <Link to={"tel:+8801708784404"} className="flex flex-col items-center text-sm cursor-pointer">
            <MdCall className="text-xl text-primary" />
            <span>Call</span>
          </Link>
          <Link to={'/profile'} className="flex flex-col items-center text-sm cursor-pointer">
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
        to={
          "https://api.whatsapp.com/send/?phone=%2B8801740189038&text&type=phone_number&app_absent=0"
        }
        className="fixed md:bottom-10 bottom-20 right-5 flex h-12 w-12 cursor-pointer z-[9999]"
      >
        <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#0dc043] opacity-75"></span>
        <span className="relative rounded-full h-12 w-12 bg-[#0dc043] flex justify-center items-center">
          <FaWhatsapp className="text-3xl text-white" />
        </span>
      </Link>

      <div className="fixed md:block hidden right-0 top-[45%] bg-white shadow-lg cursor-pointer z-[9999]">
        <div>
          <span className="flex justify-center items-center p-3">
            <FaShoppingCart className="text-2xl text-primary" />
          </span>
          <div className="block bg-primary px-4 text-white font-semibold">Cart</div>
        </div>
      </div>
    </div>
  );
}

export default App;
