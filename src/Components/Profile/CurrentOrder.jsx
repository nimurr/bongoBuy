import axios from "axios";
import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function CurrentOrder() {
  const { user } = useContext(AuthContext);
  const [currentOrder, setCurrentOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/customer-orders").then((res) => {
      const userOrders = res.data.filter((item) => item?.email === user?.email);
      setCurrentOrder(userOrders.reverse()); // Apply reverse here
    });
  }, [user?.email]);

  console.log(currentOrder);

  return (
    <div className="lg:p-0 p-5">
      <h2 className="text-xl font-bold text-primary">Current Order</h2>
      <div className="overflow-x-auto my-10">
        <Table className="dark:bg-white">
          <Table.Head className="dark:text-primary">
            <Table.HeadCell>SL</Table.HeadCell>
            <Table.HeadCell>Product Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell className="text-center">
              Products Delivery
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y dark:bg-white">
            {currentOrder.map((item, idx) => (
              <Table.Row
                key={idx}
                className="bg-white dark:border-gray-700 dark:bg-white"
              >
                <Table.Cell className="min-w-32">{idx + 1}</Table.Cell>
                <Table.Cell>
                  <img
                    className="w-20 min-w-20"
                    src={item?.productImages}
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell className="min-w-32">
                  {item?.productName}
                </Table.Cell>
                <Table.Cell className="min-w-32">
                  {item?.productPrice } TK
                </Table.Cell>
                {/* (deliveryCharge ? deliveryCharge : 60)) TK</Table.Cell> */}

                <Table.Cell className="min-w-32">
                  {item?.productQuantity}
                </Table.Cell>
                <Table.Cell>
                  <div
                    className={`
                      ${item?.orderStatus === "Pending" && "text-pink-500"}
                      ${item?.orderStatus === "Processing" && "text-yellow-500"}
                      ${item?.orderStatus === "Delivery" && "text-blue-500"}
                      ${item?.orderStatus === "Completed" && "text-green-500"}
                      ${item?.orderStatus === "Cancel" && "text-red-500"}
                      py-1 px-4 text-primary rounded min-w-28 text-center block`}
                  >
                    {item?.orderStatus}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
