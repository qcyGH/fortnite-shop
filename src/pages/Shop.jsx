import React, { useContext } from 'react'
import { StoreProvider } from '../hoc/StoreProvider'

import {Preloader} from '../components/Preloader'
import {List} from '../components/List'

export function Shop() {

    const { items, loading } = useContext(StoreProvider)

    return (
        <>
            {
                loading ? <Preloader isLoading={loading} /> : <List items={items} />
            }
        </>
    )
}