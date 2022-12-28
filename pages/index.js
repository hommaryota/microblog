import Layout from '../components/Layout';
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/home.module.css";
import { getPostsData } from '../lib/post';

import { siteTitle } from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';


//SGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>私はフルスタックエンジニアです/Udemy講師として各同しています/好きな言語はjavascriptです</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} alt='サムネイル' className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <span className={utilStyles.boldText}>{title}</span>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {date}
              </small>
            </article>
          ))}
        </div>
      </section>

      <h1>
        {siteTitle}
      </h1>
    </Layout>
  )
}
