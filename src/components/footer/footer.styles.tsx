import tw from "tailwind-styled-components";

export const FooterContainer = tw.div`
    px-6 
    sm:px-24 
    overflow-hidden 
    size-full
`;

export const FooterContent = tw.div`
    size-full 
    justify-center 
    items-center 
    flex 
    flex-col 
    mb-6 
    sm:mb-0
`;

export const LinksContainer = tw.ul`
    flex 
    justify-center 
    md:flex-row
    flex-col
    items-center 
    gap-6
    mt-8
`;

export const FooterLink = tw.li`
    flex 
    items-center
    gap-3 
    border
    border-white 
    hover:bg-white 
    text-lg
    md:text-base
    text-white 
    hover:text-black 
    duration-300 
    mx-3 
    rounded-xl
    px-8 
    py-1
`;

export const SocialLinks = tw.ul`
    flex 
    gap-[10px]
`;

export const FooterBottom = tw.div`
    w-full
    flex 
    flex-col
    gap-4
    pb-24
`;

export const FooterInfo = tw.div`
    w-full
    relative
    flex 
    flex-col 
    items-start
    lg:flex-row
    lg:justify-around
    lg:items-center
    py-6
    gap-8
    top-32 
    border-t
`;

export const FooterColumn = tw.div`
    flex 
    flex-col 
    justify-start
`;

export const NavLinks = tw.ul`
    flex 
    flex-wrap
    gap-[10px]
`;
