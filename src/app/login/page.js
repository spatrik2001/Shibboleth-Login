import styles from "../page.module.css";
import Image from "next/image";

export default function Login() {
    return (
        <main className={styles.shibMain}>
            <div className={styles.shib_panel}>
                <div className={styles.logo}>
                    <a href="/">
                        <Image src="/sze_logo.png" alt="Széchenyi István Egyetem logo" width="170" height="60"/>
                    </a>
                </div>
                <div className={styles.login_box}>
                    <h1 className={styles.header}>Kérjük jelentkezzen be!</h1>
                    <hr/>
                    <h3>Please login!</h3>
                    <form action="http://localhost/secured" method="post">
                        <input className={styles.userinput} type="text" name="username" id="username" placeholder="Felhasználónév / Username" required/>
                        <input className={styles.userinput} type="password" name="password" id="password" placeholder="Jelszó / Password" required/>
                        <input className={styles.userbutton} type="submit" value="Belépés / Login"/>
                        <input type="hidden" name="SAMLResponse" value="<response>"/>
                        <input type="hidden" name="RelayState" value="<url>"/>
                    </form>
                    <div className={styles.bottom_informations}>
                        {/* <div className={styles.faq}>
                            <a href="#">Adatvédelem</a>
                        </div> */}
                        <div className={styles.icons}>
                            <Image src="/logo_eduid.png" alt="eduID logo" width={64} height={25}/>
                            <Image src="/logo_shi.png" alt="Shibboleth logo" width={72} height={25}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}