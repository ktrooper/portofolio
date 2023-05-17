import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function Home() {

  const elementsRef = useRef([]);

  useEffect(() => {

    const handleScroll = () => {
      elementsRef.current.forEach((element) => {
        if(element) {
          const {top} = element.getBoundingClientRect();
          const isVisible = top < window.innerHeight -100;
          if(isVisible) {
            element.classList.add(styles.fadeInVisible);
            
          }else {
            element.classList.remove(styles.fadeInVisible);
           
          }
       
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
  }, []);
const  [scrollPosition,setScrollPosition] = useState(0);
 function handleClick(id) {
    const element = document.getElementById(id);
    const position = element.offsetTop - 70;
    setScrollPosition(position);
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Head>
        <title>portfolio of kayakenko</title>
        <meta name="description" content="Generated by KK " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.mainvisual} id='IMG'>
          <Image className={styles.imagen} src='/ab.png' alt="pick" loading="lazy" position="relative" width="2000" height="2000" ></Image>
        </div>

       


        <div className={styles.center}>
          <a className={styles.card1}>
            <h2 ref={(ref) => elementsRef.current[0] = ref} className={`${styles.cardTitle} ${styles.fadeIn}`} id="skills">Skills</h2>
            <div ref={(ref) => elementsRef.current[1] = ref} className={`${styles.cards} ${styles.fadeIn}`}>
              <p> HTML / CSS / Javascript / React</p>
              <p>TOEIC 725/990点</p>
              <p style={{marginTop: "10px"}}>DeepL等の翻訳ソフトを使いながらではありますが、</p>
              <p>公式ドキュメントを参考に調べながら開発を行うことができます。</p>
            </div>
          </a>
          <a className={styles.card2}>
            <h2 ref={(ref) => elementsRef.current[2] = ref} className={`${styles.cardTitle} ${styles.fadeIn}`} id="background">Background</h2>
            <div ref={(ref) => elementsRef.current[3] = ref} className={`${styles.cards} ${styles.fadeIn}`}>
              <div className={styles.schoolHistory}>
                <p className={styles.schoolHistoryTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "30px", transform: "skewX(10deg)", marginRight: "5px"}}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                  学歴
                </p>
                <div className={styles.schoolHistoryContent}>
                  <p style={{marginTop: "10px"}}>2018年3月：慶應義塾大学志木高校卒業</p>
                  <p>2023年3月：慶應義塾大学商学部卒業</p>
                </div>
              </div>
              <div className={styles.workHistory}>
                <p className={styles.workHistoryTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{width: "30px", transform: "skewX(10deg)", marginRight: "5px"}}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

                  職歴
                </p>
                <div className={styles.workHistoryContent}>
                  <p style={{marginTop: "10px"}}>2018年12月~現在</p>
                  <p style={{marginLeft: "10px"}}>株式会社日本入試センター</p>
                  <p style={{marginLeft: "10px"}}>SAPIXPrivatoにて非常勤務講師を担当。</p>
                  <p style={{marginTop: "10px"}}>2022年3月~2023年3月</p>
                  <p style={{marginLeft: "10px"}}>株式会社DONUTS</p>
                  <p style={{marginLeft: "10px"}}>ミクチャ事業部にて音響業務を担当。</p>
                  <p style={{marginTop: "10px"}}>現在</p>
                  <p style={{marginLeft: "10px"}}>求職中</p>
                </div>
              </div>
            </div>
          </a>

          <a className={styles.card3}>
           <h2 ref={(ref) => elementsRef.current[4] = ref} className={`${styles.cardTitle} ${styles.fadeIn}`} id="Works">Works</h2>
           <div ref={(ref) => elementsRef.current[5] = ref} className={`${styles.cards} ${styles.fadeIn}`}>
           <iframe 
  width="800px"
  height="450px"
  src='https://www.youtube.com/embed/nS0wxW9vQsg'
  title="YouTube Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

            <p style={{marginTop: "20px"}}><span className={styles.awkmiu} onClick={() => { window.location.href ='https://www.awkmiu.com/'; }}>Awkmiu</span>というバンドでベーシストとして活動しています。</p>
            <p>前身バンドから数えて結成5年目になります。</p>
            <p style={{marginTop: "10px"}}>YouTubeでカバー動画をあげたり、ライブ、楽曲制作、プロモーションなど精力的に活動しております。
            </p>
           </div>





          </a>

        </div>
        <aside className={styles.sideMenu}>
          <h2 className={styles.sideMenuTitle}></h2>
          <ul className={styles.sideMenuList}>


          <li className={styles.sideMenuItem}><a onClick={() => handleClick("skills")}>Skills</a></li>
          <li className={styles.sideMenuItem}><a onClick={() => handleClick("background")}>Background</a></li>
          <li className={styles.sideMenuItem}><a onClick={() => handleClick("Works")}>Works</a></li>
          <li className={styles.sideMenuItem}><a onClick={() => handleClick("IMG")}>Go back</a></li>
          </ul>
        </aside>
        <footer className={styles.footer}>
          <a href="https://twitter.com/kaya_awkmiu">
          <svg className={styles.footerItem} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>

        </footer>
      </main>

    </>
  )
}