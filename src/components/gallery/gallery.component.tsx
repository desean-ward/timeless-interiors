'use client'
import React from "react";
import {
  GalleryContainer,
  GalleryWrapper,
  ImagesContainer,
} from "./gallery.styles";
import { ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  useGSAP(() => {
    gsap.from("#gallery-title", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.inOut",
      delay: 0.5,
    });

    gsap.from(".gallery-img", {
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.inOut",
    });
  }, []);

  return (
    <GalleryWrapper data-bg-color='bg-background'>
      <GalleryContainer>
        <h1 id="gallery-title" className='text-6xl text-[tan] font-bebas'>Gallery</h1>

        <div className='text-base- font-bold italic mb-8'>
          Our entire works are showcased here.
        </div>

        <ImagesContainer>
          {/* Images */}
          {galleryData.imageUrls.map((image: ImageType, index: number) => {
            return (
              <div key={index} className={`${randomColumns()} gallery-img`}>
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
