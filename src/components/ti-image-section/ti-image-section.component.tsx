"use client";

import React, { useEffect } from "react";
import {
  DescriptiveGridItem,
  DescriptiveText,
  DescriptiveTextGrid,
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
    const smWords = document.getElementById("sm-words");

    if (section && smallImage && smWords) {
      // Ensure smallImage and sm-words start hidden
      gsap.set(smallImage, { opacity: 0, scale: 0 });
      gsap.set(smWords, { opacity: 0, scaleX: 0, display: "none" });

      // ScrollTrigger for pinning the main section
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+250%",
          pin: section,
          pinSpacing: false,
          scrub: false,
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      // Animate the huge "Timeless Interiors" on entering
      timeline
        .from("#ti-heading", {
          opacity: 0,
          duration: 0.5,
        })
        .from(
          "#timeless",
          {
            opacity: 0,
            x: -100,
            duration: 1,
          },
          "<"
        )
        .from(
          "#interiors",
          {
            opacity: 0,
            x: 100,
            duration: 1,
          },
          "<"
        );

      // SmallImage animation with dependent sm-words animation
      const smallImageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none reverse reset",
          markers: false,
          onLeaveBack: () => {
            // Reset sm-words to hidden when leaving viewport
            gsap.set(smWords, { display: "none", opacity: 0, scaleX: 0 });
          },
          onEnterBack: () => {
            // Reverse animation for sm-words
            gsap
              .timeline()
              .set(smWords, { display: "flex" }) // Ensure it's visible before animating
              .to(smWords, {
                opacity: 0,
                scaleX: 0,
                duration: 0.5,
                ease: "power2.out",
              });
          },
        },
      });

      smallImageTimeline.fromTo(
        smallImage,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // Animation for sm-words, timeless-sm, and interiors-sm (independent of scrolling)
            gsap
              .timeline()
              .set("#sm-words", { display: "flex" }) // Show the element before animating

              .fromTo(
                "#sm-words",
                { opacity: 0, scaleX: 0 },
                {
                  opacity: 1,
                  scaleX: 1,
                  duration: 0.5,
                  ease: "power2.out",
                }
              )

              .from(
                ["#timeless-sm"],
                {
                  opacity: 0,
                  right: -100, // Slide in from the right
                  duration: 1,
                  ease: "power2.in",
                },
                "-=0.5" // Start this animation 0.5 seconds before the previous one ends
              )
              .from(
                ["#interiors-sm"],
                {
                  opacity: 0,
                  left: -100, // Slide in from the left
                  duration: 1,
                  ease: "power2.in",
                },
                "<" // Start this animation at the same time as the previous one
              );
          },
        }
      );

      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.globalTimeline.clear(); // Clear timelines
      };
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
          className='uppercase text-[10vh] md:text-[20vh] lg:text-[50vh] leading-none tracking-tighter font-behas  absolute h-full flex flex-col justify-center lg:top-10'
        >
          <span id='timeless' className='text-primary'>
            {words[0]}
          </span>{" "}
          <span id='interiors' className='text-[tan] text-shadow-lg'>
            {words[1]}
          </span>
        </p>

        {/* Descriptive Text */}
        <DescriptiveTextGrid>
          <DescriptiveGridItem className='items-end'>
            <DescriptiveText id='elegant'>Elegant</DescriptiveText>
            <DescriptiveText id='transformative'>
              Transformative
            </DescriptiveText>
          </DescriptiveGridItem>

          <DescriptiveGridItem className='items-end'>
            <DescriptiveText id='luxurious'>Luxurious</DescriptiveText>
            <DescriptiveText id='enduring'>Enduring</DescriptiveText>
          </DescriptiveGridItem>
        </DescriptiveTextGrid>

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
          <div
            id='sm-words'
            className=' font-bebas gap-2 text-5xl shadow-black p-8 shadow-xl rounded-xl backdrop-blur-lg hidden'
          >
            <span id='timeless-sm' className='text-primary relative'>
              {words[0]}
            </span>{" "}
            <span id='interiors-sm' className='text-[tan] text-shadow relative'>
              {words[1]}
            </span>
          </div>
        </div>
      </TiImageSectionContainer>
    </TiImageSectionWrapper>
  );
};

export default TiImageSection;
