import tw from "tailwind-styled-components";
import { Button } from "../ui/button";

export const BlogWrapper = tw.section`
    py-24
    overflow-hidden 
    relative
    w-full 
    flex
    justify-center 
    items-center
    text-black
`;

export const BlogContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const BlogTitle = tw.h1`
    text-[tan] 
    text-6xl 
    font-bebas
    text-balance
`;

export const BlogContent = tw.div`
    grid 
    justify-between 
    w-full 
    gap-6
    grid-cols-1 
    md:grid-cols-2
    lg:grid-cols-3
`;

export const ReadMoreBtn = tw(Button)`
    w-full 
    mt-7 
    font-bebas 
    text-[tan] 
    text-lg 
    hover:bg-white
    hover:text-black 
    hover:border 
    hover:shadow-2xl 
    hover:shadow-black
`;

export const PostHeader = tw.div`
    relative
    flex 
    flex-col 
    mb-6
    line-clamp-1
    -mt-8
    text-balance
`;

export const PostSubHeader = tw.div`
    relative
    flex 
    gap-2 
    w-full
    text-sm
    -mt-4
    italic
`;

export const SmallDescription = tw.div`
    line-clamp-2 
    text-md 
    text-black
    mt-2
    mb-auto 
`;

export const ImageContainer = tw.div`
    h-[250px] 
    w-full 
    relative 
    overflow-hidden
`;
