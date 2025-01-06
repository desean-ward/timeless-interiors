'use client';
import {
  ContentContainer,
  CTALink,
  ElementContainer,
  ElementHeading,
  HeadingContainer,
  ServicesContainer,
  ServicesWrapper,
} from "./services.styles";
import { ContentType, ImageType } from "@/sanity/queries/page";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ServicesProps = {
  headingData: string;

  contentData: Record<string, ContentType>;

  ctaData: {
    title: string;
    link: string;
  };

  galleryData: {
    imageUrls: Array<{
      url: string;
    }>;
  };
};
const Services = ({
  headingData,
  contentData,
  ctaData,
  galleryData,
}: ServicesProps) => {
  useGSAP(() => {
    gsap.from("#services-title", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "back.inOut",
      delay: 0.5,
    });

    gsap.from("#services-marquee", {
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
    });

    gsap.from(".service", {
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: "back.inOut",
    });
  }, []);

  return (
    <ServicesWrapper data-bg-color='bg-background'>
      <ServicesContainer>
        <HeadingContainer id="services-title">
          <h1>{headingData}</h1>
        </HeadingContainer>

        {/* Content */}
        <ContentContainer>
          {Object.keys(contentData).map((key: string, index: number) => {
            const element = contentData[key];

            return (
              <ElementContainer key={index} className="service">
                <div>
                  {/* Element Heading */}
                  <ElementHeading>{element.heading}</ElementHeading>
                </div>

                {/* Element Text */}
                <div>{element.excerpt}</div>

                {/* Call to Action  */}
                <CTALink href={ctaData.link} target='_blank'>
                  {ctaData.title}
                </CTALink>
              </ElementContainer>
            );
          })}

          {/* Gallery Marquee */}
          <div id="services-marquee" className='col-span-1 md:col-span-3'>
            <Marquee className='h-full w-full rounded-xl' loop={50}>
              {galleryData.imageUrls.map((image: ImageType, index: number) => {
                return (
                  <div className='h-[450px] aspect-auto w-full' key={index}>
                    <Image
                      src={image.url}
                      alt='Images'
                      width={450}
                      height={300}
                      className='h-full w-full object-cover'
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </ContentContainer>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
