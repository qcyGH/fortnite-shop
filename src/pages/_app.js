import '@/styles/globals.css'
import Layout from './layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Fortnite shop</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
