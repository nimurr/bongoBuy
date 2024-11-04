import { Modal } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function ProductsDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [product, setProducts] = useState({});
  // console.log(product)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/addProducts/${id}`)
      .then((res) => setProducts(res.data));
  }, []);

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

  const [addToCart, setaddToCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  // Handle favorite click
  const handleAddToCart = () => {
    let updatedAddTocart = [...addToCart];

    // Check if the product ID is already in favorites
    if (updatedAddTocart.includes(id)) {
      updatedAddTocart = updatedAddTocart.filter((id) => id !== id); // Remove from favorites
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
      updatedAddTocart.push(id); // Add to favorites
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
    localStorage.setItem("cart", JSON.stringify(updatedAddTocart));
    // Update state
    setaddToCart(updatedAddTocart);

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

  // console.log(quantity, selectedSize, id);

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
    if (user) {
      if (!review) {
        return alert("select Review Number !!!");
      }

      const form = e.target;
      const userName = form.userName.value;
      const message = form.message.value;
      const formData = { productId: id, review, userName, message };
      // console.log(formData);

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
    } else {
      alert("please Login");
    }
  };

  // const navigate = useNavigate();
  const discountPrice =
    product?.rPrice * (1 - product?.discount / 100).toFixed(2);

  // console.log(quantity, selectedSize, discountPrice);
  const handleOrders = () => {
    if (!selectedSize) {
      return toast.error(" Please Select Size For Order !!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const [settingInfo, setSettingInfo] = useState([]);
  // console.log(settingInfo[0].phone)
  const [reviews, setReviews] = useState([]);

  console.log(reviews);
  useEffect(() => {
    axios.get("http://localhost:5000/site-settings").then((res) => {
      if (res?.data) setSettingInfo(res?.data);
    });

    axios
      .get("http://localhost:5000/allReviews")
      .then((res) =>
        setReviews(res?.data.filter((item) => item.productId == id))
      );
  }, []);

  const average = reviews?.reduce(
    (pre, current) => pre + Number(current?.review),
    0
  );

  console.log(average ? average / reviews?.length : "0");

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
              src={product?.uploadImages}
              alt="Zoomable"
              className={`w-full h-full transition-transform duration-300 ease-in-out ${
                zoom ? "scale-[2.5]" : "scale-100"
              }`}
              style={{
                transformOrigin: `${position.x}% ${position.y}%`, // Move image center based on mouse position
              }}
            />
            <span className="absolute top-2 left-0 rounded-tr-xl text-sm rounded-br-xl bg-primary text-white py-1 px-2 ">
              {product?.discount} %
            </span>
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
              to={`/categories/${product?.category}`}
            >
              {product?.category}
            </Link>
          </div>
          <div className="my-5">
            <h2 className="text-xl font-bold">
              {product?.name}
              {/* BUY 1 GET 1 FREE Sweatpant Trouser Offer */}
            </h2>
            <Link
              to={
                "https://api.whatsapp.com/send/?phone=%2B8801740189038&text&type=phone_number&app_absent=0"
              }
              className="mt-2  gap-2 inline-block text-[#36a845]"
            >
              <IoLogoWhatsapp className="text-xl inline mr-2" /> Ask for details
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
              {average ? average / reviews?.length : "0"} <span className="ml-1 text-xs"> ({reviews?.length})</span>
              </div>
            </h2>
          </div>
          <div>
            <h3 className="my-5">
              <span className="font-semibold">Code: </span>
              {product?.pCode}
            </h3>
            <h3 className="my-5">
              <span className="font-semibold">Price:</span>{" "}
              {(product?.rPrice * (1 - product?.discount / 100)).toFixed(2)}TK
              <del className="text-gray-500 ml-2">{product?.rPrice}TK</del>
            </h3>
            <h3 className="flex items-center gap-3 flex-wrap">
              <span className="font-semibold">Size:</span>
              <div className="flex gap-4">
                {product?.sizes?.map((item, idx) => (
                  <label
                    key={idx}
                    className={`size-option border-2 p-4 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg transition ${
                      selectedSize === item
                        ? "bg-primary text-white border-primary"
                        : "border-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      value={item}
                      checked={selectedSize === item}
                      onChange={handleSizeChange}
                      className="hidden"
                    />
                    {item}
                  </label>
                ))}
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
                to={`${
                  selectedSize &&
                  `/orders/${id}?discountPrice=${discountPrice}&quantity=${quantity}&selectedSize=${selectedSize}`
                }`} // Correctly formatted URL
                onClick={handleOrders}
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
              <MdCall className="text-xl" /> {settingInfo[0]?.phone}
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
          {activeTab === "profile" && <div> {product?.description} </div>}
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
            <span className="text-4xl font-semibold mr-2">
              {reviews ? reviews?.length : 0}
            </span>
            <span className="bg-primary p-1 text-white rounded-br-xl rounded-tl-xl">
              Reviews
            </span>
          </div>
          <div className="my-5 flex items-center gap-2">
            {average ? average / reviews?.length : "0"}
            <span className="mr-2"> ({reviews?.length})</span>
            <div className="flex items-center gap-1">
              <FaStar className="text-primary text-xl" />
              <FaStar className="text-primary text-xl" />
              <FaStar className="text-primary text-xl" />
              <FaStar className="text-primary text-xl" />
              <FaStar className="text-primary text-xl" />
            </div>
          </div>
          <div>
            <span>{reviews ? reviews?.length : 0} reviews</span>
          </div>
        </div>
        <div className="">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex sm:justify-center items-center gap-3 mb-2"
            >
              <ul className="flex gap-1">
                {Array.from({ length: 5 }, (_, starIdx) => (
                  <li key={starIdx}>
                    <FaStar
                      className={
                        idx === 0
                          ? "text-black" // 1st line: all stars black
                          : idx === 1
                          ? starIdx < 4
                            ? "text-black"
                            : "text-gray-500" // 2nd line: 4 black, 1 gray
                          : idx === 2
                          ? starIdx < 3
                            ? "text-black"
                            : "text-gray-500" // 3rd line: 3 black, 2 gray
                          : idx === 3
                          ? starIdx < 2
                            ? "text-black"
                            : "text-gray-500" // 4th line: 2 black, 3 gray
                          : starIdx === 0
                          ? "text-black"
                          : "text-gray-500" // 5th line: 1 black, 4 gray
                      }
                    />
                  </li>
                ))}
              </ul>
              <progress id="file" value="0" max="100"></progress>
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
      <div>
        {reviews?.map((item, idx) => (
          <div
            className="flex items-start gap-5 border-2 p-3 rounded mb-2"
            key={idx}
          >
            <div>
              <h2 className="text-xl font-semibold">{item?.userName}</h2>
              <div className="flex items-center my-2">
                {/* <span className="mr-2 p-2 border-2 rounded-full min-h-10 min-w-10 flex justify-center items-center">{item?.review}</span> */}
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 ${
                      idx < item?.review ? "text-orange-500" : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p>{item?.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
