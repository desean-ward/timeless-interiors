"use client";
import React from "react";
import {
  ExploreBtn,
  ExploreBtnContainer,
  HeroContainer,
  HeroWrapper,
} from "./hero.styles";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

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
  // Text Animation
  useGSAP(() => {
    gsap.fromTo("#text", { 
      y: "50vh" }, { x: 0, duration: 1, delay: 1 });
  });

  return (
    <HeroWrapper id='section' data-bg-color='bg-transparent'>
      <HeroContainer id='container' className='size-full sm:px-24 px-6'>
        <Image
          src={heroData?.heroImage || "/images/dark-bg.png"}
          alt='Hero Image'
          fill
          className='w-full h-full object-cover absolute'
        />

        {/* Explore Button */}
        <ExploreBtnContainer>
          <ExploreBtn>Explore</ExploreBtn>

          {/* Hero Tex */}
          <div id='text' className='flex flex-col py-4 px-4'>
            <h1
              id='heading'
              className='font-bold text-4xl leading-none text-white font-bebas text-shadow-sm text-shadow-black backdrop-blur-lg'
            >
              {heroData.heading}
            </h1>
            <p
              id='tagline'
              className='text-white text-lg text-shadow-sm bg-gradient-to-r from-black to-transparent p-4 rounded-lg'
            >
              {heroData?.tagline || ""}
            </p>
          </div>
        </ExploreBtnContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
