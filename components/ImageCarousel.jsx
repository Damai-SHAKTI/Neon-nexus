import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse sm:flex-row sm:flex-nowrap gap-4 justify-center">
      <div className="h-20 sm:h-[450px] no-scrollbar overflow-scroll flex flex-row sm:flex-col gap-4">
        {images.map((src, index) => (
          <img
            alt=""
            src={src}
            key={index}
            onClick={() => setSelectedImage(src)}
            className={
              "rounded-xl min-w-[100px] max-w-[100px] min-h-[80px] max-h-[80px] object-cover cursor-pointer border-2 hover:border-orange-400" +
              (selectedImage == src
                ? " border-orange-400"
                : " border-transparent")
            }
          />
        ))}
      </div>
      <div className="w-full sm:w-[600px]">
        <img
          alt=""
          src={selectedImage}
          className="mx-auto rounded-xl object-contain max-w-screen sm:max-w-[600px] max-h-[280px] sm:max-h-[450px]"
        />
      </div>
    </div>
  );
}
