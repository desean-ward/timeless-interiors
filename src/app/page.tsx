import Expertise from "@/components/expertise/expertise.component";
import Hero from "@/components/hero/hero.component";
import InfoSection1 from "@/components/info-section-1/info-section-1.component";
import MarqueeComponent from "@/components/marquee/marquee.component";
import TiImageSection from "@/components/ti-image-section/ti-image-section.component";

export default function Home() {
  return (
    <main className='no-scrollbar w-screen'>
      <Hero />
      <InfoSection1 />
      <TiImageSection />
      <MarqueeComponent />
      <Expertise />
    </main>
  );
}
