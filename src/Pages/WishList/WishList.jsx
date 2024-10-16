import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function WishList() {
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
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
            <Table.HeadCell>Remove</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y dark:bg-white">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-white">
              <Table.Cell>
                <img
                  className="w-16 min-w-10"
                  src="https://mohasagor.com/public/storage/images/product_thumbnail_img/thumbnail_1717392466_1747.jpg"
                  alt=""
                />
              </Table.Cell>
              <Table.Cell className="min-w-32">
                T-shirt | Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Deleniti .
              </Table.Cell>
              <Table.Cell className="min-w-32">690 TK</Table.Cell>
              <Table.Cell>
                {" "}
                <Link to={'/products/:id'} className="py-1 px-4 bg-primary text-white rounded min-w-28 text-center block">
                 Order Now
                </Link>{" "}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <button className="py-1 px-4 bg-red-600 text-white rounded min-w-20">
                  Delete
                </button>{" "}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
