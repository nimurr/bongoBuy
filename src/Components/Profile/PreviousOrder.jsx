import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function PreviousOrder() {
  return (
    <div className="lg:p-0 p-5">
      <h2 className=" text-xl font-bold text-primary">Previous Order</h2>
      <div className="overflow-x-auto my-10">
        <Table className="dark:bg-white">
          <Table.Head className="dark:text-primary">
            <Table.HeadCell>Product Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y dark:bg-white">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-white">
              <Table.Cell>
                <img
                  className="w-20 min-w-20"
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
                <Link to={'/'} className="py-1 px-4 bg-primary text-white rounded min-w-28 text-center block">
                 View Details
                </Link>{" "}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}
