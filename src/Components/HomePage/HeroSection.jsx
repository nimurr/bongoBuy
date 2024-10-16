import { Carousel } from "flowbite-react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function HeroSection() {
  return (
    <div className="">
      <div className="h-32 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          indicators={false}  // Disable pagination
          leftControl={
            <HiChevronLeft className="text-primary text-4xl" />  // Orange left arrow
          }
          rightControl={
            <HiChevronRight className="text-primary text-4xl" /> // Orange right arrow
          }
          className=""
        >
          <img
           loading="lazy"
            className="rounded-none" // No border radius
            src="https://mohasagor.com/public/storage/images/slider/t29nsnR5T4ZrOm9oPcKIzd5mx8FYaXg6u2jd2ycW.png"
            alt="..."
          />
          <img
           loading="lazy"
            className="rounded-none" // No border radius
            src="https://mohasagor.com/public/storage/images/slider/XH4YGr8BIezjsrElDqPpsP7CSV4WkybRHvzjk0GI.png"
            alt="..."
          />
          <img
           loading="lazy"
            className="rounded-none" // No border radius
            src="https://mohasagor.com/public/storage/images/slider/t29nsnR5T4ZrOm9oPcKIzd5mx8FYaXg6u2jd2ycW.png"
            alt="..."
          />
          <img
           loading="lazy"
            className="rounded-none" // No border radius
            src="https://mohasagor.com/public/storage/images/slider/XH4YGr8BIezjsrElDqPpsP7CSV4WkybRHvzjk0GI.png"
            alt="..."
          />
          <img
           loading="lazy"
            className="rounded-none" // No border radius
            src="https://mohasagor.com/public/storage/images/slider/t29nsnR5T4ZrOm9oPcKIzd5mx8FYaXg6u2jd2ycW.png"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
