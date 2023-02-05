import React, { useState, useEffect, useContext } from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { StoreProvider } from '../hoc/StoreProvider'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper'

export function CartItem(props) {
    const { removeItem, changeQuantity } = useContext(StoreProvider)
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
            changeQuantity(item, count)
        } else {
            setCount(1)
        }

    }, [count])

    return (
        <div className='relative flex flex-col md:flex-row justify-between px-3 py-2 mb-4 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
            <div className='flex'>
                <div className='overflow-hidden bg-transparent aspect-none'>
                    <img
                        src={image}
                        alt={name}
                        className='object-cover object-center w-64 p-3'
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
                            icon={<MinusIcon boxSize={12}/>}
                            onClick={() => setCount((prevCount) => prevCount-1)}
                        >
                        </IconButton>
                        <IconButton
                            aria-label='Increment count'
                            className='ml-4'
                            icon={<AddIcon boxSize={12}/>}
                            onClick={() => setCount((prevCount) => prevCount+1)}
                        >
                        </IconButton>
                    </div>
                </div>
            </div>
            <button onClick={() => removeItem(id)}
                    className='absolute bottom-6 right-3 h-9 px-4 py-1 text-zinc-200 bg-rose-800 hover:bg-rose-900 rounded-md'
            >
                Delete
            </button>
        </div>
    )
}

export function CartItemSlider(props) {
    const { removeItem, changeQuantity } = useContext(StoreProvider)
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
            changeQuantity(item, count)
        } else {
            setCount(1)
        }

    }, [count])

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
                        <div className='flex'>
                            <div className='overflow-hidden bg-transparent aspect-none'>
                                {
                                    item.images?.featured ? <img
                                        src={item.images.featured}
                                        alt={item.name}
                                        className='object-cover object-center w-64 p-3'
                                    /> : <img
                                        src={item.images.icon}
                                        alt={item.name}
                                        className='object-cover object-center w-64 p-3'
                                    />
                                }
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
                            aria-label='Increment count'
                            icon={<MinusIcon w={12} h={12}/>}
                            onClick={() => setCount((prevCount) => prevCount-1)}
                        >
                        </IconButton>
                        <IconButton
                            aria-label='Increment count'
                            className='ml-4'
                            icon={<AddIcon w={12} h={12}/>}
                            onClick={() => setCount((prevCount) => prevCount+1)}
                        >
                        </IconButton>
                    </div>
                </div>
            </div>
            <button onClick={() => removeItem(id)}
                    className='absolute bottom-6 right-3 h-9 px-4 py-1 text-zinc-200 bg-rose-800 hover:bg-rose-900 rounded-md'
            >
                Delete
            </button>
        </div>
    )
}