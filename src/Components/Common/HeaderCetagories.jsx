import { Link } from "react-router-dom";

export default function HeaderCatagories() {
  return (
    <div className="bg-primary py-3 text-sm">
      <div className="lg:w-[90%] w-[95%] mx-auto">
        <ul className=" text-white flex justify-center gap-5">
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>TRACKSUIT</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>T-shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>Shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>Pant</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>Panjabi</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>Polo T-shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>Full Shirt</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>Gins Pant</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>Styles Panjabi</Link>
          <Link className="hover:underline duration-500 uppercase text-[17px]" to={'/'}>T-shirt</Link>
        </ul>
      </div>
    </div>
  );
}
