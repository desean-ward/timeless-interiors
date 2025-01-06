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

const InfoSection1 = () => {
  useGSAP(() => {
    const infoContentElement = document.getElementById("info-content");

    if (infoContentElement) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#info-section", {
        backgroundColor: "white",
        duration: 1,
      });

      gsap.from(["#info-section-heading", "#left", "#right"], {
        scrollTrigger: {
          trigger: infoContentElement,
          start: "top 70%",
          toggleActions: "play reverse play reverse", // Automatically reverse on scroll up
          markers: false,
        },
        opacity: 0,
        y: 100,
        duration: 1,
      });
    }

    // Recalculate on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear(); // Clear timelines
    };
  }, []);

  return (
    <InfoSection1Wrapper id='info-section' data-bg-color='bg-background'>
      <InfoSection1Container id='container'>
        {/* Heading 
          <div className='text-center mb-8'>
            <h2
              id='info-section-heading'
              className='uppercase text-2xl font-semibold text-center'
            >
              {infoSectionData.heading}
            </h2>
          </div>
          */}

        <InfoSectionContent id='info-content'>
          {/* Left Side Content */}
          <LeftContent id='left'>
            <p>
              At{" "}
              <span className='italic font-semibold'>Timeless Interiors</span>,
              we believe that elegance is the cornerstone of exceptional design.
              Our approach combines refined aesthetics with thoughtful
              functionality, crafting spaces that are as sophisticated as they
              are inviting. Each design is a testament to enduring
              beauty—creating interiors that remain captivating and relevant, no
              matter the passing trends. Whether it’s a cozy living room, a
              luxurious office, or an entire home transformation, our work
              reflects the harmony of timeless style and personalized charm.
            </p>
          </LeftContent>

          {/* Right Side Content */}
          <RightContent id='right'>
            <p>
              More than just a design service, Timeless Interiors is a journey
              of transformation. We bring luxury to life through curated
              details, exquisite materials, and a commitment to excellence in
              every aspect of our craft. Our designs are not only visually
              stunning but transformative, enhancing the way you live and
              interact with your spaces. With every project, we deliver a space
              that feels uniquely yours—beautiful, enduring, and truly timeless.
            </p>
          </RightContent>
        </InfoSectionContent>
      </InfoSection1Container>
    </InfoSection1Wrapper>
  );
};

export default InfoSection1;
