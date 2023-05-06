import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <>
      <Head>
        <title>portfolio of kayakenko</title>
        <meta name="description" content="Generated by KK " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>

        <Image className={styles.imagen} src='/ab.png' alt="pick" loading="lazy" position="relative" width="2000" height="2000" ></Image>


 
        <div className="center">
          <a className="card">
            <h2 className={inter.className}>Works</h2>
            <p className={inter.className}>Awkmiu</p>
          </a>

          <a className="card">
            <h2 className={inter.className}>Skills</h2>
            <p className={inter.className}>
              中学受験用塾講師歴5年
              <br />
              ベース歴7年
              <br />
              普通自動車免許
              <br />
              音響経験あり
            </p>
          </a>

          <a className="card">
            <h2 className={inter.className}>Background</h2>
            <p className={inter.className}>慶應義塾大学卒業</p>
          </a>

          <a
            href="https://twitter.com/kaya_awkmiu"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>SNS</h2>
            <p className={inter.className}>twitter</p>
          </a>
        </div>

        <aside className={styles.sideMenu}>
          <h2 className={styles.sideMenuTitle}></h2>
          <ul className={styles.sideMenuList}>
            <li><a href="#works">Works</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#background">Background</a></li>
            <li><a href="#In the future...">In the future...</a></li>
          </ul>
        </aside>
      </main>
    </>
  )
}
