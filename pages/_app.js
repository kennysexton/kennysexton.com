import '../styles/globals.css'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kenny Sexton</title>
        <meta name="description" content="Welcome to Kenny Sexton's online portfolio, where you'll find a curated selection of photography, software development projects, and photo books.
         Explore captivating landscapes, portraits, and more, alongside tech endeavors and beautifully crafted photo books.
         Dive into Kenny's work and discover a blend of artistry and technical skill across various projects." />
        <meta name="author" content="Kenneth Sexton" />
        <meta property="og:type" content="Portfolio" />
        <meta name="title" property="og:title" content="Kenny Sexton's Portfolio" />
        <meta name="image" property="og:image" content="/public/project-images/kennysexton.com.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={montserrat.className}>
        <Nav />
        <main className="my-16">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>

  )
}

export default MyApp
