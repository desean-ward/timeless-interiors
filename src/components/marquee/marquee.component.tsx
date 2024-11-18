import React from "react";
import { MarqueeContainer, MarqueeWrapper } from "./marquee.styles";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ImageType } from "@/sanity/queries/page";
import imgClasses from "@/data/imgClasses.json";

export const revalidate = 0;

// MarqueeProps
type MarqueeProps = {
  marqueeData: {
    imageUrls: Array<{
      url: string;
    }>;
  };
};

// Type create to type the imported 'imgClasses'
type ClassesType = {
  [key: string]: string; // Allows dynamic key access
};

const classes = imgClasses.classes as ClassesType;

const MarqueeComponent = ({ marqueeData }: MarqueeProps) => {
  return (
    <MarqueeWrapper data-bg-color='bg-transparent'>
      <MarqueeContainer>
        <div className='size-full flex justify-center items-center'>
          <Marquee className='size-full'>
            {marqueeData.imageUrls.map((image: ImageType, idx: number) => {
              return (
                <div key={idx}>
                  <Image
                    src={image.url}
                    alt='Image'
                    width={320}
                    height={320}
                    className={classes[`image${idx}`] || ""}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
};

export default MarqueeComponent;
