import Projects from "@/components/projects/projects.component";
import TransitionEffect from "@/components/transition-effect/transition-effect.component";
import { getProjectsPage } from "@/sanity/queries/page";

const WorksPage = async () => {
  const data = await getProjectsPage();
  const { Hero: heroData, Content: contentData } = data;

  return (
    <>
      <TransitionEffect />

      <Projects heroData={heroData} contentData={contentData} />
    </>
  );
};

export default WorksPage;
