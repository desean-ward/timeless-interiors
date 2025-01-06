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
    overflow-hidden
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
    size-full
    bottom-0 
`;

export const ExploreBtn = tw.button`
    opacity-0
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
    shadow-md
    shadow-black
    relative 
    -top-6
    left-4 
    lg:left-0
`;

export const GridOverlay = tw.div`
    grid 
    grid-cols-[repeat(auto-fill,minmax(150px,1fr))] 
    w-full 
    absolute 
    inset-0
`;

export const GridItem = tw.div`
    bg-background 
    flex items-center 
    justify-center 
    text-xl 
    font-semibold 
    shadow-lg
    aspect-square
`;
