import Services from "@/components/services/services.component";
import { getServicesPage } from "@/sanity/queries/page";

const ServicesPage = async () => {
  const data = await getServicesPage();
  const { Heading, Content, Gallery, CallToAction } = data;

  return (
    <Services
      headingData={Heading}
      contentData={Content}
      galleryData={Gallery}
      ctaData={CallToAction}
    />
  );
};

export default ServicesPage;
