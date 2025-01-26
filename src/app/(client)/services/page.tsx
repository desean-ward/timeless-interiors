import Services from "@/components/services/services.component";
import TransitionEffect from "@/components/transition-effect/transition-effect.component";
import { getServicesPage } from "@/sanity/queries/page";

const ServicesPage = async () => {
  const data = await getServicesPage();
  const { Heading, Content, Gallery, CallToAction } = data;

  return (
    <>
      <TransitionEffect />
      
      <Services
        headingData={Heading}
        contentData={Content}
        galleryData={Gallery}
        ctaData={CallToAction}
      />
    </>
  );
};

export default ServicesPage;
