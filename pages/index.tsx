import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function Achievements() {
  return (
    <div>
      <h1>Products</h1>
      <div className={styles.NakaYou}>
        <a href={"https://hit-and-blow-delta.vercel.app"}>
          <Image src={"/images/HB.png"}
            width={200} height={200} className={styles.img} />
          <h1>Hit&Blow</h1>
          <p>reactでhit&blowを作りました</p>
        </a>
      </div>
      <div className={styles.NakaYou}>
        <a href={"https://ten-second-challenge.vercel.app"}>
          <Image src={"/images/Sec10.png"}
            width={200} height={200} className={styles.img}/>
            <h1>10sec Challenge</h1>
            <p>reactで10秒連打するゲームを作りました</p>
        </a>
      </div>
    </div>
  )
}

export default function Home() {
  const [nakayou, setimage] = useState(true);
  return (
    <div className={styles.page}>
      <Head>
        <title>NakaYou</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <div className={styles.NakaYou}>
        <Image
          src={nakayou ? "/images/NakaYou.png" : "/images/NakaYou2.png"}
          width={200} className={styles.img}
          height={200} onClick={() => { setimage(!nakayou) }} />
      </div>

      <h1>NakaYou</h1>
      <p>どうもこんにちは，なかようといいます．</p>
      <p>あっという間に二年生になってしまいますが僕は入学当初から何も変わってない気がしています．</p>
      <p>のんびりしていられないですね．</p>
      <h1>
        <a href="https://twitter.com/compose/tweet?text=なかようのサイトを見ました！ nakayou.vercel.app">Twitterでシェア</a>
      </h1>
      <Achievements />
    </div>
  )
}
