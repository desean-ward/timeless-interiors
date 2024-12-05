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
// import { useEffect } from "react";

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

      gsap.from(["#left", "#right"], {
        scrollTrigger: {
          trigger: infoContentElement,
          start: "top 70%", // Start animation when the top of the element reaches 30% of the viewport
          toggleActions: "play reverse play reverse", // Automatically reverse on scroll up
        },
        opacity: 0,
        y: 300,
        duration: 0.7,
      });
    }
  }, []);

  return (
    <InfoSection1Wrapper id='section' data-bg-color='bg-background'>
      <InfoSection1Container id='container'>
        <InfoSectionContent id='info-content'>
          {/* Left Side Content */}
          <LeftContent id='left'>
            <h2 className='uppercase text-xl font-semibold'>
              {infoSectionData.heading}
            </h2>
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
