import tw from 'tailwind-styled-components' 

export const InfoSection1Wrapper = tw.section`
    bg-white 
    text-black
    py-6 
    sm:py-24 
    h-fit 
    sm:h-[50vh] 
    sm:max-h-screen
    relative 
    flex 
    justify-center 
    items-center
`

export const InfoSection1Container = tw.div`
    px-6 
    sm:px-24 
    size-full
`

export const InfoSectionContent = tw.div`
    flex 
    xl:flex-row 
    gap-6 
    xl:gap-64 
    flex-col 
    h-full 
    justify-center 
    xl:items-center
`

export const LeftContent = tw.div`
    flex 
    flex-col 
    h-full 
    justify-center 
    xl:justify-start 
    xl:gap-12 
    xl:text-center
`

export const RightContent = tw.div`
    flex 
    flex-col 
    gap-3 
    items-start 
    sm:gap-9 
    xl:w-2/4
`

export const DetailsButton = tw.button`
    border-2 
    hover:bg-black 
    hover:text-white 
    duration-300 
    font-bebas 
    pt-1 
    border-black 
    rounded-full 
    px-6 
    font-bold 
    py-1
`