import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WishList() {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Retrieve favorites from local storage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);

    // Fetch products from the API
    axios
      .get("http://localhost:5000/addProducts")
      .then((res) => {
        // Filter products based on favorites
        const favoriteProducts = res.data.filter((item) =>
          storedFavorites.includes(item._id)
        );
        setProducts(favoriteProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = (id) => {
    // Remove the product ID from favorites
    const updatedFavorites = favorites.filter((favId) => favId !== id);
    
    // Update local storage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
    // Update state
    setFavorites(updatedFavorites);
    
    // Update products to reflect the deleted item
    setProducts(products.filter((item) => item._id !== id));
    window.location.reload()


  };

  console.log(products); // Log filtered favorite products

  return (
    <div className="my-10 lg:w-[90%] w-[95%] mx-auto">
      <h2 className="text-center text-2xl font-semibold text-tColor">
        WishList
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
            {
            products.length > 0 ? 
              products?.map((item, idx) => (
                <Table.Row key={idx} className="bg-white dark:border-gray-700 dark:bg-white">
                  <Table.Cell>
                    <img
                      className="w-16 min-w-10"
                      src={item?.uploadImages}
                      alt=""
                    />
                  </Table.Cell>
                  <Table.Cell className="min-w-32">
                    {item?.name}
                  </Table.Cell>
                  <Table.Cell className="min-w-32">{(item?.rPrice * (1 - item?.discount / 100)).toFixed(2)} TK</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/products/${item?._id}`}
                      className="py-2 px-4 bg-primary text-white rounded w-28  text-center block"
                    >
                      Order Now
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <button 
                      className="py-1 px-4 bg-red-600 text-white rounded min-w-20"
                      onClick={() => handleDelete(item._id)} // Call handleDelete on click
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
              : <h2 className="my-10 w-full text-center font-semibold text-red-500">Wishlist Not Available !!</h2>
            }
            
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
