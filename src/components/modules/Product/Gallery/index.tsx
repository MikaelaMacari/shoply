"use client";
import Image from "next/image";

type GalleryPropsType = {
  images: Array<string>;
  setImageSrc: any;
};
const Gallery = ({ images, setImageSrc }: GalleryPropsType) => {
  const handleClick = (image: string) => {
    setImageSrc(image);
  };

  return (
    <div className="flex justify-between flex-wrap">
      {images.map((image: string, index: number) => (
        <Image
          key={index}
          src={image}
          alt={"image"}
          width={95}
          height={85}
          onClick={() => handleClick(image)}
          className="rounded-sm hover:cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Gallery;
