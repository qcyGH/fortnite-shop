import React, { useState, useEffect, useRef, useContext } from 'react'
import { Icon, IconButton } from '@chakra-ui/react'
import { UserModal } from './UserModal'

import useSound from 'use-sound'

export function User(props) {

    const [showModal, setShowModal] = useState(false)
    const userRef = useRef(null)

    const [playSound] = useSound(
        '/sounds/sine-click.mp3',
        { volume: 0.5 }
    )

    const UserIcon = (props) => (
        <Icon viewBox='0 0 18 18' fill='none' {...props}>
            <path stroke='currentColor' d="M3 15.75C3 13.6789 5.68629 12 9 12C12.3137 12 15 13.6789 15 15.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path stroke='currentColor' d="M9 9.75C11.0711 9.75 12.75 8.07107 12.75 6C12.75 3.92893 11.0711 2.25 9 2.25C6.92893 2.25 5.25 3.92893 5.25 6C5.25 8.07107 6.92893 9.75 9 9.75Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    )

    const closeModalOutside = (e) => {
        if (!e.composedPath().includes(userRef.current)) {

            setShowModal(false)
        }
    }

    const closeModal = () => {
        if (showModal) {
            setShowModal(false)
        }
    }

    return (
        <>
            <div className='relative'>
                <span className='flex items-center' ref={userRef}>
                    <IconButton
                        bg='transparent'
                        _active={{ bg: 'transparent' }}
                        _hover={{ bg: 'transparent' }}
                        aria-label='user'
                        onClick={() => {
                            playSound()
                            setShowModal((prevState) => !prevState)
                        }}
                        className='text-zinc-900 dark:text-zinc-100'
                        icon={
                            <UserIcon w={18} h={18} />
                        }
                    >
                    </IconButton>
                </span>
                <UserModal show={showModal} closeModal={closeModal} closeModalOutside={closeModalOutside} />
            </div>
        </>
    )

}