
export default function OrderInfo() {

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto my-10">
      <div className=" flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-8 w-full bg-white rounded-md shadow-lg">
          {/* Order Form Section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Please Order Now
            </h2>
            <form>
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
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
                  placeholder="01xxxxxxxx"
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-primary"
                />
              </div>

              {/* Area Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Area
                </label>
                <select className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-primary">
                  <option>--Select Your Area--</option>
                  <option>In Side Dhaka 60TK</option> 
                  <option>Out Side Dhaka 120TK</option> 
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Full Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Full Address
                </label>
                <textarea
                  placeholder="Village, union, thana, district"
                  className="mt-1 block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-primary"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-[#0eaf3e] focus:outline-none"
                >
                  Order Submit
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="p-6">
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
                    Price
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-600">
                    Total Price
                  </th>
                  <th className="pb-3 text-sm font-medium text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-t-2  border-b-2">
                  <td className="py-3 flex items-center gap-2">
                    <img
                      src="https://via.placeholder.com/50" // Placeholder image
                      alt="Product"
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <span className="text-xs">
                      Men{`'`}s Camo Design Winter Set
                    </span>
                  </td>
                  <td className="text-center">
                    2
                  </td>
                  <td className="p-2">850 TK</td>
                  <td className="p-2">850 TK</td>
                  <td className="p-2">btn</td>
                </tr>
              </tbody>
            </table>

            {/* Summary Calculation */}
            <div className=" pt-4 text-sm text-gray-700">
              <p className="mb-2">
                Sub Total: <span className="float-right">850.00 TK</span>
              </p>
              <p className="mb-2">
                Delivery Charge: <span className="float-right">0 TK</span>
              </p>
              <p className="mb-2">
                Discount Amount: <span className="float-right">0 TK</span>
              </p>
              <p className="mb-2 font-semibold">
                Payable Amount: <span className="float-right">850 TK</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
