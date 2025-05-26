import { Carousel } from "flowbite-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function HeroSection() {
  const demoSliderImages = [
    "https://res.cloudinary.com/nerob/image/upload/v1748283532/BongoBuy/hzsetddwulmbqfarlkqe.png",
    "https://res.cloudinary.com/nerob/image/upload/v1748283528/BongoBuy/c7urhkcmfxaiovpjlowg.png",
    "https://res.cloudinary.com/nerob/image/upload/v1748283534/BongoBuy/di3vcvybepoitn6ir9yc.png",
  ];

  return (
    <div className="">
      <div className="h-32 sm:h-64 xl:h-80 2xl:h-96 my-5">
        <Carousel
          indicators={false}
          leftControl={<HiChevronLeft className="text-primary text-4xl" />}
          rightControl={<HiChevronRight className="text-primary text-4xl" />}
          className=""
        >
          {demoSliderImages.map((img, idx) => (
            <img
              key={idx}
              loading="lazy"
              className="rounded-none w-full h-full"
              src={img}
              alt={`Demo Slide ${idx + 1}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
