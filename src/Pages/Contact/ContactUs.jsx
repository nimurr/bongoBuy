import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto">
      <h2 className="text-center font-semibold my-10 text-xl text-tColor">
        Contact us
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5 my-10">
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaMapLocationDot /> Location
          </h2>
          <p className="mt-2">
            Office: House: 02, Lane: 11, Block: A, Benarashi Polly, Section-10,
            Mirpur, Dhaka. <br /> E-mail: support@mohasagor.com <br /> Hot Line:
            09636-203040/01635-212121
          </p>
        </div>
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaPhone className="rotate-90" /> Phone
          </h2>
          <p className="mt-2"> Hot Line: 09636-203040/01635-212121</p>
        </div>
        <div className="p-5 border rounded-md bg-white">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MdEmail /> Email
          </h2>
          <p className="mt-2"> E-mail: support@mohasagor.com</p>
        </div>
      </div>
      <div className="mb-10">
        <form className="md:w-[60%] w-full mx-auto" action="">
          <div className="flex justify-between gap-2 mb-2">
            <input className="w-full border-[#eee] border-2 rounded-sm" type="text" name="name" placeholder="Your Name" />
            <input className="w-full border-[#eee] border-2 rounded-sm" type="email" name="email" placeholder="Your Email" />
          </div>
          <input className="w-full mb-2 border-[#eee] border-2 rounded-sm" type="number" name="phone" placeholder="Your Phone" />
          <textarea className="w-full mb-2 border-[#eee] border-2 rounded-sm" name="message" placeholder="Your Message" id=""></textarea>
          <input className="w-full p-2 rounded-sm text-white bg-primary inline-block" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
