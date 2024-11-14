import React from "react";
import {
  ExploreBtn,
  ExploreBtnContainer,
  HeroContainer,
  HeroWrapper,
} from "./hero.styles";
import Image from "next/image";

const Hero = () => {
  return (
    <HeroWrapper id='section'>
      <HeroContainer id='container' className='size-full sm:px-24 px-6'>
        <Image
          src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/54098c96146799.5ea7f6d5a9050.jpg'
          alt='Hero Image'
          fill
          className='w-full h-full object-cover absolute'
        />

        {/* Explore Button */}
        <ExploreBtnContainer>
          <ExploreBtn>Explore</ExploreBtn>

          {/* Hero Tex */}
          <div className='flex flex-col'>
            <h1 className='font-bold text-4xl leading-none text-white font-bebas'>
              Transforming Vision Into Reality
            </h1>
            <p className='text-white text-lg'>
              At Timeless Interiors, we bring your unique vision to life.
            </p>
          </div>
        </ExploreBtnContainer>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
