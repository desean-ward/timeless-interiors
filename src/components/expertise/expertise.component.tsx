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

  return (
    <ExpertiseWrapper data-bg-color='bg-background'>
      <ExpertiseContainer>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-5xl font-bebas'>Our Expertise</h3>
        </div>

        <HoverSectionsContainer>
          {expertiseData.map((expertise, index) => {
            return (
              <HoverSection
                key={index}
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
