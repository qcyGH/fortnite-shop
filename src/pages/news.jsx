import React, { useState, useEffect } from 'react'

import { NewsList } from '@/components/NewsList'
import { PreloaderNews } from '@/components/Preloader'

export default function News(props) {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const data = props.data

    if (data) {
      setLoading(false)
    }
  }, [props])


  return (
    <>
      <h1 className='mb-10 text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
          News
      </h1>

      {
        !isLoading ? <>
          {
            (props.data?.data.br?.image || props.data?.data.br?.messages) && <h2 className='mt-10 text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
              Battle Royale
            </h2>
          }
          {
            props.data?.data.br?.image && <img className='mt-5 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 w-max h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in' src={props.data?.data.br.image} alt='fortnite battle pass'/>
          }
          {
            props.data?.data.br?.messages &&<NewsList items={props.data?.data.br.messages} />
          }
        </> : <PreloaderNews isLoading={isLoading} />
      }

      {
        !isLoading ? <>
            {
              (props.data?.data.stw?.image || props.data?.data.stw?.messages) && <h2 className='mt-10 text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                Save the World
              </h2>
            }
            {
              props.data?.data.stw?.image && <img className='mt-5 rounded-md' src={props.data?.data.stw.image} alt='fortnite save the world'/>
            }
            {
              props.data?.data.stw?.messages &&<NewsList items={props.data?.data.stw.messages} />
            }
        </> : <PreloaderNews isLoading={isLoading} />
      }
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fortnite-api.com/v2/news`, {
    headers: {
      Authorization: process.env.API_KEY,
    }
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}