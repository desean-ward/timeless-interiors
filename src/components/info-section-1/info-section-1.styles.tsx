import tw from "tailwind-styled-components";

export const InfoSection1Wrapper = tw.section`
    bg-white
    text-black
    py-6 
    sm:py-24 
    sm:max-h-screen
    relative 
    flex 
    justify-center 
    items-center
`;

export const InfoSection1Container = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const InfoSectionContent = tw.div`
    grid 
    md:grid-cols-2
    gap-16 
    text-lg
`;

export const LeftContent = tw.div`
    flex 
    flex-col 
    h-full 
    justify-center 
    xl:justify-start 
    xl:gap-4 
    text-balance 
    border-l-2
    border-black/40
    lg:pl-24
`;

export const RightContent = tw.div`
    flex 
    flex-col 
    gap-3 
    xl:items-start 
    sm:gap-9 
    text-balance 
    border-r-2 
    border-black/40
`;

export const DetailsButton = tw.button`
    border
    text-lg
    hover:bg-background 
    hover:text-white 
    duration-300 
    font-bebas 
    pt-1 
    border-black 
    rounded-full 
    px-6 
    font-bold 
    py-1
`;
