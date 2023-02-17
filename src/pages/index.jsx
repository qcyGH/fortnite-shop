import React, { useEffect } from 'react'

import {Preloader} from '@/components/Preloader'
import {List} from '@/components/List'

import { useDispatch } from 'react-redux'
import { fetchItems } from '@/store/shopSlice'
import { useGetItemsQuery } from '@/store/fortniteApi'

export default function Home() {
  const dispatch = useDispatch()

  // fetching items
  const { data, isSuccess, isLoading } = useGetItemsQuery()

  useEffect(() => {
      if (isSuccess) {
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
