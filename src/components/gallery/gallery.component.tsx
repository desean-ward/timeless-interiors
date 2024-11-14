import React from "react";
import {
  GalleryContainer,
  GalleryWrapper,
  ImagesContainer,
} from "./gallery.styles";
import { getGalleryPage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";

export const revalidate = 0;

// Grid Layout for images
const randomColumns = () => {
  const columnSize = [
    "sm:row-span-1",
    "sm:col-span row-span-1",
    "col-span-1 sm:row-span-2",
  ];

  const randomIndex = Math.floor(Math.random() * columnSize.length);

  return columnSize[randomIndex];
};

const Gallery = async () => {
  const data = await getGalleryPage();
  console.log("GALLERY DATA: ", data);
  const { Gallery } = data;

  return (
    <GalleryWrapper>
      <GalleryContainer>
        <h1 className='text-6xl font-bebas'>Gallery</h1>

        <div className='text-base- font-bold italic mb-8'>
          Our entire works are showcased here.
        </div>

        <ImagesContainer>
          {/* Images */}
          {Gallery.imageUrls.map((image: ImageType, index: number) => {
            return (
              <div key={index} className={randomColumns()}>
                <Image
                  src={image.url}
                  alt=''
                  width={420}
                  height={240}
                  className='size-full object-cover rounded-lg'
                />
              </div>
            );
          })}
        </ImagesContainer>
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default Gallery;
