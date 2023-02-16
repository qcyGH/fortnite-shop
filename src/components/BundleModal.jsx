import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function BundleModal(props) {

    const [showModal, setShowModal] = useState(false)
    const bundleRef = useRef(null)
    const rootBundleModal = useRef(null)

    const { title, items } = props

    const closeModalOutside = (e) => {
        if (!e.composedPath().includes(bundleRef.current)) {
            setShowModal(false)
        }
    }

    const closeModal = () => {
        if (showModal) {
            setShowModal(false)
        }
    }

    useEffect(() => {
        if (!showModal) return

        const handleClick = (e) => {
            if (!rootBundleModal.current) return
            if (!rootBundleModal.current.contains(e.target)) {
                closeModalOutside(e)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [rootBundleModal, showModal, closeModal])

    return (
        <div ref={bundleRef} className='relative text-sm transition-color duration-150 ease-in break-words'>
            <button
             onClick={() => setShowModal((prevState) => !prevState)}
             className='bg-indigo-800 rounded-md px-2 text-gray-200'
            >
                { title }
            </button>

            <AnimatePresence mode='wait' initial={ false }>
                <motion.div
                    style={{ display: 'inline-block', position: 'absolute', top: 0, left: 0, zIndex: 10}}
                    key={showModal}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {
                        showModal && <div ref={rootBundleModal} className='bg-indigo-800 rounded-md z-10 py-1 pl-2 pr-6'>
                            {
                                items.map(item => {
                                    return <div className='text-gray-50' key={item.id}>{ item.name }</div>
                                })
                            }
                        </div>
                    }
                </motion.div>
            </AnimatePresence>
        </div>
    )
}