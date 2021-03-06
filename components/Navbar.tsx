import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a className={styles.links}>Home</a>
            </Link>
            <Link href="/profile">
                <a className={styles.links}>Profile</a>
            </Link>
            <Link href="/blog/">
                <a className={styles.links}>Blog</a>
            </Link>
            <a className={styles.links} href="https://twitter.com/NakaY0u">Twitter</a>
            <a className={styles.links} href="https://github.com/NakaYou">GitHub</a>
            <a className={styles.links} href="https://atcoder.jp/users/nakayou">AtCoder</a>
        </div>
    )
}