import React from "react";
import { MarqueeContainer, MarqueeWrapper } from "./marquee.styles";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <MarqueeWrapper>
      <MarqueeContainer>
        <div className='size-full flex justify-center items-center sm:absolute left-0 top-40'>
          <Marquee className='size-full'>
            <Image
              src='https://i.pinimg.com/564x/9e/1d/bb/9e1dbbf9a91a309d14229f7b3dac4d64.jpg'
              alt='Image 1'
              width={320}
              height={320}
              className='h-3/4 w-full sm:w-1/4 sm:right-[33%] top-0 object-cover sm:absolute border-2'
            />
            <Image
              src='https://i.pinimg.com/564x/67/ca/81/67ca81b8b8344d9479b2bf10639aaf35.jpg'
              alt='Image 2'
              width={320}
              height={320}
              className='h-3/4 w-full sm:w-1/4 sm:left-0 bottom-0 object-cover sm:absolute border-2'
            />
            <Image
              src='https://i.pinimg.com/564x/c8/7e/91/c87e9121048980c179e8df6e15c1a705.jpg'
              alt='Image 3'
              width={320}
              height={320}
              className='h-3/4 w-full sm:w-1/4 sm:right-0 bottom-0 object-cover sm:absolute border-2'
            />
          </Marquee>
        </div>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
};

export default MarqueeComponent;
