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
    lg:flex-row
    lg:justify-between 
    flex-col-reverse 
    items-center 
    sm:items-end 
    gap-8
    sm:gap-8
    xl:gap-0 
    justify-center 
    w-full
    h-full
    bottom-0 
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
    rounded-xl 
    px-9 
    py-1
    mr-auto
`;
