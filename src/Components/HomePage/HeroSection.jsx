import axios from "axios";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function HeroSection() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/slider-images").then((res) => {
      setSlider(res?.data);
    });
  }, []);

  // console.log(slider[0]?.images);

  return (
    <div className="">
      <div className="h-32 sm:h-64 xl:h-80 2xl:h-96 my-5">
        <Carousel
          indicators={false} // Disable pagination
          leftControl={
            <HiChevronLeft className="text-primary text-4xl" /> // Orange left arrow
          }
          rightControl={
            <HiChevronRight className="text-primary text-4xl" /> // Orange right arrow
          }
          className=""
        >
          {slider[0]?.images.map((img, idx) => (
            <img
              key={idx}
              
              loading="lazy"
              className="rounded-none w-full h-full" // No border radius
              src={img}
              alt="..."
            />
          ))} 
        </Carousel>
      </div>
    </div>
  );
}
