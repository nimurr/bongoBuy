import { Link, NavLink } from "react-router-dom";
import { API } from "../../Api";
import { useEffect, useState } from "react";

export default function HeaderCatagories() {
  const api = API;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${api}/all-categories`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategories(data); // Set the fetched data into the categories state
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // console.log(categories);

  return (
    <div className="bg-primary py-3 text-sm">
      <div className="lg:w-[90%] w-[95%] mx-auto">
        <ul className=" text-white flex justify-center gap-10">
          {/* <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            TRACKSUIT
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            T-shirt
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            Shirt
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            Pant
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            Panjabi
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            Polo T-shirt
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            Full Shirt
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            Gins Pant
          </Link>
          <Link
            className="hover:underline duration-500 uppercase text-[17px]"
            to={"/categories/:id"}
          >
            Styles Panjabi
          </Link> */}

          {categories?.map((item, id) => (
            <a
              key={id}
              className="hover:underline duration-500 uppercase text-[17px]"
              href={`/categories/${item?.categoryName}`}
            >
              {item?.categoryName}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
