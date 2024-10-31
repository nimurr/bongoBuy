import { useContext, useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { API } from "../../Api";

export default function ContactUs() {
  const { user } = useContext(AuthContext);
  const user2 = user;
  const api = API;
  
  const [settingInfo , setSettingInfo] = useState([])

  useEffect(()=> {
    axios.get(`${api}/site-settings`)
    .then( res => {
      if(res?.data) setSettingInfo(res?.data)
    })
  },[])

  console.log(settingInfo[0]?.email)


  const handleCustomerMessage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const user = user2?.email ? user2?.email : "";
    const formData = { name, email, phone, message, user };
    console.log(formData);
    await axios
      .post("http://localhost:5000/customer-message", formData)
      .then((res) => {
        if (res?.data) {
          toast.success("Message Send Successfully!", {
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
        form.reset()
      });
  };

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto">
       <ToastContainer />
      <div className="relative bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/previews/017/165/756/non_2x/transparent-background-abstract-background-free-png.png')] sm:h-[150px] flex items-center justify-center h-[20vh]">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5 my-10">
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaMapLocationDot /> Location
          </h2>
          <p className="mt-2">
            Office: House: {settingInfo[0]?.fullAddress} <br /> E-mail: {settingInfo[0]?.email} <br /> Hot Line:
            {settingInfo[0]?.phone}
          </p>
        </div>
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaPhone className="rotate-90" /> Phone
          </h2>
          <p className="mt-2"> Hot Line: {settingInfo[0]?.phone}</p>
        </div>
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MdEmail /> Email
          </h2>
          <p className="mt-2"> E-mail:  {settingInfo[0]?.email}</p>
        </div>
      </div>
      <div className="mb-10">
        <form
          onSubmit={handleCustomerMessage}
          className="md:w-[60%] w-full mx-auto"
          action=""
        >
          <div className="flex justify-between gap-2 mb-2">
            <input
              className="w-full border-[#eee] border-2 rounded-sm"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="w-full border-[#eee] border-2 rounded-sm"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <input
            className="w-full mb-2 border-[#eee] border-2 rounded-sm"
            type="number"
            name="phone"
            placeholder="Your Phone"
          />
          <textarea
            className="w-full mb-2 border-[#eee] border-2 rounded-sm"
            name="message"
            placeholder="Your Message"
            id=""
          ></textarea>
          <input
            className="w-full p-2 cursor-pointer rounded-sm text-white bg-primary inline-block"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
