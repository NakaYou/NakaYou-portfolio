import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Profile() {
    return (
        <div className={styles.background}>
            <div className={styles.page}>
                <Head>
                    <title>Profile</title>
                    <link rel="icon" href="/favicon.ico"></link>
                </Head>
                <Navbar />
                <h1>Profile</h1>
                <p>Name:NakaYou</p>
                <p>Age:17</p>
                <p>School:Kosen</p>
                <p>Grade:2nd</p>
                <p>Depertment:S</p>
                <h1>Languages</h1>
                <p>Go/TypeScript/C/C++</p>
                <h1>FrameWorks</h1>
                <p>React/Next.js/TailwindCSS</p>
                <h1>Enviroments</h1>
                <p>Visual Studio Code/GoLand/WebStorm/Windows/Docker/Git</p>
            </div>
        </div>
    )
}