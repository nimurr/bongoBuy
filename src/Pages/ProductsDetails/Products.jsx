import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

/* ---------- DEMO STATIC DATA ---------- */
const demoProducts = [
  {
    _id: "1",
    name: "Wireless Headphone",
    category: "electronics",
    rPrice: 3000,
    discount: 10,
    uploadImages: "https://bangladeshbiponee.com/wp-content/uploads/2022/09/Half-sleve-t-shirt-8-450x450.jpg",
  },
  {
    _id: "2",
    name: "Smart Watch",
    category: "electronics",
    rPrice: 2500,
    discount: 15,
    uploadImages: "https://bangladeshbiponee.com/wp-content/uploads/2022/09/Half-sleve-t-shirt-8-450x450.jpg",
  },
  {
    _id: "3",
    name: "Men T-Shirt",
    category: "fashion",
    rPrice: 800,
    discount: 20,
    uploadImages: "https://bangladeshbiponee.com/wp-content/uploads/2022/09/Half-sleve-t-shirt-8-450x450.jpg",
  },
  {
    _id: "4",
    name: "Sneakers",
    category: "fashion",
    rPrice: 3500,
    discount: 25,
    uploadImages: "https://bangladeshbiponee.com/wp-content/uploads/2022/09/Half-sleve-t-shirt-8-450x450.jpg",
  },
  {
    _id: "5",
    name: "Rice Cooker",
    category: "home",
    rPrice: 4200,
    discount: 12,
    uploadImages: "https://bangladeshbiponee.com/wp-content/uploads/2022/09/Half-sleve-t-shirt-8-450x450.jpg",
  },
];

export default function Products() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  /* ---------- FILTER BY CATEGORY ---------- */
  useEffect(() => {
    const filtered = demoProducts.filter(
      (pro) => pro.category === id
    );
    setItem(filtered);
  }, [id]);

  /* ---------- FAVORITES ---------- */
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleFavoriteClick = (productId) => {
    let updatedFavorites;

    if (favorites.includes(productId)) {
      updatedFavorites = favorites.filter((id) => id !== productId);
      toast.success("Removed from wishlist!");
    } else {
      updatedFavorites = [...favorites, productId];
      toast.success("Added to wishlist!");
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10">
      <ToastContainer />

      <h2 className="mb-5 text-2xl font-semibold text-tColor capitalize">
        {id} Categories
      </h2>

      <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-2">
        {demoProducts?.map((item) => (
          <div
            key={item._id}
            className="p-2 rounded-md bg-white group"
          >
            <div className="relative">
              <Link to={`/products/${item._id}`}>
                <img
                  className="w-full rounded-md"
                  src={item.uploadImages}
                  alt={item.name}
                />
              </Link>

              <span className="absolute top-2 left-0 bg-primary text-sm text-white px-2 rounded-tr-lg rounded-br-lg">
                {item.discount}%
              </span>
            </div>

            <h2 className="mt-2 text-sm font-semibold group-hover:text-primary">
              {item.name}
            </h2>

            <h3 className="text-sm font-semibold">
              {(item.rPrice * (1 - item.discount / 100)).toFixed(2)} TK
              <del className="ml-2 text-gray-400 font-normal">
                {item.rPrice} TK
              </del>
            </h3>

            <div className="flex justify-between items-center mt-2">
              <Link
                to={`/products/${item._id}`}
                className="px-5 py-[3px] border-2 border-primary text-primary text-sm rounded-br-[20px]"
              >
                Order Now
              </Link>

              <FaRegHeart
                onClick={() => handleFavoriteClick(item._id)}
                className={`cursor-pointer text-2xl ${
                  favorites.includes(item._id)
                    ? "text-red-500"
                    : "text-primary"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
