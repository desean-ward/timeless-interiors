"use client";

import React, { useEffect } from "react";
import {
  TiImage,
  TiImageSectionContainer,
  TiImageSectionWrapper,
} from "./ti-image-section.styles";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const revalidate = 0;

type ImageOverlayProps = {
  sectionImgOLData: {
    heading: string;
    imageOverlay: string;
  };
};

gsap.registerPlugin(ScrollTrigger);

const TiImageSection = ({ sectionImgOLData }: ImageOverlayProps) => {
  useEffect(() => {
    const section = document.getElementById("ti-image-section");
    const smallImage = document.getElementById("small-image");

    if (section && smallImage) {
      // Heading animation starts as soon as the section enters the viewport
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%", // Trigger when the section's top is 30% into the viewport
            toggleActions: "play none none none", // Play animation only once
            markers: false, // Enable markers for debugging (set to false in production)
          },
        })
        .from("#timeless", {
          opacity: 0,
          x: 100, // Slide in from right
          duration: 1,
          ease: "power2.in",
        })
        .from(
          "#interiors",
          {
            opacity: 0,
            x: -100, // Slide in from left
            duration: 1,
            ease: "power2.in",
          },
          "<" // Start this animation at the same time as the previous one
        );

      // Small Image animation tied to scrolling
      gsap.fromTo(
        smallImage,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top top", // Start when section reaches the top of the viewport
            end: "bottom top", // End when the bottom of the section reaches the top
            scrub: true, // Smooth animation tied to scrolling
            pin: section, // Stick the section to the top
            markers: false, // Debug markers (set to false in production)
          },
        }
      );
    }
  }, []);

  const words = sectionImgOLData.heading.split(" ");

  return (
    <TiImageSectionWrapper
      id='ti-image-section'
      className='relative h-screen'
      data-bg-color='bg-background'
    >
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={sectionImgOLData.imageOverlay}
          alt='Background'
          fill
          className='object-cover blur-md'
        />
      </div>

      <TiImageSectionContainer className='relative flex flex-col items-center justify-center h-full'>
        {/* Heading */}
        <p
          id='ti-heading'
          className='uppercase text-[50vh] leading-none tracking-tighter font-behas  absolute top-12 flex flex-col'
        >
          <span id='timeless' className='text-primary'>
            {words[0]}
          </span>{" "}
          <span id='interiors' className='text-[tan] text-shadow-lg'>
            {words[1]}
          </span>
        </p>

        {/* Small Image */}
        <div
          id='small-image'
          className='size-full absolute top-0 left-0 flex items-center justify-center'
        >
          <TiImage
            src={sectionImgOLData.imageOverlay}
            alt='Small Image'
            fill
            className='object-cover size-full relative'
          />
          <div className='flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bebas gap-2 text-5xl shadow-black p-8 shadow-xl rounded-xl backdrop-blur-lg'>
            <span id='timeless' className='text-primary'>
              {words[0]}
            </span>{" "}
            <span id='interiors' className='text-[tan] text-shadow'>
              {words[1]}
            </span>
          </div>
        </div>
      </TiImageSectionContainer>
    </TiImageSectionWrapper>
  );
};

export default TiImageSection;
