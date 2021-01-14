import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'

var hiduke = new Date();
var year = hiduke.getFullYear();
var month = hiduke.getMonth() + 1;
var week = hiduke.getDay();
var day = hiduke.getDate();
var yobi = new Array("日", "月", "火", "水", "木", "金", "土");

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>NakaYou</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <div className={styles.NakaYou}>
        <Image
          className={styles.NakaYou}
          src="/images/NakaYou.png"
          width={200}
          height={200} onClick={() => { alert("．．．") }} />
      </div>

      <h1>NakaYou</h1>
      <p>更新日：{year}年{month}月{day}日{yobi[week]}曜日</p>
      <p>どうもこんにちは，なかようといいます．</p>
      <p>あっという間に二年生になってしまいますが僕は入学当初から何も変わってない気がしています．</p>
      <p>のんびりしていられないですね．</p>
    </div>
  )
}
