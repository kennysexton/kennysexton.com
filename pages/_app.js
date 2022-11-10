import '../styles/globals.css'
import Head from 'next/head'
import { Montserrat } from '@next/font/google'
import Nav from '../components/nav'
import Footer from '../components/footer'

const montserrat = Montserrat()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kenny Sexton</title>
        <meta name="description" content="The work of photographer Kenny Sexton.  Features both photographs as well as additional projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={montserrat.className}>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>

  )
}

export default MyApp
