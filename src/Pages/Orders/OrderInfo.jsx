import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function OrderInfo() {
  const { id } = useParams(); // Get the order ID from the URL
  const [searchParams] = useSearchParams(); // Get the search parameters
  const discountPrice = searchParams.get("discountPrice"); // Access discountPrice
  const quantity = searchParams.get("quantity"); // Access quantity
  const selectedSize = searchParams.get("selectedSize"); // Access selectedSize

  const [product, setProduct] = useState({});
  const [deliveryCharge, setDeliveryCharge] = useState(0); // State for delivery charge

  console.log(Number(discountPrice) +
    (deliveryCharge ? deliveryCharge : 60))

  const { user } = useContext(AuthContext);
  // console.log(user?.email)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/addProducts/${id}`)
      .then((res) => setProduct(res?.data));
  }, [id]);

 


  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;

    const fullName = form.fullName.value;
    const number = form.number.value;
    const deliveryArea = form.deliveryArea.value; // Get delivery area
    const fullAddress = form.fullAddress.value;
    const productImages = product?.uploadImages[0] ;
    const productName = product?.name ;
    const productPrice = (Number(discountPrice * quantity) +
    (deliveryCharge ? deliveryCharge : 60));
    const productQuantity = quantity;
    const orderStatus = 'Pending';
    const productSize = selectedSize;
    const formData = {
      fullName,
      number,
      deliveryArea,
      fullAddress,
      productQuantity,
      productImages,
      productName,
      productPrice,
      productSize,
      orderStatus,
      email,
    };
    console.log(formData)

    try {
      await axios
        .post("http://localhost:5000/customer-orders", formData)
        .then((res) => {
          if (res?.data) {
            toast.success("Order Submitted Successfully!", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            form.reset();
            // navigate('/profile/current-order')
            setDeliveryCharge(0); // Reset delivery charge
          }
        });
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error(
        "There was an error submitting your order. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  // Function to handle delivery area change
  const handleAreaChange = (e) => {
    const selectedArea = e.target.value;
    if (selectedArea === "Inside Dhaka 60TK") {
      setDeliveryCharge(60); // Set delivery charge for Inside Dhaka
    } else if (selectedArea === "Outside Dhaka 120TK") {
      setDeliveryCharge(120); // Set delivery charge for Outside Dhaka
    } else {
      setDeliveryCharge(0); // Default or reset
    }
  };

  console.log(product?.discount);
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10">
      <ToastContainer />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-8 w-full bg-white rounded-md shadow-lg">
          {/* Order Form Section */}
          <div className="md:p-6 p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Please Order Now
            </h2>
            <form onSubmit={handleOrderSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Your Name"
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-primary"
                />
              </div>

              {/* Mobile Number */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  required
                  name="number"
                  placeholder="01xxxxxxxx"
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-primary"
                />
              </div>

              {/* Area Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Area
                </label>
                <select
                  required
                  name="deliveryArea"
                  onChange={handleAreaChange} // Call the handler on change
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-primary"
                >
                  <option disabled>--Select Your Area--</option>
                  <option>Inside Dhaka 60TK</option>
                  <option>Outside Dhaka 120TK</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Full Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full Address
                </label>
                <textarea
                  name="fullAddress"
                  required
                  placeholder="Village, union, thana, district"
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-primary"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-primary text-white rounded-md hover:bg-[#0eaf3e] focus:outline-none"
                >
                  Order Submit
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="md:p-6 p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Order Summary
            </h2>

            {/* Product Table */}
            <table className="min-w-full mb-4 text-left">
              <thead>
                <tr>
                  <th className="pb-3 text-sm font-medium text-gray-600">
                    Product
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-600">
                    Quantity
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-600">
                    {" "}
                    Size
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-600">
                    Regular Price
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-600">
                    Discount Price
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-t-2 border-b-2">
                  <td className="py-3 flex items-center gap-2">
                    <img
                      src={product?.uploadImages}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <span className="text-xs">{product?.name}</span>
                  </td>
                  <td>{quantity}</td>
                  <td>{selectedSize}</td>
                  <td className="p-2">{product?.rPrice * quantity} TK</td>
                  <td className="p-2">
                    {(Number(discountPrice * quantity) +
                    (deliveryCharge ? deliveryCharge : 60))}
                    TK
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Summary Calculation */}
            <div className="pt-4 text-sm text-gray-700">
              <p className="mb-2">
                Regular Price:{" "}
                <span className="float-right"> {product?.rPrice * quantity} TK</span>
              </p>
              <p className="mb-2">
                Discount :{" "}
                <span className="float-right">- {product?.discount} %</span>
              </p>
              <p className="mb-2">
                Delivery Charge:{" "}
                <span className="float-right">
                  + {deliveryCharge ? deliveryCharge : "60"} TK
                </span>
              </p>
              <hr className="my-2" />

              <p className="mb-2 font-semibold">
                Payable Amount:{" "}
                <span className="float-right">
                  ={" "}
                  {(Number(discountPrice * quantity) +
                    (deliveryCharge ? deliveryCharge : 60)) }{" "}
                  TK
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
