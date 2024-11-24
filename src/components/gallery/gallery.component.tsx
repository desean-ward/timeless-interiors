import React from "react";
import {
  GalleryContainer,
  GalleryWrapper,
  ImagesContainer,
} from "./gallery.styles";
import { ImageType } from "@/sanity/queries/page";
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

type GalleryProps = {
  galleryData: {
    imageUrls: Array<{
      url: string;
    }>;
  };
};

const GalleryComp = ({ galleryData }: GalleryProps) => {
  return (
    <GalleryWrapper data-bg-color='bg-[#0A0A0A]'>
      <GalleryContainer>
        <h1 className='text-6xl text-[tan] font-bebas'>
          Gallery
        </h1>

        <div className='text-base- font-bold italic mb-8'>
          Our entire works are showcased here.
        </div>

        <ImagesContainer>
          {/* Images */}
          {galleryData.imageUrls.map((image: ImageType, index: number) => {
            return (
              <div key={index} className={randomColumns()}>
                <Image
                  src={image.url}
                  alt='Gallery Image'
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

export default GalleryComp;
