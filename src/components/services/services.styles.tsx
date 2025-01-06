import Link from "next/link";
import tw from "tailwind-styled-components";

export const ServicesWrapper = tw.section`
    py-24
    relative 
    w-full 
    flex 
    justify-center 
    items-center 
    bg-background
`;

export const ServicesContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const HeadingContainer = tw.div`
    text-[tan]
    text-6xl 
    font-bebas
`;

export const ContentContainer = tw.div`
    grid
    grid-cols-1
    sm:grid-cols-2 
    md:grid 
    xl:grid-cols-3 
    gap-3  
`;

export const ElementContainer = tw.div`
    text-white 
    text-[1.25rem] 
    flex 
    flex-col
    justify-between  
    gap-3 
    col-span-2 
    xl:col-span-1 
    p-6 
    border-white 
    border 
    rounded-xl
    mb-4
`;

export const ElementHeading = tw.h2`
    text-[tan] 
    text-xl 
    font-bold 
    font-bebas
`;

export const CTALink = tw(Link)`
    border 
    border-white/50 
    font-bebas
    text-[tan] 
    text-xl 
    text-center 
    hover:bg-white 
    hover:text-black
    rounded-lg
    my-4
`;
