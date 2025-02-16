import tw from "tailwind-styled-components";

export const WorksWrapper = tw.section`
    py-24 
    overflow-hidden 
    sm:py-24 
    sm:h-screen 
    sm:max-h-screen 
    relative 
    w-full 
    justify-center 
    flex 
    items-center 
    bg-background

`;

export const WorksContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const VideoContainer = tw.div`
    size-full 
    aspect-video 
    flex 
    flex-col
    gap-4
    rounded-xl
`;

export const ProjectsSectionWrapper = tw.section`
    py-24 
    sm:h-fit 
    relative 
    w-full 
    justify-center 
    flex 
    flex-col 
    items-center 
    bg-background

`;

export const ProjectsWrapper = tw.div`
    sticky 
    text-black 
    overflow-hidden 
    top-16 
    sm:h-[75vh] 
    shrink-0 
    w-full
`;

export const ProjectsContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const ProjectContainer = tw.div`
    grid 
    grid-cols-1 
    md:grid-cols-2 
    justify-between 
    py-8 
    px-12 
    border-b-black
`;

export const LeftSideContent = tw.div`
    flex 
    flex-col 
    justify-center
    size-full
`;

export const RightSideContent = tw.div`
    flex 
    items-center
    sm:my-0 
    text-[1.25rem]
`;

export const MarqueeImages = tw.div`
    w-[88vw] 
    overflow-hidden 
    shrink-0 
    cursor-pointer 
    flex 
    items-center 
    justify-center 
    sm:w-[450px] 
    aspect-video
`;
