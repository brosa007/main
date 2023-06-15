import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Roseta First Deploy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Meu nome: Gabriel Rosa
          </p>
        </div>

        <div className={styles.center}>
          <Image
            src="/LOGO-ROSETA.png"
            alt="Gabriel Rosa"
            width={727}
            height={123}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://twitter.com/b_rosa07"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Twitter <span>-&gt;</span>
            </h2>
            <p>
              Acompanhe as minhas loucuras no Twitter.
            </p>
          </a>

          <a
            href="https://www.instagram.com/b_rosa07/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Instagram <span>-&gt;</span>
            </h2>
            <p>
              Ou aqui mesmo no Instagram!
            </p>
          </a>

          <a
            href="https://www.twitch.tv/yfleury07"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Twitch <span>-&gt;</span>
            </h2>
            <p>
              Aqui também tem como acompanhar a gameplay.
            </p>
          </a>

          <a
            href="https://github.com/brosa007"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              GitHub <span>-&gt;</span>
            </h2>
            <p>
              Aqui consegue acompanhar meus projetos, rs.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
