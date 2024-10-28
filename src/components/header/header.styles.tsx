import tw from 'tailwind-styled-components' 


export const HeaderContainer = tw.div`
    flex 
    justify-between 
    items-center 
    py-3 
    border-b-2 
    border-white 
    w-full
`
export const LinksContainer = tw.ul`
    flex 
    flex-col 
    duration-300 
    sm:flex-row 
    absolute 
    right-0 
    bg-black 
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
`

export const MobileMenuButton = tw.button`
    text-white 
    sm:hidden 
    z-20 
    relative
`

export const ContactUsButton = tw.button`
    sm:block 
    font-bebas 
    hidden 
    border-2 
    border-white 
    rounded-full 
    px-3 
    py-1 
    text-white 
    hover:bg-white 
    hover:text-black 
    duration-300
`