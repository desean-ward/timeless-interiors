import { getWorksPage, ImageType, ProjectType } from "@/sanity/queries/page";
import React from "react";
import {
  LeftSideContent,
  MarqueeImages,
  ProjectContainer,
  ProjectsSectionWrapper,
  ProjectsWrapper,
  RightSideContent,
  SeeMoreLink,
  VideoContainer,
  WorksContainer,
  WorksWrapper,
} from "./works.styles";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export const revalidate = 0;

const Works = async () => {
  const data = await getWorksPage();

  const { Content, Hero, CallToAction } = data;

  return (
    <>
      <WorksWrapper>
        <WorksContainer>
          <h1 className='text-white text-6xl font-bebas'>{Hero.heading}</h1>

          {/* Hero Video */}
          <VideoContainer>
            {/* Tagline */}
            <span className='text-md block italic font-bold text-white'>
              {Hero.tagline}
            </span>

            {/* Video */}
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/NoWyNgAQe34?si=Jthrx77fB35CoOlS&amp;start=10&autoplay=1&mute=1'
              title='YouTube video player'
              allow='autoplay; muted;'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
              className='w-full h-full object-cover'
            ></iframe>
          </VideoContainer>
        </WorksContainer>
      </WorksWrapper>

      <ProjectsSectionWrapper>
        {Content.map((project: ProjectType, index: number) => {
          const { location, imageUrls, excerpt, tagline, projectname } =
            project;

          return (
            <ProjectsWrapper
              key={index}
              className={clsx(
                index % 2 == 0 ? "bg-white text-black" : "bg-black text-white"
              )}
            >
              <ProjectContainer>
                {/* Left Side Content */}

                <div>
                  <h3 className='text-3xl font-bebas'>{projectname}</h3>
                  <LeftSideContent>
                    {/* Location */}
                    <span className='font-bold text-xl'>{location}</span>

                    {/* Tagline */}
                    <span
                      className={clsx(
                        "border-2 italic rounded-xl px-2 py-2 max-w-fit",
                        index % 2 == 0
                          ? "bg-white text-black border-black"
                          : "bg-black text-white border-white"
                      )}
                    >
                      {tagline}
                    </span>
                  </LeftSideContent>
                </div>

                {/* Right Side Content */}
                <RightSideContent>
                  <p>{excerpt}</p>

                  {/*
                    <SeeMoreLink
                      href='#'
                      className={clsx(
                        index % 2 == 0
                          ? "bg-black text-white border-white hover:bg-white hover:text-black hover:border-black"
                          : "bg-white text-black border-black hover:bg-black hover:text-white hover:border-white"
                      )}
                    >
                      See More
                    </SeeMoreLink>
                    */}
                </RightSideContent>
              </ProjectContainer>

              {/* Photo Marquee */}
              <div className='relative flex -mx-[50%]'>
                <Marquee
                  className='w-fit overflow-hidden'
                  speed={90}
                  pauseOnHover
                >
                  {imageUrls?.map((image: ImageType, index: number) => {
                    return (
                      <MarqueeImages key={index}>
                        <Image
                          loading='lazy'
                          src={image?.url || ""}
                          alt='Image'
                          width={200}
                          height={300}
                          className='size-full object-cover px-1 rounded-lg'
                        />
                      </MarqueeImages>
                    );
                  })}
                </Marquee>
              </div>
            </ProjectsWrapper>
          );
        })}
      </ProjectsSectionWrapper>
    </>
  );
};

export default Works;
