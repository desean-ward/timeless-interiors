import Image from "next/image";
import tw from "tailwind-styled-components";

export const TiImageSectionWrapper = tw.section`
    sticky 
    top-0
    overflow-hidden
    w-full 
    flex 
    justify-center
    items-center 
    mb-[155vh]
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
    rounded-xl
`;
