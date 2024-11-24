import Link from "next/link";
import tw from "tailwind-styled-components";

export const ServicesWrapper = tw.section`
    py-24
    relative 
    w-full 
    flex 
    justify-center 
    items-center 
    bg-[#0A0A0A]
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
`;

export const ElementHeading = tw.h2`
    text-[tan] 
    text-xl 
    font-bold 
    font-bebas
`;

export const CTALink = tw(Link)`
    border 
    border-white 
    font-bebas
    text-[tan] 
    text-xl 
    text-center 
    hover:bg-white 
    hover:text-black
    rounded-xl
    my-4
`;
