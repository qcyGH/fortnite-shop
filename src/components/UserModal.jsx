import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import { useAuth } from '../hooks/useAuth'

export function UserModal(props) {
    const location = useLocation()
    const { user, signout } = useAuth()
    const { show, closeModalOutside, closeModal } = props
    const rootUserModal = useRef(null)

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
                            <button onClick={() => signout()} className='mt-4 text-zinc-700 leading-none hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                                Sign out
                            </button>
                        </div> : <Link className='opacity-100 pr-6 text-zinc-700 leading-none hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150' to='/login' state={{from: location}}>
                                    Login
                        </Link>
            }
            <span className='absolute top-1 right-1 flex'>
                <IconButton
                    aria-label='close modal'
                    style={{padding: 11}}
                    onClick={(e) => closeModal(e)}
                    icon={<CloseIcon w={10} h={10}/>}
                >
                </IconButton>
            </span>
        </div>
    )
}