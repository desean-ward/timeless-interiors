"use client";
import {
  ExploreBtn,
  ExploreBtnContainer,
  GridItem,
  GridOverlay,
  HeroContainer,
  HeroWrapper,
} from "./hero.styles";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const revalidate = 0;

// Hero Props
type HeroProps = {
  heroData: {
    heroImage: string;
    altText?: string;
    heading: string;
    tagline: string;
  };
};

const Hero = ({ heroData }: HeroProps) => {
  // Get screen width to determine if on mobile
  const screenWidth = window.innerWidth;

  // Text Animation
  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        "#heading",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: screenWidth < 900 ? 2 : 3,
        }
      )
      .fromTo(
        "#tagline",
        {
          xPercent: -100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.3,
        }
      )
      .to(".grid-item", {
        rotateY: "90deg",
        opacity: 0,
        borderBottom: "1px solid gray",
        duration: 1,
        delay: 0.2,
        ease: "easeOut",
      })
      .set("#explore", {
        opacity: 0,
        visibility: "hidden",
      })
      .to(["#explore"], {
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
      });
  }, []);

  return (
    <HeroWrapper id='hero-section' data-bg-color='bg-transparent'>
      <HeroContainer id='container' className='size-full sm:px-24 px-6'>
        <div id='bg-image'>
          <Image
            src={heroData?.heroImage || "/images/dark-bg.png"}
            alt='Hero Image'
            fill
            className='w-full h-full object-cover absolute -z-10'
          />
        </div>

        {/* Grid Overlay */}
        <GridOverlay id='grid-overlay'>
          {" "}
          {Array.from({ length: 100 }).map((_, index) => (
            <GridItem className='grid-item' key={index} />
          ))}
        </GridOverlay>

        {/* Explore Button */}
        <ExploreBtnContainer id='explore-container'>
          <ExploreBtn id='explore' className='opacity-0 relative z-1'>
            Explore
          </ExploreBtn>

          {/* Hero Text */}
          <div id='text' className='flex flex-col py-4 px-4 overflow-hidden'>
            <h1
              id='heading'
              className='font-bold text-4xl leading-none text-white font-bebas text-shadow-sm text-shadow-black'
            >
              {heroData.heading}
            </h1>
            <p
              id='tagline'
              className='text-white text-lg text-shadow-sm bg-gradient-to-r from-black to-transparent p-4 rounded-lg'
            >
              <span id='tagline-text'>{heroData?.tagline || ""}</span>
            </p>
          </div>
        </ExploreBtnContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
