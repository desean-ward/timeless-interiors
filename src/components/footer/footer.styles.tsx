import tw from 'tailwind-styled-components' 

export const FooterContainer = tw.div`
    px-6 
    sm:px-24 
    overflow-hidden 
    size-full
`

export const FooterContent = tw.div`
    size-full 
    justify-center 
    items-center 
    flex 
    flex-col 
    mb-6 
    sm:mb-0
`

export const LinksContainer = tw.ul`
    flex 
    justify-center 
    sm:flex-row 
    items-center 
    sm:gap-6
`

export const FooterLink = tw.li`
    flex 
    gap-3 
    border-2 
    border-white 
    hover:bg-white 
    text-white 
    hover:text-black 
    duration-300 
    mx-3 
    rounded-full
    px-3 
    py-1
`