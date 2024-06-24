import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.loginPanel}>
        <h2 className={styles.header}>Bejelentkezés</h2>
        <div className={styles.logo}>
          <div>
            <Image
              src="/logoSzinesTeglalap.png"
              alt="eduID"
              className={styles.vercelLogo}
              width={400}
              height={120}
              priority
            />
          </div>
        </div>

        <div className={styles.description}>
          <p>A portálra bejelentkezni kizárólag az egyetemen használatban lévő eduID központi címtári azonosítóval lehet.</p>
        </div>

        <hr/>

        <div className={styles.button}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Docs <span>-&gt;</span></h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
