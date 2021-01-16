import styles from '../../styles/Home.module.css'
import Navbar from '../Navbar'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <Navbar />
      <h1>{postData.id}</h1>
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <Navbar />
      
    </div>

  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}