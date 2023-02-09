import React, { useContext, useEffect } from 'react'
import { StoreProvider } from '../hoc/StoreProvider'

import {Preloader} from '../components/Preloader'
import {List} from '../components/List'

import { useDispatch } from 'react-redux'
import { fetchItems } from '../store/shopSlice'
import { useGetItemsQuery } from '../store/fortniteApi'

export function Shop() {

    const dispatch = useDispatch()

    // fetching items
    const { data, isSuccess, isLoading } = useGetItemsQuery()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            dispatch(fetchItems({data}))
        }
    }, [isSuccess])

    return (
        <>
            {
                isLoading ? <Preloader isLoading={isLoading} /> : <List />
            }
        </>
    )
}