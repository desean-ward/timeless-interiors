import tw from 'tailwind-styled-components' 

export const GalleryWrapper = tw.section`
    py-24 
    overflow-hidden 
    relative
    w-full 
    flex
    justify-center 
    items-center
`

export const GalleryContainer = tw.div`
    px-6 
    sm:px-24 
    size-full
`
export const ImagesContainer = tw.div`
    grid
    grid-cols-1 
    grid-flow-row-dense 
    gap-6 
    sm:grid-cols-2 
    md:grid-cols-4
`