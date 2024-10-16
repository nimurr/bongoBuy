import { BiSupport } from "react-icons/bi";
import { FaCreditCard, FaThumbsUp, FaTruck } from "react-icons/fa";

export default function SupportSection() {
  return (
    <div className="md:my-20 my-10 grid xl:grid-cols-4 md:grid-cols-2 gap-10">
      <div className="text-center flex flex-col items-center">
        <div
          className="w-20 h-20 group bg-primary cursor-pointer border-4 border-[#CED4DA] rounded-full text-white flex justify-center items-center
        "
        >
          <FaThumbsUp className="text-3xl duration-300 group-hover:scale-x-[-1]" />
        </div>
        <h2 className="text-2xl font-semibold text-tColor mt-5">High-quality Goods</h2>
        <p>Enjoy top quality items for less</p>
      </div>
      <div className="text-center flex flex-col items-center ">
        <div
          className="w-20 h-20 bg-primary border-4 group cursor-pointer border-[#CED4DA] rounded-full text-white flex justify-center items-center
        "
        >
          <BiSupport className="text-3xl  duration-300 group-hover:scale-x-[-1]" />
        </div>
        <h2 className="text-2xl font-semibold text-tColor mt-5">24/7 Live chat</h2>
        <p>Get instant assistance whenever you need it</p>
      </div>
      <div className="text-center flex flex-col items-center ">
        <div
          className="w-20 h-20 bg-primary border-4 group cursor-pointer border-[#CED4DA] rounded-full text-white flex justify-center items-center
        "
        >
          <FaTruck port className="text-3xl  duration-300 group-hover:scale-x-[-1]" />
        </div>
        <h2 className="text-2xl font-semibold text-tColor mt-5">Express Shipping</h2>
        <p>Fast & reliable delivery options</p>
      </div>
      <div className="text-center flex flex-col items-center ">
        <div
          className="w-20 h-20 bg-primary border-4 group cursor-pointer border-[#CED4DA] rounded-full text-white flex justify-center items-center
        "
        >
          <FaCreditCard port className="text-3xl  duration-300 group-hover:scale-x-[-1]"   />
        </div>
        <h2 className="text-2xl font-semibold text-tColor mt-5">Secure Payment</h2>
        <p>Multiple safe payment methods</p>
      </div>
    </div>
  );
}
