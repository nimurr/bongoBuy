import { FaHandPointRight, FaRegHeart } from "react-icons/fa";
import HeroSection from "../../Components/HomePage/HeroSection";
import NewProducts from "../../Components/HomePage/NewProducts";
import SupportSection from "../../Components/HomePage/SupportSection";
import CatagoriesItem from "./../../Components/HomePage/CatagoriesItem";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto">
      <HeroSection />
      <CatagoriesItem />
      {/* Change 'props' to 'data' */}
      <NewProducts data={"New Arrival Products"} />
      <NewProducts data={"Top Selling Products"} />

      {[...Array(3)].map((_, idx) => (
      <div key={idx} className="my-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-tColor">TRACKSUIT {++idx}</h2>
          <Link to={'/categories/:id'} className="bg-primary px-5 py-1 text-white rounded-md flex items-center gap-2">View All <FaHandPointRight /></Link>
        </div>
        <hr className="h-[1px] bg-gray-300 border-none" />
        <br />
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-2">
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className="w-full h-auto p-2 rounded-md bg-white   text-left group"
            >
              <div className="relative">
                <Link to={"/products/:id"} className="">
                  <img
                   loading="lazy"
                    className="w-full h-auto object-cover rounded-t-md"
                    src="https://mohasagor.com/public/storage/images/product_thumbnail_img/thumbnail_1728107065_4046.jpg"
                    alt="Product Thumbnail"
                  />
                </Link>
                <span className="absolute top-2 left-0 bg-primary text-sm text-white px-2 rounded-tr-lg rounded-br-lg">
                  0%
                </span>
                <div className="mt-2">
                  {/* Ensure text is visible */}
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
                    <FaRegHeart className="text-primary cursor-pointer text-2xl hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       ))}

      <div className="md:block hidden">
        <SupportSection></SupportSection>
      </div>
    </div>
  );
}
