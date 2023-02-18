import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '@/store'

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
          <Navbar />

          <main className='bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300'>
            <section className='content'>
              {children}
            </section>
          </main>

          <Footer />
      </ChakraProvider>
    </Provider>
  )
}
