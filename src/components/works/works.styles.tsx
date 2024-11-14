import Link from "next/link";
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
    bg-black
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
    bg-black
`;

export const ProjectsWrapper = tw.div`
    sticky 
    text-black 
    overflow-hidden 
    top-0 
    sm:h-[75vh] 
    pb-24 
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
    py-6 
    px-6 
    border-b-black
`;

export const LeftSideContent = tw.div`
    flex 
    md:flex-row 
    flex-col 
    gap-3 
    sm:gap-6 
    xl:items-center
`

export const RightSideContent = tw.div`
    flex 
    items-center
    gap-4
    my-3 
    sm:my-0 
`;

export const SeeMoreLink = tw(Link)`
    bg-black 
    font-bebas
    text-lg
    w-fit 
    h-fit 
    shrink-0 
    border-solid 
    px-6 
    py-2 
    rounded-xl
    border-2
    duration-300
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
`
