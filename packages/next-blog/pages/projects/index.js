import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { getAllProjectsIds } from '../../lib/projects'

import FiPayApp from 'fi-pay';

export async function getStaticProps() {
  const projectsIds = getAllProjectsIds()
  return {
    props: {
      projectsIds,
    }
  }
}

export default function() {
  const projects = [
    {
      id: 'fiPay',
      title: 'Fi Pay',
    },
  ];
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.centered}>
      <ul>
        {projects.map(({id, title}) => (
        <li>
          {/* <Link href={ `/projects/${id}`} key={id}>
            <a>
              {title}
            </a>
          </Link> */}
        </li>
        ))}
      </ul>
      </section>
    </Layout>
    
  )
}