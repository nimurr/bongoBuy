import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="lg:w-[60%] w-[95%] mx-auto grid grid-cols-2 items-center gap-10 my-10 bg-white ">
      <div className="">
        <img
          className="w-full"
          src="https://res.cloudinary.com/nerob/image/upload/v1729098267/BongoBuy/vqk5rl1wnrc3yef2e1ai.png"
          alt=""
        />
      </div>
      <div className="bg-primary  h-full flex items-center justify-center border"> 
        <form action="" className=" p-5 ">
          <input
            className="w-full mb-5 border-2 border-gray-200 rounded outline-none"
            type="email"
            name="email"
            id=""
            placeholder="Your Name"
          />
          <input
            className="w-full mb-5 border-2 border-gray-200 rounded outline-none"
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
          />
          <input
            className="px-10 py-2  bg-blue-600 cursor-pointer w-full text-white font-semibold rounded"
            type="submit"
            value="Submit"
          />
          <div className="my-3">
            <p>
              Are You new bongobuy.com ? please{" "}
              <Link className="text-blue-600 font-semibold" to={"/register"}>
                Register
              </Link>
            </p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="h-[1px] bg-gray-300 inline-block w-[45%]"></span>{" "}
            or{" "}
            <span className="h-[1px] bg-gray-300 inline-block w-[45%]"></span>
          </div>
          <button className="p-2 w-full bg-gray-200 flex items-center gap-2 justify-center">
            Login With Google{" "}
            <img
              className="w-6"
              src="https://img.icons8.com/?size=256&id=V5cGWnc9R4xj&format=png"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
}
