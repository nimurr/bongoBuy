import { Link } from "react-router-dom";

export default function HeaderCatagories() {
  return (
    <div className="bg-primary py-3 text-sm">
      <div className="lg:w-[90%] w-[95%] mx-auto">
        <ul className=" text-white flex justify-center gap-5">
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>TRACKSUIT</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>T-shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>Shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>Pant</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>Panjabi</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>Polo T-shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>Full Shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>Gins Pant</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>Styles Panjabi</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/categories/:id'}>T-shirt</Link>
        </ul>
      </div>
    </div>
  );
}
