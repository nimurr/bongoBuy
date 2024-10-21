import { Drawer, Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMenu, IoSearch } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import HeaderCatagories from "./HeaderCetagories";
import HeaderTop from "./HeaderTop";
import axios from "axios";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar
  const [isOpen, setIsOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0); // State for favorite count
 
  const clickMenu = () => {
    setMenu(!menu);
  };

  const handleClose = () => setIsOpen(!isOpen);

  // Effect to handle scroll event for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0); // Set sticky to true if scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to get favorite items from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritesCount(storedFavorites.length); // Set the count of favorite items
  }, []);

  const [settingInfo , setSettingInfo] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:5000/site-settings')
    .then( res => {
      if(res?.data) setSettingInfo(res?.data)
    })
  },[])


  return (
    <div className="relative">
      <HeaderTop />
      <div
        className={`w-full md:border-none border-primary border-b-2 ${
          isSticky
            ? "fixed top-0 shadow-lg bg-white dark:bg-white"
            : "bg-white dark:bg-white z-10"
        }`}
      >
        <Navbar
          fluid
          rounded
          className="lg:w-[92%] w-[95%] mx-auto dark:bg-white"
        >
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://res.cloudinary.com/nerob/image/upload/v1729064831/p2ix7dofpoiuu5419jk5.png"
              className="mr-3 h-10"
              alt="Logo"
            />
          </Navbar.Brand>

          {!menu ? (
            <div className="flex items-center gap-2 ">
              <IoSearch className="md:hidden text-2xl" onClick={clickMenu} />
              <IoMenu
                onClick={() => setIsOpen(true)}
                className="md:hidden text-3xl"
              />
              <Drawer
                className="md:hidden dark:bg-white dark:text-black"
                open={isOpen}
                onClose={handleClose}
                position="left"
              >
                <Drawer.Header />
                <Drawer.Items>
                  <ul className="my-10">
                    <Link
                      className="block py-2 hover:bg-primary hover:text-white px-2 border-b-2"
                      to={"/"}
                    >
                      Categories
                    </Link>
                    {/* Add more links as needed */}
                  </ul>
                </Drawer.Items>
              </Drawer>
            </div>
          ) : (
            <RxCross1 className="md:hidden text-2xl" onClick={clickMenu} />
          )}

          <Navbar.Collapse className={`${menu ? "block" : "hidden"}`}>
            <div className="sm:flex flex-wrap items-center xl:gap-8 gap-5 sm:mt-0 mt-5">
              <div className="relative border rounded-md overflow-hidden">
                <input
                  className="sm:py-4 border-none w-[100vw] md:w-[500px] pr-10"
                  type="text"
                  placeholder="Search Here ..."
                  name="search"
                />
                <IoSearch className="absolute right-3 sm:top-[30%] top-[20%] text-2xl" />
              </div>
              <Link
                to={`tel:${ settingInfo[0]?.phone}`}
                className="xl:flex hidden gap-1 items-center cursor-pointer"
              >
                <MdCall className="text-primary text-3xl rotate-[35deg]" />
                <div>
                  <h2>Call Us Now:</h2>
                  <h3>+88 { settingInfo[0]?.phone}</h3>
                </div>
              </Link>

              {/* Favorites with count */}
              <Link
                to={"/wishlist"}
                className="relative hidden xl:block px-5 border-r border-l cursor-pointer"
              >
                <FaRegHeart className="text-3xl text-primary" />
                <span className="absolute bottom-0 right-2 text-sm bg-red-500 text-white w-5 h-5 flex justify-center items-center py-1 rounded-full">
                  {favoritesCount} {/* Display number of favorites */}
                </span>
              </Link>

              <div className="hidden xl:block">
                <h3>Cart amount</h3>
                <span className="font-bold">00 TK</span>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="hidden md:block">
        <HeaderCatagories />
      </div>
    </div>
  );
}
