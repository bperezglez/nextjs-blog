import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Games from "../../modules/games";
import utilStyles from '../../styles/utils.module.css'

export default function() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.centered}>
        <Games />
      </section>
    </Layout>
    
  )
}