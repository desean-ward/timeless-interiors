import React from "react";
import {
  DetailsButton,
  InfoSection1Container,
  InfoSection1Wrapper,
  InfoSectionContent,
  LeftContent,
  RightContent,
} from "./info-section-1.styles";

const InfoSection1 = () => {
  return (
    <InfoSection1Wrapper id='section'>
      <InfoSection1Container id='container'>
        <InfoSectionContent>
          {/* Left Side Content */}
          <LeftContent>
            <h2 className='uppercase text-xl font-semibold'>
              Timeless Interiors for comfort living
            </h2>
            <p className='text-base'>
              Timeless Interiors is dedicated to shaping your ideas into
              beautifully crafted spaces that feel enduring and uniquely yours.
            </p>
          </LeftContent>

          {/* Right Side Content */}
          <RightContent>
            <p className='text-base'>
              At Timeless Interiors, we believe every space should tell a
              story—your story. From concept to completion, our design team
              brings your unique vision to life with elegance and precision. We
              specialize in creating interiors that blend functionality with
              timeless beauty, ensuring that every room we design reflects both
              your style and our dedication to excellence. Let’s turn your dream
              into a beautifully crafted reality.
            </p>

            {/* Details Button */}
            <DetailsButton>Details</DetailsButton>
          </RightContent>
        </InfoSectionContent>
      </InfoSection1Container>
    </InfoSection1Wrapper>
  );
};

export default InfoSection1;
