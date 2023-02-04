import React, { useState, useEffect, createContext } from 'react'
import { API_KEY, API_URL_NEWS } from '../config'

export const NewsProvider = createContext()

export function NewsContext(props) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    // get items from API
    useEffect(function getItems() {
        fetch(API_URL_NEWS, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.status === 200 && setItems(data.data)
                setLoading(false)
            })
    }, [])

    return (
        <NewsProvider.Provider value={{ items, loading }}>
            {props.children}
        </NewsProvider.Provider>
    )
}