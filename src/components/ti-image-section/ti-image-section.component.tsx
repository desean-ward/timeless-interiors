"use client"
import React from "react";
import {
  TiImage,
  TiImageSectionContainer,
  TiImageSectionWrapper,
} from "./ti-image-section.styles";
import Image from "next/image";

const TiImageSection = () => {
  return (
    <TiImageSectionWrapper>
      <TiImageSectionContainer>
        <p className='uppercase text-[50vh] leading-none tracking-tighter font-behas'>
          Timeless Interiors
        </p>

        <TiImage
          src='https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg'
          alt=''
          width={420}
          height={420}
        />
      </TiImageSectionContainer>
    </TiImageSectionWrapper>
  );
};

export default TiImageSection;
