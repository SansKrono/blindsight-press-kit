import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Head over to our press kit
          <a href="/presskit" type="button" color="primary">Press Kit</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
