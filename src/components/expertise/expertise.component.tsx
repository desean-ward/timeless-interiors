"use client";
import React from "react";
import {
  ExpertiseContainer,
  ExpertiseWrapper,
  HoverSection,
  HoverSectionsContainer,
  SectionImage,
} from "./expertise.styles";
import Image from "next/image";

const Expertise = () => {
  return (
    <ExpertiseWrapper>
      <ExpertiseContainer>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-5xl font-bebas'>Our Expertise</h3>
        </div>

        <HoverSectionsContainer>
          <HoverSection>
            <span className='text-white text-2xl relative z-10 font-bebas'>
              Design Interior
            </span>

            <SectionImage
              src='https://i.pinimg.com/564x/48/6d/ea/486dea15b02c62b8e0d541c1a305c902.jpg'
              alt=''
              width={320}
              height={320}
            />
          </HoverSection>

          <HoverSection>
            <span className='text-white text-2xl relative z-10 font-bebas'>
              Design Architecture
            </span>

            <SectionImage
              src='https://i.pinimg.com/564x/1a/81/fe/1a81fe40904fd6327df7f17911e0e4ad.jpg'
              alt=''
              width={320}
              height={320}
            />
          </HoverSection>
        </HoverSectionsContainer>
      </ExpertiseContainer>
    </ExpertiseWrapper>
  );
};

export default Expertise;
