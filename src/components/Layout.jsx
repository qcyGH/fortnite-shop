import { Outlet } from 'react-router-dom'

import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {

    return (
        <>
            <Header />

            <main className='bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300'>
                <section className='content'>
                    <Outlet />
                </section>
            </main>

            <Footer />
        </>
    )

}