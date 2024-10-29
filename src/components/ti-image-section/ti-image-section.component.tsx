import React from "react";
import {
  TiImageSectionContainer,
  TiImageSectionWrapper,
} from "./ti-image-section.styles";
import Image from "next/image";

const TiImageSection = () => {
  return (
    <TiImageSectionWrapper>
      <TiImageSectionContainer>
        <p className='uppercase text-[100vh] leading-none tracking-tighter font-behas'>
          Timeless Interiors
        </p>

        <Image
          src='https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg'
          alt=''
          width={420}
          height={420}
          className='size-3/4 absolute sm:w-fit sm:right-[15%] top-0 object-cover shadow-black shadow-2xl'
        />
      </TiImageSectionContainer>
    </TiImageSectionWrapper>
  );
};

export default TiImageSection;
