import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconButton, CloseButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { StoreProvider } from '../hoc/StoreProvider'

export function CartModal(props) {
    const { removeItem } = useContext(StoreProvider)
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
                ? <div className='flex flex-col items-end pb-2'>
                    <div className='grid auto-rows-max grid-cols-8 gap-x-4 gap-y-2.5 py-4 px-4'>
                        <div className='pl-1 col-span-5'>Name</div>
                        <div className='pl-1 col-span-2'>Price</div>
                        <div></div>
                        {
                            items.map(item => (
                                <>
                                    <div className='col-span-5 pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                                        {item.name}
                                    </div>
                                    <div className='col-span-2 pl-2 pr-4 py-1 bg-zinc-200/30 dark:bg-zinc-900/30 hover:bg-zinc-200/90 dark:hover:bg-zinc-900/90 rounded-md transition-color duration-100'>
                                        {item.finalPrice}
                                    </div>
                                    <IconButton
                                        aria-label='Remove item'
                                        icon={<CloseIcon w={12} h={12}/>}
                                        className='w-8 h-8 text-zinc-200 bg-rose-800 hover:bg-rose-900 rounded-md'
                                        onClick={() => removeItem(item.id)}
                                    >
                                    </IconButton>
                                </>
                            ))
                        }
                    </div>
                    <span className='opacity-75 block text-right pr-2'>Total price: {totalPrice}</span>
                    <Link
                        to='/cart'
                        className='w-max opacity-100 text-slate-100 bg-orange-600 mt-6 px-6 py-2 my-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200'
                    >
                        Open Cart
                    </Link>
                </div>
                : <span className='pr-6'>Cart is empty</span>
            }
            <span className='absolute top-1 right-1 flex'>
                <CloseButton
                    size='sm'
                    bg='transparent'
                    _active={{ bg: 'transparent' }}
                    _hover={{ bg: 'transparent' }}
                    w={10} h={10}
                    aria-label='close modal'
                    style={{padding: 11, width: 10, height: 10}}
                    onClick={(e) => closeModal(e)}
                >
                </CloseButton>
            </span>
        </div>
    )
}