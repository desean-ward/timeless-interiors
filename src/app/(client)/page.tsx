import ExpertiseComp from "@/components/expertise/expertise.component";
import Hero from "@/components/hero/hero.component";
import InfoSection1 from "@/components/info-section-1/info-section-1.component";
import MarqueeComponent from "@/components/marquee/marquee.component";
import TiImageSection from "@/components/ti-image-section/ti-image-section.component";
import { getHomePage } from "@/sanity/queries/page";

export default async function Home() {
  // Fetch 'Home Page' data
  const data = await getHomePage();

  const {
    Hero: heroData,
    SectionImageOverlay,
    Expertise,
    Gallery,
  } = data;

  return (
    <main className='no-scrollbar w-screen'>
      <Hero heroData={heroData} />
      <InfoSection1 />
      <TiImageSection sectionImgOLData={SectionImageOverlay} />
      <MarqueeComponent marqueeData={Gallery} />
      <ExpertiseComp expertiseData={Expertise} />
    </main>
  );
}
