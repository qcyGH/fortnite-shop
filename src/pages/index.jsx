import React, { useEffect, useState } from 'react'

import {Preloader} from '@/components/Preloader'
import {List} from '@/components/List'

import { useDispatch } from 'react-redux'
import { fetchItems } from '@/store/shopSlice'
import { useGetItemsQuery } from '@/store/fortniteApi'


export default function Home(props) {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const data = props.data

    if (data) {
      dispatch(fetchItems({data}))
      setLoading(false)
    }
  }, [props])


  return (
    <>
      {
        isLoading ? <Preloader isLoading={isLoading} /> : <List />
      }
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fortnite-api.com/v2/shop/br`, {
    headers: {
      Authorization: process.env.API_KEY,
    }
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}