"use client";
import { MarqueeContainer, MarqueeWrapper } from "./marquee.styles";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ImageType } from "@/sanity/queries/page";
import imgClasses from "@/data/imgClasses.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  useGSAP(() => {
    gsap.from("#marquee-section", {
      scrollTrigger: {
        trigger: "#marquee-section",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <MarqueeWrapper id='marquee-section' data-bg-color='bg-transparent'>
      <MarqueeContainer>
        <div className='size-full flex justify-center items-center'>
          <Marquee className='size-full'>
            {marqueeData.imageUrls.map((image: ImageType, idx: number) => {
              let screenWidth = 0;
              
              if (typeof window !== 'undefined') {
                screenWidth = window.innerWidth;
              }

              return (
                <div
                  key={idx}
                  className={
                    screenWidth >= 768
                      ? `card ${classes[`image${idx}`] || ""}`
                      : `size-full ${classes[`image${idx}`] || ""}`
                  }
                >
                  <Image
                    src={image.url}
                    alt='marquee image'
                    fill
                    className='object-cover'
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
