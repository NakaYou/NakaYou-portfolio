import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({ allPostsData }) {
    return (
        <div className={styles.page}>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <Navbar />
            <ul>
                {allPostsData.map(({ id,date, title }) => (
                    <li className={styles.blogTitles} key={id}>
                        {date}
                        <br />
                        <Link href={`/posts/${id}`}>
                        <div className={styles.blogTitle}>{title}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}