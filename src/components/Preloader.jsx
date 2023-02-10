import { Skeleton } from '@chakra-ui/react'

export function Preloader(props) {
    return (
        <>
            <Skeleton borderRadius='0.5rem' width='128px' height='32px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <div className='mt-3 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
            </div>
            <Skeleton mt='1.5rem' borderRadius='0.5rem' width='128px' height='32px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <div className='mt-3 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
            </div>
            <Skeleton mt='1.5rem' borderRadius='0.5rem' width='128px' height='32px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <div className='mt-3 grid justify-items-center grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' height='424px' width='288px' isLoaded={!props.isLoading} fadeDuration={1}/>
            </div>
        </>
    )
}

export function PreloaderNews(props) {
    return (
        <>
            <Skeleton borderRadius='0.5rem' width='1180px' height='664px' isLoaded={!props.isLoading} fadeDuration={1}/>
            <div className='mt-6 grid justify-items-start grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8'>
                <Skeleton borderRadius='0.5rem' width='800px' height='200px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' width='800px' height='200px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' width='800px' height='200px' isLoaded={!props.isLoading} fadeDuration={1}/>
                <Skeleton borderRadius='0.5rem' width='800px' height='200px' isLoaded={!props.isLoading} fadeDuration={1}/>
            </div>
        </>
    )
}