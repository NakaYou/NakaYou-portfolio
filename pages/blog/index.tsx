import Head from 'next/head'
import Navbar from '../Navbar'
import styles from '../../styles/Home.module.css'

export default function Blog() {
    return (
        <div className={styles.page}>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <Navbar />
        </div>
    )
}