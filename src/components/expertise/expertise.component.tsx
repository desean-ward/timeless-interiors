import React from "react";
import {
  ExpertiseContainer,
  ExpertiseWrapper,
  HoverSection,
  HoverSectionsContainer,
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
            <span className='text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300'>
              Design Interior
            </span>

            <Image
              src='https://i.pinimg.com/564x/48/6d/ea/486dea15b02c62b8e0d541c1a305c902.jpg'
              alt=''
              width={320}
              height={320}
              className='size-[80%] absolute top-15 opacity-0 group-hover:opacity-100 object-cover duration-300'
            />
          </HoverSection>

          <HoverSection>
            <span className='text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300'>
              Design Architecture
            </span>

            <Image
              src='https://i.pinimg.com/564x/1a/81/fe/1a81fe40904fd6327df7f17911e0e4ad.jpg'
              alt=''
              width={320}
              height={320}
              className='size-[80%] absolute top-15 opacity-0 group-hover:opacity-100 object-cover duration-300'
            />
          </HoverSection>
        </HoverSectionsContainer>
      </ExpertiseContainer>
    </ExpertiseWrapper>
  );
};

export default Expertise;
