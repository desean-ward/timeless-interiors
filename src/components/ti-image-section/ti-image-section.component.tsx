"use client";
import React from "react";
import {
  TiImage,
  TiImageSectionContainer,
  TiImageSectionWrapper,
} from "./ti-image-section.styles";
import Image from "next/image";

export const revalidate = 0;

type ImageOverlayProps = {
  sectionImgOLData: {
    heading: string;
    imageOverlay: string;
  }
}

const TiImageSection = ({sectionImgOLData}: ImageOverlayProps) => {


  return (
    <TiImageSectionWrapper data-bg-color='bg-black'>
      <div className='absolute inset-0 -z-10'>
        <Image
          src={sectionImgOLData.imageOverlay}
          alt='Background'
          fill
          className='object-cover blur-md'
        />
      </div>
      <TiImageSectionContainer>
        <p className='uppercase text-[50vh] leading-none tracking-tighter font-behas text-shadow text-shadow-white'>
          {sectionImgOLData.heading}
        </p>

        <div className='size-full absolute top-0 left-0 flex items-center justify-center'>
          <TiImage
            src={sectionImgOLData.imageOverlay}
            alt=''
            width={420}
            height={420}
          />
        </div>
      </TiImageSectionContainer>
    </TiImageSectionWrapper>
  );
};

export default TiImageSection;
