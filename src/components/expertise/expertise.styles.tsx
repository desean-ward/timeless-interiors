import tw from "tailwind-styled-components";

export const ExpertiseWrapper = tw.section`
    bg-white 
    text-black
    h-fit 
    sm:h-screen 
    py-6
    sm:py-24 
    relative 
    mt-40
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
    sm:flex-row 
    justify-between 
    items-center
`;

export const HoverSection = tw.div`
    w-full 
    sm:w-1/2 
    flex 
    justify-center 
    relative 
    items-center 
    h-[330px] 
    sm:h-full 
    group 
    duration-300 
    bg-black 
    hover:border-black 
    hover:rounded-xl
`;
