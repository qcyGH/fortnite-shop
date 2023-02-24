import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import { CloseButton } from '@chakra-ui/react'
import { signout } from '@/store/userSlice'
import Login from './Login'


export function UserModal(props) {
    const user = useSelector(state => state.user.user)
    const { show, closeModalOutside, closeModal } = props
    const rootUserModal = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!show) return

        const handleClick = (e) => {
            if (!rootUserModal.current) return
            if (!rootUserModal.current.contains(e.target)) {
                closeModalOutside(e)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [rootUserModal, show, closeModal])

    if (!show) return null

    return (
        <>
            <div ref={rootUserModal}
                className='absolute bottom-10 md:bottom-[-1rem] right-0 md:translate-y-[100%] w-max py-2 pl-3 pr-4
                            bg-zinc-300/90 dark:bg-zinc-800/90 rounded-md backdrop-blur-xl backdrop-saturate-150
                            shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50
                            text-zinc-900 dark:text-zinc-200
                            transition-color duration-300
                '>
                {
                    user ? <div className='flex flex-col pr-6'>
                                <span className='text-zinc-700 leading-none hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-200 ease-in duration-150'>
                                    {user}
                                </span>
                                <button onClick={() => dispatch(signout())} className='mt-4 text-zinc-700 leading-none hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                                    Sign out
                                </button>
                            </div> : <Login />
                }
                <span className='absolute top-1 right-1'>
                    <CloseButton
                        size='sm'
                        bg='transparent'
                        _active={{ bg: 'transparent' }}
                        _hover={{ bg: 'transparent' }}
                        w='10px' h='10px' p='11px'
                        aria-label='close modal'
                        onClick={(e) => closeModal(e)}
                    >
                    </CloseButton>
                </span>
            </div>
        </>
    )
}