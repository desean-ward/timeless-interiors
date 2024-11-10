import Link from "next/link";
import tw from "tailwind-styled-components";

export const ServicesWrapper = tw.section`
    py-24 
    bg-black
`;

export const ServicesContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const HeadingContainer = tw.div`
    text-white
    text-6xl 
    font-bebas
`;

export const ContentContainer = tw.div`
    md:grid 
    md:grid-cols-3 
    gap-3 
    grid
    grid-cols-1
`;

export const ElementContainer = tw.div`
    flex 
    justify-between 
    flex-col 
    gap-3 
    col-span-1 
    p-6 
    border-white 
    border
`;

export const ElementHeading = tw.h2`
    text-white 
    text-xl 
    font-bold 
    font-bebas
`;



export const CTALink = tw(Link)`
    border-2 
    border-white 
    py-3 
    font-bebas 
    text-xl 
    text-center 
    hover:bg-white 
    hover:text-black
`;
