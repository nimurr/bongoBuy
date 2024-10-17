import { BsCartCheckFill, BsCartPlusFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TbMessageCircleStar } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10 lg:grid grid-cols-4 gap-10">
      <div className="col-span-1 bg-gray-50 rounded-sm lg:py-20 ">
        <ul className="flex flex-col gap-2 capitalize">
          <NavLink
            to="/profile/profiledetails"
            className={({ isActive }) =>
              `flex items-center lg:text-xl font-semibold py-2 px-5 ${
                isActive ? "text-white bg-primary" : ""
              }`
            }
          >
            <CgProfile className="inline mr-2 lg:text-2xl" />
            My Profile
          </NavLink>
          <NavLink
            to="/profile/current-order"
            className={({ isActive }) =>
              `flex items-center lg:
lg:text-xl font-semibold py-2 px-5 ${isActive ? "text-white bg-primary" : ""}`
            }
          >
            <BsCartPlusFill
              className="inline mr-2 lg:
lg:text-2xl"
            />
            Current Order
          </NavLink>
          <NavLink
            to="/profile/previous-order"
            className={({ isActive }) =>
              `flex items-center lg:
lg:text-xl font-semibold py-2 px-5 ${isActive ? "text-white bg-primary" : ""}`
            }
          >
            <BsCartCheckFill
              className="inline mr-2 lg:
lg:text-2xl"
            />
            Previous Order
          </NavLink>
          <NavLink
            to="/profile/my-reviews"
            className={({ isActive }) =>
              `flex items-center lg:
lg:text-xl font-semibold py-2 px-5 ${isActive ? "text-white bg-primary" : ""}`
            }
          >
            <TbMessageCircleStar
              className="inline mr-2 lg:
lg:text-2xl"
            />
            My Reviews
          </NavLink>
        </ul>
      </div>

      <div className="col-span-3 bg-gray-50 lg:p-10 py-5">
        <Outlet />
      </div>
    </div>
  );
}
