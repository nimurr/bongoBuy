import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Register() {

  const {register} = useContext(AuthContext);



  const handleRegisterWithEmailPass = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value ;
    const email = form.email.value ;
    const password = form.password.value ;
    const formData = {password , email , name};

    register(email , password)
    .then(res => {
      if(res ){
        alert("Register Successfully Please login  !!")
         
      }
    })


    console.log(formData)
  }

  return (
    <div>
      <div className="lg:w-[40%] lg:mx-auto my-10 mx-5 bg-white ">
       
        <div className="bg-primary  h-full flex items-center justify-center border">
          <form onSubmit={handleRegisterWithEmailPass} action="" className=" p-5 ">
            <input
              className="w-full mb-5 border-2 border-gray-200 rounded outline-none"
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
              required
            /> 
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
              id=""
              placeholder="Your Password"
              required
            />
            <input
              className="px-10 py-2  bg-blue-600 cursor-pointer w-full text-white font-semibold rounded"
              type="submit"
              value="Register"
            />
            <div className="my-3 text-white">
              <p>
                Have a Account bongobuy.com ? please{" "}
                <Link className="text-blue-600 font-semibold" to={"/login"}>
                  Login
                </Link>
              </p>
            </div> 
          </form>
        </div>
      </div>
    </div>
  );
}
