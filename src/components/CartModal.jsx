import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconButton, CloseButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { removeItem } from '@/store/shopSlice'

import useSound from 'use-sound'
import Image from 'next/image'

export function CartModal(props) {
    const { items = [], show, closeModalOutside, closeModal } = props
    const [totalPrice, setTotalPrice] = useState(0)
    const rootCartModal = useRef(null)

    const calcTotalPrice = () => {
        let newTotalPrice = 0

        items.forEach(item => {
            newTotalPrice += item.finalPrice * item.quantity
        })

        setTotalPrice(newTotalPrice)
    }

    useEffect(() => {
        calcTotalPrice()
    }, [items])

    useEffect(() => {
        if (!show) return

        const handleClick = (e) => {
            if (!rootCartModal.current) return
            if (!rootCartModal.current.contains(e.target)) {
                closeModalOutside(e)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [rootCartModal, show, closeModal])

    const dispatch = useDispatch()

    const [playSound] = useSound(
        '/sounds/sine-click.mp3',
        { volume: 0.5 }
    )

    if (!show) return null

    return (
        <div ref={rootCartModal}
            className=' absolute bottom-[-1rem] right-0 translate-y-[100%] w-max p-2 pr-4
                        bg-zinc-300/90 dark:bg-zinc-800/90 rounded-md backdrop-blur-xl backdrop-saturate-150
                        shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50
                        text-zinc-900 dark:text-zinc-200
                        transition-color duration-300
            '>
            {
                items.length > 0
                ? <div className='flex flex-col items-end pt-5 pb-2'>
                    <div>
                        {
                            items.map(item => (
                                <div key={item.id} className='flex relative py-4 px-4 pr-12'>
                                    <div className='bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 overflow-hidden rounded-md transition-color duration-100'>
                                        <Image
                                            src={item.image || item.items[0].images.featured}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <div className='flex flex-col pl-3 pr-4 py-2'>
                                        <span>{item.name}</span>
                                        <span className='text-sm opacity-75'>{item.finalPrice} V-Bucks</span>
                                    </div>
                                    <IconButton
                                        aria-label='Remove item'
                                        bg='rgb(159, 18, 57)'
                                        _active={{ bg: 'rgb(136, 19, 55)' }}
                                        _hover={{ bg: 'rgb(136, 19, 55)' }}
                                        minW={0}
                                        w={10}
                                        h={10}
                                        position='absolute'
                                        icon={<CloseIcon w={3} h={3}/>}
                                        className='text-zinc-200 rounded-md top-0 right-0 translate-y-[43%]'
                                        onClick={() =>  {
                                            playSound()
                                            dispatch(removeItem(item.id))
                                        }}
                                    >
                                    </IconButton>
                                </div>
                            ))
                        }
                    </div>
                    <span className='opacity-75 block text-right pr-2'>Total price: {totalPrice}</span>
                    <Link
                        href='/cart'
                        className='w-max opacity-100 text-slate-100 bg-orange-600 mt-6 px-6 py-2 my-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200'
                    >
                        Open Cart
                    </Link>
                </div>
                : <span className='pr-8'>Cart is empty</span>
            }
            <span className='absolute top-2 right-3 flex'>
                <CloseButton
                    size='sm'
                    bg='transparent'
                    _active={{ bg: 'transparent' }}
                    _hover={{ bg: 'transparent' }}
                    w='10px' h='10px'
                    p='13px'
                    aria-label='close modal'
                    onClick={(e) => closeModal(e)}
                >
                </CloseButton>
            </span>
        </div>
    )
}