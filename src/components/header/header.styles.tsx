import Link from "next/link";
import tw from "tailwind-styled-components";

export const HeaderWrapper = tw.header<{ $bgColor: string }>`
    fixed
    top-0
    left-0
    flex 
    justify-between 
    items-center 
    px-12 
    z-40 
    w-full
    bg-red-400
    ${({ $bgColor }) => $bgColor}
    transition-colors 
    duration-1000
    
`;
export const HeaderContainer = tw.div`
    relative
    flex 
    justify-between 
    items-center 
    border-b
    py-3
    mx-auto
    backdrop-blur-lg 
    z-[9999]
      
`;

export const LinksContainer = tw.ul`
    flex 
    flex-col 
    transition-colors
    duration-300 
    sm:flex-row 
    absolute 
    bg-background 
    w-screen 
    h-screen 
    sm:h-fit 
    sm:w-fit 
    sm:top-0 
    sm:relative 
    sm:bg-transparent 
    gap-6 
    justify-center 
    items-center
`;

export const MobileMenuButton = tw.button`
    text-white 
    hover:text-[tan]
    md:hidden 
    z-20 
    relative
`;

export const ContactUsButton = tw(Link)`
    font-bebas 
    rounded-xl 
    px-6
    text-[tan] 
    text-lg
    border
    hover:bg-white 
    hover:text-black 
    hover:duration-300
    md:block
    lg:block 
    xs:hidden

    
`;

export const BackToTopBtn = tw.div`
    fixed
    bottom-0
    right-[2rem]
    cursor-pointer
    duration-300
    z-50
`;
