"use client";
import React from "react";
import {
  ExploreBtn,
  ExploreBtnContainer,
  HeroContainer,
  HeroWrapper,
} from "./hero.styles";
import Image from "next/image";

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

  return (
    <HeroWrapper id='section' data-bg-color='bg-transparent'>
      <HeroContainer id='container' className='size-full sm:px-24 px-6'>
        <Image
          src={heroData?.heroImage || "/images/dark-bg.png"
          }
          alt='Hero Image'
          fill
          className='w-full h-full object-cover absolute'
        />

        {/* Explore Button */}
        <ExploreBtnContainer>
          <ExploreBtn>Explore</ExploreBtn>

          {/* Hero Tex */}
          <div className='flex flex-col shadow-2xl shadow-black py-4 px-4'>
            <h1 className='font-bold text-4xl leading-none text-white font-bebas shadow-2xl shadow-black backdrop-blur-lg'>
              {heroData.heading}
            </h1>
            <p className='text-white text-lg'>{heroData?.tagline || ""}</p>
          </div>
        </ExploreBtnContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
