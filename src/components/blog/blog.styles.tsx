import tw from "tailwind-styled-components";

export const BlogWrapper = tw.section`
    py-24
    overflow-hidden 
    relative
    w-full 
    flex
    justify-center 
    items-center
`;

export const BlogContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`;

export const BlogContent = tw.div`
    grid 
    justify-between 
    w-full 
    gap-6
    grid-cols-1 
    md:grid-cols-2
    lg:grid-cols-3
    cursor-pointer
`;

export const BlogPost = tw.div`
    w-full 
    col-span-1 
    group 
    shrink-0 
    border 
    px-3 
    py-2
    rounded-xl
`;

export const PostHeader = tw.div`
    flex 
    flex-col 
    mb-6
`;

export const PostSubHeader = tw.div`
    flex 
    justify-between 
    w-full
    text-white 
    text-sm
`;

export const ImageContainer = tw.div`
    h-[250px] 
    w-full 
    relative 
    overflow-hidden
`;