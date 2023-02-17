import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Icon, IconButton } from '@chakra-ui/react'
import { CartModal } from './CartModal'

import useSound from 'use-sound'


export function Cart(props) {
    const orderList = useSelector(state => state.shop.orderList)
    const [showModal, setShowModal] = useState(false)
    const cartRef = useRef(null)

    const [playSound] = useSound(
        '/sounds/sine-click.mp3',
        { volume: 0.5 }
    )

    const CartIcon = (props) => (
        <Icon viewBox='0 0 18 17' {...props}>
          <path
           fill='currentColor'
           d='M0 1.43272C0 1.8271 0.33038 2.16244 0.715614 2.16244H3.15739L4.35805 10.3854C4.52913 11.5471 5.14929 12.2631 6.32857 12.2631H15.3484C15.7105 12.2631 16.0311 11.9817 16.0311 11.5788C16.0311 11.1773 15.7105 10.8987 15.3484 10.8987H6.50073C6.12324 10.8987 5.8911 10.6306 5.83252 10.2277L5.71134 9.42528H15.4057C16.5886 9.42528 17.2115 8.70566 17.3812 7.53352L17.9662 3.63693C17.9817 3.53202 18 3.40246 18 3.316C18 2.87435 17.6861 2.56427 17.1582 2.56427H4.72375L4.5911 1.71274C4.50246 1.0464 4.23113 0.709351 3.37248 0.709351H0.715614C0.33038 0.709351 0 1.0433 0 1.43272ZM5.61078 14.7931C5.61078 15.5456 6.21049 16.1361 6.96023 16.1361C7.70637 16.1361 8.30189 15.5456 8.30189 14.7931C8.30189 14.0497 7.70637 13.4514 6.96023 13.4514C6.21049 13.4514 5.61078 14.0497 5.61078 14.7931ZM12.7772 14.7931C12.7772 15.5456 13.3819 16.1361 14.1253 16.1361C14.8764 16.1361 15.4733 15.5456 15.4733 14.7931C15.4733 14.0497 14.8764 13.4514 14.1253 13.4514C13.3819 13.4514 12.7772 14.0497 12.7772 14.7931Z'/>
        </Icon>
    )

    const closeModalOutside = (e) => {
        if (!e.composedPath().includes(cartRef.current)) {
            setShowModal(false)
        }
    }

    const closeModal = () => {
        if (showModal) {
            setShowModal(false)
        }
    }

    return (
        <div className='relative'>
            <span className='flex items-center p-2' ref={cartRef}>
                <IconButton
                    bg='transparent'
                    _active={{ bg: 'transparent' }}
                    _hover={{ bg: 'transparent' }}
                    minW={4}
                    w='18px'
                    h='18px'
                    aria-label='cart'
                    onClick={() => {
                        playSound()
                        setShowModal((prevState) => !prevState)
                    }}
                    className='text-zinc-900 dark:text-zinc-100'
                    icon={
                        <CartIcon w={18} h={17} />
                    }
                >
                </IconButton>
                {
                    orderList.length > 0 && <span className='text-zinc-200 inline-block text-xs text-center align-middle font-medium rounded-full bg-violet-800 w-4 h-4 absolute top-0 right-[-2px]'>
                        { orderList.length }
                    </span>
                }
            </span>
            <CartModal show={showModal} closeModal={closeModal} closeModalOutside={closeModalOutside} items={orderList} />
        </div>
    )
}