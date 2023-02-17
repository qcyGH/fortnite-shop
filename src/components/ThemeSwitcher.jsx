import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import useSound from 'use-sound'

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()

  const [playSound] = useSound(
    '/sounds/sine-click.mp3',
    { volume: 0.5 }
  )


  return (
    <span className='flex items-center justify-center w-[18px] h-[18px]'>
      <AnimatePresence mode='wait' initial={ false }>
        <motion.div
          className='flex items-center justify-center w-[18px] h-[18px]'
          key={colorMode}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            bg='transparent'
            _active={{ bg: 'transparent' }}
            _hover={{ bg: 'transparent' }}
            aria-label="Change theme"
            onClick={() => {
              playSound()
              toggleColorMode()
            }}
            icon={
            colorMode === 'light'
              ? <SunIcon w={18} h={18}/>
              : <MoonIcon w={18} h={18}/>
            }
            className='bg-transparent text-zinc-900 dark:text-zinc-100'>
          </IconButton>
        </motion.div>
      </AnimatePresence>
    </span>
  )
}