import Image from "next/image";
import tw from "tailwind-styled-components";

export const TiImageSectionWrapper = tw.section`
    bg-transparent 
    text-black 
    overflow-hidden
    relative 
    w-full 
    flex 
    justify-center
    items-center
`;

export const TiImageSectionContainer = tw.div`
    px-6 
    sm:px-24 
    size-full 
`;

export const TiImage = tw(Image)`
    mx-auto
    size-3/4 
    sm:w-fit
    object-cover 
    shadow-black 
    shadow-2xl
    border
    border-white
    opacity-90
    rounded-xl
`;
