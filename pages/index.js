import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../component/hero.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John Wick Dog Token</title>
        <meta name="description" content="John Wick Dog Meme token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>

  )
}
