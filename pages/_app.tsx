import '../styles/index.scss'

import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Golden Viol</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
