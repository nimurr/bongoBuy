import { FaHeadset, FaInfo } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

export default function HeaderTop() {
  const { user } = useContext(AuthContext);

  return (
    <div className=" border-b">
      <div className="flex sm:justify-between justify-center lg:w-[90%] w-[95%] mx-auto py-2">
        <div className="sm:block hidden">
          <Link to={"/"} className="font-semibold text-primary">
            BongoBuy.com
          </Link>
        </div>
        <div>
          <ul className="flex sm:justify-between justify-center gap-5 text-xs items-center font-bold ">
            {/* <Link className="flex items-center gap-1" to={"/"}>
              <FaLocationDot className="sm:text-lg text-primary" /> Order Tracking{" "}
            </Link> */}
            <Link className="flex items-center gap-1" to={"/about-us"}>
              <FaInfo className="sm:text-lg text-primary" /> About
            </Link>
            <Link className="flex items-center gap-1" to={"/contact-us"}>
              <FaHeadset className="sm:text-lg text-primary" /> Contact{" "}
            </Link>
            {!user ? (
              <Link
                className="bg-primary sm:block hidden py-1 text-sm px-5 rounded text-white"
                to={"/login"}
              >
                Login
              </Link>
            ) : (
              <Link
                className="bg-primary sm:block hidden py-1 text-sm px-5 rounded text-white"
                to={"/profile"}
              >
                Profile
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
