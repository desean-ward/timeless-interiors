import Image from "next/image";
import tw from "tailwind-styled-components";

export const ExpertiseWrapper = tw.section`
    bg-white 
    text-black
    sm:h-screen 
    py-24
    xl:pb-80
    relative
    w-full 
    flex 
    justify-center 
    items-center
`;
export const ExpertiseContainer = tw.div`
    px-6 
    sm:px-24
    size-full
`;

export const HoverSectionsContainer = tw.div`
    size-full 
    flex 
    gap-6 
    flex-col 
    lg:flex-row 
    lg:justify-between 
    items-center
`;

export const HoverSection = tw.div`
    w-full 
    flex 
    justify-center 
    relative 
    items-center 
    h-[330px] 
    xl:h-[60vh]
    group 
    duration-300 
    lg:bg-black 
    lg:hover:bg-transparent 
    bg-transparent 
    shadow-black
    shadow-md
    rounded-xl
    text-shadow-md
    lg:hover:text-shadow-md
`;

export const SectionImage = tw(Image)`
    size-full 
    absolute 
    lg:opacity-0 
    rounded-lg 
    md:rounded-xl 
    lg:group-hover:opacity-100 
    object-cover 
    duration-300
`;
