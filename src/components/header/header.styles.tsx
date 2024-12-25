import Link from "next/link";
import tw from "tailwind-styled-components";

export const HeaderWrapper = tw.header<{ $bgColor: string }>`
    fixed
    top-0
    left-0
    flex 
    justify-between 
    items-center 
    px-4
    md:px-12 
    z-40 
    w-full
    py-4
    bg-red-400
    ${({ $bgColor }) => $bgColor}
    transition-colors 
    duration-1000
    backdrop-blur-lg
`;

export const HeaderContainer = tw.div`
    relative 
    flex 
    justify-between
    items-center 
    border-b
    mx-auto
    z-[9999]
`;

export const LinksContainer = tw.ul`
    flex
    flex-col
    gap-6 
    justify-center 
    items-center
    lg:flex-row 
    absolute 
    lg:relative 
    top-1/2 
    lg:top-0
    -left-4
    md:-left-10
    lg:left-0
    transition-colors
    duration-300 
    w-screen 
    h-screen 
    lg:h-fit 
    lg:w-fit 
    bg-transparent 
    mx-auto
`;

export const MobileMenuContainer = tw.section`
    fixed 
    bg-background
    top-0 
    w-screen 
    h-screen 
    z-50 
    flex 
    flex-col 
    justify-center 
    items-center 
    gap-6 
    transition-colors
    duration-300 
`;

export const MobileMenuButton = tw.button`
    text-white 
    hover:text-[tan]
    lg:hidden 
    z-20 
    relative
`;

export const ContactUsButton = tw(Link)`
    relative 
    right-0
    font-bebas 
    rounded-xl 
    px-6
    text-[tan] 
    text-lg
    border
    hover:bg-white 
    hover:text-black 
    hover:duration-300
    opacity-0 
    lg:opacity-100
`;

export const BackToTopBtn = tw.div`
    fixed
    bottom-0
    right-[2rem]
    cursor-pointer
    duration-300
    z-50
    opacity-0
`;
