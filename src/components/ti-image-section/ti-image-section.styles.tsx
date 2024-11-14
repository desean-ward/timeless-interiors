import Image from "next/image";
import tw from "tailwind-styled-components";

export const TiImageSectionWrapper = tw.section`
    bg-white 
    text-black 
    overflow-hidden
    relative 
    w-full 
    flex 
    items-center
`;

export const TiImageSectionContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const TiImage = tw(Image)`
    size-3/4 
    absolute 
    sm:w-fit
    lg:right-[25%] 
    top-0 
    object-cover 
    shadow-black 
    shadow-2xl
    border
    border-white
`;
