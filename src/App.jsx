import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Shop } from './pages/Shop'
import { NewsPage } from './pages/News'
import { CartPage } from './pages/Cart'
import { FAQPage } from './pages/FAQ'
import { LoginPage } from './pages/Login'
import { NotFound } from './pages/404'

import { Layout } from './components/Layout'

import { RequireAuth } from './hoc/RequireAuth'
import { NewsContext } from './hoc/NewsProvider'

export function App() {

    return (
        <ChakraProvider>
            <NewsContext>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Shop />} />
                        <Route path='shop' element={<Navigate to='/' replace />} />
                        <Route path='news' element={<NewsPage />} />
                        <Route path='cart' element={
                            <RequireAuth>
                                <CartPage />
                            </RequireAuth>
                        } />
                        <Route path='faq' element={<FAQPage />} />
                        <Route path='login' element={<LoginPage />}/>
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </NewsContext>
        </ChakraProvider>
    )
}