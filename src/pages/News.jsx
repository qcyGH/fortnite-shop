import React from 'react'

import { NewsList } from '@/components/NewsList'
import { PreloaderNews } from '@/components/Preloader'
import { useGetNewsQuery } from '@/store/fortniteApi'

export default function News() {

  const { data, isLoading } = useGetNewsQuery()

  return (
    <>
      <h1 className='mb-10 text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
          News
      </h1>

      {
        !isLoading ? <>
          {
            (data?.data.br?.image || data?.data.br?.messages) && <h2 className='mt-10 text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
              Battle Royale
            </h2>
          }
          {
            data?.data.br?.image && <img className='mt-5 rounded-lg shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50 w-max h-max hover:shadow-none hover:scale-95 transition-all duration-150 ease-in' src={data?.data.br.image} alt='fortnite battle pass'/>
          }
          {
            data?.data.br?.messages &&<NewsList items={data?.data.br.messages} />
          }
        </> : <PreloaderNews isLoading={isLoading} />
      }

      {
        !isLoading ? <>
            {
              (data?.data.stw?.image || data?.data.stw?.messages) && <h2 className='mt-10 text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
                Save the World
              </h2>
            }
            {
              data?.data.stw?.image && <img className='mt-5 rounded-md' src={data?.data.stw.image} alt='fortnite save the world'/>
            }
            {
              data?.data.stw?.messages &&<NewsList items={data?.data.stw.messages} />
            }
        </> : <PreloaderNews isLoading={isLoading} />
      }
    </>
  )
}