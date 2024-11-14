import React from "react";
import { MarqueeContainer, MarqueeWrapper } from "./marquee.styles";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <MarqueeWrapper>
      <MarqueeContainer>
        <div className='size-full flex justify-center items-center'>
          <Marquee className='size-full'>
            <Image
              src='https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg'
              alt='Image 1'
              width={320}
              height={320}
              className='sm:h-full lg:h-3/4 md:h-[60%] md:w-[80%] sm:w-1/4 lg:w-3/4 md:right-[10%] lg:left-[12.5%] md:top-0 object-cover md:rounded-xl sm:absolute shadow-md shadow-white'
            />
            <Image
              src='https://i.pinimg.com/564x/67/ca/81/67ca81b8b8344d9479b2bf10639aaf35.jpg'
              alt='Image 2'
              width={320}
              height={320}
              className='absolute sm:h-full md:h-[60%] lg:h-3/4  md:w-[40%] sm:lg:w-1/4 sm:left-0 md:bottom-0 object-cover md:rounded-xl sm:absolute shadow-2xl shadow-black z-10'
            />
            <Image
              src='https://i.pinimg.com/564x/c8/7e/91/c87e9121048980c179e8df6e15c1a705.jpg'
              alt='Image 3'
              width={320}
              height={320}
              className='absolute sm:h-full lg:h-3/4 md:h-[60%] md:w-[40%] sm:lg:w-1/4 sm:right-0 md:bottom-0 object-cover md:rounded-xl sm:absolute shadow-2xl shadow-black z-10'
            />
          </Marquee>
        </div>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
};

export default MarqueeComponent;
