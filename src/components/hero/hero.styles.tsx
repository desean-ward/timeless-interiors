import tw from "tailwind-styled-components";

export const HeroWrapper = tw.section`
    h-screen 
    py-6 
    sm:py-24
    max-h-[1120px] 
    sm:max-h-screen 
    w-full 
    flex 
    justify-center
`;

export const HeroContainer = tw.div`
    
`;

export const ExploreBtnContainer = tw.div`
    relative 
    flex 
    sm:flex-row 
    flex-col-reverse 
    items-start 
    sm:items-end 
    gap-3 
    xl:gap-0 
    sm:justify-between 
    w-full 
    bottom-0 
    h-full
`;

export const ExploreBtn = tw.button`
    border-2 
    font-bebas 
    text-white 
    pt-1 
    hover:bg-white 
    hover:text-black 
    duration-300 
    text-lg 
    rounded-full 
    px-9 
    py-1
`;
