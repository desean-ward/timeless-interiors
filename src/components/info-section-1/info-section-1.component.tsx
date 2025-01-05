"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  InfoSection1Container,
  InfoSection1Wrapper,
  InfoSectionContent,
  LeftContent,
  RightContent,
} from "./info-section-1.styles";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const revalidate = 0;

// Info Section Props
type InfoSectionProps = {
  infoSectionData: {
    heading: string;
    tagline: string;
    excerpt: string;
  };
};

const InfoSection1 = ({ infoSectionData }: InfoSectionProps) => {
  useGSAP(() => {
    const infoContentElement = document.getElementById("info-content");
    if (infoContentElement) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(["#info-section-heading", "#left", "#right"], {
        scrollTrigger: {
          trigger: infoContentElement,
          start: "top 50%",
          toggleActions: "play reverse play reverse", // Automatically reverse on scroll up
          markers: false,
        },
        opacity: 0,
        y: 100,
        duration: 1,
      });
    }
  }, []);

  return (
    <InfoSection1Wrapper id='info-section' data-bg-color='bg-background'>
      <InfoSection1Container id='container'>
        <InfoSectionContent id='info-content'>
          {/* Heading */}
          <div className='text-center'>
            <h2
              id='info-section-heading'
              className='uppercase text-xl font-semibold text-center'
            >
              {infoSectionData.heading}
            </h2>
          </div>

          {/* Left Side Content */}
          <LeftContent id='left'>
            <p>{infoSectionData.tagline}</p>
          </LeftContent>

          {/* Right Side Content */}
          <RightContent id='right'>
            <p>{infoSectionData.excerpt}</p>
          </RightContent>
        </InfoSectionContent>
      </InfoSection1Container>
    </InfoSection1Wrapper>
  );
};

export default InfoSection1;
