import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import App from "./_app";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyPaddi Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <App />
      </main>

    </div>
  )
}
