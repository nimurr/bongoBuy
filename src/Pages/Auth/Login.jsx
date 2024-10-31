import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Login() {
  const { loginWithGoogle, user , login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  const handleLoginWithEmailPass = (e) => {

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const formData = { password, email };
    login(email , password)
    .then(res => {
      navigate('/')
    })
    // console.log(formData);
  };

  const handleLoginGoogle = () => { 

    loginWithGoogle().then(res => {
      navigate('/')
    })

  };
  console.log(user);

  return (
    <div className="lg:w-[60%] w-[95%] mx-auto grid sm:grid-cols-2 items-center gap-10 my-10 bg-white ">
      <div className="sm:block hidden">
        <img
          className="w-full"
          src="https://res.cloudinary.com/nerob/image/upload/v1729098267/BongoBuy/vqk5rl1wnrc3yef2e1ai.png"
          alt=""
        />
      </div>
      <div className="bg-primary  h-full flex items-center justify-center border">
        <form onSubmit={handleLoginWithEmailPass} action="" className=" p-5 ">
          <input
            className="w-full mb-5 border-2 border-gray-200 rounded outline-none"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <input
            className="w-full mb-5 border-2 border-gray-200 rounded outline-none"
            type="password"
            name="password"
            required
            id=""
            placeholder="Your Password"
          />
          <input
            className="px-10 py-2  bg-blue-600 cursor-pointer w-full text-white font-semibold rounded"
            type="submit"
            value="Login"
          />
          <div className="my-3 text-white">
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
          <button
            type="button"
            onClick={handleLoginGoogle}
            className="p-2 w-full bg-gray-200 flex items-center gap-2 justify-center"
          >
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
