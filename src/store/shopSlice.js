import { createSlice } from '@reduxjs/toolkit'

import { useToast } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'
import useSound from 'use-sound'
import clickSfx from '.././sounds/sine-click.mp3'

const showNotification = (name) => {
    useToast({
        title: `Successful added ${name} to cart`,
        status: 'success',
        duration: 3000,
        isClosable: true,
    })
}

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        items: [],
        orderList: [],
    },
    reducers: {
        addItem(state, action) {

            const [playSound] = useSound(
                clickSfx,
                { volume: 0.5 }
            )

            playSound()

            const item = action.payload.item

            const itemIndex = state.orderList.findIndex(orderItem => orderItem.id === item.id)

            if (itemIndex < 0) {
                showNotification(item.name)

                state.orderList.push({
                    ...item,
                    quantity: 1,
                })

            } else {

                state.orderList.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem
                    }
                })
            }

        },
        removeItem(state, action) {

            const [playSound] = useSound(
                clickSfx,
                { volume: 0.5 }
            )

            playSound()

            state.orderList.filter((item) => item.id !== action.payload.id)
        },
        changeQuantity(state, action) {

            const [playSound] = useSound(
                clickSfx,
                { volume: 0.5 }
            )

            playSound()

            const itemIndex = state.orderList.findIndex(orderItem => orderItem.id === action.payload.item.id)

            state.orderList.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: action.payload.count
                    }
                } else {
                    return orderItem
                }
            })

        },
        makePurchase(state, action) {

            const [playSound] = useSound(
                clickSfx,
                { volume: 0.5 }
            )

            playSound()

            const { user } = useAuth()

            useToast({
                title: `Congratulations, ${user} All items was added to your Fortnite account`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            state.orderList = []
        }
    },
})

export const { addItem, removeItem, changeQuantity, makePurchase } = shopSlice.actions

export default shopSlice.reducer