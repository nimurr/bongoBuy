import { BiSupport } from "react-icons/bi";
import { FaCheckCircle, FaShopify } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { VscTerminalTmux } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/previews/017/165/756/non_2x/transparent-background-abstract-background-free-png.png')] sm:h-[150px] flex items-center justify-center h-[20vh]">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
      </div>

      {/* Know Our Store Section */}
      <div className=" my-10 sm:my-16 lg:grid lg:grid-cols-3 lg:gap-10 items-center">
        <div className="relative md:col-span-1 md:mb-0 mb-5">
          <img
            src="https://res.cloudinary.com/nerob/image/upload/v1729095279/BongoBuy/jixfq04cboiouhzap1lp.jpg"
            alt="Store"
            className="w-full h-full rounded-md shadow-lg"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Know Our Store</h2>
          <p className="text-gray-700 mb-6">
            Welcome to our online fashion store, where style meets convenience.
            Explore the latest trends, timeless classics, and everything in
            between. Elevate your wardrobe with our curated collection of
            clothing, accessories, and more.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">Fashion industries leading</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">Express your unique style</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">High-quality products</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">Affordable pricing</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">
                Sustainable and eco-friendly practices
              </span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">Wide range of sizes and styles</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">Customer satisfaction guarantee</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-primary mr-2 text-xl" />
              <span className="text-lg">Fast and reliable shipping</span>
            </li>
          </ul>
          <Link to={'/products'} className="mt-6 inline-block bg-primary text-white py-3 px-6 rounded hover:bg-[#0da83b]">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className=" py-16">
        <div className=" text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Online Store
          </h2>
          <p className="text-gray-700 md:w-[60%] mx-auto">
            We believe that winter fashion should be both functional and
            fabulous. Our Winter Fashion Collection reflects our commitment to
            quality, comfort, and style. Embrace the season with confidence.
          </p>
        </div>

        <div className=" grid lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <GoVerified className="" />
              {/* Replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              Our products are carefully curated for quality and durability,
              ensuring that you get the best value for your money.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <BiSupport className="" />
              {/* Replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Exceptional Customer Service
            </h3>
            <p className="text-gray-600">
              We prioritize your satisfaction. Our responsive support team is
              here to assist you every step of the way.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <TbTruckDelivery className="" />
              {/* Replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Fast and Secure Shipping
            </h3>
            <p className="text-gray-600">
              We offer reliable shipping options, delivering your fashion finds
              safely and swiftly to your doorstep.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <FaShopify className="" />
              {/* Replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Luxury</h3>
            <p className="text-gray-600">
              Discover affordable fashion that doesn’t compromise on style. Our
              competitive prices mean you can look your best.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <GrAnnounce className="" />
              {/* Replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Regular Promotions</h3>
            <p className="text-gray-600">
              Keep an eye out for our exclusive deals and promotions, allowing
              you to save even more on your favorite fashion pieces.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <VscTerminalTmux className="" />
              {/* Replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              User-friendly Experience
            </h3>
            <p className="text-gray-600">
              Our website is designed with you in mind. Enjoy a seamless and
              intuitive shopping experience from start to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
