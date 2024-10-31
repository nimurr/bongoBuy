import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddToCart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // console.log(products)

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    // Fetch products from the API
    axios
      .get("http://localhost:5000/addProducts")
      .then((res) => {
        // Filter products based on cart items
        const cartProducts = res.data.filter((item) =>
          storedCart.includes(item._id)
        );
        setProducts(cartProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = (id) => {
    // Remove item from cart
    const updatedCart = cart.filter((cartId) => cartId !== id);
    
    // Update local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Update state
    setCart(updatedCart);
    setProducts(products.filter((item) => item._id !== id));
    
    // Display a notification
    toast.success("Item removed from cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    window.location.reload();
  };

  return (
    <div className="my-10 lg:w-[90%] w-[95%] mx-auto">
      <h2 className="text-center text-2xl font-semibold text-tColor">
        Add To Cart
      </h2>
      <div className="overflow-x-auto my-10">
        <Table className="dark:bg-white">
          <Table.Head className="dark:text-primary">
            <Table.HeadCell>Product Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Discount Price</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            <Table.HeadCell>Remove</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y dark:bg-white">
            {products.length > 0 ? (
              products.map((item, idx) => (
                <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-white">
                  <Table.Cell>
                    <img
                      className="w-16 min-w-10"
                      src={item?.uploadImages}
                      alt={item?.name}
                    />
                  </Table.Cell>
                  <Table.Cell className="min-w-32">{item?.name}</Table.Cell>
                  <Table.Cell className="min-w-32">{(item?.rPrice * (1 - item?.discount / 100)).toFixed(2)} TK</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/products/${item?._id}`}
                      className="py-2 px-4 bg-primary text-white rounded w-28 text-center block"
                    >
                      Order Now
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      className="py-1 px-4 bg-red-600 text-white rounded min-w-20"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <h2 className="my-10 w-full text-center font-semibold text-red-500">
                Cart is Empty!
              </h2>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
