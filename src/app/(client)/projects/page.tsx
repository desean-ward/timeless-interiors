import Projects from "@/components/projects/projects.component";
import { getProjectsPage } from "@/sanity/queries/page";

const WorksPage = async () => {
  const data = await getProjectsPage();
  const {
    Hero: heroData,
    Content: contentData,
  } = data;

  return (
    <Projects
      heroData={heroData}
      contentData={contentData}
    />
  );
};

export default WorksPage;
