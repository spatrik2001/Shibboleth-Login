import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.loginPanel}>
        <h2 className={styles.header}>Bejelentkezés</h2>
        <div className={styles.logo}>
          <Image
            src="/logoSzinesTeglalap.png"
            alt="eduID"
            className={styles.eduLogo}
            width={230}
            height={72}
            priority
          />
        </div>

        <div className={styles.description}>
          <p>A portálra bejelentkezni kizárólag az egyetemen használatban lévő eduID központi címtári azonosítóval lehet.</p>
        </div>

        <hr/>

        <div className={styles.loginDiv}>
          <a
            href="/login/"
            className={styles.button}
            rel="noopener noreferrer"
          >Bejelentkezés
          </a>
        </div>
      </div>
      <footer className={styles.footer}>asd</footer>
    </main>
  );
}
