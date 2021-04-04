import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
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
                        <div className={styles.date} >{date}</div>
                        <Link href={`/posts/${id}`}>
                        <h1>{id}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
