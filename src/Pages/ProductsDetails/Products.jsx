import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10 ">
      <div className="mb-5 text-2xl font-semibold text-tColor">T-shirt Catagories</div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-5">
        {[...Array(9)].map((_, idx) => (
          <div className="bg-white w-full relative  p-2  rounded-md" key={idx}>
            <Link to={"/products/:id"} className="">
              <img
                className="w-full h-auto object-cover rounded-t-md"
                src="https://mohasagor.com/public/storage/images/product_thumbnail_img/thumbnail_1728107065_4046.jpg"
                alt="Product Thumbnail"
              />
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
                  <Link to={'/products/:id'} className="px-6 py-[3px] rounded-br-[20px] border-primary border-2 text-primary text-sm">
                    Order Now
                  </Link>
                  <FaRegHeart className="text-primary text-2xl hover:scale-x-110 duration-300" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
