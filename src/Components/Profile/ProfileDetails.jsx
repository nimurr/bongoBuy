import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function ProfileDetails() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/userInfo`).then((res) => {
      setUserInfo(res?.data);
    });
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const formData = { name, email, phone, address };

    if (userInfo.find((e) => e?.email == email)) {
      return toast.error("User Already Available !!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        // Check if the new email is already associated with another account

        // If the email is not used by another account, proceed with updating the profile
        await axios.post("http://localhost:5000/userInfo", formData);

        toast.success("Profile updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred while updating your profile.");
      }
    }
  };



  return (
    <div>
      <ToastContainer />

      <div>
        <form onSubmit={handleUpdateProfile}>
          <label htmlFor="">
            <span>Your Name</span>
            <input
              name="name"
              className="w-full border-2 border-[#cecece] mt-2 rounded-md"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
            />
          </label>
          <label className="block mt-5" htmlFor="">
            <span>Your Email</span>
            <input
              name="email"
              className="w-full border-2 border-[#cecece] mt-2 rounded-md"
              type="text"
              defaultValue={user?.email}
              placeholder="Your Email"
            />
          </label>
          <label className="block mt-5" htmlFor="">
            <span>Your Phone</span>
            <input
              name="phone"
              className="w-full border-2 border-[#cecece] mt-2 rounded-md"
              type="text"
              placeholder="Your Phone"
            />
          </label>
          <label className="block mt-5" htmlFor="">
            <span>Your Address</span>
            <input
              name="address"
              className="w-full border-2 border-[#cecece] mt-2 rounded-md"
              type="text"
              placeholder="Your Address"
            />
          </label>
          <button className="p-2 w-full mt-5 bg-primary text-white rounded font-semibold">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
