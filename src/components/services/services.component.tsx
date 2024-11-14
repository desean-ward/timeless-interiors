import React from "react";
import {
  ContentContainer,
  CTALink,
  ElementContainer,
  ElementHeading,
  HeadingContainer,
  ServicesContainer,
  ServicesWrapper,
} from "./services.styles";
import { ContentType, getServicesPage, ImageType } from "@/sanity/queries/page";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Services = async () => {
  const data = await getServicesPage();
  const { Heading, Content, Gallery, CallToAction } = data;

  return (
    <ServicesWrapper>
      <ServicesContainer>
        <HeadingContainer>
          <h1>{Heading}</h1>
        </HeadingContainer>

        {/* Content */}
        <ContentContainer>
          {Content.map((element: ContentType, index: number) => {
            return (
              <ElementContainer key={index}>
                <div>
                  {/* Element Heading */}
                  <ElementHeading>{element.heading}</ElementHeading>
                </div>

                {/* Element Text */}
                <div className='text-sm'>{element.excerpt}</div>

                {/* Call to Action */}
                <CTALink href={CallToAction.link} target='_blank'>
                  {CallToAction.title}
                </CTALink>
              </ElementContainer>
            );
          })}

          {/* Gallery Marquee */}
          <div className='col-span-1 md:col-span-3'>
            <Marquee className='h-full w-full' loop={50}>
              {Gallery.imageUrls?.map((image: ImageType, index: number) => {
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
