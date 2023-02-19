import React from 'react'
import useSound from 'use-sound'
import { useDispatch } from 'react-redux'
import { addItem } from '@/store/shopSlice'
import Image from 'next/image'

import { BundleModal } from './BundleModal'

import { useToast } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/mousewheel'

export function Card(props) {
    const {
        id,
        name,
        description,
        images,
        image,
        bundle,
        finalPrice,
    } = props

    const item = {
        name: name,
        image: image || images.featured || images.icon,
        id: id,
        description: description,
        finalPrice: finalPrice
    }

    const dispatch = useDispatch()
    const notification = useToast()

    const [playSound] = useSound(
        '/sounds/sine-click.mp3',
        { volume: 0.5 }
    )

    const showNotification = (name) => {
        notification({
            title: `Successful added ${name} to cart`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
            <div className='relative bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 w-max h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in'>
                <div className='overflow-hidden rounded-t-md rounded-b bg-zinc-200 dark:bg-zinc-800 aspect-none transition-all duration-150 ease-in'>
                    <Image
                        className='object-cover object-center w-72'
                        src={image || images.featured || images.icon}
                        alt={name}
                        width={288}
                        height={288}
                    />
                </div>
                <div className='flex flex-col justify-between max-w-[264px] p-3'>
                        <h3 className='text-sm text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            {name}
                        </h3>
                        {
                            bundle ? <BundleModal
                                        title={description}
                                        items={bundle}
                                    /> : <span className='text-sm text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in break-words opacity-[0.60]'>
                                            { description }
                                        </span>
                        }
                        <button
                            onClick={() => {
                                playSound()
                                showNotification(name)
                                dispatch(addItem({item}))
                            }}
                            className='flex flex-col place-self-center group relative overflow-hidden text-gray-100 bg-gray-800 dark:text-gray-900 dark:bg-gray-300 px-10 pt-5 pb-1 mt-4 mb-2 rounded-md hover:pt-3 hover:pb-3 active:scale-90 transition-all ease duration-200'
                            >
                            <span className='text-sm text-gray-200 bg-green-700 w-[101%] absolute top-0 left-[50%] translate-x-[-50%] group-hover:translate-y-[-100%] transition-transform ease- duration-200'>
                                {finalPrice} V-Bucks
                            </span>
                            BUY
                        </button>
                </div>
            </div>
    )
}

export function CardSlider(props) {
    const {
        items,
        id,
        finalPrice,
    } = props

    const { name } = items[0]

    const item = {
        name: name,
        items: items,
        id: id,
        finalPrice: finalPrice,
    }

    const dispatch = useDispatch()
    const notification = useToast()

    const [playSound] = useSound(
        '/sounds/sine-click.mp3',
        { volume: 0.5 }
    )

    const showNotification = (name) => {
        notification({
            title: `Successful added ${name} to cart`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
            <div className='flex flex-col relative max-w-[288px] justify-between bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 w-max h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in'>
                <Swiper
                    className='max-w-[288px]'
                    modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                    direction='horizontal'
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                    }}
                    mousewheel
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        items.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className='overflow-hidden rounded-t-md rounded-b p-3 bg-zinc-200 dark:bg-zinc-800 aspect-none transition-all duration-150 ease-in'>
                                    <Image
                                        className='object-cover object-center w-72 rounded-md'
                                        src={item.images.featured || item.images.icon}
                                        alt={item.name}
                                        width={288}
                                        height={288}
                                    />
                                </div>
                                <div className='flex flex-col p-3'>
                                        <h3 className='text-sm text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                                            {item.name}
                                        </h3>
                                        <span className="text-sm text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in break-words opacity-[0.60]">
                                            {item.description}
                                        </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <button
                    onClick={() => {
                        playSound()
                        showNotification(name)
                        dispatch(addItem({item}))
                    }}
                    className='flex flex-col place-self-center group relative overflow-hidden text-gray-100 bg-gray-800 dark:text-gray-900 dark:bg-gray-300 px-10 pt-5 pb-1 mt-4 mb-5 rounded-md hover:pt-3 hover:pb-3 active:scale-90 transition-all ease duration-200'
                    >
                    <span className='text-sm text-gray-200 bg-green-700 w-[101%] absolute top-0 left-[50%] translate-x-[-50%] group-hover:translate-y-[-100%] transition-transform ease- duration-200'>
                        {finalPrice} V-Bucks
                    </span>
                    BUY
                </button>
            </div>
    )
}