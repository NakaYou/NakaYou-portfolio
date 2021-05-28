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
                <p>Age:16</p>
                <p>School:Kosen</p>
                <p>Grade:2nd</p>
                <p>Depertment:S</p>
                <p>Club:ComputerClub</p>
                <h1>Skill</h1>
                <p>React.js/TypeScript/Next.js/Recoil</p>
                <h1>Studying</h1>
                <p>Golang</p>
            </div>
        </div>
    )
}