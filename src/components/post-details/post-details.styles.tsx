import tw from "tailwind-styled-components";

export const PostDetailsWrapper = tw.section`
    py-24 
    overflow-hidden 
    relative
    w-full 
    flex
    justify-center 
    items-center
`;

export const PostDetailsContainer = tw.div`
    px-6 
    sm:px-24 
    w-full
`;

export const PostCategoryWrapper = tw.div`
    flex 
    flex-col 
    w-full
`;

export const PostCategoryContainer = tw.div`
    flex 
    flex-wrap
`;

export const PostCategory = tw.p`
    border-2 
    border-white 
    rounded-full 
    px-6 
    py-2
`;

export const PostTitle = tw.h1`
    text-3xl 
    text-[tan] 
    font-bebas 
    leading-none
`;

export const AuthorAndDateContainer = tw.div`
    w-full 
    flex 
    justify-center 
    md:justify-start 
    gap-2 
    text-white 
    italic 
    border-b 
    border-white/20
    pb-2 
    mt-2 
    items-start 
    sm:items-center
`;

export const PostContent = tw.div`
    text-white 
    max-w-none 
    flex justify-center 
    font-semibold 
    md:justify-start 
    flex-col mt-8 
    prose 
    prose-xl 
    prose-strong:text-[tan]  
    prose-headings:text-[tan]
    prose-a:text-blue-500
    prose-a:no-underline
    prose-ul:-mt-4 
    dark:prose-invert
`;
