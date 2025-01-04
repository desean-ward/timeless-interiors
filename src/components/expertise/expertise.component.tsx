"use client";
import React, { useState } from "react";
import {
  ExpertiseContainer,
  ExpertiseWrapper,
  HoverSection,
  HoverSectionsContainer,
  SectionImage,
} from "./expertise.styles";
// import { getHomePage } from "@/sanity/queries/page";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const revalidate = 0;

// Type the Expertise Data props
type ExpertiseProps = {
  expertiseData: Array<{
    heading: string;
    url: string;
  }>;
};

const ExpertiseComp = ({ expertiseData }: ExpertiseProps) => {
  // Capture the index of the hovered expertise
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(() => {
    // Animate heading
    gsap.from("#expertise-heading", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#expertise-heading",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
    });

    // Query all elements with class 'expertise'
    const expertise = document.querySelectorAll(".expertise");

    // Animate the first expertise element
    if (expertise[0]) {
      gsap.from(expertise[0], {
        opacity: 0,
        x: "-100%",
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: expertise[0], // Use the DOM element, not a string
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      });
    }

    // Animate the second expertise element
    if (expertise[1]) {
      gsap.from(expertise[1], {
        opacity: 0,
        x: "100%",
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: expertise[1], // Use the DOM element, not a string
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  }, []);

  return (
    <ExpertiseWrapper id='expertise-section' data-bg-color='bg-background'>
      <ExpertiseContainer id='expertise-container'>
        <div
          id='expertise-heading'
          className='flex flex-col justify-center items-center'
        >
          <h3 className='text-5xl font-bebas'>Our Expertise</h3>
        </div>

        <HoverSectionsContainer>
          {expertiseData.map((expertise, index) => {
            return (
              <HoverSection
                key={index}
                className='expertise'
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href='/projects'>
                  <span className='text-white hover:text-gray-300 text-2xl relative z-10 font-bebas '>
                    {hoveredIndex === index
                      ? "View Our Projects"
                      : expertise.heading}
                  </span>
                </Link>

                <SectionImage
                  src={expertise.url}
                  alt={expertise.heading}
                  width={320}
                  height={320}
                />
              </HoverSection>
            );
          })}
        </HoverSectionsContainer>
      </ExpertiseContainer>
    </ExpertiseWrapper>
  );
};

export default ExpertiseComp;
