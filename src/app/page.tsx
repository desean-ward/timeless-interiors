import Hero from "@/components/hero/hero.component";
import InfoSection1 from "@/components/info-section-1/info-section-1.component";

export default function Home() {
  return (
    <main className='no-scrollbar w-screen'>
      <Hero />
      <InfoSection1 />
    </main>
  );
}
