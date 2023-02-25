import { useState, useEffect } from 'react'
import Link from 'next/link'

import { CartItem, CartItemSlider } from '@/components/CartItem'
import { RequireLogin } from '@/components/Login'
import { useToast } from '@chakra-ui/react'

import useSound from 'use-sound'

import { useSelector, useDispatch } from 'react-redux'
import { makePurchase } from '@/store/shopSlice'

export default function Cart() {
  const orderList = useSelector(state => state.shop.orderList)
  const user = useSelector(state => state.user.user)
  const notification = useToast()
  const dispatch = useDispatch()

  const [totalPrice, setTotalPrice] = useState(0)

  const calcTotalPrice = () => {
    let newTotalPrice = 0

    orderList.forEach(item => {
      newTotalPrice += item.finalPrice * item.quantity
    })

    setTotalPrice(newTotalPrice)
  }

  useEffect(() => {
    calcTotalPrice()
  }, [orderList])

  const [playSound] = useSound(
    '/sounds/sine-click.mp3',
    { volume: 0.5 }
  )

  return (
    <RequireLogin>
      <h1 className='text-center text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-color duration-150 ease-in'>
        Cart
      </h1>

      {
        orderList.length > 0
        ? <div className='w-full p-2 pr-4 mt-10
            bg-zinc-300/90 dark:bg-zinc-800/90 rounded-md backdrop-blur-xl backdrop-saturate-150
            shadow-lg shadow-zinc-400/50 dark:shadow-zinc-900/50
            text-zinc-900 dark:text-zinc-200
            transition-color duration-300
            '>
            <div className='pb-2'>
              <div className='flex-col py-4 px-4'>
                {
                  orderList.map(item => (
                    item.items ? <CartItemSlider
                      item={item}
                      key={item.id}
                    />
                    : <CartItem
                      item={item}
                      key={item.id}
                    />
                  ))
                }
              </div>
              <span className='block text-right pr-2'>Total price: {totalPrice}</span>
            </div>
        </div>
      : <div className='flex flex-col justify-center items-center'>
          <span className='p-2 pr-4 mt-10 text-xl text-center text-zinc-900 dark:text-zinc-200
          transition-color duration-150'>
            Cart is empty
          </span>
          <Link onClick={() => playSound()} href='/' className='opacity-100 text-slate-100 bg-orange-600 width-max px-6 py-2 my-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200'>Go to store page</Link>
      </div>
      }
      <>
        {
        orderList.length > 0 && <div className='mt-4 flex justify-center'>
                                  <button
                                    onClick={() => {
                                      playSound()

                                      notification({
                                          title: `Congratulations, ${user} All items was added to your Fortnite account`,
                                          status: 'success',
                                          duration: 3000,
                                          isClosable: true,
                                      })

                                      dispatch(makePurchase())
                                    }}
                                    className='text-lg text-slate-100 bg-purple-600 width-max px-6 py-2 my-2 rounded-md hover:scale-95 active:scale-90 transition-all ease duration-200'
                                  >
                                      Purchase
                                  </button>
                                </div>
        }
      </>
    </RequireLogin>
  )
}