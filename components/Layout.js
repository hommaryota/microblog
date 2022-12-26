import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" alt="プロフィール画像" className={utilStyles.borderCircle} />
        <h1 className={utilStyles.headingXl}>{name}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
