import React, { useState, useEffect, createContext } from 'react'
import { API_KEY, API_URL_SHOP } from '../config'
import { useToast } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'
import useSound from 'use-sound'
import clickSfx from '.././sounds/sine-click.mp3'

export const StoreProvider = createContext()

export function StoreContext(props) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [orderList, setOrderList] = useState([])
    const notification = useToast()
    const { user } = useAuth()

    const [playSound] = useSound(
        clickSfx,
        { volume: 0.5 }
    )

    // get items from API
    useEffect(function getItems() {
        fetch(API_URL_SHOP, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.status === 200 && setItems(data.data)
                console.log(data.data)
                setLoading(false)
            })
    }, [])

    // function for adding item to order
    const addItem = (item) => {
        playSound()

        const itemIndex = orderList.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            showNotification(item.name)
            setOrderList([...orderList, newItem])
        } else {
            const newOrder = orderList.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })

            setOrderList(newOrder)
        }
    }

    // function for removing item from order
    const removeItem = (id) => {
        playSound()
        setOrderList(orderList.filter((item) => item.id !== id))
    }

    // function for increment or decrement item count in order
    const changeQuantity = (item, count) => {
        playSound()
        const itemIndex = orderList.findIndex(orderItem => orderItem.id === item.id)


        const newOrder = orderList.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: count
                }
            } else {
                return orderItem
            }
        })

        setOrderList(newOrder)
    }

    // function for notification while adding item to order
    const showNotification = (name) => {
        notification({
            title: `Successful added ${name} to cart`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    const makePurchase = () => {

        playSound()

        notification({
            title: `Congratulations, ${user} All items was added to your Fortnite account`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

        setOrderList([])
    }

    return (
        <StoreProvider.Provider value={{items, loading, orderList, addItem, removeItem, changeQuantity, makePurchase}}>
            {props.children}
        </StoreProvider.Provider>
    )
}