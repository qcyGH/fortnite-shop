import React, { useState, useEffect } from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'

import { removeItem, changeQuantity } from '@/store/shopSlice'
import { useDispatch } from 'react-redux'

import useSound from 'use-sound'
import Image from 'next/image'

export function CartItem(props) {
    const { item } = props
    const {
        name,
        image,
        id,
        description,
        finalPrice,
        quantity,
    } = item

    const [count, setCount] = useState(quantity)

    useEffect(() => {
        if (count > 0) {
            dispatch(changeQuantity({item, count}))
        } else {
            setCount(1)
        }

    }, [count])

    const dispatch = useDispatch()

    const [playSound] = useSound(
        '/sounds/sine-click.mp3',
        { volume: 0.5 }
    )

    return (
        <div className='relative flex flex-col md:flex-row justify-between px-3 py-2 mb-4 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
            <div className='flex flex-col md:flex-row'>
                <div className='overflow-hidden bg-transparent rounded-md aspect-none'>
                    <Image
                        className='object-cover object-center w-64 p-3'
                        src={image}
                        alt={name}
                        width={256}
                        height={256}
                    />
                </div>
                <div className='mt-4'>
                    <h3 className='pl-2 pr-4 py-1 transition-color duration-100'>
                        {name}
                    </h3>
                    <span className='opacity-60 pl-2 pr-4 py-1 rounded-md transition-color duration-100'>
                        {description}
                    </span>
                </div>
            </div>
            <div className='flex flex-col mt-4 mb-20 lg:mb-0'>
                <div className='pl-2 pr-4 py-1 bg-zinc-400/30 dark:bg-zinc-700/30 hover:bg-zinc-400/50 dark:hover:bg-zinc-700/50 rounded-md transition-color duration-100'>
                    {finalPrice} * {quantity} = {finalPrice * quantity}
                </div>
                <div className='mt-2 relative bg-zinc-400/30 dark:bg-zinc-700/30 hover:bg-zinc-400/50 dark:hover:bg-zinc-700/50 rounded-md transition-color duration-100'>
                    <input onChange={(e) => setCount(e.target.value)}
                        className='pl-2 pr-4 py-1 border-none outline-none focus:ring-transparent bg-transparent transition-color duration-100'
                        type="text" name="quantity" value={count}
                    />
                    <div className='flex absolute top-[50%] translate-y-[-50%] right-4'>
                        <IconButton
                            aria-label='Decrement count'
                            bg='transparent'
                            _active={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                            minW={0} w={5} h={5}
                            icon={<MinusIcon boxSize={3} />}
                            onClick={() => {
                                playSound()
                                setCount((prevCount) => prevCount-1)
                            }}
                        >
                        </IconButton>
                        <IconButton
                            aria-label='Increment count'
                            bg='transparent'
                            _active={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                            minW={0} w={5} h={5}
                            className='ml-1'
                            icon={<AddIcon boxSize={3} />}
                            onClick={() => {
                                playSound()
                                setCount((prevCount) => prevCount+1)
                            }}
                        >
                        </IconButton>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                playSound()
                dispatch(removeItem(id))
            }}
                    className='absolute bottom-6 right-3 h-9 px-4 py-1 text-zinc-200 bg-rose-800 hover:bg-rose-900 rounded-md'
            >
                Delete
            </button>
        </div>
    )
}

export function CartItemSlider(props) {
    const { item } = props
    const {
        items,
        id,
        finalPrice,
        quantity,
    } = item

    const [count, setCount] = useState(quantity)

    useEffect(() => {
        if (count > 0) {
            dispatch(changeQuantity({item, count}))
        } else {
            setCount(1)
        }

    }, [count])

    const [playSound] = useSound(
        '/sounds/sine-click.mp3',
        { volume: 0.5 }
    )

    const dispatch = useDispatch()

    return (
        <div className='cart__item relative flex flex-col md:flex-row justify-between px-3 py-2 mb-4 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
            <Swiper
                    className='max-w-[512px]'
                    modules={[Navigation, Pagination, Autoplay, Mousewheel]}
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
                        <div className='flex flex-col md:flex-row'>
                            <div className='overflow-hidden bg-transparent rounded-md aspect-none'>
                                <Image
                                    className='object-cover object-center w-64 p-3'
                                    src={item.images.featured || item.images.icon}
                                    alt={item.name}
                                    width={256}
                                    height={256}
                                />
                            </div>
                            <div className='mt-4'>
                                <h3 className='pl-2 pr-4 py-1 transition-color duration-100'>
                                    {item.name}
                                </h3>
                                <span className='opacity-60 pl-2 pr-4 py-1 rounded-md transition-color duration-100'>
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }

            </Swiper>
            <div className='flex flex-col mt-4 mb-20 lg:mb-0'>
                <div className='pl-2 pr-4 py-1 bg-zinc-400/30 dark:bg-zinc-700/30 hover:bg-zinc-400/50 dark:hover:bg-zinc-700/50 rounded-md transition-color duration-100'>
                    {finalPrice} * {quantity} = {finalPrice * quantity}
                </div>
                <div className='mt-2 relative bg-zinc-400/30 dark:bg-zinc-700/30 hover:bg-zinc-400/50 dark:hover:bg-zinc-700/50 rounded-md transition-color duration-100'>
                    <input onChange={(e) => setCount(e.target.value)}
                        className='pl-2 pr-4 py-1 border-none outline-none focus:ring-transparent bg-transparent transition-color duration-100'
                        type="text" name="quantity" value={count}
                    />
                    <div className='flex absolute top-[50%] translate-y-[-50%] right-4'>
                        <IconButton
                            aria-label='Decrement count'
                            bg='transparent'
                            _active={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                            minW={0} w={5} h={5}
                            icon={<MinusIcon boxSize={3} />}
                            onClick={() => {
                                playSound()
                                setCount((prevCount) => prevCount-1)
                            }}
                        >
                        </IconButton>
                        <IconButton
                            aria-label='Increment count'
                            bg='transparent'
                            _active={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                            minW={0} w={5} h={5}
                            className='ml-1'
                            icon={<AddIcon boxSize={3} />}
                            onClick={() => {
                                playSound()
                                setCount((prevCount) => prevCount+1)
                            }}
                        >
                        </IconButton>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                playSound()
                dispatch(removeItem(id))
            }}
                    className='absolute bottom-6 right-3 h-9 px-4 py-1 text-zinc-200 bg-rose-800 hover:bg-rose-900 rounded-md'
            >
                Delete
            </button>
        </div>
    )
}