import tw from "tailwind-styled-components";

export const MarqueeWrapper = tw.section`
    bg-background
    h-[50vh]
    md:h-screen
    md:py-24 
    relative 
    w-full 
    flex 
    justify-center 
    items-center 
`;

export const MarqueeContainer = tw.div`
    px-6 
    py-12
    size-full
`;
