import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Game from "./_tic-tac-toe/game";
import utilStyles from '../../styles/utils.module.css'

export default function Games() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.centered}>
        <Game />
      </section>
    </Layout>
    
  )
}