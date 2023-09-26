import Head from 'next/head'
import Header from '@components/Header'
import Button from '@mui/material/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blindsight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{
          zIndex: -1,
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}>
          <Image 
            src="/images/tunnel-shot.webp"
            alt="Tunnel" 
            layout="fill"
            objectFit="cover"
            />
        </div>
        <Header title="Welcome to Blindsight" />
        <Button href="/presskit" variant="contained" style={{
          backgroundColor: 'purple',
          color: 'white',
          textShadow: '0 0 10px black',
          zIndex: 1,
          position: 'relative',
        }}>View our Press Kit</Button>
      </main>
    </div>
  )
}
