import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

export default function FAQ() {

    return (
        <>
            <h1 className='text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                    FAQ
            </h1>

            <Accordion className='mt-10 shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 rounded-lg overflow-hidden' defaultIndex={[0]} allowMultiple>
                <AccordionItem className='bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 hover:dark:bg-zinc-700 border-none px-5 py-1 transition-all duration-150 ease-in'>
                    <h2>
                        <AccordionButton className='text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            <Box className='text-lg text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in' as="span" flex='1' textAlign='left'>
                                Is it official Epic shop?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-base text-gray-600 dark:text-gray-300 mt-2 transition-color duration-150 ease-in' pb={4}>
                        No, It`s just a my own project to practice React, Redux Toolkit, API and SPA. Enjoy that ^_~
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 hover:dark:bg-zinc-700 border-none px-5 py-1 transition-all duration-150 ease-in'>
                    <h2>
                        <AccordionButton className='text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            <Box className='text-lg text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in' as="span" flex='1' textAlign='left'>
                                GitHub page?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-base text-gray-600 dark:text-gray-300 mt-2 transition-color duration-150 ease-in' pb={4}>
                        <a href='https://github.com/qcyGH/fortnite-shop'>
                            https://github.com/qcyGH/fortnite-shop
                        </a>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 hover:dark:bg-zinc-700 border-none px-5 py-1 transition-all duration-150 ease-in'>
                    <h2>
                        <AccordionButton className='text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            <Box className='text-lg text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in' as="span" flex='1' textAlign='left'>
                                API page?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-base text-gray-600 dark:text-gray-300 mt-2 transition-color duration-150 ease-in' pb={4}>
                        <a href='https://fortnite-api.com/'>
                            https://fortnite-api.com/
                        </a>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 hover:dark:bg-zinc-700 border-none px-5 py-1 transition-all duration-150 ease-in'>
                    <h2>
                        <AccordionButton className='text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            <Box className='text-lg text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in' as="span" flex='1' textAlign='left'>
                                Is it shop working?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-base text-gray-600 dark:text-gray-300 mt-2 transition-color duration-150 ease-in' pb={4}>
                        No, only frontend ❤️
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 hover:dark:bg-zinc-700 border-none px-5 py-1 transition-all duration-150 ease-in'>
                    <h2>
                        <AccordionButton className='text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                            <Box className='text-lg text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in' as="span" flex='1' textAlign='left'>
                                Does the site collect any information about me?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-base text-gray-600 dark:text-gray-300 mt-2 transition-color duration-150 ease-in' pb={4}>
                        No, i don`t need it 〜(￣▽￣〜)
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}