import '@/styles/globals.css'
import { Manrope } from '@next/font/google'
import Layout from '@/components/layout'
import Head from 'next/head'

const manrope = Manrope({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Fortnite shop</title>
      </Head>
      <style jsx global>{`
        body, html {
          font-family: ${manrope.style.fontFamily} !important;
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  )
}
