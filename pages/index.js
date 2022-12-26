import Layout from '../components/Layout';

import { siteTitle } from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <h1>
        {siteTitle}
      </h1>
    </Layout>
  )
}
