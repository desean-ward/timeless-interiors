"use client";
import { ImageType, ProjectType } from "@/sanity/queries/page";
import React from "react";
import {
  LeftSideContent,
  MarqueeImages,
  ProjectContainer,
  ProjectsSectionWrapper,
  ProjectsWrapper,
  RightSideContent,
  VideoContainer,
  WorksContainer,
  WorksWrapper,
} from "./projects.styles";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const revalidate = 0;

type ProjectTypeProps = {
  heroData: {
    heading: string;
    tagline: string;
  };
  contentData: ProjectType[];
};

const Projects = ({ heroData, contentData }: ProjectTypeProps) => {
  useGSAP(() => {
    gsap.from("#projects-title", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.inOut",
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <WorksWrapper data-bg-color='bg-background'>
        <WorksContainer>
          <h1 id='projects-title' className='text-[tan] text-6xl font-bebas'>
            {heroData.heading}
          </h1>

          {/* Hero Video */}
          <VideoContainer>
            {/* Tagline */}
            <span className='text-md block italic font-bold text-white'>
              {heroData.tagline} {new Date().getFullYear()}
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
        {contentData.map((project, index: number) => {
          const { location, imageUrls, excerpt, tagline } = project;

          // Generate unique id for each project
          const idx = "project-" + index;

          return (
            <ProjectsWrapper
              id={idx}
              key={index}
              // Alternate background color
              className={clsx(
                index % 2 == 0
                  ? "bg-white text-black"
                  : " bg-background text-white"
              )}
            >
              <ProjectContainer>
                {/* Left Side Content */}

                <div>
                  <LeftSideContent>
                    {/* Location */}
                    <span className='font-bold text-xl'>{location}</span>

                    {/* Tagline */}
                    <span
                      className={clsx(
                        "italic mb-8 lg:mb-0 text-[1.25rem]",
                        index % 2 == 0
                          ? "bg-white text-black border-black/60"
                          : "bg-background text-white border-white/50"
                      )}
                    >
                      {tagline} {new Date().getFullYear()}
                    </span>
                  </LeftSideContent>
                </div>

                {/* Right Side Content */}
                <RightSideContent>
                  <p>{excerpt}</p>
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

export default Projects;
