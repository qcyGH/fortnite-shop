import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Icon,
    IconButton,
    ChakraProvider,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { Link, NavLink } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'
import { User } from './User'


export function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const CartIcon = (props) => (
        <Icon viewBox='0 0 18 17' {...props}>
          <path
           fill='currentColor'
           d='M0 1.43272C0 1.8271 0.33038 2.16244 0.715614 2.16244H3.15739L4.35805 10.3854C4.52913 11.5471 5.14929 12.2631 6.32857 12.2631H15.3484C15.7105 12.2631 16.0311 11.9817 16.0311 11.5788C16.0311 11.1773 15.7105 10.8987 15.3484 10.8987H6.50073C6.12324 10.8987 5.8911 10.6306 5.83252 10.2277L5.71134 9.42528H15.4057C16.5886 9.42528 17.2115 8.70566 17.3812 7.53352L17.9662 3.63693C17.9817 3.53202 18 3.40246 18 3.316C18 2.87435 17.6861 2.56427 17.1582 2.56427H4.72375L4.5911 1.71274C4.50246 1.0464 4.23113 0.709351 3.37248 0.709351H0.715614C0.33038 0.709351 0 1.0433 0 1.43272ZM5.61078 14.7931C5.61078 15.5456 6.21049 16.1361 6.96023 16.1361C7.70637 16.1361 8.30189 15.5456 8.30189 14.7931C8.30189 14.0497 7.70637 13.4514 6.96023 13.4514C6.21049 13.4514 5.61078 14.0497 5.61078 14.7931ZM12.7772 14.7931C12.7772 15.5456 13.3819 16.1361 14.1253 16.1361C14.8764 16.1361 15.4733 15.5456 15.4733 14.7931C15.4733 14.0497 14.8764 13.4514 14.1253 13.4514C13.3819 13.4514 12.7772 14.0497 12.7772 14.7931Z'/>
        </Icon>
    )

    return (
        <ChakraProvider>
            <IconButton
                position='absolute'
                bg='transparent'
                _active={{ bg: 'transparent' }}
                _hover={{ bg: 'transparent' }}
                display={{ sm: 'inline-block', md: 'none'}}
                className='absolute top-[50%] right-5 translate-y-[-50%] text-zinc-100 dark:text-zinc-900'
                ref={btnRef}
                onClick={onOpen}
                icon={<HamburgerIcon className='bg-purple-700 p-[10px] rounded-md' boxSize='40px'/>}
            />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent className='bg-zinc-200/90 dark:bg-zinc-900/90 backdrop-blur-xl backdrop-saturate-150'>
                    <DrawerCloseButton className='text-zinc-900/90 dark:text-zinc-200/90 p-5'/>
                    <DrawerHeader fontSize='1.875rem' className='text-zinc-700 dark:text-zinc-300 ease-in transition-color duration-150'>Menu</DrawerHeader>

                    <DrawerBody>
                        <ul className='flex flex-col text-lg'>
                            <li className='mb-4'>
                                <NavLink to='/' end className='block text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='mb-4'>
                                <NavLink to='/news' end className='block text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                                    News
                                </NavLink>
                            </li>
                            <li className='mb-4'>
                                <NavLink to='/cart' className='block text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                                    Cart
                                </NavLink>
                            </li>
                            <li className='mb-4'>
                                <NavLink to='/faq' className='block text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </DrawerBody>

                    <DrawerFooter>
                        <ul className='flex items-center'>
                            <li className='flex items-center justify-center w-10 h-10 mr-2'>
                                <User />
                            </li>
                            <li className='flex items-center justify-center w-10 h-10 mr-2'>
                                <Link className='opacity-100' to='/cart'>
                                    <CartIcon className='text-zinc-900 dark:text-zinc-100' w={18} h={17} />
                                </Link>
                            </li>
                            <li className='flex items-center justify-center w-10 h-10'>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </ChakraProvider>
    )

}