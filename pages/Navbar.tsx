import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Navbar() {
    return (
      <div className={styles.navbar}>
          <ul>
        <Link href="/">
          <a className={styles.links}>Home</a>
        </Link>
        <br />
        <Link href="/profile">
          <a className={styles.links}>Profile</a>
        </Link>
        <br />
        <Link href="./blog/">
          <a className={styles.links}>Blog</a>
        </Link>
        <br />
        <a  className={styles.links2} href="https://twitter.com/NakaYou_JK">Twitter</a>
        <br />
        <a className={styles.links2} href="https://github.com/NakaYou">GitHub</a>
        <br />
        <a className={styles.links2} href="https://atcoder.jp/users/nakayou">AtCoder</a>
        <br />
        <a className={styles.links2} href="https://marshmallow-qa.com/nakayou_jk">MarshMallow</a>
          </ul>
      </div>
    )
  }