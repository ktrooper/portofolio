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
<div className={styles.mainvisual}>
        <Image className={styles.imagen} src='/ab.png' alt="pick" loading="lazy" position="relative" width="2000" height="2000" ></Image>
</div>

 
        <div className={styles.center}>
          

          <a className={styles.card1}>
            <h2 className={inter.className}id="skills">Skills</h2>
            <p className={inter.className}>
              #HTML<br/>
              #CSS<br/>
              #Javascript<br/>
              #React<br/>
              #TOEIC 725/990点<br/>
              <br/>
              DeepL等の翻訳ソフトを使いながらではありますが、<br/>
              公式ドキュメントを参考に調べながら開発を行うことができます。
            </p>
          </a>

          <a className={styles.card2}>
            <h2 className={inter.className}id="background">Background</h2>
            <p className={inter.className}>
              ・学歴<br/><br/>
              2018年3月：慶應義塾大学志木高校卒業<br/>
              2023年3月：慶應義塾大学商学部卒業<br/><br/>
              ・職歴<br/><br/>
              2018年12月~現在：株式会社日本入試センター<br/>
              SAPIXPrivatoにて非常勤務講師を担当。<br/>
              2022年3月~2023年3月：株式会社DONUTS<br/>
             ミクチャ事業部にて音響業務を担当。<br/><br/>
             ・音楽経歴<br/><br/>
             2018年12月~現在：Awkmiuというバンドにてベースを担当。<br/>
             2021年12月~2022年12月：池袋Somethin' Jazz Clubにて、
             月1セッションリーダーを行う。<br/>
        

             </p>
          </a>

        
          <a className={styles.card3}>
            <h2 className={inter.className}id="Contact">Contact</h2>
            <h3 className={inter.className}>stom4120@gmail.com</h3>
            <p className={inter.className}>
              <br/>

              現在、音楽活動と並行してできる仕事を探しています。<br/>
            仕事としてコードを書いたことはありませんが、
            今持つスキルを活かしてお仕事させていただければ嬉しいです。</p>
         </a> 
        </div>

        <aside className={styles.sideMenu}>
          <h2 className={styles.sideMenuTitle}></h2>
          <ul className={styles.sideMenuList}>
            
            <li><a href="#skills">Skills</a></li>
            <li><a href="#background">Background</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </aside>
      </main>
    </>
  )
}
