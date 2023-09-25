import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blindsight Press Kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Blindsight Press Kit" />
        <Button href="/presskit" variant="contained">Press Kit</Button>
      </main>
      <Footer />
    </div>
  )
}
