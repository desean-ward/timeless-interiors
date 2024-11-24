import {
  InfoSection1Container,
  InfoSection1Wrapper,
  InfoSectionContent,
  LeftContent,
  RightContent,
} from "./info-section-1.styles";

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

  return (
    <InfoSection1Wrapper id='section' data-bg-color='bg-[#0A0A0A]'>
      <InfoSection1Container id='container'>
        <InfoSectionContent>
          {/* Left Side Content */}
          <LeftContent>
            <h2 className='uppercase text-xl font-semibold'>
              {infoSectionData.heading}
            </h2>
            <p>{infoSectionData.tagline}</p>
          </LeftContent>

          {/* Right Side Content */}
          <RightContent>
            <p>{infoSectionData.excerpt}</p>
          </RightContent>
        </InfoSectionContent>
      </InfoSection1Container>
    </InfoSection1Wrapper>
  );
};

export default InfoSection1;
