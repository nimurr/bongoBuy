import { Modal } from "flowbite-react";
import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaAngleRight,
  FaCartArrowDown,
  FaCheck,
  FaHandshake,
  FaMinus,
  FaPlus,
  FaRegEdit,
  FaStar,
} from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoHomeSharp, IoLogoWhatsapp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductsDetails() {
  const { id } = useParams();

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  // Handle favorite click
  const handleFavoriteClick = () => {
    let updatedFavorites = [...favorites];

    // Check if the product ID is already in favorites
    if (updatedFavorites.includes(id)) {
      updatedFavorites = updatedFavorites.filter((id) => id !== id); // Remove from favorites
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
      updatedFavorites.push(id); // Add to favorites
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
  // ================ selected Size ============
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  //============= Quantity ==========
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1
  const handleIncrease = () => {
    setQuantity(quantity + 1); // Increase quantity by 1
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrease quantity by 1, but not below 1
    }
  };

  //=========== image zoom ==========
  const [zoom, setZoom] = useState(false); // To toggle zoom
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Mouse position
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100; // X-axis percentage relative to image
    const y = ((e.pageY - top) / height) * 100; // Y-axis percentage relative to image
    setPosition({ x, y });
  };
  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  //============= on change Image change =======

  //================ Tabs system =============

  const [activeTab, setActiveTab] = useState("profile"); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  //=========== review modal =============
  const [openModal, setOpenModal] = useState(false);

  const [review, setReview] = useState("");
  const handleReview = (event) => {
    setReview(event.target.value);
  };

  const handlePostReview = async (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.userName.value;
    const message = form.message.value;
    const formData = { productId: id, review, userName, message };
    console.log(formData);

    await axios
      .post("http://localhost:5000/allReviews", formData)
      .then((res) => {
        if (!res) {
          return toast.error(" Review Submit Error !!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.success(" Review Submit Successful !!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });

    form.reset();
  };

  // Function to handle adding the item to localStorage
  const handleAddToCart = (product) => {
    // Retrieve existing cart items from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item is already in the cart
    const itemExists = cart.some((item) => item.id === product.id); // Assuming product has a unique id property

    if (itemExists) { 
      toast.error("This item is already in your cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return; // Exit the function if the item already exists
    }

    // Add the new product to the cart
    const updatedCart = [...cart, product];

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    window.location.reload()

  };

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10">
      <ToastContainer />
      <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-5">
        {/* Products Images  */}
        <div>
          <div
            className="relative w-auto h-auto overflow-hidden cursor-cell	"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://mohasagor.com/public/storage/images/products/product_1723892877_1506.jpg"
              alt="Zoomable"
              className={`w-full h-full transition-transform duration-300 ease-in-out ${
                zoom ? "scale-[2.5]" : "scale-100"
              }`}
              style={{
                transformOrigin: `${position.x}% ${position.y}%`, // Move image center based on mouse position
              }}
            />
          </div>
        </div>
        {/* Products Information  */}
        <div>
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <IoHomeSharp className="text-xl hover:text-primary duration-300" />
            </Link>{" "}
            <FaAngleRight />{" "}
            <Link
              className="hover:underline hover:text-primary duration-300 text-sm"
              to={"/categories/:id"}
            >
              WINTER COLLECTION
            </Link>
          </div>
          <div className="my-5">
            <h2 className="text-xl font-bold">
              BUY 1 GET 1 FREE Sweatpant Trouser Offer
            </h2>
            <Link
              to={
                "https://api.whatsapp.com/send/?phone=%2B8801740189038&text&type=phone_number&app_absent=0"
              }
              className="mt-2 flex items-center gap-2 text-[#36a845]"
            >
              <IoLogoWhatsapp className="text-xl " /> Ask for details
            </Link>
          </div>
          <div>
            <h2 className="flex items-center gap-2">
              <span className="font-semibold ">Reviews : </span>
              <div className="">
                <FaStar className="inline text-orange-500" />
                <FaStar className="inline text-orange-500" />
                <FaStar className="inline text-orange-500" />
                <FaStar className="inline text-orange-500" />
                <FaStar className="inline text-orange-500" />
              </div>
              <div>
                4.90 (<span className="text-xs">145</span>)
              </div>
            </h2>
          </div>
          <div>
            <h3 className="my-5">
              <span className="font-semibold">Code:</span> 1242
            </h3>
            <h3 className="my-5">
              <span className="font-semibold">Price:</span> 590 TK{" "}
              <del className="text-gray-500">790 TK</del>
            </h3>
            <h3 className="flex items-center gap-3 flex-wrap">
              <span className="font-semibold">Size:</span>
              <div className="flex gap-4">
                <label
                  className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                    selectedSize === "M"
                      ? "bg-primary text-white border-primary"
                      : "border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    value="M"
                    checked={selectedSize === "M"}
                    onChange={handleSizeChange}
                    className="hidden"
                  />
                  M
                </label>

                <label
                  className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                    selectedSize === "L"
                      ? "bg-primary text-white border-primary"
                      : "border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    value="L"
                    checked={selectedSize === "L"}
                    onChange={handleSizeChange}
                    className="hidden"
                  />
                  L
                </label>
                <label
                  className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                    selectedSize === "XL"
                      ? "bg-primary text-white border-primary"
                      : "border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    value="XL"
                    checked={selectedSize === "XL"}
                    onChange={handleSizeChange}
                    className="hidden"
                  />
                  XL
                </label>
                <label
                  className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                    selectedSize === "2XL"
                      ? "bg-primary text-white border-primary"
                      : "border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    value="2XL"
                    checked={selectedSize === "2XL"}
                    onChange={handleSizeChange}
                    className="hidden"
                  />
                  2XL
                </label>
                <label
                  className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                    selectedSize === "3XL"
                      ? "bg-primary text-white border-primary"
                      : "border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    value="3XL"
                    checked={selectedSize === "3XL"}
                    onChange={handleSizeChange}
                    className="hidden"
                  />
                  3XL
                </label>
              </div>
            </h3>

            <div className="flex justify-start items-center gap-5 my-5">
              <div className="flex items-center space-x-4 border-gray-300 border-2">
                <button
                  onClick={handleDecrease}
                  className="bg-gray-200 p-3 text-gray-600 hover:bg-gray-300"
                >
                  <FaMinus />
                </button>
                <span className="text-sm min-w-8 flex justify-center">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  className="bg-gray-200 p-3 text-gray-600 hover:bg-gray-300"
                >
                  <FaPlus />
                </button>
              </div>

              <Link
                to={"/orders/:id"}
                className="py-[10px] px-10 bg-primary text-white rounded-md flex items-center gap-2"
              >
                Order Now <CiShoppingCart className="text-xl font-bold" />
              </Link>
            </div>
            <div className="flex items-center gap-5 ">
              <button
                onClick={() => handleAddToCart(id)}
                className="py-[10px] text-sm px-6 border-2 border-gray-300 rounded flex items-center gap-2"
              >
                <FaCartArrowDown className="text-xl font-bold" /> Add To Cart
              </button>
              <button
                onClick={handleFavoriteClick}
                className={`py-[10px] text-sm px-6 border-2 border-gray-300 rounded flex items-center gap-2 ${
                  favorites.includes(id) ? "text-red-500" : ""
                }`}
              >
                <CiHeart
                  className={`cursor-pointer text-2xl hover:scale-105 `}
                />{" "}
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
        {/* Order System  */}
        <div>
          <ul className="p-3 border-dotted border-2 border-primary">
            <li className="flex items-center gap-2 mb-3 text-sm text-tColor">
              <FaCheck className="" /> Order today and receive it within 01 - 02
              days{" "}
            </li>
            <li className="flex items-center gap-2 mb-3 text-sm text-tColor">
              <BiSolidLike className="" /> Quality Product
            </li>
            <li className="flex items-center gap-2 mb-3 text-sm text-tColor">
              <FaHandshake className="" /> Cash On Delivery Available
            </li>
            <li className="flex items-center gap-2 mb-3 text-sm text-tColor">
              <FaTruckFast className="" /> Delivery Charge Inside Dhaka 60 TK
            </li>
            <li className="flex items-center gap-2 text-sm text-tColor">
              <FaTruckFast className="" /> Delivery Charge Outside Dhaka 120 TK
            </li>
          </ul>
          <ul className="p-3 border-dotted border-2 border-primary mt-5">
            <li className=" font-semibold gap-2 mb-3 text-sm ">
              Have question about this product ? please call
            </li>
            <li className="flex items-center gap-2 mb-3 text-sm text-primary">
              <MdCall className="text-xl" /> 017*********
            </li>
            <li className="flex items-center gap-2 mb-3 text-sm text-primary">
              <MdCall className="text-xl" />{" "}
              <span className="px-1 border-primary border-[2px] border-dotted">
                Bkash Personal
              </span>
            </li>
            <li className="flex items-center gap-2 text-sm text-primary">
              <MdCall className="text-xl" />{" "}
              <span className="px-1 border-primary border-[2px] border-dotted">
                Nagad Personal
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* tabs  */}
      <div className="my-10">
        <div className="flex mb-4 bg-gray-300">
          <button
            className={`${
              activeTab === "profile"
                ? "bg-primary text-white text-sm py-3"
                : "text-gray-700 hover:bg-gray-200  text-sm py-3"
            } px-4 py-2 `}
            onClick={() => handleTabClick("profile")}
          >
            DESCRIPTION
          </button>
          <button
            className={`${
              activeTab === "dashboard"
                ? "bg-primary text-white text-sm py-3"
                : "text-gray-700 hover:bg-gray-200 text-sm py-3"
            } px-4 py-2 `}
            onClick={() => handleTabClick("dashboard")}
          >
            HOW TO BUY
          </button>
          <button
            className={`${
              activeTab === "settings"
                ? "bg-primary text-white text-sm py-3"
                : "text-gray-700 hover:bg-gray-200 text-sm py-3"
            } px-4 py-2 `}
            onClick={() => handleTabClick("settings")}
          >
            RETURN POLICY
          </button>
        </div>
        <div className="p-4 border border-gray-300 rounded">
          {activeTab === "profile" && (
            <div> This content is dynamic . So add will </div>
          )}
          {activeTab === "dashboard" && (
            <div className="px-5">
              <ul>
                <li className="list-disc mb-2">
                  Select number of product you want to buy.
                </li>
                <li className="list-disc mb-2">
                  Click <span className="font-semibold">Add To Cart </span>
                  Button
                </li>
                <li className="list-disc mb-2">Then go to checkout page</li>
                <li className="list-disc mb-2">
                  If you are a new customer, please click on Sign Up.provide us
                  your valid information information.
                </li>
                <li className="list-disc mb-2">
                  Complete your checkout, we received your order, and for order
                  confirmation or customer service contact with you
                </li>
              </ul>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="px-5">
              <ul>
                <li className="list-disc mb-2">
                  If your product is damaged, defective, incorrect or incomplete
                  at the time of delivery, please file a return request on call
                  to customer care support number within 3 days of the delivery
                  date
                </li>
                <li className="list-disc">
                  Change of mind is not applicable as a Return Reason for this
                  product
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Reviews  */}
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 sm:gap-10 gap-5 my-10 items-center">
        <div className="">
          <div className="flex items-center">
            <span className="text-4xl font-semibold mr-2">0</span>
            <span className="bg-primary p-1 text-white rounded-br-xl rounded-tl-xl">
              Reviews
            </span>
          </div>
          <div className="my-5">
            <FaStar className="text-primary text-xl" />
          </div>
          <div>
            <span>0 reviews</span>
          </div>
        </div>
        <div className="">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex sm:justify-center items-center gap-3 mb-2"
            >
              {" "}
              <ul className="flex gap-1">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <progress id="file" value="0" max="100">
                {" "}
              </progress>
              <div>0.00%</div>
            </div>
          ))}
        </div>

        <div className="flex">
          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-2 border-2 border-gray-300 p-2 rounded-md bg-white"
          >
            <FaRegEdit />
            Write a Review
          </button>

          <Modal
            dismissible
            show={openModal}
            onClose={() => setOpenModal(false)}
            className="dark:bg-black "
          >
            <Modal.Header className="dark:bg-white dark:text-black"></Modal.Header>
            <Modal.Body className="dark:bg-white ">
              <form onSubmit={handlePostReview} action="">
                <div className="space-y-6">
                  <span className="font-semibold flex items-center gap-2">
                    Rating <FaStar className="text-orange-500" />
                  </span>
                  <div className="flex gap-2">
                    <label
                      className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                        review === "5"
                          ? "bg-primary text-white border-primary"
                          : "border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        value="5"
                        checked={review === "5"}
                        onChange={handleReview}
                        className="hidden"
                      />
                      5
                    </label>

                    <label
                      className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                        review === "4"
                          ? "bg-primary text-white border-primary"
                          : "border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        value="4"
                        checked={review === "4"}
                        onChange={handleReview}
                        className="hidden"
                      />
                      4
                    </label>
                    <label
                      className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                        review === "3"
                          ? "bg-primary text-white border-primary"
                          : "border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        value="3"
                        checked={review === "3"}
                        onChange={handleReview}
                        className="hidden"
                      />
                      3
                    </label>
                    <label
                      className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                        review === "2"
                          ? "bg-primary text-white border-primary"
                          : "border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        value="2"
                        checked={review === "2"}
                        onChange={handleReview}
                        className="hidden"
                      />
                      2
                    </label>
                    <label
                      className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                        review === "1"
                          ? "bg-primary text-white border-primary"
                          : "border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        value="1"
                        checked={review === "1"}
                        onChange={handleReview}
                        className="hidden"
                      />
                      1
                    </label>
                  </div>
                  <input
                    className="w-full border-2 border-gray-300"
                    type="text"
                    name="userName"
                    placeholder="Name"
                    id=""
                    required
                  />
                  <textarea
                    className="w-full border-2 border-gray-300"
                    name="message"
                    placeholder="Your Message"
                    id=""
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-2 px-5 mt-3 text-white rounded-sm bg-primary"
                  color="gray"
                >
                  Submit Review
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
