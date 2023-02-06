import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import useSound from 'use-sound'
import clickSfx from '.././sounds/sine-click.mp3'

export function ThemeSwitcher() {
    const [htmlBlock, setHtmlBlock] = useState(document.documentElement)
    const [savedUserTheme] = useState(localStorage.getItem('user-theme'))
    const [darkTheme, setDarkTheme] = useState(() => htmlBlock.classList.contains('light') ? false : true)

    const changeTheme = () => {
        // play sound click
        playSound()

        // отримуємо поточну тему
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark'
        let newTheme
        if (currentTheme === 'light') {
            newTheme = 'dark'
        } else if (currentTheme === 'dark') {
            newTheme = 'light'
        }
        // змінюємо тему
        htmlBlock.classList.remove(currentTheme)
        htmlBlock.classList.add(newTheme)

        // зберігаємо в localStorage
        localStorage.setItem('user-theme', newTheme)
    }

    // встановлюємо тему:
    // 1 випадок: якщо користувач вручну вже обирав тему
    // 2 випадок: якщо користувач нічого вручну не змінював, то буде використана тема його пристрою
    const setThemeClass = () => {
        let userTheme
        if (window.matchMedia) {
            userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }

        // якщо користувач під час перебування на сайті змінить тему пристрою, то сайт автоматично перейде
        // на таку ж тему, що і на пристрої
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (!savedUserTheme) {
                changeTheme()
            }
        })

        if (savedUserTheme) {
            htmlBlock.classList.add(savedUserTheme)
        } else {
            htmlBlock.classList.add(userTheme)
        }
    }

    // коли сторінка завантажиться, викликаємо функцію setThemeClass()
    useEffect(() => {
        setThemeClass()
    })

    useEffect(() => {
        changeTheme()

    }, [darkTheme])

    const [playSound] = useSound(
        clickSfx,
        { volume: 0.5 }
    )

    return (
        <span className='flex items-center justify-center w-[18px] h-[18px]'>
            <AnimatePresence exitBeforeEnter initial={ false }>
                <motion.div
                    className='flex items-center justify-center w-[18px] h-[18px]'
                    key={darkTheme}
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
                        onClick={() => setDarkTheme(!darkTheme)}
                        icon={
                        darkTheme === false
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